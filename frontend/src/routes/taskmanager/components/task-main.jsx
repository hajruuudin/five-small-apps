import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

export default function Main({allLists}){

    return(
    <main className="grow flex flex-col justify-start pt-24 pb-8 items-center overflow-auto h-screen">
        <Outlet/>
    </main>
    )
}