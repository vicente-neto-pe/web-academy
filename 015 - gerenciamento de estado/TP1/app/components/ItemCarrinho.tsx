import { ItemCarrinho as IItemCarrinho } from "../types/itemCarrinho";

type Props = {
  diminuirQtd: (id: string) => void;
  aumentarQtd: (id: string) => void;
  item: IItemCarrinho;
  removerItemDoCarrinho: (id: string) => void;
};

export default function ItemCarrinho({aumentarQtd, diminuirQtd, item, removerItemDoCarrinho }: Props) {
  const valorTotalProduto = (precoUnitario: number, quantidade: number): number => precoUnitario * quantidade;

  return (
    <tr key="1">
      <td>{item.nome}</td>
      <td>R$ {item.preco}</td>
      <td>
        <button className="btn btn-secondary btn-sm ms-2" onClick={()=>diminuirQtd(item.id)}>
          -
        </button>
        {" "}
        {item.quantidade}{" "}
        <button className="btn btn-secondary btn-sm me-2" onClick={()=>aumentarQtd(item.id)}>
          +
        </button>
      </td>
      <td>R$ {valorTotalProduto(item.preco, item.quantidade).toFixed(2)}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={() => removerItemDoCarrinho(item.id)}>
          Remover
        </button>
      </td>
    </tr>
  );
}

