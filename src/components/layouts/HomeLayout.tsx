'use client'

import { ReactNode } from "react";
import Sidebar from "../sidebar";
import HeaderHome from "../sidebar/HeaderHome";
import { isAuthenticated } from "@/lib/isAuthenticated";
import { auth } from "@/lib/auth";

type Props = {
    children: React.ReactNode;
    name: string | undefined | null;
}

const HomeLayout = async ({ children, name }: Props) => {
    // const session = await isAuthenticated();

    // console.log(session);

    return (
        <div className={`flex h-screen`}>
            <Sidebar />
            <div className="flex flex-col flex-1 w-full">
                <HeaderHome name={name}/>
                <main className="h-full overflow-y-auto">
                    <div className="container grid px-6 mx-auto">{children}</div>
                </main>
            </div>
        </div>
    )
}

export default HomeLayout;