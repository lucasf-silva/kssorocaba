"use client";

import Container from '@/components/layouts/ContainerLayout';
import { Typography } from 'antd';
import React, { useEffect, useState } from 'react';
const { Title } = Typography;

const HomePage: React.FC = () => {

    return (
        <Container>
            <div className='flex w-full py-5 justify-between items-center mb-2'>
                <section className='w-full '>
                    <Title className='text-2xl lg:text-3xl'>EM CONSTRUÇÃO</Title>
                </section>
            </div>
        </Container>
    )
};

export default HomePage;
