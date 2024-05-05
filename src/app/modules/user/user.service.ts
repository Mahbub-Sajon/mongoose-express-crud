import { TUser } from './user.interface';
import { User } from './user.model';
//creating a user into DB
const createUserIntoDB = async (userData: TUser) => {
  // const result = await StudentModel.create(student); //mongoose built in static method used here
  const user = new User(userData); //created an instance
  //   if (await user.isUserExist(userData.userId)) {
  //     throw new Error('User already Existed');
  //   }
  const result = await user.save(); //mongoose built in instance method used here
  return result;
};
//getting request to DB to get all users
const getAllUserFromDB = async () => {
  const result = await User.find();
  return result;
};

//getting request to DB for a single user
const getSingleUser = async (id: string) => {
  const result = await User.findOne({ userId: id });
  console.log({ result });
  return result;
};

//updating a user info to DB
const updateSingleUser = async (id: number, newData: Partial<TUser>) => {
  const result = await User.findByIdAndUpdate(id, newData, { new: true });
  return result;
};

export const userServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUser,
  updateSingleUser,
};
