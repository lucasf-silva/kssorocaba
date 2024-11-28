import { Signin } from "@/components/pages/auth/signin";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Faça seu Login'
}

const SignInPage = () => (
    <Signin />
)

export default SignInPage;