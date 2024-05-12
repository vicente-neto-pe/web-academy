"use client";

import { Suspense, useEffect, useState } from "react";
import ResumoCarrinho from "./components/ResumoCarrinho";
import { ListagemProdutos } from "./components/ListagemProdutos";
import { mockProdutos } from "./mocks/produtos";
import { Produto } from "./types/produto";
import { useListaProdutos } from "./services/produtos";

export default function Produtos() {
  const {produtos, isPending, isError} = useListaProdutos();
  const [totalCompra, setTotalCompra] = useState(0);
  const [quantidadeItens, setQuantidadeItens] = useState(0);

  const adicionarAoCarrinho = (produto: Produto) => {
    setQuantidadeItens((prev) => prev + 1);
    setTotalCompra((prev) => prev + parseFloat(produto.preco));
  };

  return (
    <>
      <div className="container p-5 pb-0">
        <ResumoCarrinho totalCompra={totalCompra} quantidadeItens={quantidadeItens} />
        {produtos ? <ListagemProdutos produtos={produtos} adicionarAoCarrinho={adicionarAoCarrinho} /> : <h5>Carregando...</h5>}
      </div>
    </>
  );
}
