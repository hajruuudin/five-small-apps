import { Outlet } from "react-router-dom";
import Main from "./components/task-main";
import Sidebar from "./components/task-sidebar";

export default function TaskManager(){
    return(
        <main className="w-full h-full flex flex-row justify-center items-center montserrat-regular ">
            <Sidebar/>
            <Main/>
        </main>
    )
}