'use client';

import { PropsWithChildren, ReactNode } from "react";
import { CartProvider } from "./cartContext";

export function Providers({ children }:PropsWithChildren) {
  return (
      <CartProvider>{children}</CartProvider>
  );
}