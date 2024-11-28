'use client';

import { UserOutlined } from "@ant-design/icons";
import { Layout } from "antd";
import { LocaleDropdown } from "../layouts/LocaleDropdown";
import { signOut, useSession } from "next-auth/react";
import { OpenMenu } from "./OpenMenu";
const { Header, Content } = Layout;

type Props = {
    name: string | undefined | null;
}

const HeaderHome = async ({ name }: Props) => {


    const handleSignOut = async () => {
        try {
            // Executa o signOut e redireciona para a página de login após a desconexão
            await signOut({ callbackUrl: '/auth/signin' });
        } catch (error) {
            console.error("Erro ao fazer logout", error);
        }
    };

    return (
        <Header className="z-40 py-4 bg-[#123972] shadow-bottom">
            <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 max-w-7xl">

                <OpenMenu />
                <button
                    className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                    aria-label="Notifications"
                    aria-haspopup="true"
                >
                    <LocaleDropdown />
                </button>
                <button
                    className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple flex text-center justify-center"
                    aria-label="Notifications"
                    aria-haspopup="true"
                    onClick={handleSignOut}
                >
                    {/* <h1 className="text-white">{name}</h1> */}
                    <UserOutlined className="text-white" />
                </button>
            </div>
        </Header>
    );
}

export default HeaderHome;