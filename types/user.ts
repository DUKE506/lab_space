export interface User {
  id: number;
  email: string;
  nickname: string; //카카오 닉네임
  userType: UserType;
  isProfileCompleted: boolean; // 프로필 완성도
  labId: number | null; // 소속 연구실 추후 생성 예정
}

export const UserType = {
  GUEST: "GUEST",
  ADMIN: "ADMIN",
  PROFESSOR: "PROFESSOR",
  STUDENT: "STUDENT",
} as const;

export type UserType = (typeof UserType)[keyof typeof UserType];

export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  user: User;
}
