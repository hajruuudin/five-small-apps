import { useState } from "react";
import { Form, NavLink, useNavigate } from "react-router-dom";


// FIX: PADDING, LIST TOGGLE, AND BUTTON
export default function Sidebar({ allLists }) {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Sidebar */}
            <section
                id="sidebar"
                className={`fixed md:relative bg-blue-900 h-screen flex flex-col p-2 z-10
                    ${isOpen ? "w-64" : "w-0 p-0 md:w-64"}
                    transition-all duration-300 ease-in-out overflow-hidden`}
            >
                <h1
                    className="text-4xl m-6 montserrat-bold cursor-pointer"
                    onClick={() => navigate("/taskmanager")}
                >
                    Task Manager
                </h1>

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

                <nav
                    id="sidebar-links"
                    className="flex grow flex-col items-start justify-start pt-6 pl-4 pr-4 text-1.5xl overflow-y-auto"
                >
                    <h3 className="text-3xl montserrat-bold">Your lists:</h3>
                    {allLists && Object.keys(allLists).length > 0 ? (
                        Object.values(allLists).map((list) => {
                            return (
                                <NavLink
                                    key={list._id}
                                    to={`/taskmanager/${list._id}`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "flex justify-between items-center w-full mt-1 mb-1 pb-1 font-bold text-grey-600"
                                            : "flex justify-between items-center w-full mt-1 mb-1 pb-1 opacity-60"
                                    }
                                >
                                    <span>{list.listName}</span>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="h-6 w-6"
                                    >
                                        <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375Z" />
                                        <path
                                            fillRule="evenodd"
                                            d="m3.087 9 .54 9.176A3 3 0 0 0 6.62 21h10.757a3 3 0 0 0 2.995-2.824L20.913 9H3.087Zm6.163 3.75A.75.75 0 0 1 10 12h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </NavLink>
                            );
                        })
                    ) : (
                        <p className="text-white text-center italic mt-4">
                            No lists available. Add a new list to get started!
                        </p>
                    )}
                    <button
                        onClick={() => navigate("addList")}
                        className="p-2 mt-2 rounded-md bg-blue-600 montserrat-bold w-full"
                    >
                        + Add List
                    </button>
                </nav>

                <div className="justify-self-end flex flex-row justify-center items-center mt-10 mb-2">
                    <button
                        className="p-4 grow rounded-l-md bg-blue-600 montserrat-bold"
                        onClick={() => navigate("/")}
                    >
                        To Homepage
                    </button>
                    <button
                        className="p-4 rounded-r-md bg-blue-500 montserrat-bold"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 30 30"
                            fill="none"
                        >
                            <path
                                d="M4 7H26"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M4 15H26"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M4 23H26"
                                stroke="black"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                    </button>
                </div>
            </section>

            {/* Toggle Button */}
            <button
                className="p-4 rounded-r-md bg-blue-500 montserrat-bold fixed left-0 bottom-10 z-20 md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 30 30"
                    fill="none"
                >
                    <path
                        d="M4 7H26"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M4 15H26"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M4 23H26"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </button>
        </>
    );
}
