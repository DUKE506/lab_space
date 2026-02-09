"use client";
import LoginForm from "@/components/features/auth/login-form";
import BaseDialog from "@/components/ui/base-dialog";
import { ArrowLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SignUpForm from "./_form/signup-form";

export default function SignInPage() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex justify-center items-center h-full px-12 relative">
      <HomeButton />
      <div className="flex flex-col  gap-12 w-150 p-12 border border-(--border) ">
        <span className="text-4xl">SIGN IN</span>
        <LoginForm />
        <BaseDialog
          title="회원가입"
          trigger={
            <div className="flex items-center justify-center text-(--text-secondary) cursor-pointer group">
              <span className="text-sm group-hover:underline">
                아직도 회원이 아니신가요?
              </span>
              <ChevronRightIcon strokeWidth={1} />
            </div>
          }
          open={open}
          onOpenChange={(open) => setOpen(open)}
        >
          <SignUpForm />
        </BaseDialog>
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
