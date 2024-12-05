import { Form, redirect } from "react-router-dom";

export async function action({request}){
    const formData = await request.formData();

    const newList = {
        "listName" : formData.get("listName"),
        "tasks" : []
    };

    const response = await fetch(`/backend/lists/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            list: newList
        }),
    });

    if (response.ok) {
        const listId = await response.json();
        return redirect(`/taskmanager/${listId}`);
    } else {
        throw new Error("Failed to add new List");
    }
}

export default function ListAddForm(){
    return(
        <Form method="post" className="flex flex-col justify-center items-center w-9/12">
            <h1 className="text-5xl montserrat-bold mb-12">Add new list:</h1>

            <label htmlFor="name" className="text-2xl">List Title</label>
            <input type="text" name="listName" id="name" className="text-white bg-tones-velvet bg-opacity-25 rounded-xl w-9/12 h-12 p-3 mt-3 mb-5 focus:border-2 focus:border-tones-pale focus:outline-none" required/>

            <button type="submit" className="p-4 mt-10 rounded-md bg-tones-velvet montserrat-bold">Add new list</button>

        </Form>
    )
}