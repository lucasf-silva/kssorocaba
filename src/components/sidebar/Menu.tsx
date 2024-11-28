'use client'

import { BankOutlined, DollarOutlined, HomeOutlined, UsergroupAddOutlined } from "@ant-design/icons";

export const menuItens = [
    {
        key: '/',
        title: 'home',
        icon: <HomeOutlined />,
    },
    {
        key: '/clientes',
        title: 'clients',
        icon: <UsergroupAddOutlined /> ,
    },
    // {
    //     key: '/apartamentos',
    //     title: 'apartaments',
    //     icon: <BankOutlined />,
    // },
    // {
    //     key: '/financeiro',
    //     title: 'finance',
    //     icon: <DollarOutlined /> ,
    // },
]