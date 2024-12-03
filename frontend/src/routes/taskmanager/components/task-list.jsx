import { useLoaderData, useNavigate, useOutletContext, useParams, redirect } from "react-router-dom"
import TaskListTitle from "./task-list-card"
import TaskCard from "./task-card";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

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

    useEffect(() => {
        setTaskList(loaderData.taskList);
    }, [loaderData]);

    const setComplete = async (taskId) => {
        const response = await fetch(`/backend/tasks/${taskId}/complete`, { method: "PATCH" });

        setTaskList((prevList) => ({
            ...prevList,
            tasks: prevList.tasks.map((task) =>
                task._id === taskId ? { ...task, status: true } : task
            ),
        }));
    };
    
    const setIncomplete = async (taskId) => {
        const response = await fetch(`/backend/tasks/${taskId}/incomplete`, { method: "PATCH" });

        setTaskList((prevList) => ({
            ...prevList,
            tasks: prevList.tasks.map((task) => 
                task._id === taskId ? { ...task, status: false } : task
            ),
        }));
    };

    const deleteTask = async (taskId) => {
        const response = await fetch(`/backend/tasks/${taskId}`, { method: "DELETE" });

        setTaskList((prevList) => ({
            ...prevList,
            tasks: prevList.tasks.filter(task => task._id !== taskId)
        }));
    }


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
                        setComplete={() => setComplete(task._id)}
                        setIncomplete={() => setIncomplete(task._id)}
                        deleteTask={() => deleteTask(task._id)}
                    />;
                })
            )}
        </>
    );
}