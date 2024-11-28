"use server"

import prisma from "@/lib/db"
import { ApiGetClient, Client } from "@/types/Clients"

export const getClients = async (): Promise<ApiGetClient> => {
    try {
        const clients = await prisma.cliente.findMany({});

        return {
            clients: clients.map(client => ({
                id: client.id,
                nome: client.nome,
                email: client.email,
                cpf: client.cpf,
                rg: client.rg,
                celular: client.celular,
                celularParente: client.celularParente,
                estadoCivil: client.estadoCivil,
                ocupacao: client.ocupacao,
                possuiVeiculo: client.possuiVeiculo,
                placa: client.placa,
                fumante: client.fumante,
                observacao: client.observacao,
                dataNascimento: client.dataNascimento,
                dataCriacao: client.dataCriacao,
                ultimaAtualizacao: client.ultimaAtualizacao,
                anexos: []
            })),
        };
    } catch (error) {
        console.error("Erro ao buscar clientes:", error);
        throw new Error("Erro ao buscar clientes.");
    }
};

export const getClient = async (id: string): Promise<Client | null> => {
    try {
        const client = await prisma.cliente.findFirst({
            where: { id },
            include: { anexos: true },
        });

        if (!client) return null;

        // Transformar os anexos para ajustar o tipo de `dataUpload`
        const formattedClient: Client = {
            ...client,
            anexos: client.anexos.map((anexo) => ({
                ...anexo,
                dataUpload: anexo.dataUpload.toISOString(), // Converte Date para string
            })),
        };

        return formattedClient;
    } catch (error) {
        console.error("Erro ao buscar cliente:", error);
        throw new Error("Erro ao buscar cliente.");
    }
}

export const createClient = async (data: any) => {
    try {
        const client = await prisma.cliente.create({
            data: {
                nome: data.nome,
                email: data.email,
                cpf: data.cpf,
                rg: data.rg,
                celular: data.celular,
                celularParente: data.celularParente,
                estadoCivil: data.estadoCivil,
                ocupacao: data.ocupacao,
                possuiVeiculo: data.possuiVeiculo,
                placa: data.placa,
                fumante: data.fumante,
                observacao: data.observacao,
                dataNascimento: data.dataNascimento,
                anexos: {
                    create: data.anexos
                }
            }
        });

        return {
            client
        };
    } catch (error) {
        return { detail: "ERRO INTERNO" }
    }
}

export const updateClient = async (data: any) => {
    try {
        const client = await prisma.cliente.update({
            where: {
                id: data.id,
            },
            data: {
                nome: data.nome,
                email: data.email,
                cpf: data.cpf,
                rg: data.rg,
                celular: data.celular,
                celularParente: data.celularParente,
                estadoCivil: data.estadoCivil,
                ocupacao: data.ocupacao,
                possuiVeiculo: data.possuiVeiculo,
                placa: data.placa,
                fumante: data.fumante,
                observacao: data.observacao,
                dataNascimento: data.dataNascimento,
                anexos: {
                    create: data.anexos,
                },
            },
        });

        return {
            client
        };
    } catch (error) {
        return { detail: "ERRO INTERNO" }
    }
}