"use server";

import prisma from "@/lib/db";
import { signIn as authSignIn } from "@/lib/auth";
import { redirect } from "@/lib/navigation";
import bcrypt from "bcrypt";

export const signIn = async ({ data }: { data: { email: string } }) => {
    const user = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (!user) return { error: 'ACCOUNT_NOT_FOUND' }

    // Send email verification link
    await authSignIn('nodemailer', {
        email: data.email,
        redirect: false
    })

    redirect('/auth/verify-email')
}

export const signUp = async ({ data }: { data: { name: string, email: string } }) => {
    const user = await prisma.user.findUnique({
        where: {
            email: data.email
        }
    })

    if (user) return { error: 'ACCOUNT_ALREADY_EXISTS' }

    const totalUsers = await prisma.user.count();

    if (totalUsers >= 4) {
        return { error: 'MAX_ACCOUNT_LIMIT_REACHED' }; 
    }

    // Create user
    await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            username: data.email,
        },
    });

    // Send email verification link
    await authSignIn('nodemailer', {
        email: data.email,
        redirect: false
    })

    redirect('/auth/verify-email')
}