import { Form, redirect, useNavigate, useParams } from "react-router-dom"

export async function action({params}){
    const listId = params.listId;
    console.log('DELETEING')
        const allLists = JSON.parse(localStorage.getItem("taskManager"));

        const updatedLists = allLists.filter(list => list.id !== listId)

        localStorage.setItem("taskManager", JSON.stringify(updatedLists));

        return redirect('/taskmanager')
}

export default function ListDeleteForm(){
    const navigate = useNavigate();
    const {listId} = useParams()
    return(
        <>
            <h1 className="text-center text-3xl montserrat-bold">Are you sure you want to delete this list?</h1>
            <div className="flex flex-row"> 
                <button className="p-4 rounded-md bg-blue-600 montserrat-bold m-2" onClick={() => navigate(`/taskmanager/${listId}`)}>Cancel</button>
                <Form method="post" action="destroy">
                    <button type="submit" className="p-4 rounded-md bg-red-600 montserrat-bold m-2">Remove List</button>
                </Form>
            </div>
        </>
    )
}