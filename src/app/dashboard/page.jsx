import Link from "next/link";
import { Chart } from "./components/Chart";
import { SiAddthis } from "react-icons/si";

export default function Page() {
    return (
        <>
            <div className="container mx-auto">
                <div className="w-full grid grid-cols-4 gap-5">
                    <div className="flex items-center justify-center dark:bg-gray-800 py-10 group hover:border-blue-500 hover:border flex-col gap-2 rounded-md w-full">
                        <h4 className="text-xl text-gray-200 group-hover:dark:text-blue-400 font-semibold">Unresolved</h4>
                        <span className="group-hover:dark:text-blue-400 text-3xl font-bold">60</span>
                    </div>
                    <div className="flex items-center justify-center dark:bg-gray-800 py-10 group hover:border-blue-500 hover:border flex-col gap-2 rounded-md w-full">
                        <h4 className="text-xl text-gray-200 group-hover:dark:text-blue-400 font-semibold">Overdue</h4>
                        <span className="group-hover:dark:text-blue-400 text-3xl font-bold">60</span>
                    </div>
                    <div className="flex items-center justify-center dark:bg-gray-800 py-10 group hover:border-blue-500 hover:border flex-col gap-2 rounded-md w-full">
                        <h4 className="text-xl text-gray-200 group-hover:dark:text-blue-400 font-semibold">Open</h4>
                        <span className="group-hover:dark:text-blue-400 text-3xl font-bold">60</span>
                    </div>
                    <div className="flex items-center justify-center dark:bg-gray-800 py-10 group hover:border-blue-500 hover:border flex-col gap-2 rounded-md w-full">
                        <h4 className="text-xl text-gray-200 group-hover:dark:text-blue-400 font-semibold">On Hold</h4>
                        <span className="group-hover:dark:text-blue-400 text-3xl font-bold">60</span>
                    </div>
                </div>

                <div className="rounded grid grid-cols-[1fr_20rem] w-full shadow dark:bg-gray-800 bg-gray-400 mt-10">
                    <div className="w-full p-7">
                        <div>
                            <h2 className="font-semibold text-lg">Today Trens</h2>
                            <p className="dark:text-gray-400 text-gray-400">as of 25 May 2019, 09:41 PM</p>
                        </div>
                        <div className="w-full">
                            <Chart />
                        </div>
                    </div>
                    <div className="w-full h-fit grid">
                        <div className="border dark:border-gray-500 border-gray-300 text-center h-32 flex flex-col items-center justify-center">
                            <h4 className="text-xl text-gray-200 group-hover:dark:text-blue-400 font-semibold">Unresolved</h4>
                            <span className="group-hover:dark:text-blue-400 text-3xl font-bold">446</span>
                        </div>
                        <div className="border dark:border-gray-500 border-gray-300 text-center h-32 flex flex-col items-center justify-center">
                            <h4 className="text-xl text-gray-200 group-hover:dark:text-blue-400 font-semibold">Received</h4>
                            <span className="group-hover:dark:text-blue-400 text-3xl font-bold">442</span>
                        </div>
                        <div className="border dark:border-gray-500 border-gray-300 text-center h-32 flex flex-col items-center justify-center">
                            <h4 className="text-xl text-gray-200 group-hover:dark:text-blue-400 font-semibold">Average first response time</h4>
                            <span className="group-hover:dark:text-blue-400 text-3xl font-bold">33m</span>
                        </div>
                        <div className="border dark:border-gray-500 border-gray-300 text-center h-32 flex flex-col items-center justify-center">
                            <h4 className="text-xl text-gray-200 group-hover:dark:text-blue-400 font-semibold">Average response time</h4>
                            <span className="group-hover:dark:text-blue-400 text-3xl font-bold">3h 8m</span>
                        </div>
                        <div className="border dark:border-gray-500 border-gray-300 text-center h-32 flex flex-col items-center justify-center">
                            <h4 className="text-xl text-gray-200 group-hover:dark:text-blue-400 font-semibold">Resolution within SLA</h4>
                            <span className="group-hover:dark:text-blue-400 text-3xl font-bold">94%</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 mt-10 gap-7">
                    <div className="rounded-md bg-gray-300 border dark:bg-gray-800 dark:border-gray-300 border-gray-600 py-3 px-5">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-gray-900 dark:text-gray-300 text-xl font-semibold">Unresolved tickets</h2>
                                <p>
                                    <span className="text-gray-200 dark:text-gray-400">Group: </span>
                                    <span className="text-gray-200 dark:text-gray-300 font-semibold">Support</span>
                                </p>
                            </div>
                            <div>
                                <Link href="/" className="dark:text-blue-400 text-blue-600">
                                    View Details
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="relative flex justify-between after:bottom-0 py-4 after:absolute after:w-full after:h-0.5 after:bg-gray-200">
                                <h3 className="text-lg text-gray-700 dark:text-gray-300">Waiting on Feature Request</h3>
                                <p className="text-gray-700 dark:text-gray-400">4444</p>
                            </div>
                            <div className="relative flex justify-between after:bottom-0 py-4 after:absolute after:w-full after:h-0.5 after:bg-gray-200">
                                <h3 className="text-lg text-gray-700 dark:text-gray-300">Waiting on Feature Request</h3>
                                <p className="text-gray-700 dark:text-gray-400">4444</p>
                            </div>
                            <div className="relative flex justify-between after:bottom-0 py-4 after:absolute after:w-full after:h-0.5 after:bg-gray-200">
                                <h3 className="text-lg text-gray-700 dark:text-gray-300">Waiting on Feature Request</h3>
                                <p className="text-gray-700 dark:text-gray-400">4444</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md bg-gray-300 border dark:bg-gray-800 dark:border-gray-300 border-gray-600 py-3 px-5">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-gray-900 dark:text-gray-300 text-xl font-semibold">Tasks</h2>
                                <p className="text-gray-200 dark:text-gray-400">
                                    Today
                                </p>
                            </div>
                            <div>
                                <Link href="/" className="dark:text-blue-400 text-blue-600">
                                    View All
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="relative flex justify-between after:bottom-0 py-4 after:absolute after:w-full after:h-0.5 after:bg-gray-200">
                                <input type="text" className="bg-transparent outline-none border-none focus:outline-none" placeholder="Create new task" />
                                <button className="appearance-none outline-none border-none">
                                    <SiAddthis size={20} />
                                </button>
                            </div>
                            <div className="relative flex justify-between after:bottom-0 py-4 after:absolute after:w-full after:h-0.5 after:bg-gray-200">
                                <div className="flex items-center">
                                    <input
                                        id="default-checkbox"
                                        type="checkbox"
                                        defaultValue=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="default-checkbox"
                                        className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Finish ticket update
                                    </label>
                                </div>
                                <p className="bg-yellow-500 text-gray-50 px-3 py-1 uppercase rounded-md">Urgent</p>
                            </div>
                            <div className="relative flex justify-between after:bottom-0 py-4 after:absolute after:w-full after:h-0.5 after:bg-gray-200">
                                <div className="flex items-center">
                                    <input
                                        id="default-checkbox"
                                        type="checkbox"
                                        defaultValue=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="default-checkbox"
                                        className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Create new ticket example
                                    </label>
                                </div>
                                <p className="bg-green-500 text-gray-50 px-3 py-1 uppercase rounded-md">New</p>
                            </div>
                            <div className="relative flex justify-between after:bottom-0 py-4 after:absolute after:w-full after:h-0.5 after:bg-gray-200">
                                <div className="flex items-center">
                                    <input
                                        id="default-checkbox"
                                        type="checkbox"
                                        defaultValue=""
                                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <label
                                        htmlFor="default-checkbox"
                                        className="ml-2 text-lg font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Update ticket report
                                    </label>
                                </div>
                                <p className="bg-gray-500 text-gray-50 px-3 py-1 uppercase rounded-md">Default</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}