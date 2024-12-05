import { useLoaderData } from "react-router-dom";
import Main from "./components/task-main";
import Sidebar from "./components/task-sidebar";
import { useState } from "react";


export async function loader(){
    const response = await fetch('/backend/lists');
    const lists = await response.json();
    return { lists }
}

export default function TaskManager(){
    const { lists } = useLoaderData();  
    const [isOpen, setIsOpen] = useState(false);  

    return(
        <main className="w-full h-full flex flex-row justify-between items-center montserrat-regular relative">
            <Sidebar allLists = {lists} isOpen={isOpen} setIsOpen={setIsOpen}/>
            <Main isOpen={isOpen}/>
        </main>
    )
}