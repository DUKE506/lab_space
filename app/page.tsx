import { Time } from "@/components/features/theme/time";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center h-full px-12 relative">
      <Time />
      <LoginButton />
      <MainTitle />
      <div className="absolute bottom-60 right-60">
        <Description desc="Build faster. Build better." />
        <Description desc="A living boilerplate built from real projects," />
        <Description desc="evolving for speed, consistency, and stability." />
      </div>
    </div>
  );
}

const MainTitle = () => {
  return <div className="text-7xl">LAB SPACE</div>;
};

const Description = ({ desc }: { desc: string }) => {
  return <p className="whitespace-pre-wrap text-2xl">{desc}</p>;
};

const LoginButton = () => {
  return (
    <Link href={"/signin"}>
      <div className="flex items-center gap-2 absolute right-10 top-30 group cursor-pointer">
        <span className="font-bold group-hover:text-(--primary)">AUTH</span>
        <ArrowRightIcon className="group-hover:text-(--primary)" />
      </div>
    </Link>
  );
};
