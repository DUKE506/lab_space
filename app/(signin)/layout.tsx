import ContentsLayout from "@/components/layout/contents-layout";
import { ScrollableLayout } from "@/components/ui/scroll-top";
import AppBar from "@/components/ui/side-bar/app-bar";
import SideBar from "@/components/ui/side-bar/side-bar";
import TopNav from "@/components/ui/top-nav/top-nav";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-full flex">
      <AppBar />
      {children}
      {/* <ScrollableLayout>
        <TopNav />
        
        <ContentsLayout></ContentsLayout>
      </ScrollableLayout> */}
    </div>
  );
}
