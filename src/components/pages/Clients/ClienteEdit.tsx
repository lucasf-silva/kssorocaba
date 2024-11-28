'use client'

import Container from '@/components/layouts/ContainerLayout';
import { Link, useRouter } from '@/lib/navigation';
import { Client } from '@/types/Clients';
import { Button, Checkbox, DatePicker, Input, Select, Spin, Typography } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useState } from 'react';
// import ClientsAnexos from './ClienteAnexo';
import { createClient, getClient, updateClient } from '@/server/clientServer';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

const { Title } = Typography;

const defaultClient: Client = {
    id: '',
    nome: '',
    email: '',
    cpf: '',
    rg: '',
    celular: '',
    celularParente: '',
    estadoCivil: null,
    ocupacao: null,
    possuiVeiculo: false,
    placa: '',
    fumante: false,
    observacao: '',
    dataNascimento: new Date(),
    dataCriacao: new Date(),
    ultimaAtualizacao: new Date(),
    anexos: []
};

const ClientEdit: React.FC = () => {
    const [clientData, setClientData] = useState<Client>(defaultClient);
    const [loading, setLoading] = useState(false)
    const params = useParams();
    const { id } = params;
    const router = useRouter();
    const t = useTranslations('ClientEdit');

    const onChanges = (e: any) => {
        setClientData({
            ...clientData,
            [e.target.name]: e.target.value
        });
    };

    const handleClients = async () => {
        setLoading(true);
        try {
            const firstElement = Array.isArray(id) ? id[0] : id;
            const response = await getClient(firstElement);
            if (response) {
                setClientData(response);
            }
            setLoading(false);
        } catch (error) {
            console.error("Erro ao buscar os clientes:", error);
        }
    };

    const handleAddClient = async () => {
        setLoading(true);
        const response = await updateClient(clientData);

        if (response.detail) {
            alert('Cliente cadastrado com sucesso');
        } else {
            setLoading(false);
            router.refresh();
            router.replace("/clientes?new=true&id=" + id);
        }
    }

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const dateValue = e.target.value;
        const dateObject = dateValue ? new Date(dateValue) : new Date();
        setClientData({
            ...clientData,
            dataNascimento: dateObject,
        });
    };

    useEffect(() => {
        handleClients()
    }, [])

    return (
        <Container>
            <Spin spinning={loading}>
                <div className='flex w-full py-5 justify-between items-center mb-2'>
                    <section className='w-full '>
                        <Title className='text-2xl lg:text-3xl'>{t('title')}</Title>
                        <Title level={5}>{t('description')}</Title>
                    </section>
                    <section className='w-full justify-end items-baseline flex gap-3'>
                        <Button
                            // onClick={() => clientId ? handleUpdateClient() : handleAddClient()}
                            onClick={handleAddClient}
                            className='bg-blue-600 p-2 rounded-lg hover:bg-blue-500 duration-200 text-white h-10 w-20'
                        >
                            {t('btn_save')}
                        </Button>
                        <Link href='/clientes' className='bg-red-600 p-2 rounded-lg hover:bg-red-500 duration-200 text-white h-10 w-20'>{t('btn_cancel')}</Link>
                    </section>
                </div>
                <div className='min-w-full flex flex-col'>
                    <div className='p-2'>
                        <Input
                            placeholder={t('cName')}
                            className='w-full p-2 rounded-lg bg-gray-50 focus:bg-white'
                            name='nome'
                            value={clientData?.nome || ''}
                            onChange={onChanges}
                        />
                    </div>
                    <div className='flex p-2 gap-3 flex-col  md:flex-row'>
                        <Input
                            className='w-full p-2 rounded-lg bg-gray-50 focus:bg-white'
                            placeholder={t('cBirth')}
                            name='dataNascimento'
                            value={clientData?.dataNascimento ? clientData.dataNascimento.toISOString().split('T')[0] : ''}
                            type='date'
                            onChange={handleDateChange}
                        />
                        <Input
                            placeholder={t('cCpf')}
                            className='w-full p-2 rounded-lg bg-gray-50 focus:bg-white'
                            name='cpf'
                            value={clientData?.cpf || ''}
                            onChange={onChanges}
                        />
                        <Input
                            placeholder={t('cRg')}
                            className='w-full p-2 rounded-lg bg-gray-50 focus:bg-white'
                            name='rg'
                            value={clientData?.rg || ''}
                            onChange={onChanges}
                        />
                    </div>
                    <div className='flex flex-col p-2 gap-3  md:flex-row'>
                        <Input
                            placeholder={t('cEmail')}
                            className='w-full p-2 rounded-lg bg-gray-50 focus:bg-white'
                            name='email'
                            value={clientData?.email || ''}
                            onChange={onChanges}
                        />
                        <Input
                            placeholder={t('cPhone')}
                            className='w-full p-2 rounded-lg bg-gray-50 focus:bg-white'
                            name='celular'
                            value={clientData?.celular || ''}
                            onChange={onChanges}
                        />
                        <Input
                            placeholder={t('cPhoneContact')}
                            className='w-full p-2 rounded-lg bg-gray-50 focus:bg-white'
                            name='celularParente'
                            value={clientData?.celularParente || ''}
                            onChange={onChanges}
                        />
                    </div>
                    <div className='flex flex-col md:flex-row '>
                        <Select
                            title='Estado Civil'
                            placeholder={t('cCivilStatus')}
                            className='w-full p-2 rounded-lg bg-gray-50 focus:bg-white h-14'
                            showSearch
                            optionFilterProp="label"
                            value={clientData?.estadoCivil || ''}
                            onChange={e => setClientData({
                                ...clientData,
                                estadoCivil: e
                            })}
                            options={[
                                {
                                    value: 'solteiro',
                                    label: 'Solteiro'
                                },
                                {
                                    value: 'casado',
                                    label: 'Casado'
                                },
                                {
                                    value: 'divorciado',
                                    label: 'Divorciado'
                                },
                                {
                                    value: 'viuvo',
                                    label: 'Viúvo'
                                }
                            ]}
                        />
                        <Select
                            placeholder={t('cProfession')}
                            className='w-full p-2 rounded-lg bg-gray-50 focus:bg-white h-14'
                            showSearch
                            optionFilterProp="label"
                            onChange={e => setClientData({
                                ...clientData,
                                ocupacao: e
                            })}
                            value={clientData?.ocupacao}
                            options={[
                                {
                                    value: 'autonomo',
                                    label: 'Autônomo'
                                },
                                {
                                    value: 'clt',
                                    label: 'CLT'
                                },
                                {
                                    value: 'desempregado',
                                    label: 'Desempregado'
                                }
                            ]}
                        />
                    </div>
                    <div className='flex p-2 gap-3 flex-col'>
                        <div className='flex flex-1 gap-3'>
                            <Checkbox
                                className='flex items-center justify-center'
                                name='fumante'
                                checked={clientData?.fumante}
                                onChange={e => setClientData({
                                    ...clientData,
                                    fumante: e.target.checked
                                })}
                            >
                                {t('cSmokey')}
                            </Checkbox>
                            <Checkbox
                                className='flex items-center justify-center'
                                name='possuiVeiculo'
                                checked={clientData?.possuiVeiculo}
                                onChange={e => setClientData({
                                    ...clientData,
                                    possuiVeiculo: e.target.checked
                                })}
                            >
                                {t('cCar')}
                            </Checkbox>
                        </div>
                        <Input
                            placeholder={t('cCarModel')}
                            className='w-full p-2 rounded-lg bg-gray-50 focus:bg-white'
                            disabled={!clientData?.possuiVeiculo}
                            name='placa'
                            value={clientData?.placa || ''}
                            onChange={onChanges}
                        />
                    </div>
                    <div className='flex flex-1 p-2 gap-3 flex-col'>
                        <TextArea
                            rows={4}
                            placeholder={t('cObs')}
                            className='w-full p-2 rounded-lg bg-gray-50 focus:bg-white h-14'
                            name='observacao'
                            value={clientData?.observacao || ''}
                            onChange={onChanges}
                        />
                    </div>
                </div>

                {/* <ClientsAnexos
                    Anexos={clientData?.anexos}
                /> */}
            </Spin>
        </Container>
    );
};

export default ClientEdit;