"use client";

import Container from "@/components/layouts/ContainerLayout";
import { Link, useRouter } from "@/lib/navigation";
import { getClients } from "@/server/clientServer";
import { ClientDetail } from "@/types/Clients";
import { Alert, Button, Result, Table, Typography } from "antd";
import Column from "antd/es/table/Column";
import ColumnGroup from "antd/es/table/ColumnGroup";
import { useTranslations } from "next-intl";
import { useSearchParams } from "next/navigation";
import { use, useEffect, useState } from "react";

const { Title } = Typography;

const ClientList: React.FC = () => {
    const [clientData, setClientData] = useState<ClientDetail[]>([]);
    const searchParams = useSearchParams();
    const isNew = searchParams.get("new");
    const id = searchParams.get("id");
    const [message, setMessage] = useState<string | null>(null);
    const t = useTranslations('ClientList');
    const tTable = useTranslations('tableClients');


    const router = useRouter();
    const handleClients = async () => {
        try {
            const response = await getClients();
            if (response.clients) {
                setClientData(response.clients);
            }
        } catch (error) {
            console.error("Erro ao buscar os clientes:", error);
        }
    };

    useEffect(() => {
        handleClients()

        if (isNew) {
            setMessage("Cliente Salvo com sucesso!");
        }

    }, [isNew])

    return (
        <Container>
            {message && (
                <Result
                    status="success"
                    title={message}
                    className="text-green-600"
                    extra={[
                        <Button type="primary" key="console"
                            onClick={() => {
                                setMessage(null);
                                router.replace(`/clientes/${id}`);
                            }}
                        >
                            Ver Cliente
                        </Button>,
                    ]}
                />
            )}
            <div className='flex w-full py-5 justify-between items-center mb-2'>
                <section className='w-full '>
                    <Title className='text-2xl lg:text-3xl'>{t('title')}</Title>
                    <Title level={5}>{t('description')}</Title>
                </section>
                <section className='w-full justify-end items-baseline flex'>
                    <Link
                        href='clientes/novo'
                        className='bg-blue-600 p-2 rounded-lg hover:bg-blue-500 duration-200 text-white'>
                        {t('btn_label')} +
                    </Link>
                </section>
            </div>
            <Table<ClientDetail>
                dataSource={clientData}
                rowKey="id"
                onRow={(record) => {
                    return {
                        onClick: () => {
                            router.push(`/clientes/${record.id}`);
                        },
                    }
                }}
                rowClassName={() => 'cursor-pointer'}
            >
                {/* <Column title='ID' dataIndex="id" key="id" /> */}
                <Column title={tTable('name')} dataIndex="nome" key="nome" />
                <Column title={tTable('email')} dataIndex="email" key="email" className="hidden" />
                {/* <ColumnGroup title='Ações'> */}
                <Column<ClientDetail>
                    title={tTable('actions')}
                    key='edit'
                    render={(record) => (
                        <Link href={`clientes/${record.id}/`}>{tTable('actions')}</Link>
                    )}
                />
                {/* <Column<ClientDetail>
                        title='Excluir'
                        key='delete'
                        render={(record) => (
                            <Link href={`/${record.id}`}>Excluir</Link>
                        )}
                    />
                </ColumnGroup> */}
            </Table>
        </Container>
    );
};

export default ClientList;