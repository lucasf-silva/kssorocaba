import { Signin } from "@/components/pages/auth/signin";
import { SignUp } from "@/components/pages/auth/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Crie sua conta'
}

const SignUpPage = () => (
    <SignUp />
)

export default SignUpPage;