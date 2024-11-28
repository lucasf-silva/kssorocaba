import Container from "@/components/layouts/ContainerLayout";
import HomeLayout from "@/components/layouts/HomeLayout";
import { isAuthenticated } from "@/lib/isAuthenticated";
import { useSession } from "next-auth/react";
import { ReactNode } from "react";

const Layout = async ({ children }: { children: ReactNode }) => {
    const session = await isAuthenticated();

    return (
        <HomeLayout name={session.user?.name}>
            {children}
        </HomeLayout>
    )
}

export default Layout;