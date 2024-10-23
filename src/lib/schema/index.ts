import z from 'zod'

// TODO: Check schema to create teacher
const username = z
.string()
.min(3, { message: "Username must be at least 3 characters long!" })
.max(20, { message: "Username must be at most 20 characters long!" });
const email = z.string().email({ message: "Invalid email address!" });
const password = z
.string()
.min(8, { message: "Password must be at least 8 characters long!" })
const firstName = z.string().min(1, { message: "First name is required!" })
const lastName = z.string().min(1, { message: "Last name is required!" })
const phone = z.string().min(1, { message: "Phone is required!" })
const address = z.string().min(1, { message: "Address is required!" })
const bloodType = z.string().min(1, { message: "Blood Type is required!" })
// const birthday = z.date({ message: "Birthday is required!" })
const birthday = z.string({ message: "Birthday is required!" })
const sex = z.enum(["male", "female"], { message: "Sex is required!" })
// const img = z.instanceof(File, { message: "Image is required" })
const img = z.string({ message: "Image is required" })

export const schema = z.object({
  username,
  email,
  password,
  firstName,
  lastName,
  phone,
  address,
  bloodType,
  birthday,
  sex,
  img
});

export type FormSchema = z.infer<typeof schema>
