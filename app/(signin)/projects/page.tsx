import { Input, SearchInput } from "@/components/ui/input";
import { CardIconText, PageDescription, PageTitle } from "@/components/ui/text";
import { Icon } from "@iconify/react";
import { format } from "date-fns";
import React from "react";

const mockProjects: ProjectCardProps[] = [
  {
    title: "E-커머스 플랫폼 리뉴얼",
    description: "모바일 우선 반응형 디자인으로 전면 개편",
    status: "PLAY",
    startDate: new Date("2024-01-15"),
    endDate: new Date("2024-06-30"),
    members: ["김민수", "이지은", "박준호"],
  },
  {
    title: "AI 챗봇 개발",
    description: "고객 상담 자동화를 위한 AI 챗봇 시스템 구축",
    status: "PLAY",
    startDate: new Date("2024-02-01"),
    endDate: new Date("2024-05-31"),
    members: ["최서연", "정우진"],
  },
  {
    title: "데이터 분석 대시보드",
    description: "실시간 비즈니스 인사이트 제공 대시보드",
    status: "COMPLETE",
    startDate: new Date("2023-09-01"),
    endDate: new Date("2023-12-20"),
    members: ["강태희", "윤소영", "한지훈", "오나연"],
  },
  {
    title: "모바일 앱 개발",
    description: "iOS 및 Android 네이티브 앱 개발",
    status: "PLAY",
    startDate: new Date("2024-03-10"),
    endDate: new Date("2024-09-30"),
    members: ["임현우", "송미래"],
  },
  {
    title: "레거시 시스템 마이그레이션",
    description: "온프레미스에서 클라우드 환경으로 전환",
    status: "PAUSE",
    startDate: new Date("2023-11-01"),
    members: ["배성민", "신예린", "조현석"],
  },
  {
    title: "보안 강화 프로젝트",
    description: "전사 보안 시스템 업그레이드 및 취약점 개선",
    status: "COMPLETE",
    startDate: new Date("2023-07-01"),
    endDate: new Date("2023-10-31"),
    members: ["권도윤", "홍재영"],
  },
  {
    title: "소셜 미디어 통합",
    description: "다양한 SNS 플랫폼 연동 기능 개발",
    status: "DISCONTINUE",
    startDate: new Date("2023-05-15"),
    members: ["장서현", "문준영"],
  },
  {
    title: "결제 시스템 개선",
    description: "다양한 결제 수단 추가 및 UX 개선",
    status: "PLAY",
    startDate: new Date("2024-01-20"),
    endDate: new Date("2024-04-30"),
    members: ["서지훈", "안수빈", "유현정"],
  },
  {
    title: "재고 관리 시스템",
    description: "실시간 재고 추적 및 자동 발주 시스템",
    status: "COMPLETE",
    startDate: new Date("2023-08-01"),
    endDate: new Date("2024-01-15"),
    members: ["노승아", "하민재", "표지우"],
  },
  {
    title: "고객 리뷰 플랫폼",
    description: "사용자 리뷰 및 평점 시스템 구축",
    status: "PLAY",
    startDate: new Date("2024-02-15"),
    endDate: new Date("2024-07-31"),
    members: ["구태양", "변소은"],
  },
  {
    title: "마케팅 자동화 툴",
    description: "이메일 및 SMS 마케팅 자동화 시스템",
    status: "PAUSE",
    startDate: new Date("2023-12-01"),
    members: ["진예준", "황아인", "도경민"],
  },
  {
    title: "사내 협업 도구 개발",
    description: "팀 협업 및 프로젝트 관리 통합 플랫폼",
    status: "PLAY",
    startDate: new Date("2024-01-05"),
    endDate: new Date("2024-08-31"),
    members: ["방시우", "석유나", "주현우", "차지안"],
  },
  {
    title: "음성 인식 기능 추가",
    description: "AI 기반 음성 명령 처리 시스템",
    status: "DISCONTINUE",
    startDate: new Date("2023-06-01"),
    members: ["탁민서", "추서준"],
  },
  {
    title: "다국어 지원 확장",
    description: "10개 언어 추가 지원 및 현지화",
    status: "COMPLETE",
    startDate: new Date("2023-10-01"),
    endDate: new Date("2024-02-28"),
    members: ["감도현", "양수아", "팽재윤"],
  },
  {
    title: "로그 모니터링 시스템",
    description: "실시간 로그 수집 및 분석 플랫폼",
    status: "PLAY",
    startDate: new Date("2024-03-01"),
    endDate: new Date("2024-06-30"),
    members: ["빈지유", "복시현"],
  },
  {
    title: "추천 알고리즘 개선",
    description: "머신러닝 기반 개인화 추천 시스템",
    status: "PLAY",
    startDate: new Date("2024-02-20"),
    endDate: new Date("2024-09-15"),
    members: ["견하율", "국도윤", "설유진", "등채원"],
  },
  {
    title: "API 문서화 자동화",
    description: "OpenAPI 기반 자동 문서 생성 시스템",
    status: "COMPLETE",
    startDate: new Date("2023-11-15"),
    endDate: new Date("2024-01-31"),
    members: ["남시윤", "명준서"],
  },
  {
    title: "블록체인 지갑 연동",
    description: "암호화폐 결제 및 NFT 거래 지원",
    status: "PAUSE",
    startDate: new Date("2024-01-10"),
    members: ["란서연", "묵은우", "반지호"],
  },
  {
    title: "사용자 행동 분석",
    description: "웹/앱 사용자 행동 패턴 분석 시스템",
    status: "PLAY",
    startDate: new Date("2024-03-15"),
    endDate: new Date("2024-10-31"),
    members: ["사예은", "소민준", "순하윤"],
  },
  {
    title: "테스트 자동화 구축",
    description: "E2E 및 통합 테스트 자동화 파이프라인",
    status: "COMPLETE",
    startDate: new Date("2023-09-15"),
    endDate: new Date("2023-12-31"),
    members: ["시아린", "옥지훈", "요수현", "우채은"],
  },
];

