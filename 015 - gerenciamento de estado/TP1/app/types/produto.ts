export interface Produto {
  id: string;
  nome: string;
  preco: string;
  descricao: string;
  fotos: Foto[];
  usuario_id:string;
  code?: string;
}
interface Foto {
  titulo: string;
  src: string;
}
