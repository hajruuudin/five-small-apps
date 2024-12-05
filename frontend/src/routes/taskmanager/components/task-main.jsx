import { Outlet } from "react-router-dom";

export default function Main({isOpen}){

    return(
    <main className={`grow flex flex-col justify-start pt-24 pb-8 items-center h-screen below-md${isOpen ? ":opacity-25" : ":opacity-100"} transition-all`}>
        <Outlet/>
    </main>
    )
}