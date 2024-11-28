"use client"

import ClienteDetail from '@/components/pages/Clients/ClienteDetail';
import ClientEdit from '@/components/pages/Clients/ClienteEdit';
import { getClient } from '@/server/clientServer';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ClientPage: React.FC = async () => {
    const params = useParams();
    const { id } = params;

    return (
        <ClientEdit />
    );
};

export default ClientPage;