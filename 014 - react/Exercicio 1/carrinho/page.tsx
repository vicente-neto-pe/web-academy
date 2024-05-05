"use client";

import { useContext } from "react";
import ListagemCarrinho from "../components/ListagemCarrinho";
import Navbar from "../components/Navbar";
import ResumoCarrinho from "../components/ResumoCarrinho";
import { CartContext } from "../context/cartContext";

export default function Carrinho() {
  const cartContext = useContext(CartContext)
  

  return (
    <>
      <main>
        <div className="container p-5">
          <div className="card mb-4">
            <div className="row card-body">
              <h5 className="card-title mb-4 fw-light">
                Produtos selecionados
              </h5>
              <div className="table-responsive">
                <ListagemCarrinho  itensCarrinho={cartContext.itensCarrinho} removerProduto={cartContext.removerProduto}/>
              </div>
            </div>
          </div>
          <ResumoCarrinho itensCarrinho={cartContext.itensCarrinho}/>
        </div>
      </main>
    </>
  );
}
