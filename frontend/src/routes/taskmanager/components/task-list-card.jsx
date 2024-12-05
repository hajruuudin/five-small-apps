export default function TaskListTitle({list}){
    const listName = list.tasks.length >= 0 ? list.listName : "Empty list, you should even see this";
    return(
        <div className="card-container bg-tones-velvet bg-opacity-5 w-9/12 h-13 rounded-lg border-b-4 border-tones-pale flex flex-col items-center justify-end mb-12">
            <h2 className="text-5xl montserrat-bold">
                {listName}
            </h2>
        </div>
    )
}