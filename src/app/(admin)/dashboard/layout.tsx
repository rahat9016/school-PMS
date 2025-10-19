import Header from "@/components/admin/layout/Header";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dashboard - PAN ASIA",
  description: "Dashboard PAN ASIA",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <Header />
      {children}
    </section>
  );
}
