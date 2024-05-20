import { ItemCarrinho as IItemCarrinho } from "../types/itemCarrinho";
import ItemCarrinho from "./ItemCarrinho";

type ListagemCarrinhoProps = {
  aumentarQtd: (id: string) => void;
  diminuirQtd: (id: string) => void;
  removerItemDoCarrinho: (id: string) => void;
  itensCarrinho: IItemCarrinho[];
};

const ListagemCarrinho: React.FC<ListagemCarrinhoProps> = ({ aumentarQtd, diminuirQtd, removerItemDoCarrinho, itensCarrinho }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Produto</th>
          <th>Quantidade</th>
          <th>Preço</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {itensCarrinho.map((item, i) => (
          <ItemCarrinho key={i} aumentarQtd={aumentarQtd} diminuirQtd={diminuirQtd} removerItemDoCarrinho={removerItemDoCarrinho} item={item}/>
        ))}
      </tbody>
    </table>
  );
};

export default ListagemCarrinho;
