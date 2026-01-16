const LogoIcon = ({
  str,
  size = 9,
  textSize = "xs",
}: {
  str: string;
  size?: number;
  textSize?: string;
}) => {
  const sizeMap: Record<number, string> = {
    6: "w-6 h-6",
    7: "w-7 h-7",
    8: "w-8 h-8",
    9: "w-9 h-9",
    10: "w-10 h-10",
  };

  const textSizeMap: Record<string, string> = {
    xs: "text-xs",
    sm: "text-sm",
    md: "text-md",
    lg: "text-lg",
    xl: "text-xl",
  };

  const selectedSize = sizeMap[size] || "w-9 h-9";

  return (
    <div
      className={`flex items-center justify-center ${selectedSize} rounded-(--rounded-sm) bg-linear-to-l from-(--secondary) to-(--primary) ${textSizeMap} text-white`}
    >
      {str}
    </div>
  );
};

export default LogoIcon;
