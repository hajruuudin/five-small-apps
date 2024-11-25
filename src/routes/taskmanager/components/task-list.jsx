import { useParams } from "react-router-dom"

export default function TaskList(){
    const {list} = useParams();
    return(
        <div>Should be: {list}</div>
    )
}