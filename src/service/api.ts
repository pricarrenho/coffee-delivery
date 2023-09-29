import { GraphQLClient } from "graphql-request";

const url = import.meta.env.VITE_PUBLIC_GRAPHQL_URL as string;

export const api = new GraphQLClient(url);

//Aqui é a minha base. Onde eu quero que minha api bata para poder pegar informações
