import { useGetDataList } from "@/hooks/useGetDataList"
import { useEffect, useState } from "react"

export default function Table() {


  const { getDataList } = useGetDataList()
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const list: any = await getDataList(0, 10);
      console.log("list=", list);
      setData(list);
    };

    fetchData();
  }, []);
  console.log("data", data)
  return <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="p-4">
            <div className="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id="checkbox-table-search-2"
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor="checkbox-table-search-2" className="sr-only">
                    checkbox
                  </label>
                </div>
              </td>
              <td className="px-6 py-4">{
                doc?.title}

              </td>

              <td className="px-6 py-4">
                {doc?.url && (
                  <a href={doc.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                    {doc.url}
                  </a>
                )}
              </td>
              <td className="px-6 py-4">

                No
              </td>
              <td className="px-6 py-4">
                12/12/2024

              </td>

              <td className="px-6 py-4">
                Yes

              </td>

              <td className="px-6 py-4">
                65-75

              </td>

              <td className="px-6 py-4">
                Java Spring Boot

              </td>


              <td className="flex items-center px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
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