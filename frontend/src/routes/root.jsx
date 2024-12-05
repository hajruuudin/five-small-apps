import { Link } from "react-router-dom"

export default function Homepage(){
    return(
        <main className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="montserrat-bold text-4xl">Three React Apps!</h1>
            <div className="navigation montserrat-regular m-4">
                <Link to="/taskmanager">
                    <button className="p-8 rounded-md m-4 bg-tones-velvet hover:bg-tones-pale transition">Task Manager</button>
                </Link>
                <Link to="/quizapp">
                    <button className="p-8 rounded-md m-4 bg-tones-velvet hover:bg-tones-pale transition opacity-75">Quiz App - WIP</button>
                </Link>
                <Link to="/tictactoe">
                    <button className="p-8 rounded-md m-4 bg-tones-velvet hover:bg-tones-pale transition opacity-75">TicTacToe Game - WIP</button>
                </Link>
            </div>
        </main>
    )
}