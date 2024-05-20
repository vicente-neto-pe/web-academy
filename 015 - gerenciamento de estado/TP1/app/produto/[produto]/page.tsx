"use client";

import { useParams } from "next/navigation";
import React from "react";
import Image from "next/image";
import { useDetalheProduto } from "../../services/produtos";

export default function Produto() {
  const params = useParams();

  const { produto, isPending, isError, isLoading } = useDetalheProduto(params.produto as string);

  if (isPending || isLoading) return <h5>Carregando...</h5>;

  if (isError) return <h5>Ocorreu um erro ao carregar os produtos.</h5>;

  if (!produto) return <h5>Não há produtos disponíveis no momento.</h5>;
  
  if(produto.code ==='naoexiste') return <h5>Produto não encontrado</h5>;

  return (
    <main>
      <div className="container p-5">
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title mb-4 fw-light">Detalhes do produto</h5>

            <h5 className="card-title mb-4 fw-bold">{produto?.nome}</h5>

            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-3 mb-3">
              <Image src={produto.fotos[0].src} className="card-img-top" alt={produto.fotos[0].titulo} width={300} height={320} />
            </div>

            <p className="card-text fw-medium">Valor: R${Number(produto?.preco).toFixed(2)}</p>
            <p className="card-text fw-medium">Descrição: {produto?.descricao}</p>
            <p className="card-text fw-medium">Anunciado por: {produto?.usuario_id}.</p>

            <h5 className="card-title mb-4 fw-bold">Carregando...</h5>
          </div>
        </div>
      </div>
    </main>
  );
}
