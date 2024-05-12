"use client";

import {useState } from "react";
import ResumoCarrinho from "./components/ResumoCarrinho";
import { ListagemProdutos } from "./components/ListagemProdutos";
import { mockProdutos } from "./mocks/produtos";
import { Produto } from "./types/produto";

export default function Produtos() {
  const produtos = mockProdutos;
  const [totalCompra, setTotalCompra] = useState(produtos.reduce((acc, produto) => acc + parseFloat(produto.preco), 0));
  const [quantidadeItens, setQuantidadeItens] = useState(produtos.length);

  const adicionarAoCarrinho = (produto:Produto) => {
    console.log('adicionando ao carrinho', produto)
    setQuantidadeItens((prev)=> prev + 1);
    setTotalCompra((prev)=> prev + parseFloat(produto.preco));
  }

  return (
    <>
      <div className="container p-5 pb-0">
        <ResumoCarrinho  totalCompra={totalCompra} quantidadeItens={quantidadeItens}/>
        <ListagemProdutos produtos={produtos} adicionarAoCarrinho={adicionarAoCarrinho} />
      </div>
    </>
  );
}
