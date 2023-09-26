"use client"
import { useState } from "react"

export default function Dropdown({ children, className, setData, ...rest }) {
    const [openDropdown, setOpenDropdown] = useState(false)

    return (
        <>
            <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:border-none focus:outline-none dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                type="button"
            >
                {children}
            </button>
            {/* Dropdown menu */}
            <div className="relative">
                <div
                    className={`z-10 ${openDropdown ? 'block' : 'hidden'} absolute -left-16 top-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                >
                    <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownMenuIconButton"
                    >
                        <li>
                            <button
                                onClick={() => {
                                    setData("reject")
                                    setOpenDropdown(!openDropdown)
                                }}
                                className="block w-full text-left px-4 py-2 text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                                Reject
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    setData("approved")
                                    setOpenDropdown(!openDropdown)
                                }}
                                className="block w-full text-left px-4 py-2 text-green-400 hover:bg-gray-100 dark:hover:bg-gray-600"
                            >
                                Approved
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}