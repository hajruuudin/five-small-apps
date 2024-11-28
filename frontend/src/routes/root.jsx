import { Link } from "react-router-dom"

export default function Homepage(){
    return(
        <main className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="montserrat-bold text-4xl">Three React Apps!</h1>
            <div className="navigation montserrat-regular m-4">
                <Link to="/taskmanager">
                    <button className="p-8 rounded-md m-4 bg-blue-900 hover:bg-blue-700 transition">Task Manager</button>
                </Link>
                <Link to="/quizapp">
                    <button className="p-8 rounded-md m-4 bg-blue-900 hover:bg-blue-700 transition">Quiz App</button>
                </Link>
                <Link to="/tictactoe">
                    <button className="p-8 rounded-md m-4 bg-blue-900 hover:bg-blue-700 transition">TicTacToe Game</button>
                </Link>
            </div>
        </main>
    )
}