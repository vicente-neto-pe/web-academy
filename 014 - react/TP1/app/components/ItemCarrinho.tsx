import { ItemCarrinho as IItemCarrinho } from "../types/itemCarrinho";

type Props = {
  item: IItemCarrinho;
  removerItemDoCarrinho: (id: string) => void;
};

export default function ItemCarrinho({ item, removerItemDoCarrinho }: Props) {
  const valorTotalProduto = (precoUnitario: number, quantidade: number): number => precoUnitario * quantidade;

  return (
    <tr key="1">
      <td>{item.nome}</td>
      <td>R$ {item.preco}</td>
      <td> {item.quantidade}</td>
      <td>R$ {valorTotalProduto(item.preco, item.quantidade).toFixed(2)}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={() => removerItemDoCarrinho(item.id)}>
          Remover
        </button>
      </td>
    </tr>
  );
}
