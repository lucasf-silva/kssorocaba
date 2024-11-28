export type Client = {
    id: string;
    nome: string | null;
    email: string | null;
    cpf: string | null;
    rg: string | null;
    celular: string | null;
    celularParente: string | null;
    estadoCivil: string | null;
    ocupacao: string | null;
    possuiVeiculo: boolean;
    placa: string | null;
    fumante: boolean;
    observacao: string | null;
    dataNascimento: Date;
    dataCriacao: Date;
    ultimaAtualizacao: Date;
    anexos: Anexos[];
}

export type ClientDetail = {
    id: string;
    nome: string | null;
    email: string | null;
    cpf: string | null;
    rg: string | null;
    celular: string | null;
    celularParente: string | null;
    estadoCivil: string | null;
    ocupacao: string | null;
    possuiVeiculo: boolean;
    placa: string | null;
    fumante: boolean;
    observacao: string | null;
    dataNascimento: Date;
    dataCriacao: Date;
    ultimaAtualizacao: Date;
    anexos: Anexos[];
}

export type ApiGetClient = {
    clients: ClientDetail[];
}

export type Anexos = {
    nomeArquivo: string;
    caminho: string;
    dataUpload: string;
}