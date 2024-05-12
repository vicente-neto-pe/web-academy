import { useQuery } from "@tanstack/react-query";
import { api } from "../infra/api";
import { Produto } from "../types/produto";

export async function getDetalhesProduto(productName:string) {
  return api.get<Produto>(`produto/${productName}`).then((response) => response.data);
}

export function useDetalheProduto(productName: string) {
    const { data, isPending, isError, isLoading } = useQuery({
      queryKey: ["detalheProduto", productName], 
      queryFn: () => getDetalhesProduto(productName),
    });
  
    return { produto: data, isPending, isError, isLoading };
  }

export async function getListaProduto() {
    return api.get<Produto[]>("produto").then((response) => response.data);
  }
  
  export function useListaProdutos() {
    const { data, isPending, isError } = useQuery({
      queryKey: ["listaProdutos"],
      queryFn: () => getListaProduto(),
    });
  
    return { produtos: data, isPending, isError };
  }