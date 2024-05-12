type Props = {
  totalCompra: number;
  quantidadeItens: number;
};
export default function ResumoCarrinho({quantidadeItens, totalCompra }: Props) {

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title mb-4 fw-light">Resumo do Carrinho</h5>
        <p className="card-text fw-medium">Quantidade total: {quantidadeItens}</p>
        <p className="card-text fw-medium">Valor total: R${totalCompra}</p>
      </div>
    </div>
  );
}
