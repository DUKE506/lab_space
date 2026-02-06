"use client";
import useFilter from "@/lib/hooks/useFilter";
import { SearchIcon } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { SearchInput } from "../input";

const SearchFilter = () => {
  const router = useRouter();
  const { pathname, targetQuerystring, querystring } = useFilter({
    label: "search",
  });
  const [search, setSearch] = useState<string>(targetQuerystring ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newParams = new URLSearchParams(querystring);
    if (!search || search.trim() === "") {
      console.log(1);
      newParams.delete("search");
    } else {
      console.log(2);
      newParams.set("search", search);
    }

    router.push(`${pathname}?${newParams}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="">
        <SearchInput
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </>
  );
};

export default SearchFilter;
