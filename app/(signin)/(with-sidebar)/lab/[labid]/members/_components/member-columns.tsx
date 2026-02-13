import { LabMemberDto } from "@/types/lab/member/lab-member";
import { LabRoleLabel } from "@/types/lab/member/role";
import { createColumnHelper } from "@tanstack/react-table";
import { UserIcon } from "lucide-react";

const columnHelper = createColumnHelper<LabMemberDto>();

export const labMemberColumns = [
  //AccessColumns
  columnHelper.accessor((row) => row.name, {
    id: "name",
    cell: (info) => {
      const name = info.row.original.name;
      const profile = info.row.original.profile;
      return (
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center w-10 aspect-square bg-(--background) border border-(--border)">
            <UserIcon className="text-(--text-secondary)" strokeWidth={1.5} />
          </div>

          <span>{name}</span>
        </div>
      );
    },
    header: () => <span>이름</span>,
  }),
  columnHelper.accessor((row) => row.schoolId, {
    id: "schollId",
    cell: (info) => info.getValue(),
    header: () => <span>학번</span>,
  }),
  columnHelper.accessor((row) => row.phone, {
    id: "phone",
    cell: (info) => info.getValue(),
    header: () => <span>전화번호</span>,
  }),
  columnHelper.accessor((row) => row.email, {
    id: "email",
    cell: (info) => info.getValue(),
    header: () => <span>이메일</span>,
  }),
  columnHelper.accessor((row) => row.labRole, {
    id: "labRole",
    cell: (info) => <span>{LabRoleLabel[info.getValue()]}</span>,
    header: () => <span>직책</span>,
  }),

  //Display columns

  //Grouping Column
  // columnHelper.group({
  //     header:'이름',
  //     footer:props => props.column.id,
  //     columns:[
  //         //Access Column
  //         columnHelper.accessor('name',{
  //             cell: info => info.getValue(),

  //         })
  //     ]
  // })
];

