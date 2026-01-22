"use client";
import Divider from "@/components/ui/divider";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/auth-store";
import { useUserStore } from "@/store/user-store";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  CircleCheck,
  CircleCheckIcon,
  GraduationCap,
  GraduationCapIcon,
  LandmarkIcon,
  MailIcon,
  UserIcon,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import z from "zod";

const Schema = z.object({
  //유저ID
  id: z.number(),
  //전화번호
  phone: z
    .string()
    .min(10, "전화번호는 10자리 이상 11자리 이하여야 합니다.")
    .max(11, "전화번호는 10자리 이상 11자리 이하여야 합니다."),
  //학교명
  university: z.string().min(4, "학교명은 4자리 이상이어야 합니다."),
  //학과명
  department: z.string().min(4, "학과명은 4자리 이상이어야 합니다."),
  //유저타입
  userType: z.enum(["STUDENT", "PROFESSOR"]),
});

const ProfileAdditionalForm = () => {
  const { user } = useAuthStore();
  const { additionalUserProfile } = useUserStore();

  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: {
      id: user?.id,
      phone: "",
      university: "",
      department: "",
      userType: "STUDENT",
    },
  });
  const onSubmit = async (values: z.infer<typeof Schema>) => {
    try {
      const response = await additionalUserProfile(values);

      if (!response) {
        throw new Error("프로필 업데이트에 실패했습니다.");
      }

      // 2. 성공 애니메이션 먼저 표시
      setShowSuccess(true);

      // 3. 1.5초 후에 authStore 업데이트 (UI 전환)
      setTimeout(() => {
        useAuthStore.getState().setUser(response);
        setShowSuccess(false);
      }, 1500);
    } catch (error) {
      toast.error("프로필 업데이트에 실패했습니다.");
    }
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
            <span className="text-xs text-(--text-secondary)">이름</span>
            <span className="text-(--text-primary)">{user?.nickname}</span>
          </div>
          <CircleCheckIcon className="text-(--success)" />
        </div>
        <Divider className="my-4" />
        <div className="flex items-center gap-4 ">
          <MailIcon className="text-(--text-secondary)" strokeWidth={1} />
          <div className="flex-1 flex flex-col gap-1 ">
            <span className="text-xs text-(--text-secondary)">이메일</span>
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
            placeholder="010xxxxxxxx ( - 제외)"
            {...form.register("phone", { required: true })}
          />
          {form.formState.errors.phone?.message && (
            <FormErrorMessage message={form.formState.errors.phone?.message} />
          )}
        </label>
        <label className="flex flex-col gap-2">
          <div>
            <span className="text-xs text-(--text-secondary)">학교명</span>
            <span className="text-(--error)">*</span>
          </div>
          <Input
            placeholder="학교명"
            {...form.register("university", { required: true })}
          />
          {form.formState.errors.university?.message && (
            <FormErrorMessage
              message={form.formState.errors.university?.message}
            />
          )}
        </label>
        <label className="flex flex-col gap-2">
          <div>
            <span className="text-xs text-(--text-secondary)">학과명</span>
            <span className="text-(--error)">*</span>
          </div>
          <Input
            placeholder="학과명"
            {...form.register("department", { required: true })}
          />
          {form.formState.errors.department?.message && (
            <FormErrorMessage
              message={form.formState.errors.department?.message}
            />
          )}
        </label>
        <label className="flex flex-col gap-2 col-span-full">
          <div>
            <span className="text-xs text-(--text-secondary)">사용자 유형</span>
            <span className="text-(--error)">*</span>
          </div>
          <UserTypeSelect
            values={form.watch()}
            onChange={(value) =>
              form.setValue("userType", value, { shouldDirty: true })
            }
          />
        </label>
      </div>

      <div className="flex justify-end">
        <button
          className="text-xs border border-(--border) px-4 py-2 bg-(--primary) text-white rounded-sm cursor-pointer hover:bg-(--secondary) "
          type="submit"
        >
          저장
        </button>
      </div>
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-in fade-in">
          <div className="bg-white p-8 rounded-lg flex flex-col items-center gap-4 animate-in zoom-in">
            <CircleCheckIcon className="text-green-500" size={64} />
            <span className="text-xl font-semibold">프로필 완료!</span>
          </div>
        </div>
      )}
    </form>
  );
};

export default ProfileAdditionalForm;

const UserTypeSelect = ({
  values,
  onChange,
}: {
  values: z.infer<typeof Schema>;
  onChange: (value: "STUDENT" | "PROFESSOR") => void;
}) => {
  return (
    <div className="flex gap-4">
      <div
        onClick={() => onChange("STUDENT")}
        className={`flex-1 flex flex-col  gap-2 border border-(--border) px-4 py-2  rounded-sm cursor-pointer 
        ${values.userType === "STUDENT" ? "border-(--primary) bg-(--primary-hover)" : ""} 
        ${values.userType === "STUDENT" ? "text-(--primary)" : "text-(--text-secondary)"} `}
      >
        <div
          className={`flex items-center gap-4  ${values.userType === "STUDENT" ? "font-bold" : ""} `}
        >
          <GraduationCapIcon strokeWidth={1} />
          <span>학생</span>
        </div>
        <span className={`text-sm `}>연구실에 가입하여 활동해보세요!</span>
      </div>
      <div
        onClick={() => onChange("PROFESSOR")}
        className={`flex-1 flex flex-col  gap-2 border border-(--border) px-4 py-2  rounded-sm cursor-pointer 
        ${values.userType === "PROFESSOR" ? "border-(--primary) bg-(--primary-hover)" : ""} 
        ${values.userType === "PROFESSOR" ? "text-(--primary)" : "text-(--text-secondary)"} `}
      >
        <div
          className={`flex items-center gap-4  ${values.userType === "PROFESSOR" ? "font-bold" : ""} `}
        >
          <LandmarkIcon strokeWidth={1} />
          <span>교수</span>
        </div>
        <span className={`text-sm`}>
          연구실을 관리하고 학생들의 활동을 지원해보세요!
        </span>
      </div>
    </div>
  );
};

export const FormErrorMessage = ({ message }: { message: string }) => {
  return <span className="text-(--error) text-xs">{message}</span>;
};
