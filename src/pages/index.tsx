import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Table from "@/components/table";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
 <>
 <Navbar />
 <Table />
 </>
  );
}
