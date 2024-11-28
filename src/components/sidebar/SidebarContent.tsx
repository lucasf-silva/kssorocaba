"use client"

import { Link } from "@/lib/navigation"
import { useTranslations } from "next-intl"
import { menuItens } from "./Menu"
// import { HeartIcon } from "../../icons/index"

function SidebarContent() {
    const menuTranslations = useTranslations('Menu')

    const routes = menuItens;

    return (
        <div className="py-4 text-gray-500 bg-[#123972] h-screen">
            <Link href="/" className="hidden lg:flex">
                <h1 className="font-bold text-2x1 pl-3 hover:tracking-widest duration-300 cursor-default text-white">
                    <span className="text-[#ea3a3b]">KS</span> SOROCABA
                </h1>
            </Link>
            <ul className="mt-6">
                {/* <li className="relative px-6 py-3">
                    <Link
                        href={''}
                        className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                        <span
                            className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                            aria-hidden="true"
                        ></span>
                        <span className="ml-4">{menuTranslations('home')}</span>
                    </Link>
                </li>
                <li className="relative px-6 py-3">
                    <Link
                        href={'clientes/'}
                        className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                        <span
                            className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                            aria-hidden="true"
                        ></span>
                        <span className="ml-4">{menuTranslations('clients')}</span>
                    </Link>
                </li>
                <li className="relative px-6 py-3">
                    <Link
                        href={'apartamentos/'}
                        className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                        <span
                            className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                            aria-hidden="true"
                        ></span>
                        <span className="ml-4">{menuTranslations('apartaments')}</span>
                    </Link>
                </li>
                <li className="relative px-6 py-3">
                    <Link
                        href={'financeiro/'}
                        className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                    >
                        <span
                            className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                            aria-hidden="true"
                        ></span>
                        <span className="ml-4">{menuTranslations('finance')}</span>
                    </Link>
                </li> */}
                {routes.map((route) => (
                    <li className="relative px-6 py-3" key={route.key}>
                        <Link
                            href={route.key}
                            className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                        >
                            <span
                                className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                                aria-hidden="true"
                            ></span>
                            {route.icon}
                            <span className="ml-4">{menuTranslations(route.title)}</span>
                        </Link>
                    </li>
                )
                )}
            </ul>
        </div>
    )
}

export default SidebarContent