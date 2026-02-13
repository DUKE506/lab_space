import { ApprovalStatus } from "../../approval-status";
import { LabRole } from "./role";

export interface LabMemberDto {
  id: number;
  name: string;
  profile: string;
  phone: string;
  email: string;
  schoolId: number;
  labRole: LabRole;
}
