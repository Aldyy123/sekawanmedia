import Sidebar from "./components/SideBar";

export default function Layout({children}) {
    return (
        <>
            <div className="flex">
                <Sidebar />
                <div className="w-full">
                    <main className="p-4">
                        {children}
                    </main>
                </div>
            </div>
        </>
    )
}