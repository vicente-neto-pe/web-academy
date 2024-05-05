"use client";

import { useContext, useEffect, useState } from "react";
import { ListagemProdutos } from "./components/ListagemProdutos";
import ResumoCarrinho from "./components/ResumoCarrinho";
import { CartContext } from "./context/cartContext";

export default function Produtos() {
  const cartContext = useContext(CartContext);

  const [produtos, setProdutos]= useState([])

  useEffect(() => {
    const controller = new AbortController;
    const signal = controller.signal;
    const fecthProdutos = async()=>{
      const response = await fetch("https://ranekapi.origamid.dev/json/api/produto", {signal})
      const produtos = await response.json()
      setProdutos(produtos)
    }
    fecthProdutos();
    return () => {
      controller.abort();
    }
  }, [])
  

  return (
    <>
      <div className="container p-5 pb-0">
        <ResumoCarrinho itensCarrinho={cartContext.itensCarrinho}/>
        <ListagemProdutos adicionarAoCarrinho={cartContext.adicionaAoCarrinho} />
      </div>
    </>
  );
}
