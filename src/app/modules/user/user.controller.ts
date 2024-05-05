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

export const userController = {
  createUSer,
};
