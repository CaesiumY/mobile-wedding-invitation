import type { Metadata } from "next";
import { hSSanTokki20, suiteRegular } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${hSSanTokki20.variable} ${suiteRegular.variable}`}
    >
      <body className="break-keep antialiased">{children}</body>
    </html>
  );
}
