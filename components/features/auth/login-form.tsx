"use client";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/auth-store";
import { LoginDto } from "@/types/user";
import { AuthError } from "next-auth";
import { redirect, useRouter } from "next/navigation";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { KakaoLoginButton } from "./oauth-button";
import {
  FormInputPassword,
  FormInputText,
} from "@/app/signin/_form/signup-form";
import Button from "@/components/ui/button";

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export default function LoginForm() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<LoginDto>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { signIn } = useAuthStore();

  const onSubmit = async (values: LoginDto) => {
    const res = await signIn(values);
    if (res) router.push("/home");
  };
  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit, (err) => console.log(err))}
    >
      <FormInputText
        label="Email"
        placeholder="email@spacelab.co.kr"
        {...register("email", { required: true })}
      />
      <FormInputPassword
        label="Password"
        placeholder="password"
        {...register("password", { required: true })}
      />
      <Button label="로그인" />

      <KakaoLoginButton />
    </form>
  );
}
