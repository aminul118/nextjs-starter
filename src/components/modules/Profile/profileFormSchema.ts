import z from 'zod';

const profileFormZodSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: 'First Name must be at least 2 characters.' }),
  lastName: z
    .string()
    .min(2, { message: 'Last Name must be at least 2 characters.' }),
  phone: z.string().min(5, { message: 'Phone number must be valid.' }),
  address: z.string().optional(),
  email: z.string().email({ message: 'Invalid email address.' }),
});

export { profileFormZodSchema };
