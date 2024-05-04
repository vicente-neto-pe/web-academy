import { ItemCarrinho } from "../types/itemCarrinho";

type Props = {
  itensCarrinho: ItemCarrinho[];
};
export default function ResumoCarrinho({ itensCarrinho }: Props) {
  
  const totalQuantity = itensCarrinho.reduce((acc, item) => acc + item.quantidade, 0);
  const totalValue = itensCarrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title mb-4 fw-light">Resumo do Carrinho</h5>
        <p className="card-text fw-medium">Quantidade total: {totalQuantity}</p>
        <p className="card-text fw-medium">Valor total: R${totalValue}</p>
      </div>
    </div>
  );
}
