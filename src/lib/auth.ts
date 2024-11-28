import NextAuth from "next-auth";
import prisma from "./db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import Credentials from "next-auth/providers/credentials";
import Nodemailer from "next-auth/providers/nodemailer";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        Nodemailer({
            server: {
                host: process.env.EMAIL_SERVER_HOST,
                port: process.env.EMAIL_SERVER_PORT,
                auth: {
                    user: process.env.EMAIL_SERVER_USER,
                    pass: process.env.EMAIL_SERVER_PASSWORD,
                }
            },
            from: process.env.EMAIL_FROM
        }),
    ],
    pages: {
        signIn: "/auth/signin",
        newUser: "/auth/signup",
        error: "/auth/error",
    },
    callbacks: {
        async session({ session, user, token }) {
            return session;
        },
    },
});
