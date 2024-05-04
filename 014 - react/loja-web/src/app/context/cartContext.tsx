import { ReactNode, createContext, useState } from "react";
import { ItemCarrinho } from "../types/itemCarrinho";
import { Produto } from "../types/Produto";

interface CartContextType{
    itensCarrinho: ItemCarrinho[]
    adicionaAoCarrinho : (produto:Produto)=>void
    removerProduto: (id:string)=>void
}

export const CartContext = createContext({} as CartContextType);
export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [itensCarrinho, setItensCarrinho] = useState<ItemCarrinho[]>([]);

    const adicionaAoCarrinho = (produto:Produto):void => {
        const itemCarrinho = itensCarrinho.find((item) => item.id === produto.id);
        if (itemCarrinho) {
          itemCarrinho.quantidade += 1;
          setItensCarrinho([...itensCarrinho]);
        } else {
          setItensCarrinho([...itensCarrinho, {id: produto.id, nome: produto.nome, preco: parseInt(produto.preco), quantidade: 1}]);
        }
      }
    
      const removerProduto = (id:string):void => {
        setItensCarrinho(itensCarrinho.filter((produto) => produto.id !== id));
      }

      return(
         <CartContext.Provider value={{itensCarrinho, removerProduto, adicionaAoCarrinho}} >
        {children}
        </CartContext.Provider>
        )
}