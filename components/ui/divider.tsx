import React from "react";

const Divider = ({ className }: { className?: string }) => {
  return <div className={`h-[1px] bg-(--border) ${className}`} />;
};

export default Divider;
