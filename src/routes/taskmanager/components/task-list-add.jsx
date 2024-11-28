import { Form, redirect } from "react-router-dom";

export async function action({request}){
    const formData = await request.formData();

    if(formData == null){
        alert("You must add something!")
        return;
    }

    const newList = {
        "id" : crypto.randomUUID(),
        "listName" : formData.get("listName"),
        "tasks" : []
    };

    console.log(newList)

    const storageLists = JSON.parse(localStorage.getItem("taskManager")) || []
    console.log(storageLists)
    
    storageLists.push(newList);
    localStorage.setItem("taskManager", JSON.stringify(storageLists));

    return redirect(`/taskmanager/${newList.id}`);
}

export default function ListAddForm(){
    return(
        <Form method="post" className="flex flex-col justify-center items-center w-9/12">
            <h1 className="text-3xl mb-12">Add new list:</h1>

            <label htmlFor="name" className="text-2xl">List Title</label>
            <input type="text" name="listName" id="name" className="text-white bg-blue-900 bg-opacity-25 border-b-2 rounded-xl w-9/12 h-12 p-3 mt-3 mb-5" required/>

            <button type="submit" className="p-4 mt-10 rounded-md bg-blue-600 montserrat-bold">Add new list</button>

        </Form>
    )
}