"use client";
import BaseDialog from "@/components/ui/base-dialog";
import {
  CardIconText,
  CardTitle,
  PageDescription,
  PageTitle,
} from "@/components/ui/text";
import { LabCardProps, labMockData } from "@/lib/config/lab-items";
import { useAuthStore } from "@/store/auth-store";
import { PlusIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import LabCreateForm from "./components/lab-create-form";
import { useLabStore } from "@/store/useLabStore";
import Button from "@/components/ui/button";

const page = () => {
  const { user } = useAuthStore();
  const { labs, getLabs, isLoading } = useLabStore();
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    getLabs();
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <PageTitle str="연구실 둘러보기" />
          <PageDescription str="LAB SPACE에 등록된 공개 연구실을 둘러볼 수 있습니다." />
        </div>
        {user?.userType === "PROFESSOR" && (
          <BaseDialog
            title="연구실 생성"
            trigger={
              <div className="flex items-center gap-2 bg-(--primary) text-white border border-(--border) rounded-sm py-2 px-4 cursor-pointer hover:bg-(--secondary)">
                <PlusIcon size={20} />
                <span className="text-sm font-bold">연구실 생성</span>
              </div>
            }
            open={open}
            onOpenChange={setOpen}
            preventClose
          >
            <LabCreateForm onClose={() => setOpen(false)} />
          </BaseDialog>
        )}
      </div>

      <div className=" rounded-(--rounded-md) grid grid-cols-5 gap-x-6 gap-y-8 ">
        {!isLoading &&
          labs.map((lab, index) => (
            <LabCard
              key={index}
              name={lab.name}
              school={"동서대학교"}
              professor={"최봉준"}
            />
          ))}
      </div>
    </>
  );
};

export default page;

const LabCard = ({ name, school, professor, img }: LabCardProps) => {
  return (
    <div className="flex flex-col gap-4 p-3 border border-(--border) rounded-(--rounded-md) bg-(--surface) cursor-pointer hover:border-(--primary) hover:bg-(--hover) hover:shadow-md">
      <div className="relative w-full h-32 rounded-md overflow-hidden">
        {img ? (
          <Image
            src={img}
            alt={`${name} 연구실`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>
      <div>
        <CardTitle str={name} />
        <div className="h-0.25 w-full bg-(--border) my-2" />
        <div className="space-y-2">
          <CardIconText icon="noto:school" str={school} />
          <CardIconText icon="noto:graduation-cap" str={`${professor} 교수`} />
        </div>
      </div>
    </div>
  );
};
