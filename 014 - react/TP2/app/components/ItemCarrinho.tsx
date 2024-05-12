import { useContext } from "react";
import { ItemCarrinho as IItemCarrinho } from "../types/itemCarrinho";
import { CartContext } from "../context/cartContext";

type Props = {
  item: IItemCarrinho;
  removerProduto: (id: string) => void;
};

export default function ItemCarrinho({ item, removerProduto }: Props) {
  const valorTotalProduto = (precoUnitario: number, quantidade: number): number => precoUnitario * quantidade;
  const cartContext = useContext(CartContext)

  return (
    <tr key="1">
      <td>{item.nome}</td>
      <td>R$ {item.preco}</td>
      <td>
        {" "}
        <button className="btn btn-secondary btn-sm me-2" onClick={()=>cartContext.removeUmProduto(item)}>-</button>
        {item.quantidade} <button className="btn btn-secondary btn-sm ms-2" onClick={()=>cartContext.adicionaUmProduto(item)}>+</button>
      </td>
      <td>R$ {valorTotalProduto(parseInt(item.preco), item.quantidade).toFixed(2)}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={() => removerProduto(item.id)}>
          Remover
        </button>
      </td>
    </tr>
  );
}
