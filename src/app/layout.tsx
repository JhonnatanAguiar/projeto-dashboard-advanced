import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

export const metadata: Metadata = {
  title: "Dashboard Avançado",
  description: "Dashboard moderno avançado com TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="flex">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Navbar />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}
