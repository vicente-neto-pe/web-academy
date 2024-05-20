"use client";

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from "react";

type FavContextType = {
    favoritos: Produto[];
    setFavoritos: Dispatch<SetStateAction<Produto[]>>
  };
  
  export const FavContext = createContext({} as FavContextType);

  export default function FavoritosProvider({children}: PropsWithChildren<{}>) {
    const [favoritos, setFavoritos] = useState<Produto[]>([]);
  
    return (
      <FavContext.Provider value={{ favoritos, setFavoritos }}>
        {children}
      </FavContext.Provider>
    );
  }