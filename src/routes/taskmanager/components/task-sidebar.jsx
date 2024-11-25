import { Form, NavLink, redirect, useNavigate, useParams } from "react-router-dom"

export default function Sidebar(){
    const navigate = useNavigate();
    return(
        <section className="bg-blue-900 justify-self-start h-screen flex flex-col p-2">

            <h1 className="text-4xl m-6 montserrat-bold" onClick={() => navigate("/taskmanager")}>Task Manager</h1>

            <Form className="flex flex-col items-center">
                <div className="flex items-center">
                    <input 
                        type="text" 
                        className="rounded-l-md p-2 w-full text-blue-800"
                        placeholder="Search all tasks..."
                    />
                    <button className="bg-blue-600 text-white rounded-r-md p-2">Go</button>
                </div>
            </Form>

            <nav id="sidebar-links" className="flex grow flex-col items-start justify-start pt-6 pl-4 pr-4 text-1.5xl overflow-y-auto">
            <h3 className="text-3xl montserrat-bold">Your lists:</h3>
                <NavLink 
                    to="/taskmanager/inbox"
                    className={({isActive}) => {
                        if(isActive){
                            return "flex justify-between items-center w-full mt-1 mb-1 pb-1 font-bold text-grey-600"
                        } else {
                            return "flex justify-between items-center w-full mt-1 mb-1 pb-1 opacity-60"
                        }
                    }}
                >
                    <span>Inbox</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                        <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                        <path fillRule="evenodd" d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
                    </svg>
                </NavLink>
                
                <hr />
                <section id="lists" className="flex flex-col w-full">

                    <NavLink 
                        to="/taskmanager/university"
                        className={({isActive}) => {
                            if(isActive){
                                return "flex justify-between items-center w-full mt-1 mb-1 pb-1 font-bold text-grey-600"
                            } else {
                                return "flex justify-between items-center w-full mt-1 mb-1 pb-1  opacity-60"
                            }
                        }}
                    >
                        <span>Univeristy</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.948 49.948 0 0 0-9.902 3.912l-.003.002c-.114.06-.227.119-.34.18a.75.75 0 0 1-.707 0A50.88 50.88 0 0 0 7.5 12.173v-.224c0-.131.067-.248.172-.311a54.615 54.615 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.123 56.123 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                            <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.284a.75.75 0 0 1-.46.711 47.87 47.87 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.87 47.87 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286.921.304 1.83.634 2.726.99v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.66a6.727 6.727 0 0 0 .551-1.607 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.667 2.25 2.25 0 0 0 2.12 0Z" />
                            <path d="M4.462 19.462c.42-.419.753-.89 1-1.395.453.214.902.435 1.347.662a6.742 6.742 0 0 1-1.286 1.794.75.75 0 0 1-1.06-1.06Z" />
                        </svg>
                    </NavLink>
                    <NavLink 
                        to="/taskmanager/personal"
                        className={({isActive}) => {
                            if(isActive){
                                return "flex justify-between items-center w-full mt-1 mb-1 pb-1 font-bold text-grey-600"
                            } else {
                                return "flex justify-between items-center w-full mt-1 mb-1 pb-1 opacity-60"
                            }
                        }}
                    >
                        <span>Personal</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
                        </svg>
                    </NavLink>
                    <button className=" p-2 mt-2 rounded-md bg-blue-600 montserrat-bold">+ Add List</button>
                </section>
            </nav>

            <button 
                className="m-6 p-4 mt-10 rounded-md bg-blue-600 montserrat-bold justify-self-end" onClick={() => navigate('/')}>To Homepage</button>
        </section>
    )
}



<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>
