import { useLoaderData, useNavigate, useOutletContext, useParams } from "react-router-dom"
import TaskListTitle from "./task-list-card"
import TaskCard from "./task-card";

export async function loader({params}){
    const listId = params.listId;
    const allList = await JSON.parse(localStorage.getItem("taskManager"));
    const taskList = allList.filter(list => list.id === listId);
    return { taskList };
}

export default function TaskList(){
    const {listId} = useParams();
    const { taskList } = useLoaderData();
    const navigate = useNavigate();
    console.log(taskList)
    return (
        <>
            
            <TaskListTitle list={taskList} />
            <button className="p-4 rounded-md bg-blue-600 montserrat-bold" onClick={() => navigate(`/taskmanager/${listId}/addTask`)}>Add Task to this list</button>
            {taskList[0].tasks.length === 0 ? (
                <div>Empty list, you should even see this</div>
            ) : (
                taskList[0].tasks.map(task => {
                    return <TaskCard key={task.id} task={task} />;
                })
            )}
        </>
    );
}