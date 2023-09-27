"use client"
import i18n from "@/utils/translation";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";

export default function Navbar() {
    const { t } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <>
            <div className="flex items-center mt-3 justify-between px-5">
                <h3 className="text-2xl text-gray-950 font-semibold dark:text-gray-50">Overview</h3>
                <div className="flex gap-6 items-center">
                    <div>
                        <select onChange={(e) => changeLanguage(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>{t('language')}</option>
                            <option value="en">English</option>
                            <option value="id">ID</option>
                        </select>

                    </div>
                    <div className="flex items-center gap-5 text-gray-900 dark:text-gray-200">
                        <AiOutlineSearch size={25} />
                        <IoNotificationsSharp size={25} />
                    </div>
                    <div className="h-10 w-0.5 bg-gray-400"></div>
                    <div className="flex gap-4 items-center text-gray-900 dark:text-gray-200">
                        <h2>Jones</h2>
                        <Image
                            src={'https://imgv3.fotor.com/images/gallery/Realistic-Male-Profile-Picture.jpg'}
                            alt="Picture of the author"
                            className="rounded-full border p-1 bg-clip-content"
                            width={50}
                            height={50}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}