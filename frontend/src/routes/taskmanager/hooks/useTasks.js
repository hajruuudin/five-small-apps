import { toast } from "react-toastify";

const useTasks = () => {
    const setComplete = async (taskId, setTaskList) => {
        const response = await fetch(`/backend/tasks/${taskId}/complete`, {method: "PATCH"});

        if(response.ok){
            setTaskList((previousList) => ({
                ...previousList,
                tasks: previousList.tasks.map((task) => 
                    task._id === taskId ? {...task, status: true} : task
                ),
            }));
        }
    };

    const setIncomplete = async (taskId, setTaskList) => {
        const response = await fetch(`/backend/tasks/${taskId}/incomplete`, {method: "PATCH"});

        if(response.ok){
            setTaskList((previousList) => ({
                ...previousList,
                tasks: previousList.tasks.map((task) => 
                    task._id === taskId ? {...task, status: false} : task
                ),
            }));
        }
    };

    const deleteTask = async (taskId, listId, setTaskList) => {
        const response = await fetch(`/backend/tasks/${taskId}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ list: listId })
        });

        if(response.ok){
            toast.success("Task deleted")
            setTaskList((previousList) => ({
                ...previousList, // Preserve the other state properties
                tasks: previousList.tasks.filter((task) => task._id !== taskId),
            }));
        }
    };

    const editTask = async (taskId, setTaskList) => {
        const response = await fetch(`/backend/tasks/${taskId}/edit`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" }
        })
    }

    return { setComplete, setIncomplete, deleteTask, editTask };
};

export default useTasks;
