import { useLoaderData, useNavigate, useOutletContext, useParams, redirect } from "react-router-dom"
import TaskListTitle from "./task-list-card"
import TaskCard from "./task-card";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export async function loader({params}){
    const listId = params.listId;
    const allList = await JSON.parse(localStorage.getItem("taskManager"));
    const taskList = allList.filter(list => list.id === listId);
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

    const setComplete = (taskId, listId) => {
        const allLists = JSON.parse(localStorage.getItem("taskManager")) || [];
    
        const updatedLists = allLists.map((list) => {
            if (list.id === listId) {
                return {
                    ...list,
                    tasks: list.tasks.map((task) => {
                        if (task.id === taskId) {
                            return {
                                ...task,
                                status: true,
                            };
                        }
                        return task;
                    }),
                };
            }
            return list;
        });
    
        setTaskList(updatedLists.filter((list) => list.id === listId));
        localStorage.setItem("taskManager", JSON.stringify(updatedLists));
    };
    
    const setIncomplete = (taskId, listId) => {
        const allLists = JSON.parse(localStorage.getItem("taskManager")) || [];
    
        const updatedLists = allLists.map((list) => {
            if (list.id === listId) {
                return {
                    ...list,
                    tasks: list.tasks.map((task) => {
                        if (task.id === taskId) {
                            return {
                                ...task,
                                status: false,
                            };
                        }
                        return task;
                    }),
                };
            }
            return list;
        });
    
        setTaskList(updatedLists.filter((list) => list.id === listId));
        localStorage.setItem("taskManager", JSON.stringify(updatedLists));
    };

    const deleteTask = (taskId, listId) => {
        const allLists = JSON.parse(localStorage.getItem("taskManager")) || [];
    
        const updatedLists = allLists.map((list) => {
            if (list.id === listId) {
                return {
                    ...list,
                    tasks: list.tasks.filter(task => task.id !== taskId)
                };
            }
            return list;
        });

        toast("Task deleted")
        setTaskList(updatedLists.filter((list) => list.id === listId));
        localStorage.setItem("taskManager", JSON.stringify(updatedLists));
    }


    return (
        <>
            <TaskListTitle list={taskList} />
            <div className="flex flex-row"> 
                <button className="p-4 rounded-md bg-blue-600 montserrat-bold m-2" onClick={() => navigate(`/taskmanager/${listId}/addTask`)}>Add Task to this list</button>
                <button className="p-4 rounded-md bg-red-600 montserrat-bold m-2" onClick={() => navigate(`/taskmanager/${listId}/deleteConfirm`)}>Remove List</button>
            </div>

            {taskList[0].tasks.length === 0 ? (
                <h2 className="text-center text-2xl mt-4">Empty list, add some tasks</h2>
            ) : (
                taskList[0].tasks.map(task => {
                    return <TaskCard
                        key={task.id} 
                        task={task}
                        setComplete={() => setComplete(task.id, listId)}
                        setIncomplete={() => setIncomplete(task.id, listId)}
                        deleteTask={() => deleteTask(task.id, listId)}
                    />;
                })
            )}
        </>
    );
}