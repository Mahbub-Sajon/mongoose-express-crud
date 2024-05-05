import { z } from 'zod';

const FullNameValidationSchema = z.object({
  firstName: z
    .string()
    .max(20, { message: 'First name cannot be longer than 20 characters' })
    .min(1, { message: 'First name is required' }),
  lastName: z
    .string()
    .max(20, { message: 'Last name cannot be longer than 20 characters' })
    .min(1, { message: 'Last name is required' }),
});

const AddressValidationSchema = z.object({
  street: z
    .string()
    .max(20, { message: 'Street cannot be longer than 20 characters' })
    .min(1, { message: 'Street is required' }),
  city: z
    .string()
    .max(20, { message: 'City cannot be longer than 20 characters' })
    .min(1, { message: 'City is required' }),
  country: z
    .string()
    .max(20, { message: 'Country cannot be longer than 20 characters' })
    .min(1, { message: 'Country is required' }),
});

const OrderValidationSchema = z.object({
  productName: z
    .string()
    .max(20, { message: 'Product name cannot be longer than 20 characters' })
    .min(1, { message: 'Product name is required' }),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  quantity: z
    .number()
    .int()
    .positive({ message: 'Quantity must be a positive integer' }),
});

const UserValidationSchema = z.object({
  userId: z
    .number()
    .positive({ message: 'User ID must be a positive number' })
    .min(1, { message: 'User ID is required' }),
  username: z
    .string()
    .max(20, { message: 'Username cannot be longer than 20 characters' })
    .min(1, { message: 'Username is required' }),
  password: z
    .string()
    .max(20, { message: 'Password cannot be longer than 20 characters' })
    .min(1, { message: 'Password is required' }),
  fullName: FullNameValidationSchema,
  age: z.number().positive().optional(),
  email: z
    .string()
    .email({ message: 'Invalid email format' })
    .min(1, { message: 'Email is required' }),
  isActive: z.boolean().optional(),
  hobbies: z
    .array(
      z
        .string()
        .max(20, { message: 'Hobby cannot be longer than 20 characters' })
        .min(1, { message: 'Hobby is required' }),
    )
    .nonempty(),
  address: AddressValidationSchema,
  orders: z.array(OrderValidationSchema),
});
export default UserValidationSchema;
