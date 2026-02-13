"use client";
import BaseTable from "@/components/ui/base-table";
import SearchFilter from "@/components/ui/filter/search";
import { PageTitle } from "@/components/ui/text";
import React, { useState } from "react";
import { labMemberColumns, labMembers } from "./_components/member-columns";
import { ApplicantDto, mockApplicants } from "@/types/lab/member/applicant";
import { ApprovalStatus } from "@/types/approval-status";
import { UserIcon } from "lucide-react";
import Button from "@/components/ui/button";

const Page = () => {
  const tabConfig = ["Members", "Applicants"];
  const [select, setSelect] = useState<string>(tabConfig[0]);

  const Members = () => {
    return <BaseTable data={labMembers} columns={labMemberColumns} />;
  };

  const Applicants = () => {
    return (
      <div className="flex flex-col gap-4">
        {mockApplicants.map((v, i) => (
          <ApplicantsCard key={`applicant-${i}`} data={v} onSubmit={() => {}} />
        ))}
      </div>
    );
  };

  const contentMap: Record<string, React.ReactNode> = {
    Members: <Members />,
    Applicants: <Applicants />,
  };

  return (
    <>
      <PageTitle str="연구원" />
      <Tab
        tabs={tabConfig}
        selectedTab={select}
        onChangeSelect={(tab) => setSelect(tab)}
      />
      <Filter />

      {contentMap[select]}
    </>
  );
};

export default Page;

const Filter = () => {
  return (
    <>
      <SearchFilter />
    </>
  );
};

interface TabProps {
  tabs: string[];
  selectedTab: string;
  onChangeSelect: (tab: string) => void;
}

const Tab = ({ tabs, selectedTab, onChangeSelect }: TabProps) => {
  const onSelect = (tab: string) => {
    onChangeSelect(tab);
  };
  return (
    <div className="flex bg-(--surface) w-fit border border-(--border) rounded-sm ">
      {tabs.map((v, i) => (
        <div
          className={`px-8 py-2 text-sm  rounded-sm  cursor-pointer ${selectedTab === v ? "bg-(--primary) text-(--surface)" : "text-(--text-secondary)"} duration-150`}
          key={i}
          onClick={() => onSelect(v)}
        >
          {v}
        </div>
      ))}
    </div>
  );
};

/**
 * 연구실 가입요청 카드
 */
interface ApplicantsCardProps {
  data: ApplicantDto;
  onSubmit: (approvalStatus: ApprovalStatus) => void;
}

const ApplicantsCard = ({ data, onSubmit }: ApplicantsCardProps) => {
  return (
    <div className="flex gap-16 items-center bg-(--surface) p-4 border border-(--border) hover:border-(--primary) hover:bg-(--hover)">
      <div className="flex gap-2 ">
        <div className="w-16 flex justify-center items-center aspect-square border border-(--border) bg-(--background)">
          <UserIcon
            className="text-(--text-secondary)"
            size={28}
            strokeWidth={1.5}
          />
        </div>
        <div className="flex flex-col justify-center ">
          <span className="text-(--text-primary)">{data.name}</span>
          <span className="text-(--text-secondary) text-sm">
            {data.studentId}
          </span>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-start gap-16 text-sm text-(--text-secondary)">
        <span>{data.phone}</span>
        <span>{data.university}</span>
        <span>{data.department}</span>
      </div>
      <div className="flex gap-4">
        <Button label="승인" className="h-fit" size={"sm"} />
        <Button label="거부" className="h-fit" size={"sm"} variant={"reject"} />
      </div>
    </div>
  );
};
