"use client"
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";

export default function Layout({ children }) {
    const [isDarkActive, setIsDarkActive] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark') {
            setIsDarkActive(true)
        } else {
            setIsDarkActive(false)
        }
    }, [])

    const setTheme = (theme) => {
        if (theme === true) {
            localStorage.setItem('theme', 'dark')
        } else {
            localStorage.setItem('theme', 'light')
        }
        setIsDarkActive(theme)
    }

    return (
        <>
            <div className={isDarkActive && 'dark'}>
                <div className="flex w-full bg-white dark:bg-gray-700">
                    <Sidebar />
                    <div className="w-full dark:bg-gray-700 bg-gray-100">
                        <Navbar />
                        <main className="p-4 mt-10">
                            {children}
                        </main>
                    </div>
                </div>
                <div className="fixed p-5 bg-gray-300 dark:bg-gray-700 bottom-4 left-10 rounded-lg flex items-center justify-center">
                    <label label="theme" className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="theme" onChange={(e) => setTheme(e.target.checked)} value={isDarkActive} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-500 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600" />
                        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {isDarkActive ? "Light" : "Dark"}
                        </span>
                    </label>
                </div>
            </div>
        </>
    )
}