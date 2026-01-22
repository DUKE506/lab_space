import { FormErrorMessage } from "@/components/features/user/profile-additional-form";
import { FileInput } from "@/components/ui/file-input";
import { FormFileInput } from "@/components/ui/form/file";
import { FormInput } from "@/components/ui/form/input";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";

import React from "react";
import { Controller, useForm } from "react-hook-form";
import z from "zod";

const Schema = z.object({
  name: z.string().min(1, "1글자 이상 입력하여야 합니다."),
  files: z.array(z.instanceof(File)),
});

const LabCreateForm = () => {
  const form = useForm<z.infer<typeof Schema>>({
    resolver: zodResolver(Schema),
    defaultValues: {
      name: "",
      files: [],
    },
  });

  const onSubmit = (values: z.infer<typeof Schema>) => {
    console.log(values);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="flex flex-col gap-6 h-full"
    >
      <div className="flex-1 flex flex-col gap-6">
        <FormInput
          label="연구실명"
          placeholder="연구실명"
          register={form.register("name", {
            required: "연구실명은 필수입니다.",
          })}
          error={form.formState.errors.name}
          required
        />
        {/* <FormFileInput label="증빙자료" /> */}
        <Controller
          name="files"
          control={form.control}
          rules={{
            validate: (files) =>
              files.length > 0 || "최소 1개의 파일을 선택해주세요",
          }}
          render={({ field }) => (
            <FormFileInput
              label="첨부파일"
              required
              value={field.value}
              onChange={field.onChange}
              // error={form.formState.errors.files}
              multiple
              maxSize={10}
              hint="여러 파일을 선택할 수 있습니다"
            />
          )}
        />
      </div>
      <button type="submit" className="bg-(--primary) text-white ">
        신청
      </button>
    </form>
  );
};

export default LabCreateForm;
