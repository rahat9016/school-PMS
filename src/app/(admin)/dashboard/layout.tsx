import Header from "@/components/admin/layout/Header";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard - PAN ASIA",
  description: "Dashboard PAN ASIA",
};
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className={poppins.variable}>
      <Header />
      {children}
    </section>
  );
}
