export interface Lab {
  id: string;
  name: string;
  approvalStatus: ApprovalStatus;
}

export const ApprovalStatus = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  REJECTED: "REJECTED",
} as const;

export type ApprovalStatus =
  (typeof ApprovalStatus)[keyof typeof ApprovalStatus];
