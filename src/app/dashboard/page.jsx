"use client"
import Link from "next/link";
import { Chart } from "./components/Chart";
import { SiAddthis } from "react-icons/si";
import { useTranslation } from "react-i18next";

export default function Page() {
    const { t } = useTranslation();

    return (
        <>
            <div className="container mx-auto">
                <div className="w-full grid grid-cols-4 gap-5">
                    <div className="flex items-center bg-white justify-center dark:bg-gray-800 py-10 group hover:border-blue-500 hover:border flex-col gap-2 rounded-md w-full">
                        <h4 className="text-xl text-gray-600 dark:text-gray-200 group-hover:dark:text-blue-400 font-semibold">{t('unresolved')}</h4>
                        <span className="group-hover:dark:text-blue-400 dark:text-gray-500 text-gray-950 text-3xl font-bold">60</span>
                    </div>
                    <div className="flex items-center bg-white justify-center dark:bg-gray-800 py-10 group hover:border-blue-500 hover:border flex-col gap-2 rounded-md w-full">
                        <h4 className="text-xl text-gray-600 dark:text-gray-200 group-hover:dark:text-blue-400 font-semibold">{t('overdue')}</h4>
                        <span className="group-hover:dark:text-blue-400 dark:text-gray-500 text-gray-950 text-3xl font-bold">60</span>
                    </div>
                    <div className="flex items-center bg-white justify-center dark:bg-gray-800 py-10 group hover:border-blue-500 hover:border flex-col gap-2 rounded-md w-full">
                        <h4 className="text-xl text-gray-600 dark:text-gray-200 group-hover:dark:text-blue-400 font-semibold">{t('open')}</h4>
                        <span className="group-hover:dark:text-blue-400 dark:text-gray-500 text-gray-950 text-3xl font-bold">60</span>
                    </div>
                    <div className="flex items-center bg-white justify-center dark:bg-gray-800 py-10 group hover:border-blue-500 hover:border flex-col gap-2 rounded-md w-full">
                        <h4 className="text-xl text-gray-600 dark:text-gray-200 group-hover:dark:text-blue-400 font-semibold">{t('onHold')}</h4>
                        <span className="group-hover:dark:text-blue-400 dark:text-gray-500 text-gray-950 text-3xl font-bold">60</span>
                    </div>
                </div>

                <div className="rounded grid grid-cols-[1fr_20rem] w-full shadow dark:bg-gray-800 bg-white border-gray-700 dark:border-gray-200 mt-10">
                    <div className="w-full p-7">
                        <div>
                            <h2 className="font-semibold text-lg text-gray-950 dark:text-gray-200">{t('today trends')}</h2>
                            <p className="dark:text-gray-400 text-gray-400">as of 25 May 2019, 09:41 PM</p>
                        </div>
                        <div className="w-full">
                            <Chart />
                        </div>
                    </div>
                    <div className="w-full h-fit grid">
                        <div className="border dark:border-gray-500 border-gray-200 text-center h-32 flex flex-col items-center justify-center">
                            <h4 className="text-xl dark:text-gray-200 text-gray-400 group-hover:dark:text-blue-400 font-semibold">{t('unresolved')}</h4>
                            <span className="group-hover:dark:text-blue-400 text-3xl text-gray-900 dark:text-gray-400 font-bold">446</span>
                        </div>
                        <div className="border dark:border-gray-500 border-gray-200 text-center h-32 flex flex-col items-center justify-center">
                            <h4 className="text-xl dark:text-gray-200 text-gray-400 group-hover:dark:text-blue-400 font-semibold">{t('received')}</h4>
                            <span className="group-hover:dark:text-blue-400 text-3xl text-gray-900 dark:text-gray-400 font-bold">442</span>
                        </div>
                        <div className="border dark:border-gray-500 border-gray-200 text-center h-32 flex flex-col items-center justify-center">
                            <h4 className="text-xl dark:text-gray-200 text-gray-400 group-hover:dark:text-blue-400 font-semibold">{t('avg response first')}</h4>
                            <span className="group-hover:dark:text-blue-400 text-3xl text-gray-900 dark:text-gray-400 font-bold">33m</span>
                        </div>
                        <div className="border dark:border-gray-500 border-gray-200 text-center h-32 flex flex-col items-center justify-center">
                            <h4 className="text-xl dark:text-gray-200 text-gray-400 group-hover:dark:text-blue-400 font-semibold">{t('avg response time')}</h4>
                            <span className="group-hover:dark:text-blue-400 text-3xl text-gray-900 dark:text-gray-400 font-bold">3h 8m</span>
                        </div>
                        <div className="border dark:border-gray-500 border-gray-200 text-center h-32 flex flex-col items-center justify-center">
                            <h4 className="text-xl dark:text-gray-200 text-gray-400 group-hover:dark:text-blue-400 font-semibold">{t('resolusi')}</h4>
                            <span className="group-hover:dark:text-blue-400 text-3xl text-gray-900 dark:text-gray-400 font-bold">94%</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 mt-10 gap-7">
                    <div className="rounded-md bg-white border dark:bg-gray-800 dark:border-gray-600 border-gray-300 py-3 px-5">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-gray-900 dark:text-gray-300 text-xl font-semibold">{t('unresolved tickets')}</h2>
                                <p>
                                    <span className="text-gray-400 dark:text-gray-400">Group: </span>
                                    <span className="text-gray-500 dark:text-gray-300 font-semibold">Support</span>
                                </p>
                            </div>
                            <div>
                                <Link href="/" className="dark:text-blue-400 text-blue-600">
                                    View Details
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="relative flex justify-between py-4 border-b dark:border-gray-600 border-gray-300">
                                <h3 className="text-lg text-gray-700 dark:text-gray-300">{t('waiting on feature request')}</h3>
                                <p className="text-gray-700 dark:text-gray-400">4444</p>
                            </div>
                            <div className="relative flex justify-between py-4 border-b dark:border-gray-600 border-gray-300">
                                <h3 className="text-lg text-gray-700 dark:text-gray-300">{t('awaiting customer response')}</h3>
                                <p className="text-gray-700 dark:text-gray-400">4444</p>
                            </div>
                            <div className="relative flex justify-between py-4 border-b dark:border-gray-600 border-gray-300">
                                <h3 className="text-lg text-gray-700 dark:text-gray-300">{t('awaiting developer fix')}</h3>
                                <p className="text-gray-700 dark:text-gray-400">4444</p>
                            </div>
                            <div className="relative flex justify-between py-4 border-b dark:border-gray-600 border-gray-300">
                                <h3 className="text-lg text-gray-700 dark:text-gray-300">{t('pending')}</h3>
                                <p className="text-gray-700 dark:text-gray-400">4444</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md bg-white border dark:bg-gray-800 dark:border-gray-600 border-gray-300 py-3 px-5">
                        <div className="flex justify-between items-center">
                            <div>
                                <h2 className="text-gray-900 dark:text-gray-300 text-xl font-semibold">{t('tasks')}</h2>
                                <p className="text-gray-400 dark:text-gray-400">
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
                            <div className="relative flex justify-between py-4 border-b dark:border-gray-600 border-gray-300">
                                <input type="text" className="bg-transparent text-gray-950 dark:text-gray-50 outline-none border-none focus:outline-none" placeholder="Create new task" />
                                <button className="appearance-none outline-none border-none">
                                    <SiAddthis size={20} />
                                </button>
                            </div>
                            <div className="relative flex justify-between py-4 border-b dark:border-gray-600 border-gray-300">
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
                            <div className="relative flex justify-between py-4 border-b dark:border-gray-600 border-gray-300">
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
                            <div className="relative flex justify-between py-4 border-b dark:border-gray-600 border-gray-300">
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