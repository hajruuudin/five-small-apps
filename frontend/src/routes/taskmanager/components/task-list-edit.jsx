import { useState } from "react";
import { Form, redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

export async function loader({params}){
    const { listId } = params;
    const response = await fetch(`/backend/lists/${listId}`)
    const list = await response.json();

    if(response.ok){
        return { list }
    } else {
        return console.error('Error while fetching list!')
    }
}

export async function action({request, params}){
    const formData = await request.formData();
    const { listId } = params;

    console.log(listId)

    const response = await fetch(`/backend/lists/${listId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            newListName: formData.get("listName")
        }),
    });

    if (response.ok) {
        toast.success("List edited!")
        return redirect(`/taskmanager/${listId}`);
    } else {
        throw new Error("Failed to edit List");
    }
}

export default function ListEditForm(){
    const { list } = useLoaderData();
    const [listName, setListName] = useState(list.listName);

    const handleListNameChange = (e) => {
        setListName(e.target.value)
    }

    return(
        <Form method="post" className="flex flex-col justify-center items-center w-9/12">
            <h1 className="text-5xl montserrat-bold mb-12">Edit list:</h1>

            <label htmlFor="name" className="text-2xl">List Title</label>
            <input type="text" name="listName" id="name" value={listName} onChange={handleListNameChange} className="text-white bg-tones-velvet bg-opacity-25 rounded-xl w-9/12 h-12 p-3 mt-3 mb-5 focus:border-2 focus:outline-none focus:border-tones-pale" required/>

            <button type="submit" className="p-4 mt-10 rounded-md bg-tones-velvet montserrat-bold">Edit list</button>
        </Form>
    )
}