const Page = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <PageTitle str="IMPL 프로젝트" />
      </div>
      <Filter />
      <div className="grid grid-cols-5 gap-x-6 gap-y-8  ">
        {mockProjects.map((v, i) => (
          <ProjectCard key={i} {...v} />
        ))}
      </div>
    </>
  );
};

export default Page;

interface ProjectCardProps {
  title: string;
  description: string;
  status: "PLAY" | "PAUSE" | "COMPLETE" | "DISCONTINUE";
  startDate: Date;
  endDate?: Date;
  members: string[];
}

const ProjectCard = ({
  title,
  description,
  status,
  startDate,
  endDate,
  members,
}: ProjectCardProps) => {
  const icon = () => {
    const statusIcon = {
      PLAY: "line-md:play-filled",
      PAUSE: "line-md:pause",
      COMPLETE: "line-md:check-all",
      DISCONTINUE: "line-md:cancel",
    };
    const statusColor = {
      PLAY: "text-(--primary)",
      PAUSE: "text-(--warning)",
      COMPLETE: "text-(--success)",
      DISCONTINUE: "text-(--error)",
    };
    const statusBgColor = {
      PLAY: "bg-(--light)",
      PAUSE: "bg-(--warning-bg)",
      COMPLETE: "bg-(--success-bg)",
      DISCONTINUE: "bg-(--error-bg)",
    };

    return (
      <div
        className={`w-7 h-7 flex items-center justify-center aspect-square rounded-full ${statusBgColor[status]}`}
      >
        <Icon
          icon={statusIcon[status]}
          className={statusColor[status]}
          width={20}
          height={20}
        />
      </div>
    );
  };
  return (
    <div className="flex flex-col gap-4 border border-(--border) rounded-(--rounded-md) p-2 px-6 py-4 bg-(--surface) cursor-pointer hover:shadow-lg">
      <div className="flex justify-between items-center border-y-2 border-(--border) py-4">
        <span className="text-sm font-bold text-(--text-primary)">{title}</span>
        {icon()}
      </div>
      <div className="flex-1 text-[13px] text-(--text-secondary)">
        {description}
      </div>
      <div className="space-y-2">
        <CardIconText
          icon="noto:calendar"
          str={format(startDate, "yyyy-MM-dd")}
        />
        <CardIconText
          icon="fluent-color:people-16"
          str={`${members[0]} 외 ${members.length - 1}`}
        />
      </div>
    </div>
  );
};

const Filter = () => {
  return (
    <div className="bg-(--surface) border border-(--border) rounded-(--rounded-md) p-2 px-6 py-4 ">
      <SearchInput />
    </div>
  );
};
