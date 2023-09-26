"use client"
import { ticketUsers } from "@/data/user";
import Image from "next/image";
import { FaFilter, FaSortAmountUpAlt } from "react-icons/fa";
import moment from "moment";
import Dropdown from "@/app/ui/components/Dropdown";
import FilterDropdown from "@/app/ui/components/FilterDropdown";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { filter, sort } from "@/data/filter";
import { useState } from "react";

export default function TicketsPage() {
  const [listTickets, setListTickets] = useState(ticketUsers)
  const [sortingTicket, setSortingTicket] = useState(null)
  const [filterTicket, setFilterTicket] = useState(null)

  const handleFilter = (data) => {
    if (data === 'high') {
      const tickets = ticketUsers.filter((item) => item.priority === 'high')
      setListTickets(tickets)
    } else if (data === 'normal') {
      const tickets = ticketUsers.filter((item) => item.priority === 'normal')
      setListTickets(tickets)
    } else if (data === 'low') {
      const tickets = ticketUsers.filter((item) => item.priority === 'low')
      setListTickets(tickets)
    } else {
      setListTickets(ticketUsers)
    }

    setFilterTicket(data)
  }

  const handleSort = (data) => {
    if (data === 'newest') {
      const tickets = listTickets.sort((a, b) => new Date(b.created_ticket_at) - new Date(a.created_ticket_at))
      setListTickets(tickets)
    } else if (data === 'oldest') {
      const tickets = listTickets.sort((a, b) => new Date(a.created_ticket_at) - new Date(b.created_ticket_at))
      setListTickets(tickets)
    } else {
      setListTickets(ticketUsers)
    }

    setSortingTicket(data)
  }

  const changeStatus = (data) => {

  }

  return (
    <div className="rounded-md py-4 dark:bg-gray-800 bg-gray-50">
      <div className="px-10 mr-10 text-gray-800 dark:text-gray-100 flex justify-between py-5">
        <h2>ALl Tickets</h2>
        <div className="flex gap-5 items-center">
          <FilterDropdown list={sort} type={'sort'} setData={handleSort} data={sortingTicket}>
            <FaSortAmountUpAlt size={16} />
            <span>Sort</span>
          </FilterDropdown>
          <FilterDropdown list={filter} type={'filter'} setData={handleFilter} data={filterTicket}>
            <FaFilter size={16} />
            <span>Filter</span>
          </FilterDropdown>
        </div>
      </div>
      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase border-b dark:border-gray-700 text-gray-900 dark:text-gray-100">
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
                  Status
                </th>
                <th scope="col" className="px-6 py-3">

                </th>
              </tr>
            </thead>
            <tbody>
              {listTickets.map(user => (
                <>
                  <tr className="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-900">
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
                      <span className={`rounded-md text-gray-900 dark:text-gray-50 py-2 px-2 uppercase font-medium`}>{user.status}</span>
                    </td>
                    <td className="px-6 py-4">
                      <Dropdown>
                        <svg
                          className="w-5 h-5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 4 15"
                        >
                          <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                      </Dropdown>
                    </td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>

      </div>
      <div className="flex gap-4 justify-end items-center bg-gray-50 dark:bg-gray-800 my-5 px-5">
        <div className="flex gap-2 items-center">
          <p className="text-gray-500 dark:text-gray-500">Rows per page: </p>
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            <option selected>10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className="flex gap-4 items-center">
          <p className="text-gray-500 dark:text-gray-500">
            <span>1</span>
            <span> - </span>
            <span>200</span>
            <span> of </span>
            <span>1222</span>
          </p>
          <div className='text-gray-500'>
            <button className="mx-3">
              <AiOutlineLeft size={16} />
            </button>
            <button className="mx-3">
              <AiOutlineRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}