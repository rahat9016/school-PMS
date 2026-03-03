import NoInternet from "@/components/shared/NoInternet";
import Footer from "@/components/users/layout/footer/footer";
import Header from "@/components/users/layout/header/header";
import type { Metadata } from "next";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import QueryProvider from "./QueryProvider";
import StoreProvider from "./StoreProvider";
import TargetLocation from "./TargetLocation";
import { UserFetcher } from "./UserFetcher";

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
            <UserFetcher />
            {children}
            <Footer />
          </QueryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
