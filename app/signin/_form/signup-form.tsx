import {
  FormErrorMessage,
  UserTypeSelect,
} from "@/components/features/user/profile-additional-form";
import Button from "@/components/ui/button";
import { Input, PasswordInput } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useAuthStore } from "@/store/auth-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { error } from "console";
import React from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const Schema = z
  .object({
    name: z.string().min(2, "2자리 이상이어아 합니다."),
    //이메일
    email: z.email("이메일 형식이 맞지않습니다."),
    //비밀번호
    password: z.string().min(8, "8자리 이상이어야 합니다."),
    //비밀번호 확인
    passwordCheck: z.string().min(8, "8자리 이상이어야 합니다."),
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
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordCheck"],
  });

const SignUpForm = () => {
  const { signUp } = useAuthStore();
  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
      phone: "",
      university: "",
      department: "",
      userType: "STUDENT",
    },
  });

  const handleSubmit = async (values: z.infer<typeof Schema>) => {
    console.log(values);
    const dto: SignUpRequestDto = {
      name: values.name,
      email: values.email,
      password: values.password,
      phone: values.phone,
      university: values.university,
      department: values.department,
      userType: values.userType,
    };
    await signUp(dto);
  };

  return (
    <ScrollArea>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="space-y-6 px-6 pb-6"
      >
        <FormInputText
          label="이메일"
          placeholder="email@domain.com"
          required
          errorMessage={form.formState.errors.email?.message}
          {...form.register("email", { required: true })}
        />
        <FormInputPassword
          label="비밀번호"
          placeholder="비밀번호"
          required
          errorMessage={form.formState.errors.password?.message}
          {...form.register("password", { required: true })}
        />
        <FormInputPassword
          label="비밀번호 확인"
          placeholder="비밀번호 확인"
          required
          errorMessage={form.formState.errors.passwordCheck?.message}
          {...form.register("passwordCheck", { required: true })}
        />

        <FormInputText
          label="이름"
          placeholder="홍길동"
          required
          errorMessage={form.formState.errors.name?.message}
          {...form.register("name", { required: true })}
        />
        <FormInputText
          label="전화번호"
          placeholder="( - 없이) 010XXXXXXXX"
          required
          errorMessage={form.formState.errors.phone?.message}
          {...form.register("phone", { required: true })}
        />
        <FormInputText
          label="학교명"
          placeholder="서울대학교"
          required
          errorMessage={form.formState.errors.university?.message}
          {...form.register("university", { required: true })}
        />
        <FormInputText
          label="학과명"
          placeholder="경영학과"
          required
          errorMessage={form.formState.errors.department?.message}
          {...form.register("department", { required: true })}
        />
        <label className="flex flex-col gap-2 col-span-full">
          <div>
            <span className="text-xs text-(--text-secondary)">사용자 유형</span>
            <span className="text-(--error)">*</span>
          </div>
          <UserTypeSelect
            values={form.watch("userType")}
            onChange={(value) =>
              form.setValue("userType", value, { shouldDirty: true })
            }
            isVertical
          />
        </label>

        <div className="shrink-0">
          <Button label="회원가입" />
        </div>
      </form>
    </ScrollArea>
  );
};

export default SignUpForm;

interface FormInputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  required?: boolean;
  errorMessage: string | undefined;
}

const FormInputText = ({
  label,
  required = false,
  errorMessage,
  ...props
}: FormInputTextProps) => {
  return (
    <div className={`flex flex-col gap-1`}>
      {label && (
        <span className="text-sm text-(--text-secondary)">
          {label}
          {required && <span className="ml-1 text-red-500 text-xs">*</span>}
        </span>
      )}
      <Input {...props} />
      <FormErrorMessage message={errorMessage} />
    </div>
  );
};

const FormInputPassword = ({
  label,
  required = false,
  errorMessage,
  ...props
}: FormInputTextProps) => {
  return (
    <div className={`flex flex-col gap-1`}>
      {label && (
        <span className="text-sm text-(--text-secondary)">
          {label}
          {required && <span className="ml-1 text-red-500 text-xs">*</span>}
        </span>
      )}

      <PasswordInput {...props} />
      <FormErrorMessage message={errorMessage} />
    </div>
  );
};
