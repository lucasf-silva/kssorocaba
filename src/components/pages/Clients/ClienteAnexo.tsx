'use client'

import React, { useState } from 'react';
import { Button, Divider, Radio, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import Column from 'antd/es/table/Column';
import ColumnGroup from 'antd/es/table/ColumnGroup';
import axios from 'axios';
import { Anexos } from '@/types/Clients';


interface ClientsAnexosProps {
    Anexos?: Anexos[]; // `Anexos` é opcional, caso não seja fornecido
}

const columns: TableColumnsType<Anexos> = [
    {
        title: 'Name',
        dataIndex: 'nomeArquivo', // Altere isso para corresponder ao campo real do modelo `Anexos`
        render: (text: string) => <a>{text}</a>,
    },
    {
        title: 'Tipo',
        dataIndex: 'caminho', // Exemplo de coluna adicional
    },
    {
        title: 'Data de Upload',
        dataIndex: 'dataUpload',
        render: (text: string) => new Date(text).toLocaleDateString(),
    },
];

const ClientsAnexos: React.FC<ClientsAnexosProps> = ({ Anexos }) => {
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    //   const { downloadFile } = useRequest();

    //   const handleDownload = async (fileName) => {
    //     try {
    //       const file = await downloadFile({ id: fileName.caminho });

    //       // Crie um link de download para o arquivo
    //       const url = window.URL.createObjectURL(new Blob([file.data]));
    //       const link = document.createElement('a');
    //       link.href = url;
    //       link.setAttribute('download', fileName.nomeArquivo); // Nome do arquivo que será baixado
    //       document.body.appendChild(link);
    //       link.click();
    //       link.remove();
    //     } catch (error) {
    //       console.error("Erro ao baixar o arquivo:", error);
    //       alert("Erro ao baixar o arquivo.");
    //     }
    //   };

    return (
        <div>
            <Divider>Anexos do Cliente</Divider>
            <Table<Anexos> dataSource={Anexos} rowKey="caminho">
                <Column title='Arquivo' dataIndex="nomeArquivo" key="nomeArquivo" />
                <ColumnGroup title='Ações'>
                    <Column<Anexos>
                        title='Download'
                        key='edit'
                        render={(record) => (
                            <Button
                            //   onClick={() => {handleDownload(record)}}
                            >Download</Button>
                        )}
                    />
                    {/* <Column<Anexos>
            title='Excluir'
            key='delete'
            render={(record) => (
              <Link to={`/${record.id}`}>Excluir</Link>
            )}
          /> */}
                </ColumnGroup>
            </Table>
        </div>
    );
};

export default ClientsAnexos;