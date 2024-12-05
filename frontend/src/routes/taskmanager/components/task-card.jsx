import { useNavigate } from "react-router-dom";

export default function TaskCard({task, setComplete, setIncomplete, deleteTask}){
    const navigate = useNavigate();
    if(task.status){
        return(
            <div className="card-container bg-blue-900 bg-opacity-0 w-9/12 h-22 rounded-lg border-b-2 border-tones-pale flex flex-row items-center justify-between m-2 pb-3">
            <div className="task-info grow max-w-xl">
                <span className="text-indigo-100">Completed</span>  
                <h4 className="text-2xl montserrat-regular line-through opacity-50">{task.title}</h4>
                <p className="montserrat-regular-italic line-through opacity-50">{task.description}</p>
            </div>
            <div id="button-group-incomplete" className="flex flex-row w-1/4 min-w-min justify-end ml-2">
                    <button onClick={setIncomplete} className="w-12 h-12 rounded-l-md bg-tones-velvet opacity-50 text-white flex items-center justify-center hover:bg-red-900 focus:outline-none grow transition-all ease-in-out">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="m6 6 12 12m3-6a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    </button>
                    <button onClick={deleteTask} className="w-12 h-12 bg-red-500 text-white flex items-center justify-center hover:bg-red-900 focus:outline-none hover:grow transition-all ease-in-out">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd"/>
                        </svg>
                     </button>
                     <button className="w-12 h-12 rounded-r-md bg-tones-pale opacity-50 text-white flex items-center justify-center focus:outline-none transition-all ease-in-out">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clipRule="evenodd"/>
                            <path fillRule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clipRule="evenodd"/>
                        </svg>
                     </button>
            </div>
        </div>
        )
    } else {
        return(
            <div className="card-container bg-blue-900 bg-opacity-0 w-9/12 h-22 rounded-lg border-b-4 border-tones-pale flex flex-row items-center justify-between m-2 pb-3">
               <div className="task-info">
                        {(() => {
                            switch (task.priority) {
                                case "Low":
                                    return <span className="text-white">Low</span>;
                                case "Medium":
                                    return <span className="text-tones-pale">Medium</span>;
                                default:
                                    return <span className="text-red-700">High</span>;
                            }
                        })()
                        }
                    <h4 className="text-2xl montserrat-bold">{task.title}</h4>
                    <p className="montserrat-regular-italic">{task.description}</p>
                </div>
                <div id="button-group-incomplete" className="flex flex-row w-1/4 min-w-min justify-end ml-2">
                    <button onClick={setComplete} className="w-12 h-12 rounded-l-md bg-tones-velvet text-white flex items-center justify-center hover:bg-red-900 focus:outline-none grow transition-all ease-in-out">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd"/>
                        </svg>
                    </button>
                    <button onClick={deleteTask} className="w-12 h-12 bg-red-500 text-white flex items-center justify-center hover:bg-red-900 focus:outline-none hover:grow transition-all ease-in-out">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z" clipRule="evenodd"/>
                        </svg>
                     </button>
                     <button onClick={() => navigate(`${task._id}/edit`)} className="w-12 h-12 rounded-r-md bg-tones-pale text-white flex items-center justify-center hover:bg-yellow-600 focus:outline-none hover:grow transition-all ease-in-out">
                        <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clipRule="evenodd"/>
                            <path fillRule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clipRule="evenodd"/>
                        </svg>
                     </button>
                </div>
            </div>
        )
    }
    
}