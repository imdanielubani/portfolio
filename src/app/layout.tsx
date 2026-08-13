import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { FloatingNav } from "@/components/layout/FloatingNav";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Majd — Software Engineer",
  description:
    "Software engineer and Framer creator building modern, scalable, conversion-driven web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={archivo.variable}>
      <body>
        <FloatingNav />
        {children}
      </body>
    </html>
  );
}
