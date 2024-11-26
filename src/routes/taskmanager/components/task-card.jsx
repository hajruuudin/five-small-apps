export default function TaskCard({task}){
    return(
        <div className="card-container bg-blue-900 bg-opacity-0 w-9/12 h-22 rounded-lg border-b-4 border-blue-200 flex flex-row items-center justify-between m-2">
           <div className="task-info">
                    {(() => {
                        switch (task.priority) {
                            case "Low":
                                return <span className="text-indigo-500">Low</span>;
                            case "Medium":
                                return <span className="text-yellow-300">Medium</span>;
                            default:
                                return <span className="text-red-700">High</span>;
                        }
                    })()
                    }
                <h4 className="text-2xl montserrat-regular">{task.title}</h4>
                <p className="montserrat-regular-italic">{task.description}</p>
            </div>
                 <button className="w-10 h-10 rounded-full bg-blue-500 border-2 border-gray-800 text-white flex items-center justify-center hover:bg-blue-600 focus:outline-none">
                    
                 </button>
        </div>
    )
}