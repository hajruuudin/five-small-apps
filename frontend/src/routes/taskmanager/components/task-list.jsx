import { useLoaderData, useNavigate, useOutletContext, useParams, redirect } from "react-router-dom"
import TaskListTitle from "./task-list-card"
import TaskCard from "./task-card";
import { useState, useEffect } from "react";
import useTasks from "../hooks/useTasks";

export async function loader({params}){
    const listId = params.listId;
    const response = await fetch(`/backend/lists/${listId}`);
    const taskList = await response.json();
    return { taskList };
}

export default function TaskList(){
    const { listId } = useParams();
    const loaderData = useLoaderData();
    const [taskList, setTaskList] = useState(loaderData.taskList)
    const navigate = useNavigate();
    const {setComplete, setIncomplete, deleteTask} = useTasks();

    useEffect(() => {
        setTaskList(loaderData.taskList);
    }, [loaderData]);

    return (
        <>
            <TaskListTitle list={taskList} />
            <div className="flex flex-row mb-4 justify-center w-2/3 sm:w-full"> 
                <button className="p-3 rounded-l-md bg-tones-velvet montserrat-bold hover:bg-red-900 tranisiton-all" onClick={() => navigate(`/taskmanager/${listId}/addTask`)}>Add Task to this list</button>
                <button className="p-3 bg-tones-blood montserrat-bold hover:bg-red-900 transition-all" onClick={() => navigate(`/taskmanager/${listId}/deleteConfirm`)}>Remove List</button>
                <button className="p-3 rounded-r-md bg-tones-pale montserrat-bold hover:bg-red-900 transition-all" onClick={() => navigate(`/taskmanager/${listId}/edit`)}>Edit List</button>
            </div>

            <div className="w-full flex flex-col items-center overflow-auto ">
            {taskList.tasks.length === 0 ? (
                <h2 className="text-center text-2xl mt-4">Empty list, add some tasks</h2>
            ) : (
                taskList.tasks.map(task => {
                    return <TaskCard
                        key={task._id} 
                        task={task}
                        setComplete={() => setComplete(task._id, setTaskList)}
                        setIncomplete={() => setIncomplete(task._id, setTaskList)}
                        deleteTask={() => deleteTask(task._id, listId, setTaskList)}
                    />;
                })
            )}
            </div>
        </>
    );
}