import { useNavigate } from "react-router-dom"

export default function QuizApplication(){
    const navigate = useNavigate();
    return(
        <main className="w-full h-full flex flex-col justify-center items-center montserrat-bold ">
            <h1 className="text-7xl">Quiz Application</h1>  
            <button className="p-4 mt-10 rounded-md bg-blue-800" onClick={() => navigate(-1)}>To Homepage</button>  
        </main>
    )
}