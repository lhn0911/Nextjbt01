import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
/>;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rikkei Academy",
  icons: {
    icon: "https://learn.rikkeiacademy.com/favicon.ico.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
