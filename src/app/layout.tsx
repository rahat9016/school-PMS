import Header from "@/components/users/layout/header/header";
import type { Metadata } from "next";
import NoInternet from "@/components/shared/NoInternet";
import Footer from "@/components/users/layout/footer/footer";
import QueryProvider from "./QueryProvider";
import "./globals.css";
import TargetLocation from "./TargetLocation";
import { ToastContainer } from 'react-toastify';
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "PAN ASIA",
  description: "PAN ASIA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#E6E9EB]">
        <StoreProvider>
        <QueryProvider>
          <Header />
          <NoInternet />
          <TargetLocation />
          <ToastContainer />
          {children}
          <Footer />
        </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
