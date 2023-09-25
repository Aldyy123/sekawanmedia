import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { IoNotificationsSharp } from "react-icons/io5";

export default function Navbar() {
    return (
        <>
            <div className="flex items-center mt-3 justify-between px-5">
                <h3 className="text-2xl text-gray-950 font-semibold dark:text-gray-50">Overview</h3>
                <div className="flex gap-6 items-center">
                    <div className="flex items-center gap-5">
                        <AiOutlineSearch size={25} />
                        <IoNotificationsSharp size={25} />
                    </div>
                    <div className="h-10 w-0.5 bg-gray-400"></div>
                    <div className="flex gap-4 items-center">
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