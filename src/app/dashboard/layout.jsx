import Navbar from "./components/Navbar";
import Sidebar from "./components/SideBar";

export default function Layout({children}) {
    return (
        <>
            <div className="flex w-full bg-white dark:bg-gray-700">
                <Sidebar />
                <div className="w-full">
                    <Navbar />
                    <main className="p-4">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}