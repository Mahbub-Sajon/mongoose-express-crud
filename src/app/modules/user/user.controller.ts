import { Request, Response } from 'express';
import UserValidationSchema from './user.validation';
import { userServices } from './user.service';

const createUSer = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;

    //validating data during creation
    const zodParseData = UserValidationSchema.parse(userData);

    const result = await userServices.createUserIntoDB(zodParseData);

    res.status(200).json({
      success: true,
      message: 'Student is successfully created',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong',
      error: error,
    });
  }
};
//getting users request from frontend
const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await userServices.getAllUserFromDB();
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      success: false,
      message: 'Users not found',
      error: error,
    });
  }
};
//getting a single user request from frontend
const getSingleUser = async (req: Request, res: Response) => {
  const { userId } = req.params;
  // const userIdNumber = Number(userId);
  const result = await userServices.getSingleUser(userId);
  // console.log(result);
  try {
    res.status(200).json({
      success: true,
      message: 'Users fetched successfully!',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

//updating a single user

export const userController = {
  createUSer,
  getUsers,
  getSingleUser,
};
