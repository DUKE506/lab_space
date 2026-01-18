'use client'
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/auth-store";
import { LoginDto } from "@/types/user";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export default function LoginForm() {
  const { register, handleSubmit } = useForm<LoginDto>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })
  const { signIn } = useAuthStore()

  const onSubmit = (values: LoginDto) => {

    console.log(values)
  }
  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit, err => console.log(err))}
    >
      <label className="flex flex-col gap-2">
        Email
        <Input id="email" {...register('email', { required: true })} />
      </label>
      <label className="flex flex-col gap-2">
        Password
        <Input id="password" {...register('password', { required: true })} />
      </label>
      <button
        className=" w-full py-2 font-bold  border border-(--border) rounded-(--default-rounded) cursor-pointer hover:border-(--primary) hover:text-(--primary) "
        type="submit"
      >
        sign in
      </button>
    </form>
  );
}
