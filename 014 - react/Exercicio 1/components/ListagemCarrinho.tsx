import { ItemCarrinho as IItemCarrinho } from "../types/itemCarrinho";
import ItemCarrinho from "./ItemCarrinho";

type Props = {
  itensCarrinho : IItemCarrinho[] 
  removerProduto: (id: string) => void
}


export default function ListagemCarrinho({itensCarrinho, removerProduto}:Props) {

  
  return (
    <table className="table ">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Valor Unitário</th>
          <th>Quantidade</th>
          <th>Valor Total</th>
          <th>Opções</th>
        </tr>
      </thead>
      <tbody>
        {itensCarrinho.map((item, i) => (
          <ItemCarrinho key={i} item={item} removerProduto={removerProduto}/>
        ))}
      </tbody>
    </table>
  );
}
