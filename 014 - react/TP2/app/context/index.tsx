'use client';

import { PropsWithChildren, ReactNode } from "react";
import { ReactQueryClientProvider } from "./ReactQueryClient";

export function Providers({ children }:PropsWithChildren) {
  return (
    <ReactQueryClientProvider>
        {children}
    </ReactQueryClientProvider>
  );
}