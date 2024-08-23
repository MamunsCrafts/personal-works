import { useGetDataList } from "@/hooks/useGetDataList"
import { useEffect, useState } from "react"
import formatDate from "@/utils/date-formater"
import { RotatingLines } from "react-loader-spinner"
export default function Notice() {


  const { getDataList, loading, error } = useGetDataList()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const list: any = await getDataList(0, 10);
      console.log("list=", list);
      setData(list);
    };

    fetchData();
  }, []);

  return <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-center  h-60 flex flex-wrap justify-center items-center">
    <div >
      <img
        src="/announcement.png"
        alt="logo"
        className="h-44 mx-auto select-none"></img>
    </div>
    <div className="w-2/12 text-center px-10 text-lg font-bold select-none">
      এখানে ফ্রি মুভি, টেক কনটেন্ট, এবং ফ্রি প্রিমিয়াম কোর্স পাওয়া যাবে।
      শিখুন, উপভোগ করুন, এবং বন্ধুদের সাথে শেয়ার করুন!
    </div>
  </div>

}