export const labMembers: LabMemberDto[] = [
  {
    id: 1,
    profile: "/profiles/user01.png",
    name: "김도윤",
    phone: "010-1234-5678",
    email: "doyun.kim@univ.ac.kr",
    schoolId: 20181234,
    labRole: "PROFESSOR",
  },
  {
    id: 2,
    profile: "/profiles/user02.png",
    name: "이서준",
    phone: "010-2345-6789",
    email: "seojun.lee@univ.ac.kr",
    schoolId: 20195566,
    labRole: "MANAGER",
  },
  {
    id: 3,
    profile: "/profiles/user03.png",
    name: "박민준",
    phone: "010-3456-7890",
    email: "minjun.park@univ.ac.kr",
    schoolId: 20201122,
    labRole: "GRADUATE_RESEARCHER",
  },
  {
    id: 4,
    profile: "/profiles/user04.png",
    name: "최지우",
    phone: "010-4567-8901",
    email: "jiwoo.choi@univ.ac.kr",
    schoolId: 20213344,
    labRole: "UNDERGRADUATE_RESEARCHER",
  },
  {
    id: 5,
    profile: "/profiles/user05.png",
    name: "정하준",
    phone: "010-5678-9012",
    email: "hajun.jung@univ.ac.kr",
    schoolId: 20179988,
    labRole: "GRADUATE_RESEARCHER",
  },
  {
    id: 6,
    profile: "/profiles/user06.png",
    name: "강서윤",
    phone: "010-6789-0123",
    email: "seoyun.kang@univ.ac.kr",
    schoolId: 20227788,
    labRole: "UNDERGRADUATE_RESEARCHER",
  },
  {
    id: 7,
    profile: "/profiles/user07.png",
    name: "조현우",
    phone: "010-7890-1234",
    email: "hyunwoo.cho@univ.ac.kr",
    schoolId: 20184433,
    labRole: "GRADUATE_RESEARCHER",
  },
  {
    id: 8,
    profile: "/profiles/user08.png",
    name: "윤서현",
    phone: "010-8901-2345",
    email: "seohyun.yoon@univ.ac.kr",
    schoolId: 20231100,
    labRole: "UNDERGRADUATE_RESEARCHER",
  },
  {
    id: 9,
    profile: "/profiles/user09.png",
    name: "장준서",
    phone: "010-9012-3456",
    email: "junseo.jang@univ.ac.kr",
    schoolId: 20192299,
    labRole: "GRADUATE_RESEARCHER",
  },
  {
    id: 10,
    profile: "/profiles/user10.png",
    name: "임다은",
    phone: "010-0123-4567",
    email: "daeun.lim@univ.ac.kr",
    schoolId: 20204455,
    labRole: "MANAGER",
  },
  {
    id: 11,
    profile: "/profiles/user11.png",
    name: "한은우",
    phone: "010-1111-2222",
    email: "eunwoo.han@univ.ac.kr",
    schoolId: 20216677,
    labRole: "UNDERGRADUATE_RESEARCHER",
  },
  {
    id: 12,
    profile: "/profiles/user12.png",
    name: "오지민",
    phone: "010-2222-3333",
    email: "jimin.oh@univ.ac.kr",
    schoolId: 20173322,
    labRole: "GRADUATE_RESEARCHER",
  },
  {
    id: 13,
    profile: "/profiles/user13.png",
    name: "서주원",
    phone: "010-3333-4444",
    email: "juwon.seo@univ.ac.kr",
    schoolId: 20188899,
    labRole: "GRADUATE_RESEARCHER",
  },
  {
    id: 14,
    profile: "/profiles/user14.png",
    name: "신유나",
    phone: "010-4444-5555",
    email: "yuna.shin@univ.ac.kr",
    schoolId: 20221144,
    labRole: "UNDERGRADUATE_RESEARCHER",
  },
  {
    id: 15,
    profile: "/profiles/user15.png",
    name: "권우진",
    phone: "010-5555-6666",
    email: "woojin.kwon@univ.ac.kr",
    schoolId: 20195544,
    labRole: "GRADUATE_RESEARCHER",
  },
  {
    id: 16,
    profile: "/profiles/user16.png",
    name: "황민지",
    phone: "010-6666-7777",
    email: "minji.hwang@univ.ac.kr",
    schoolId: 20207711,
    labRole: "UNDERGRADUATE_RESEARCHER",
  },
  {
    id: 17,
    profile: "/profiles/user17.png",
    name: "안태양",
    phone: "010-7777-8888",
    email: "taeyang.ahn@univ.ac.kr",
    schoolId: 20212233,
    labRole: "GRADUATE_RESEARCHER",
  },
  {
    id: 18,
    profile: "/profiles/user18.png",
    name: "송예린",
    phone: "010-8888-9999",
    email: "yerin.song@univ.ac.kr",
    schoolId: 20235566,
    labRole: "UNDERGRADUATE_RESEARCHER",
  },
  {
    id: 19,
    profile: "/profiles/user19.png",
    name: "전건우",
    phone: "010-9999-0000",
    email: "geonwoo.jeon@univ.ac.kr",
    schoolId: 20164455,
    labRole: "GRADUATE_RESEARCHER",
  },
  {
    id: 20,
    profile: "/profiles/user20.png",
    name: "홍수아",
    phone: "010-1010-2020",
    email: "sua.hong@univ.ac.kr",
    schoolId: 20223399,
    labRole: "UNDERGRADUATE_RESEARCHER",
  },
  {
    id: 21,
    profile: "/profiles/user21.png",
    name: "유재현",
    phone: "010-2020-3030",
    email: "jaehyun.yoo@univ.ac.kr",
    schoolId: 20187766,
    labRole: "GRADUATE_RESEARCHER",
  },
  {
    id: 22,
    profile: "/profiles/user22.png",
    name: "고하은",
    phone: "010-3030-4040",
    email: "haeun.ko@univ.ac.kr",
    schoolId: 20219900,
    labRole: "UNDERGRADUATE_RESEARCHER",
  },
  {
    id: 23,
    profile: "/profiles/user23.png",
    name: "문승우",
    phone: "010-4040-5050",
    email: "seungwoo.moon@univ.ac.kr",
    schoolId: 20191188,
    labRole: "GRADUATE_RESEARCHER",
  },
  {
    id: 24,
    profile: "/profiles/user24.png",
    name: "양지우",
    phone: "010-5050-6060",
    email: "jiwoo.yang@univ.ac.kr",
    schoolId: 20203377,
    labRole: "GRADUATE_RESEARCHER",
  },
  {
    id: 25,
    profile: "/profiles/user25.png",
    name: "백도현",
    phone: "010-6060-7070",
    email: "dohyun.baek@univ.ac.kr",
    schoolId: 20176655,
    labRole: "PROFESSOR",
  },
  {
    id: 26,
    profile: "/profiles/user26.png",
    name: "남윤아",
    phone: "010-7070-8080",
    email: "yuna.nam@univ.ac.kr",
    schoolId: 20228844,
    labRole: "UNDERGRADUATE_RESEARCHER",
  },
  {
    id: 27,
    profile: "/profiles/user27.png",
    name: "심준호",
    phone: "010-8080-9090",
    email: "junho.shim@univ.ac.kr",
    schoolId: 20185522,
    labRole: "GRADUATE_RESEARCHER",
  },
  {
    id: 28,
    profile: "/profiles/user28.png",
    name: "노서연",
    phone: "010-9090-0101",
    email: "seoyeon.roh@univ.ac.kr",
    schoolId: 20232211,
    labRole: "UNDERGRADUATE_RESEARCHER",
  },
  {
    id: 29,
    profile: "/profiles/user29.png",
    name: "하진우",
    phone: "010-1212-3434",
    email: "jinwoo.ha@univ.ac.kr",
    schoolId: 20208877,
    labRole: "GRADUATE_RESEARCHER",
  },
  {
    id: 30,
    profile: "/profiles/user30.png",
    name: "곽민경",
    phone: "010-3434-5656",
    email: "minkyung.kwak@univ.ac.kr",
    schoolId: 20214411,
    labRole: "MANAGER",
  },
];
