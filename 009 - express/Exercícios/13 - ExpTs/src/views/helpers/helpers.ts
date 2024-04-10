import { Product } from "../../models/product";

export const listProducts =(products: Product[]) => {
  
  const list = products.map((p) =>
    p.id ? `<li>${p.nome}-${p.preco}</li>` : '',
  );
  return `<ul>${list.join('')}</ul>`;
}
