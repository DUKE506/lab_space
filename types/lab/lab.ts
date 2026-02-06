import { ApprovalStatus } from "../approval-status";

export interface Lab {
  id: string;
  name: string;
  approvalStatus: ApprovalStatus;
}
