import ContentsLayout from "@/components/layout/contents-layout";
import { ScrollableLayout } from "@/components/ui/scroll-top";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex">
      <ScrollableLayout>
        <ContentsLayout>{children}</ContentsLayout>
      </ScrollableLayout>
    </div>
  );
}
