'use client';

import { PropsWithChildren, ReactNode } from "react";
import { CartProvider } from "./cartContext";
import { ReactQueryClientProvider } from "./ReactQueryClient";

export function Providers({ children }:PropsWithChildren) {
  return (
    <ReactQueryClientProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </ReactQueryClientProvider>
  );
}