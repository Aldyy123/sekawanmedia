import { ticketUsers } from "@/data/user";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFilter, FaSortAmountUpAlt } from "react-icons/fa";
import moment from "moment";

export default function TicketsPage() {
  return (
    <div className="rounded-md py-4 dark:bg-gray-800 bg-gray-400">
      <div className="px-10 flex justify-between py-5">
        <h2>ALl Tickets</h2>
        <div className="flex gap-5 items-center">
          <button className="bg-transparent text-lg flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <FaSortAmountUpAlt size={16} />
            <span>Sort</span>
          </button>
          <button className="bg-transparent text-lg flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <FaFilter size={16} />
            <span>Filter</span>
          </button>
        </div>
      </div>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase border-b dark:border-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Ticket Details
                </th>
                <th scope="col" className="px-6 py-3">
                  Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Priority
                </th>
                <th scope="col" className="px-6 py-3">

                </th>
              </tr>
            </thead>
            <tbody>
              {ticketUsers.map(user => (
                <>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      <div className="flex items-center gap-4">
                        <Image src={user.photo} className="rounded-full border-gray-50 w-12 h-12" width={100} height={100} alt={user.name} />
                        <div>
                          <p className="text-gray-900 dark:text-gray-300 font-bold text-base">{user.problem}</p>
                          <p className="text-gray-400 dark:text-gray-600 font-bold text-sm">{user.updated_at}</p>
                        </div>
                      </div>
                    </th>
                    <td className="px-6 py-4">
                      <p className="text-gray-900 dark:text-gray-300 font-bold text-base">{user.name}</p>
                      <p className="text-gray-400 dark:text-gray-600 font-bold text-sm">on {moment(user.created_at).format('D.MM.YYYY')}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-gray-900 dark:text-gray-300 font-bold text-base">{moment(user.created_ticket_at).format('MMM D, YYYY')}</p>
                      <p className="text-gray-400 dark:text-gray-600 font-bold text-sm">{moment(user.created_ticket_at).format('hh:mm A')}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`rounded-md text-gray-50 py-2 px-2 uppercase font-medium ${user.priority === "low" ? "bg-yellow-500" : user.priority === "normal" ? "bg-green-500" : "bg-red-500"
                        }`}>{user.priority}</span>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        href="#"
                        className="font-medium dark:text-gray-400 text-gray-700 hover:underline"
                      >
                        <BsThreeDotsVertical size={20} />
                      </button>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      <div className="flex gap-4 justify-end items-center my-5 px-5">
        <div className="flex gap-2 items-center">
          <p className="text-gray-300 dark:text-gray-500">Rows per page: </p>
          <button>
            10
          </button>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-gray-300 dark:text-gray-500">
            <span>1</span>
            <span> - </span>
            <span>200</span>
            <span> of </span>
            <span>1222</span>
          </p>
          <div>
            <button className="mx-3">
              <span>Previous</span>
            </button>
            <button className="mx-3">
              <span>Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}