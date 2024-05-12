"use client";

import { useState } from "react";
import ListagemCarrinho from "../components/ListagemCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";

export default function Carrinho() {
  const [itensCarrinho, setItensCarrinho] = useState(mockItensCarrinho);
  const quantidadeItens = itensCarrinho.length;
  const totalCompra = itensCarrinho.reduce((acc, item) => acc + item.preco, 0);

  const removerItemDoCarrinho = (id: string): void => {
    setItensCarrinho((prev) => prev.filter((item) => item.id !== id));
  };
  
  return (
    <>
      <main>
        <div className="container p-5">
          <div className="card mb-4">
            <div className="row card-body">
              <h5 className="card-title mb-4 fw-light">Produtos selecionados</h5>
              <div className="table-responsive">
                <ListagemCarrinho removerItemDoCarrinho={removerItemDoCarrinho} itensCarrinho={itensCarrinho} />
              </div>
            </div>
          </div>
          <ResumoCarrinho quantidadeItens={quantidadeItens} totalCompra={totalCompra}/>
        </div>
      </main>
    </>
  );
}
