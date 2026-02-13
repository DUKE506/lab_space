export const LabRole = {
  PROFESSOR: "PROFESSOR",
  MANAGER: "MANAGER",
  UNDERGRADUATE_RESEARCHER: "UNDERGRADUATE_RESEARCHER",
  GRADUATE_RESEARCHER: "GRADUATE_RESEARCHER",
};

export type LabRole = (typeof LabRole)[keyof typeof LabRole];

//맵핑객체 추가
export const LabRoleLabel: Record<LabRole, string> = {
  [LabRole.PROFESSOR]: "교수",
  [LabRole.MANAGER]: "연구실장",
  [LabRole.UNDERGRADUATE_RESEARCHER]: "학부생 연구원",
  [LabRole.GRADUATE_RESEARCHER]: "연구원",
};
