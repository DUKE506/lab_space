"use client";
import Divider from "@/components/ui/divider";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/auth-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck, CircleCheckIcon, MailIcon, UserIcon } from "lucide-react";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const Schema = z.object({
  //전화번호
  phone: z.string().min(10).max(11),
  //학교명
  university: z.string().min(4),
  //학과명
  department: z.string().min(4),
});

const ProfileAdditionalForm = () => {
  const { user } = useAuthStore();
  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: {
      phone: "",
      university: "",
      department: "",
    },
  });
  const onSubmit = (values: z.infer<typeof Schema>) => {
    console.log(values);
  };
  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-6"
    >
      <span className="text-xl font-bold">추가 정보 입력</span>
      <div className="flex flex-col">
        <div className="flex items-center gap-4 ">
          <UserIcon className="text-(--text-secondary)" strokeWidth={1} />
          <div className="flex-1 flex flex-col gap-1 ">
            <span className="text-sm text-(--text-secondary)">이름</span>
            <span className="text-(--text-primary)">{user?.nickname}</span>
          </div>
          <CircleCheckIcon className="text-(--success)" />
        </div>
        <Divider className="my-4" />
        <div className="flex items-center gap-4 ">
          <MailIcon className="text-(--text-secondary)" strokeWidth={1} />
          <div className="flex-1 flex flex-col gap-1 ">
            <span className="text-sm text-(--text-secondary)">이메일</span>
            <span className="text-(--text-primary)">{user?.email}</span>
          </div>
          <CircleCheckIcon className="text-(--success)" />
        </div>
        <Divider className="my-4" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        <label className="flex flex-col gap-2">
          <div>
            <span className="text-sm text-(--text-secondary)">전화번호</span>
            <span className="text-(--error)">*</span>
          </div>

          <Input
            placeholder="전화번호"
            {...form.register("phone", { required: true })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <div>
            <span className="text-sm text-(--text-secondary)">학교명</span>
            <span className="text-(--error)">*</span>
          </div>
          <Input
            placeholder="학교명"
            {...form.register("university", { required: true })}
          />
        </label>
        <label className="flex flex-col gap-2">
          <div>
            <span className="text-sm text-(--text-secondary)">학과명</span>
            <span className="text-(--error)">*</span>
          </div>
          <Input
            placeholder="학과명"
            {...form.register("department", { required: true })}
          />
        </label>
      </div>
      <div className="flex justify-end">
        <button
          className="text-sm border border-(--border) px-4 py-2 bg-(--primary) text-white rounded-sm cursor-pointer hover:bg-(--secondary) "
          type="submit"
        >
          저장
        </button>
      </div>
    </form>
  );
};

export default ProfileAdditionalForm;
