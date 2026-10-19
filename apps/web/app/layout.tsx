import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "굿모닝테라유림부동산 CRM",
  description: "영업 자동화 대시보드"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}

