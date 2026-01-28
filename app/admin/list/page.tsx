"use client";

import { PageDescription, PageTitle } from "@/components/ui/text";
import { useAdminLabStore } from "@/store/useAdminLabStore";
import { CircleCheckIcon, CircleXIcon } from "lucide-react";
import React, { useEffect } from "react";

const Page = () => {
  const { isLoading, labs, getLabs, approveLab, rejectLab } =
    useAdminLabStore();

  useEffect(() => {
    getLabs();
  }, []);

  useEffect(() => {
    console.log(labs);
  }, [labs]);

  const approvalStatus = (status: string) => {
    switch (status) {
      case "PENDING":
        return "대기";
      case "APPROVED":
        return "승인";
      case "REJECTED":
        return "거부";
    }
  };

  const approvalDisplay = (status: string, labId: string) => {
    switch (status) {
      case "PENDING":
        return (
          <div className="flex gap-2">
            <ApprovalButton onClick={() => approveLab(labId)} />
            <RejectionButton onClick={() => rejectLab(labId)} />
          </div>
        );
      case "APPROVED":
        return (
          <div className="flex items-center gap-2 text-(--success)">
            <CircleCheckIcon /> 승인
          </div>
        );
      case "REJECTED":
        return (
          <div className="flex items-center gap-2 text-(--error)">
            <CircleXIcon /> 거부
          </div>
        );
    }
  };

  const handleApproval = (labId: string) => {
    console.log(labId);
  };

  return (
    <div>
      <PageTitle str="연구실" />
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <div>
          {labs.map((lab) => (
            <div
              key={lab.id}
              className="flex justify-between border border-(--border) p-4"
            >
              <div className="flex items-center gap-4">
                <span className="font-bold text-lg">{lab.name}</span>
                <span>{approvalStatus(lab.approvalStatus)}</span>
              </div>

              {approvalDisplay(lab.approvalStatus, lab.id)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Page;

const ApprovalButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="rounded bg-primary px-4 py-2 text-white"
      onClick={onClick}
    >
      승인
    </button>
  );
};

const RejectionButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="rounded bg-error px-4 py-2 text-white" onClick={onClick}>
      거부
    </button>
  );
};
