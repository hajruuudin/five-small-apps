import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

export default function Main({allLists}){

    return(
    <main className="grow flex flex-col justify-center items-center overflow-auto">
        <Outlet/>
    </main>
    )
}