"use client"

import { useReducer } from "react";
import ListagemCarrinho from "../components/ListagemCarrinho";
import ResumoCarrinho from "../components/ResumoCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";
import { ItemCarrinho } from "../types/itemCarrinho";
import { carrinhoReducer } from "./carrinhoReducer";

export default function Carrinho() {
  const [itensCarrinho, dispatch] = useReducer(carrinhoReducer, mockItensCarrinho as ItemCarrinho[]);

  const quantidadeItens = itensCarrinho.reduce((acc, item) => acc + item.quantidade, 0);
  const totalCompra = itensCarrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  const aumentarQtd = (id: string) => {
    dispatch({ type: 'aumentar_qtd', id });
  };

  const diminuirQtd = (id: string) => {
    dispatch({ type: 'diminuir_qtd', id });
  };

  const removerItemDoCarrinho = (id: string) => {
    dispatch({ type: 'remover', id });
  };

  return (
    <>
      <main>
        <div className="container p-5">
          <div className="card mb-4">
            <div className="row card-body">
              <h5 className="card-title mb-4 fw-light">Produtos selecionados</h5>
              <div className="table-responsive">
                <ListagemCarrinho 
                  aumentarQtd={aumentarQtd}
                  diminuirQtd={diminuirQtd}
                  removerItemDoCarrinho={removerItemDoCarrinho} 
                  itensCarrinho={itensCarrinho} 
                />
              </div>
            </div>
          </div>
          <ResumoCarrinho quantidadeItens={quantidadeItens} totalCompra={totalCompra}/>
        </div>
      </main>
    </>
  );
}
