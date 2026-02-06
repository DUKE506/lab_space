import { useMemberStore } from "@/store/lab/member/useMemberStore";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const List = () => {
  const { labid } = useParams();
  const { members, getMembers, isLoading } = useMemberStore();

  useEffect(() => {
    if (!labid) return;
    getMembers(labid as string);
  }, [labid]);
  return <div>List</div>;
};

export default List;
