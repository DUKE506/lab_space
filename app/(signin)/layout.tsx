import { DarkModeButton } from "@/components/features/theme/darkmode-button";
import { ProfileBox } from "@/components/features/user/profile-box";
import { SessionProvider } from "next-auth/react";

export default function SignInLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <div className="h-full px-12 relative">
        <div className="flex pt-6 justify-end">
          <ProfileBox />
        </div>

        {children}
      </div>
    </SessionProvider>
  );
}
