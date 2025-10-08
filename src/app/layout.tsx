import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CodeBoost Academy - Bootcamp de Desarrollo Web Full Stack",
  description: "Conviértete en desarrollador full stack en 12 semanas. Aprende React, Node.js, MongoDB y más con mentores expertos. ¡Transforma tu carrera hoy!",
  keywords: "bootcamp, desarrollo web, full stack, React, Node.js, programación, curso online",
  authors: [{ name: "CodeBoost Academy" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
