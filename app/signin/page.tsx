import LoginForm from "@/components/features/auth/login-form";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center h-full px-12 relative">
      <HomeButton />
      <div className="flex flex-col gap-12 w-150 p-12 border border-(--border) ">
        <span className="text-4xl">SIGN IN</span>
        <LoginForm />
      </div>
    </div>
  );
}

function HomeButton() {
  return (
    <Link href={"/"}>
      <div className="absolute left-10 top-10 flex items-center gap-2 group cursor-pointer">
        <ArrowLeftIcon
          className="group-hover:text-(--primary)"
          // strokeWidth={3}
        />
        <span className="font-bold  group-hover:text-(--primary)">HOME</span>
      </div>
    </Link>
  );
}
