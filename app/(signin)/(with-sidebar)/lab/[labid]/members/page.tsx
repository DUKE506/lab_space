import SearchFilter from "@/components/ui/filter/search";
import { PageTitle } from "@/components/ui/text";
import React from "react";

const Page = () => {
  return (
    <>
      <PageTitle str="연구원" />
      <Filter />
    </>
  );
};

export default Page;

const Filter = () => {
  return (
    <>
      <SearchFilter />
    </>
  );
};
