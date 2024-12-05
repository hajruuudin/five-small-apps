import { useState } from "react";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

export async function loader({params}){
    const taskId  = params.taskId;
    console.log(taskId)
    const response = await fetch(`/backend/tasks/${taskId}`);
    const task = await response.json()
    
    if(response.ok){
        return { task }
    } else {
        console.error();
    }
}

export async function action({ request, params }) {
    const formData = await request.formData();
    const taskId = params.taskId;

    const response = await fetch(`/backend/tasks/${taskId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            newTitle: formData.get('title'),
            newDescription: formData.get('description'),
            newPriority: formData.get('priority')
        }),
    });

    if (response.ok) {
        toast.success(`Task edited!`);
        return redirect(`/taskmanager/${params.listId}`);
    } else {
        throw new Error("Failed to edit task");
    }
}

export default function TaskEditForm(){
    const { task } = useLoaderData();
    const [taskTitle, setTaskTitle] = useState(task.title)
    const [taskDescription, setTaskDescription] = useState(task.description)
    const [taskPriority, setTaskPriority] = useState(task.priority)

    const handleTitleChange = (e) => {
        setTaskTitle(e.target.value)
    }

    const handleDescriptionChange = (e) => {
        setTaskDescription(e.target.value)
    }

    const handlePriorityChange = (e) => {
        setTaskPriority(e.target.value)
    }

    return(
        <Form method="put" className="flex flex-col justify-center items-center w-9/12">
            <h1 className="text-5xl montserrat-bold mb-12">Edit Task:</h1>

            <label htmlFor="title" className="text-2xl">Task Title</label>
            <input type="text" name="title" id="title" value={taskTitle} onChange={handleTitleChange} className="text-white bg-tones-velvet bg-opacity-25 rounded-xl w-9/12 h-12 p-3 mt-3 mb-5 focus:border-2 focus:border-tones-pale focus:outline-none" required/>

            <label htmlFor="description" className="text-2xl">Task Description</label>
            <input type="text" name="description" id="description" value={taskDescription} onChange={handleDescriptionChange} className="text-white bg-tones-velvet bg-opacity-25 rounded-xl w-9/12 h-12 p-3 mt-3 mb-5 focus:border-2 focus:border-tones-pale focus:outline-none" required/>

            <label htmlFor="priority" className="text-2xl mt-4 mb-2">Task Priority</label>
            <div className="flex space-x-6">
                <label className="flex items-center space-x-2">
                    <input
                    type="radio"
                    name="priority"
                    value="Low"
                    checked={taskPriority === "Low"}
                    onChange={handlePriorityChange}
                    className="form-radio text-indigo-500 w-10 h-10"
                    />
                    <span className="text-white text-2xl">Low</span>
                </label>

                <label className="flex items-center space-x-2">
                    <input
                    type="radio"
                    name="priority"
                    value="Medium"
                    checked={taskPriority === "Medium"}
                    onChange={handlePriorityChange}
                    className="form-radio text-tones-pale w-10 h-10"
                    />
                    <span className="text-tones-pale text-2xl">Medium</span>
                </label>

                <label className="flex items-center space-x-2">
                    <input
                    type="radio"
                    name="priority"
                    value="High"
                    checked={taskPriority === "High"}
                    onChange={handlePriorityChange}
                    className="form-radio text-indigo-500 w-10 h-10"
                    />
                    <span className="text-red-700 text-2xl">High</span>
                </label>
            </div>

            <button type="submit" className="p-4 mt-10 rounded-md bg-tones-velvet montserrat-bold">Edit Task</button>

        </Form>
    )
}