import { useFavoritosContext } from "./useFavoritosContext";

export const useVerificaProdutoFavorito = (id:string):boolean => {
    const {favoritos} = useFavoritosContext();
    return favoritos.some((item:Produto) => item.id === id);
}

