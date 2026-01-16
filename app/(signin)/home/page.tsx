import SideBar from "@/components/ui/side-bar/side-bar";
import {
  CardIconText,
  CardTitle,
  PageDescription,
  PageTitle,
} from "@/components/ui/text";
import Image from "next/image";
import React from "react";

export const labMockData: LabCardProps[] = [
  {
    name: "인공지능 연구실",
    school: "서울대학교",
    professor: "김민수",
    img: "https://picsum.photos/seed/lab1/400/300",
  },
  {
    name: "컴퓨터 비전 연구실",
    school: "KAIST",
    professor: "이서연",
    img: "https://picsum.photos/seed/lab2/400/300",
  },
  {
    name: "자연어처리 연구실",
    school: "연세대학교",
    professor: "박준호",
    img: "https://picsum.photos/seed/lab3/400/300",
  },
  {
    name: "로보틱스 연구실",
    school: "포항공과대학교",
    professor: "정수진",
    img: "https://picsum.photos/seed/lab4/400/300",
  },
  {
    name: "머신러닝 연구실",
    school: "고려대학교",
    professor: "최동현",
    img: "https://picsum.photos/seed/lab5/400/300",
  },
  {
    name: "데이터 사이언스 연구실",
    school: "성균관대학교",
    professor: "강은지",
    img: "https://picsum.photos/seed/lab6/400/300",
  },
  {
    name: "사이버 보안 연구실",
    school: "한양대학교",
    professor: "임재현",
    img: "https://picsum.photos/seed/lab7/400/300",
  },
  {
    name: "블록체인 연구실",
    school: "중앙대학교",
    professor: "윤하영",
    img: "https://picsum.photos/seed/lab8/400/300",
  },
  {
    name: "클라우드 컴퓨팅 연구실",
    school: "경희대학교",
    professor: "오성민",
    img: "https://picsum.photos/seed/lab9/400/300",
  },
  {
    name: "IoT 연구실",
    school: "서강대학교",
    professor: "신유진",
    img: "https://picsum.photos/seed/lab10/400/300",
  },
  {
    name: "빅데이터 분석 연구실",
    school: "이화여자대학교",
    professor: "한지우",
    img: "https://picsum.photos/seed/lab11/400/300",
  },
  {
    name: "소프트웨어 공학 연구실",
    school: "부산대학교",
    professor: "조민석",
    img: "https://picsum.photos/seed/lab12/400/300",
  },
  {
    name: "네트워크 시스템 연구실",
    school: "전북대학교",
    professor: "송혜원",
    img: "https://picsum.photos/seed/lab13/400/300",
  },
  {
    name: "임베디드 시스템 연구실",
    school: "전남대학교",
    professor: "배정우",
    img: "https://picsum.photos/seed/lab14/400/300",
  },
  {
    name: "양자 컴퓨팅 연구실",
    school: "광주과학기술원",
    professor: "문소희",
    img: "https://picsum.photos/seed/lab15/400/300",
  },
  {
    name: "게임 개발 연구실",
    school: "동국대학교",
    professor: "권태양",
    img: "https://picsum.photos/seed/lab16/400/300",
  },
  {
    name: "증강현실 연구실",
    school: "건국대학교",
    professor: "허민지",
    img: "https://picsum.photos/seed/lab17/400/300",
  },
  {
    name: "가상현실 연구실",
    school: "아주대학교",
    professor: "표현수",
    img: "https://picsum.photos/seed/lab18/400/300",
  },
  {
    name: "휴먼-컴퓨터 인터랙션 연구실",
    school: "인하대학교",
    professor: "남궁은",
    img: "https://picsum.photos/seed/lab19/400/300",
  },
  {
    name: "알고리즘 연구실",
    school: "단국대학교",
    professor: "서정훈",
    img: "https://picsum.photos/seed/lab20/400/300",
  },
  {
    name: "분산 시스템 연구실",
    school: "국민대학교",
    professor: "유아름",
    img: "https://picsum.photos/seed/lab21/400/300",
  },
  {
    name: "모바일 컴퓨팅 연구실",
    school: "숭실대학교",
    professor: "안준영",
    img: "https://picsum.photos/seed/lab22/400/300",
  },
  {
    name: "디지털 헬스케어 연구실",
    school: "가톨릭대학교",
    professor: "황수빈",
    img: "https://picsum.photos/seed/lab23/400/300",
  },
  {
    name: "바이오인포매틱스 연구실",
    school: "울산과학기술원",
    professor: "노시환",
    img: "https://picsum.photos/seed/lab24/400/300",
  },
  {
    name: "에지 컴퓨팅 연구실",
    school: "대구경북과학기술원",
    professor: "진다은",
    img: "https://picsum.photos/seed/lab25/400/300",
  },
  {
    name: "컴파일러 연구실",
    school: "충남대학교",
    professor: "마승호",
    img: "https://picsum.photos/seed/lab26/400/300",
  },
  {
    name: "운영체제 연구실",
    school: "충북대학교",
    professor: "변가영",
    img: "https://picsum.photos/seed/lab27/400/300",
  },
  {
    name: "데이터베이스 연구실",
    school: "경북대학교",
    professor: "설우진",
    img: "https://picsum.photos/seed/lab28/400/300",
  },
  {
    name: "컴퓨터 그래픽스 연구실",
    school: "경상대학교",
    professor: "도하은",
    img: "https://picsum.photos/seed/lab29/400/300",
  },
  {
    name: "정보 검색 연구실",
    school: "제주대학교",
    professor: "채민혁",
    img: "https://picsum.photos/seed/lab30/400/300",
  },
];

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <PageTitle str="연구실 둘러보기" />
        <PageDescription str="LAB SPACE에 등록된 공개 연구실을 둘러볼 수 있습니다." />
      </div>
      <div className=" rounded-(--rounded-md) grid grid-cols-5 gap-x-6 gap-y-8 ">
        {labMockData.map((v, i) => (
          <LabCard
            key={i}
            name={v.name}
            school={v.school}
            professor={v.professor}
            img={v.img}
          />
        ))}
      </div>
    </>
  );
};

export default page;

interface LabCardProps {
  name: string;
  school: string;
  professor: string;
  img?: string;
}

const LabCard = ({ name, school, professor, img }: LabCardProps) => {
  return (
    <div className="flex flex-col gap-4 p-3 border border-(--border) rounded-(--rounded-md) bg-(--surface) cursor-pointer hover:border-(--primary) hover:bg-(--hover) hover:shadow-md">
      <div className="relative w-full h-32 rounded-md overflow-hidden">
        {img ? (
          <Image
            src={img}
            alt={`${name} 연구실`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gray-200" />
        )}
      </div>
      <div>
        <CardTitle str={name} />
        <div className="h-0.25 w-full bg-(--border) my-2" />
        <div className="space-y-2">
          <CardIconText icon="noto:school" str={school} />
          <CardIconText icon="noto:graduation-cap" str={`${professor} 교수`} />
        </div>
      </div>
    </div>
  );
};
