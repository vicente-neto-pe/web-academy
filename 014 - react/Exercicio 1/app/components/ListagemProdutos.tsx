import { useQuery } from "@tanstack/react-query";
import { Produto } from "../types/produto";
import CardProduto from "./CardProduto";
import { api } from "../infra/api";

type Props = {
  adicionarAoCarrinho: (produto: Produto) => void;
};

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

export const ListagemProdutos = ({ adicionarAoCarrinho }: Props) => {
  const { produtos, isPending, isError } = useListaProdutos();

  if (isPending) return <h5>Carregando...</h5>;

  if (isError) return <h5>Ocorreu um erro ao carregar os produtos.</h5>;

  if (!produtos) return <h5>Não há produtos disponíveis no momento.</h5>;

  return (
    <>
      <h5 className="mb-3">Produtos disponíveis:</h5>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {produtos.map((produto: Produto) => (
          <CardProduto key={produto.id} produto={produto} adicionaAoCarrinho={adicionarAoCarrinho} />
        ))}
      </div>
    </>
  );
};
