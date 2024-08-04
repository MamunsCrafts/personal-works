import { useGetDataList } from "@/hooks/useGetDataList"
import { useEffect, useState } from "react"
import  formatDate  from "@/utils/date-formater"
import { RotatingLines } from "react-loader-spinner"
export default function Table() {


  const { getDataList,loading,error } = useGetDataList()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const list: any = await getDataList(0, 10);
      console.log("list=", list);
      setData(list);
    };

    fetchData();
  }, []);
  
  return <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    {loading &&  <div className="flex items-center justify-center h-screen bg-slate-900"><RotatingLines
      visible={true}
      width="96"
      strokeWidth="5"
      animationDuration="0.75"
      ariaLabel="rotating-lines-loading"
    /></div>}
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr  >
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
              />
              <label htmlFor="checkbox-all-search" className="sr-only">
                checkbox
              </label>
            </div>
          </th>
          <th scope="col" className="px-6 py-3">
            Company
          </th>
          <th scope="col" className="px-6 py-3">
            Career
          </th>
          <th scope="col" className="px-6 py-3">
            Apply
          </th>
          <th scope="col" className="px-6 py-3">
            Applying Date
          </th>
          <th scope="col" className="px-6 py-3">
            Available
          </th>
          <th scope="col" className="px-6 py-3">
            Dead Line
          </th>
          <th scope="col" className="px-6 py-3">
            Salary
          </th>
          <th scope="col" className="px-6 py-3">
            Stack
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>
      <tbody>

        {
          data?.map((doc: any) => (

            <tr  key={doc?._id} className="bg-white dark:bg-gray-800">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  "
                  />
                  <label htmlFor="checkbox-table-search-2" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4">{
                doc?.company}

              </td>

              <td className="px-6 py-4">
                {doc?.applyLink && (
                  <a href={doc.applyLink} target="_blank"  rel="noopener noreferrer"  className="text-blue-500 hover:underline">
                    {doc?.company}
                  </a>
                )}
              </td>
              <td className="px-6 py-4">

                {doc?.isApply ? <span className="text-green-600">Yes</span> : <span className="text-yellow-400">No</span>}
              </td>
              <td className="px-6 py-4 text-green-600">
                {formatDate(doc?.applyingDate)}

              </td>

              <td className="px-6 py-4">
                {doc?.isAvailable ? <span className="text-green-600">Yes</span> : <span className="text-yellow-400">No</span>}

              </td>

              <td className="px-6 py-4 text-red-400">
                {formatDate(doc?.deadLine)}

              </td>

              <td className="px-6 py-4">
                {doc?.salary}

              </td>
              <td className="px-6 py-4">
                {doc?.stack.join(", ")} 

              </td>

              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600  hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 hover:underline ms-3"
                >
                  Remove
                </a>
              </td>


            </tr>
          ))
        }



      </tbody>
    </table>
  </div>

}