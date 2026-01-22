import ContentsLayout from "@/components/layout/contents-layout";
import { ScrollableLayout } from "@/components/ui/scroll-top";
import SideBar from "@/components/ui/side-bar/side-bar";
import TopNav from "@/components/ui/top-nav/top-nav";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex">
      <SideBar />
      <ScrollableLayout>
        <TopNav />
        <ContentsLayout>{children}</ContentsLayout>
      </ScrollableLayout>
    </div>
  );
}
