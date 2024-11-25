import { Outlet } from "react-router-dom";

export default function Main(){
    return(
    <main className="grow flex flex-col justify-center items-center">
        <Outlet/>
    </main>
    )
}