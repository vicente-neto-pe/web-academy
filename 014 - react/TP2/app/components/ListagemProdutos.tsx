
import { Produto } from "../types/produto";
import CardProduto from "./CardProduto";

type Props = {
  produtos: Produto[];
  adicionarAoCarrinho: (produto: Produto) => void
};

export const ListagemProdutos = ({ produtos, adicionarAoCarrinho }: Props) => {



  return (
    <>
      <h5 className="mb-3">Produtos disponíveis:</h5>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3">
        {produtos.map((produto: Produto) => (
          <CardProduto
            key={produto.id}
            produto={produto}
            adicionaAoCarrinho={adicionarAoCarrinho}
          />
        ))}
      </div>
    </>
  );
};
