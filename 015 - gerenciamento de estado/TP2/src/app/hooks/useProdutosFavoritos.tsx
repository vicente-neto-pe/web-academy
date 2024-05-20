import { useFavoritosContext } from "./useFavoritosContext";

export const useProdutosFavoritos = ():Produto[] => {
    const {favoritos} = useFavoritosContext();
    return favoritos;
}