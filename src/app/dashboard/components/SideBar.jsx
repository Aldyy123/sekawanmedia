"use client"
import React from 'react';
import Link from 'next/link';
import { AiFillPieChart, AiTwotoneSetting } from 'react-icons/ai';
import { sideNav } from '@/data/nav';
import { MdBadge } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const Sidebar = () => {
    const router = useRouter()
    const [user, setUser] = useState(null)
    const url = usePathname()

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (!user) {
            router.push('/login')
            return
        }
        setUser(JSON.parse(user))
    }, [router])


    return (
        <nav className="bg-gray-800 w-[20rem] min-h-screen py-4">
            <ul className="space-y-2 mt-16">
                {sideNav.map((nav, index) => {

                    if (nav.name !== 'Ticket' && user?.role === 'user') return

                    return (
                        (
                            <li key={index} className={`${url === nav.path && 'active-nav bg-gray-500 text-gray-50'} text-gray-400  relative hover:bg-gray-500 hover:text-gray-50`}>
                                <Link className="ml-5 flex items-center hover:text-gray-50 p-2 py-3 gap-2" href={nav.path}>
                                    {nav.icon}
                                    <span>{nav.name}</span>
                                </Link>
                            </li>
                        )
                    )
                })}

                <hr className="border-gray-600" />

                {user?.role === 'admin' && (
                    <>
                        <li className="relative hover:bg-gray-500 hover:text-gray-50">
                            <Link className="ml-5 text-gray-400 flex items-center hover:text-gray-50 p-2 py-3 gap-2" href={'/'}>
                                <AiTwotoneSetting size={22} />
                                <span>Settings</span>
                            </Link>
                        </li>

                        <li className="relative hover:bg-gray-500 hover:text-gray-50">
                            <Link className="ml-5 text-gray-400 flex items-center hover:text-gray-50 p-2 py-3 gap-2" href={'/'}>
                                <MdBadge size={22} />
                                <span>Subscriptions</span>
                            </Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Sidebar;
