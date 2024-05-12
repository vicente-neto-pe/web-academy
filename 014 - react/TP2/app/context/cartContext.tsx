import { ReactNode, createContext, useState } from "react";
import { ItemCarrinho } from "../types/itemCarrinho";
import { Produto } from "../types/produto";

interface CartContextType {
  itensCarrinho: ItemCarrinho[];
  adicionaAoCarrinho: (produto: Produto) => void;
  removerProduto: (id: string) => void;
  adicionaUmProduto: (produto: ItemCarrinho) => void;
  removeUmProduto: (produto: ItemCarrinho) => void;
}

export const CartContext = createContext({} as CartContextType);
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [itensCarrinho, setItensCarrinho] = useState<ItemCarrinho[]>([]);

  const adicionaAoCarrinho = (produto: Produto): void => {
    const itemCarrinho = itensCarrinho.find((item) => item.id === produto.id);
    if (itemCarrinho) {
      itemCarrinho.quantidade += 1;
      setItensCarrinho([...itensCarrinho]);
    } else {
      setItensCarrinho([...itensCarrinho, { id: produto.id, nome: produto.nome, preco: produto.preco, quantidade: 1 }]);
    }
  };

  const removerProduto = (id: string): void => {
    setItensCarrinho(itensCarrinho.filter((produto) => produto.id !== id));
  };

  const adicionaUmProduto = (produto: ItemCarrinho): void => {
    setItensCarrinho((prevState) => {
      return prevState.map((item) => (item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item));
    });
  };

  const removeUmProduto = (produto: ItemCarrinho): void => {
    setItensCarrinho((prevState) => {
      return prevState.map((item) => (item.id === produto.id ? { ...item, quantidade: item.quantidade - 1 } : item));
    });
  };

  return <CartContext.Provider value={{ itensCarrinho, removerProduto, adicionaAoCarrinho, adicionaUmProduto, removeUmProduto }}>{children}</CartContext.Provider>;
};
