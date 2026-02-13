"use client";
import { useUserStore } from "@/store/user-store";
import { PlusIcon, PowerIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import React, { useEffect, useState } from "react";
import BaseDialog from "../base-dialog";
import { FormInputText } from "@/app/signin/_form/signup-form";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../button";

const LABICON = ["🧬", "🤖", "🛻", "💾", "💿", "📷", "🪙"];

const AppBar = () => {
  const { getUserLabs, userLabs, isLoading } = useUserStore();
  const [addOpen, setAddOpen] = useState<boolean>(false);
  useEffect(() => {
    getUserLabs();
  }, []);

  return (
    <div className="flex flex-col items-center gap-12 bg-[#18181b] px-2 py-4">
      <LabItem icon="🏠" link="/home" />
      {/* 연구실 */}
      <div className="flex-1 flex flex-col gap-4 w-full">
        {userLabs.map((v, i) => (
          <LabItem
            key={i}
            icon={LABICON[Math.floor(Math.random() * LABICON.length)]}
            link={`/lab/${v.id}`}
          />
        ))}

        {/* 추가버튼 */}
        <BaseDialog
          title="연구실 가입 신청"
          open={addOpen}
          onOpenChange={(open) => setAddOpen(open)}
          trigger={
            <div className="aspect-square w-full h-full flex justify-center items-center border-2 border-dashed border-(--text-light) rounded-sm cursor-pointer">
              <PlusIcon className="text-(--text-light)" />
            </div>
          }
        >
          <div className="px-6 flex flex-col gap-6">
            <span className=" text-(--text-secondary)">
              연구실 코드를 입력해주세요.
            </span>
            <AddLabCodeForm />
          </div>
        </BaseDialog>
      </div>
      {/* 설정 */}
      <div>
        <LabItem icon={<UserIcon className="text-white" />} link="/my" />
        <LabItem icon={<PowerIcon className="text-red-500" />} link="/" />
      </div>
    </div>
  );
};

export default AppBar;

const LabItem = ({
  icon,
  link,
}: {
  icon: string | React.ReactNode;
  link: string;
}) => {
  const pathname = usePathname();

  return (
    <Link href={link}>
      <div
        className={`w-12 h-12 flex justify-center items-center aspect-square  gap-2 text-xl ${pathname === link ? "bg-[#5a5a60]" : ""}  rounded-sm cursor-pointer hover:bg-[#5a5a60]`}
      >
        {icon}
      </div>
    </Link>
  );
};

const AddLabCodeSchema = z.object({
  code: z.string().min(6, "코드를 확인해주세요."),
});

const AddLabCodeForm = () => {
  const form = useForm<z.infer<typeof AddLabCodeSchema>>({
    resolver: zodResolver(AddLabCodeSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (values: z.infer<typeof AddLabCodeSchema>) => {
    console.log(values);
  };

  return (
    <form
      className="flex flex-col gap-6 pb-6"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <FormInputText
        placeholder="코드"
        errorMessage={form.formState.errors.code?.message}
        {...form.register("code", { required: true })}
      />
      <Button label="신청" />
    </form>
  );
};
