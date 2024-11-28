export default function TaskListTitle({list}){
    const listName = list.length > 0 ? list[0].listName : "Empty list, you should even see this";
    return(
        <div className="card-container bg-blue-900 bg-opacity-25 w-9/12 h-10 rounded-lg border-b-4 border-blue-200 flex flex-col items-center justify-end mb-12">
            <h2 className="text-3xl montserrat-bold">
                {listName}
            </h2>
        </div>
    )
}