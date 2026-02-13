import { ApprovalStatus } from "@/types/approval-status";

//요청자
export interface ApplicantDto {
  id: number;
  name: string;
  studentId: number;
  phone: string;
  university: string;
  department: string;
  approvalStatus: ApprovalStatus;
}

export const mockApplicants: ApplicantDto[] = [
  {
    id: 1,
    name: "김철수",
    studentId: 20240001,
    phone: "010-1234-5678",
    university: "한국대학교",
    department: "컴퓨터공학과",
    approvalStatus: ApprovalStatus.PENDING,
  },
  {
    id: 2,
    name: "이영희",
    studentId: 20240002,
    phone: "010-2345-6789",
    university: "한국대학교",
    department: "소프트웨어학과",
    approvalStatus: ApprovalStatus.PENDING,
  },
  {
    id: 3,
    name: "박지성",
    studentId: 20240003,
    phone: "010-3456-7890",
    university: "서울대학교",
    department: "전기전자공학부",
    approvalStatus: ApprovalStatus.PENDING,
  },
  {
    id: 4,
    name: "김연아",
    studentId: 20240004,
    phone: "010-4567-8901",
    university: "고려대학교",
    department: "체육교육과",
    approvalStatus: ApprovalStatus.PENDING,
  },
  {
    id: 5,
    name: "손흥민",
    studentId: 20240005,
    phone: "010-5678-9012",
    university: "연세대학교",
    department: "스포츠산업학과",
    approvalStatus: ApprovalStatus.PENDING,
  },
  {
    id: 6,
    name: "정해인",
    studentId: 20240006,
    phone: "010-6789-0123",
    university: "한양대학교",
    department: "연극영화과",
    approvalStatus: ApprovalStatus.PENDING,
  },
  {
    id: 7,
    name: "한소희",
    studentId: 20240007,
    phone: "010-7890-1234",
    university: "성균관대학교",
    department: "의상학과",
    approvalStatus: ApprovalStatus.PENDING,
  },
  {
    id: 8,
    name: "이도현",
    studentId: 20240008,
    phone: "010-8901-2345",
    university: "중앙대학교",
    department: "심리학과",
    approvalStatus: ApprovalStatus.PENDING,
  },
  {
    id: 9,
    name: "최민식",
    studentId: 20240009,
    phone: "010-9012-3456",
    university: "경희대학교",
    department: "국어국문학과",
    approvalStatus: ApprovalStatus.PENDING,
  },
  {
    id: 10,
    name: "강호동",
    studentId: 20240010,
    phone: "010-0123-4567",
    university: "부산대학교",
    department: "식품영양학과",
    approvalStatus: ApprovalStatus.PENDING,
  },
];
