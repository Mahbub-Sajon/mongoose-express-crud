import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (userData: TUser) => {
  // const result = await StudentModel.create(student); //mongoose built in static method used here
  const user = new User(userData); //created an instance
  //   if (await user.isUserExist(userData.userId)) {
  //     throw new Error('User already Existed');
  //   }
  const result = await user.save(); //mongoose built in instance method used here
  return result;
};

export const userServices = {
  createUserIntoDB,
};
