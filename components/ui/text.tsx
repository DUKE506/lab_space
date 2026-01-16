import { Icon } from "@iconify/react";

export const PageTitle = ({ str }: { str: string }) => {
  return (
    <span className="text-(--text-primary) text-4xl font-bold">{str}</span>
  );
};

export const PageDescription = ({ str }: { str: string }) => {
  return <span className="text-(--text-secondary) text-lg">{str}</span>;
};

export const CardTitle = ({ str }: { str: string }) => {
  return <span className="text-(--text-primary) font-bold">{str}</span>;
};

export const CardIconText = ({ icon, str }: { icon: string; str: string }) => {
  return (
    <div className="flex items-end gap-2 ">
      <Icon icon={icon} width={18} height={18} />
      <span className="text-xs text-(--text-secondary)">{str}</span>
    </div>
  );
};
