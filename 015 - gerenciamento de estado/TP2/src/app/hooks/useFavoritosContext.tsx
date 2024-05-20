import { useContext } from "react";
import { FavContext } from "../contexts/FavoritosProvider";

export const useFavoritosContext = () => {
    return useContext(FavContext);
}