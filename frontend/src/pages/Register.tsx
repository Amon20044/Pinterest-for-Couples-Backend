import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useDispatch } from "react-redux";
import { registerUser } from "../redux/slices/authSlice";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function Register() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data: any) => {
    dispatch(registerUser(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded-md">
      <input {...register("name")} placeholder="Name" className="border p-2" />
      <input {...register("email")} placeholder="Email" className="border p-2 mt-2" />
      <input {...register("password")} type="password" placeholder="Password" className="border p-2 mt-2" />
      <button type="submit" className="bg-green-500 text-white p-2 mt-2">Register</button>
    </form>
  );
}
