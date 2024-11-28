"use client"

import { Link } from "@/lib/navigation";
import { Button, Layout, Tooltip } from "antd";
import Image from "next/image";
import { ReactNode } from "react"
import { ToggleTheme } from "./ToggleTheme";
import { LocaleDropdown } from "./LocaleDropdown";
import { useSession } from "next-auth/react";

const { Header, Content } = Layout;

const AuthLayout = ({ children }: { children: ReactNode }) => {
    
    return (
        <Layout className="h-screen overflow-hidden">
            <Layout className="">
                <Header className="z-40 py-4 bg-[#123972] shadow-bottom flex items-center justify-between">
                    <div>
                        <Tooltip title="KS Sorocaba">
                            <h1 className="font-bold text-2x1 pl-1 hover:tracking-widest duration-300 cursor-default text-white">
                                <span className="text-[#ea3a3b]">KS</span> SOROCABA
                            </h1>
                        </Tooltip>
                    </div>
                    <div>
                        <LocaleDropdown />
                        {/* <ToggleTheme /> */}
                    </div>
                </Header>
                <Content className="">
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default AuthLayout;