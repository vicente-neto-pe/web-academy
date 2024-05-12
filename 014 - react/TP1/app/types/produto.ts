export interface Produto {
  id: string;
  nome: string;
  preco: string;
  descricao: string;
  fotos: Foto[];
}
interface Foto {
  titulo: string;
  src: string;
}
