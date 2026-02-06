import { ApprovalStatus } from "../../approval-status";
import { LabRole } from "./role";

export interface LabMemberDto {
  id: number;
  name: string;
  labRole: LabRole;
  approvalStatus: ApprovalStatus;
}
