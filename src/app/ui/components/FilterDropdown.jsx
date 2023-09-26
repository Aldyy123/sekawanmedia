"use client"
import { useState } from "react"

export default function FilterDropdown({ children, list, type, setData, data,  }) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div className="relative">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                    type="button"
                >
                    {children}
                </button>
                {/* Dropdown menu */}
                <div
                    className={`z-10 ${isOpen ? 'block' : 'hidden'} top-12 -left-12 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
                    style={{
                        position: "absolute",
                    }}
                >
                    <ul
                        className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownRadioButton"
                    >
                        {list.map((item, index) => (
                            <li key={index}>
                                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                    <input
                                        id={`${type}-radio-${index}`}
                                        type="radio"
                                        defaultValue={item.name}
                                        value={item.name}
                                        onChange={(e) => setData(e.target.value)}
                                        checked={data === item.name}
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor={`${type}-radio-${index}`}
                                        className="w-full capitalize ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                                    >
                                        {item.name}
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </>
    )
}