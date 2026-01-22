import Card from "@/components/ui/card";
import { useAuthStore } from "@/store/auth-store";
import {
  BriefcaseBusiness,
  CircleCheckIcon,
  CircleXIcon,
  IconNode,
  MailIcon,
  PhoneIcon,
  School2,
  UserIcon,
} from "lucide-react";
import React from "react";

const ProfileDetail = () => {
  const { user } = useAuthStore();
  return (
    <Card className="flex-1/3 flex flex-col gap-6 p-6 h-fit">
      <ProfileDetailItem
        icon={<UserIcon size={16} strokeWidth={1.5} />}
        title="이름"
        name={user?.nickname || ""}
      />
      <Divider />
      <ProfileDetailItem
        icon={<MailIcon size={16} strokeWidth={1.5} />}
        title="이메일"
        name={user?.email || ""}
      />
      <Divider />
      {user?.isProfileCompleted ? (
        <>
          <ProfileDetailItem
            icon={<PhoneIcon size={16} strokeWidth={1.5} />}
            title="전화번호"
            name={user?.phone || "내용없음"}
          />
          <Divider />
          <ProfileDetailItem
            icon={<School2 size={16} strokeWidth={1.5} />}
            title="학교"
            name={user?.university || "내용없음"}
          />
          <Divider />
          <ProfileDetailItem
            icon={<BriefcaseBusiness size={16} strokeWidth={1.5} />}
            title="학과"
            name={user?.department || "내용없음"}
          />
          <Divider />
          <div className="flex items-center gap-2 text-(--success)">
            <CircleCheckIcon />
            <span>추가 정보</span>
          </div>
        </>
      ) : (
        <div className="flex items-center gap-2 text-(--error)">
          <CircleXIcon />
          <span>추가 정보</span>
        </div>
      )}
    </Card>
  );
};

export default ProfileDetail;

const ProfileDetailItem = ({
  icon,
  title,
  name,
}: {
  icon: React.ReactNode;
  title: string;
  name: string;
}) => {
  return (
    <div className="flex flex-col gap-2 justify-between ">
      <div className="flex items-center gap-2 text-(--text-secondary)">
        {icon}
        <span className="text-sm">{title}</span>
      </div>
      <span className="ml-4 text-(--text-primary) font-bold">{name}</span>
    </div>
  );
};

const Divider = () => {
  return <div className="h-[1px] bg-(--border)"></div>;
};
