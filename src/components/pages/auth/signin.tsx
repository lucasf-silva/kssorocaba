"use client";

import Container from "@/components/layouts/ContainerLayout";
import Image from "next/image";
import { useState } from "react";
import Logo from "@/assets/logo.png";
import banner from "@/assets/bannerlogin.png";
import { useTranslations } from "next-intl";
import { Alert, Spin } from "antd";
import { signIn, signUp } from "@/server/authService";
import { Link } from "@/lib/navigation";

const USER_ID = 'AUTH_ID';

export const Signin = () => {
    const signInTranslations = useTranslations('SignInPage')
    const [loading, setLoading] = useState(false)
    const errorsTranslations = useTranslations('Errors')
    const [data, setData] = useState({
        email: "",
        name: ""
    });
    const [error, setError] = useState('')

    const handleChange = (key: string, e: any) => {
        setData({
            ...data,
            [key]: e.target.value,
        });
    }

    const handleSignInBtn = async () => {
        let mail = ''
        if (data.email) {
            mail = data.email
        }
        else {
            console.log('Email não informado')
            return;
        }

        setLoading(true)

        const signin = await signIn({ data: { email: mail } })

        setLoading(false)
        if (signin?.error) {
            setError(errorsTranslations(`auth/${signin.error}`))
        }
    }

    return (
        <Spin spinning={loading}>
            <Container>
                <main className='w-full min-h-screen flex flex-col md:flex-row items-center justify-center mx-auto '>
                    <section className='w-full flex-1 flex flex-col justify-center items-center'>
                        {error !== '' &&
                            <Alert message={error} type="error" />
                        }
                        <div className='w-full max-w-xl flex justify-center items-center flex-col gap-4 p-2'>
                            <Image
                                src={Logo}
                                alt="user"
                                className='w-36 hover:scale-110 duration-300 bg-[#123972] p-4 rounded-xl'
                            />
                            <h1 className='text-4xl font-bold mb-7'>{signInTranslations('text_simple')}</h1>
                            <input
                                type='text'
                                placeholder='Usuário'
                                className='w-full p-2 rounded-lg bg-gray-50 focus:bg-white'
                                onChange={e => handleChange('email', e)}
                                defaultValue={data.email}
                            />
                            <button
                                className='w-full bg-[#123972] p-2 rounded-lg text-white text-lg font-medium hover:bg-blue-500 duration-200'
                                onClick={handleSignInBtn}
                            >
                                {signInTranslations('btn_label', { provider: 'Email' })}
                            </button>
                            <p className="mt-7 text-center">
                                {signInTranslations('no_account')}
                                <Link
                                    href='/auth/signup'
                                    className="text-blue-500 ml-1"
                                >
                                    {signInTranslations('btn_no_account_label')}
                                </Link>
                            </p>
                        </div>
                    </section>
                    <section className='hidden md:flex w-full flex-1 h-screen items-center justify-center flex-col'>
                        <Image
                            src={banner}
                            alt='right'
                            className='lg:w-full mt-1'
                        />
                    </section>
                </main>
            </Container>
        </Spin>
    )
}