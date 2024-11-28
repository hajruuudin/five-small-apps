import { useLoaderData } from "react-router-dom";
import Main from "./components/task-main";
import Sidebar from "./components/task-sidebar";

export async function loader(){
    const lists = await JSON.parse(localStorage.getItem("taskManager"));
    return { lists };
}

export default function TaskManager(){
    const { lists } = useLoaderData();    

    return(
        <main className="w-full h-full flex flex-row justify-center items-center montserrat-regular">
            <Sidebar allLists = {lists}/>
            <Main/>
        </main>
    )
}