import Image from "next/image";
import { Inter } from "next/font/google";
import Notice from "@/components/table";
import { NoticeBoard } from "@/components/NoticeBoard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-white w-full h-screen">
 <Notice/>
 <NoticeBoard/>




 </div>

  );
}
