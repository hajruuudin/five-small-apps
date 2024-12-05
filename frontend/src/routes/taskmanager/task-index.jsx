export default function TaskIndex(){
    return(
        <>
            <h1 className="text-3xl md:text-5xl montserrat-bold m-3">Task manager app!</h1>
            <p className="text-center">Basic task manager application build in React using React Router and Local Storage</p>
            <h3 className="text-3xl montserrat-bold mt-6">Features</h3>
            <ul className="flex flex-col items-center">
                <li>- Add Tasks to lists along with information about the tasks -</li>
                <li>- Add lists to organise tasks -</li>
                <li>- Basic CRUD operation for tasks -</li>
            </ul>
            <p className="mt-10 montserrat-bold">Click on a list to get started!</p>
        </>
    )
}