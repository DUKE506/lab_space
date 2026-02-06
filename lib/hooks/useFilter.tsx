import { usePathname, useSearchParams } from "next/navigation";

import React from "react";

interface UseFilterProps {
  label: string;
}

const useFilter = ({ label }: UseFilterProps) => {
  const pathname = usePathname();
  const params = useSearchParams();

  return {
    pathname: pathname,
    targetQuerystring: params.get(label),
    querystring: params.toString(),
  };
};

export default useFilter;
