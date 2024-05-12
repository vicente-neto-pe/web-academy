import "bootstrap/dist/css/bootstrap.min.css";
import type { Metadata } from "next";
import BootstrapClient from "./components/BootstrapClient";
import Navbar from "./components/Navbar";
import { Providers } from "./context";

export const metadata: Metadata = {
  title: "WA Loja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <Providers>
        {children}
        </Providers>
        <BootstrapClient />
      </body>
    </html>
  );
}
