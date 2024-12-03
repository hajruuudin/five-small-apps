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
            <div className="flex flex-row"> 
                <button className="p-4 rounded-md bg-blue-600 montserrat-bold m-2" onClick={() => navigate(`/taskmanager/${listId}/addTask`)}>Add Task to this list</button>
                <button className="p-4 rounded-md bg-red-600 montserrat-bold m-2" onClick={() => navigate(`/taskmanager/${listId}/deleteConfirm`)}>Remove List</button>
            </div>

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
        </>
    );
}