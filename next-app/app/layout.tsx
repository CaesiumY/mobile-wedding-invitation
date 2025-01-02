import { Toaster } from "@/components/ui/sonner";
import data from "@/data.json";
import type { Metadata } from "next";
import Script from "next/script";
import { hSSanTokki20, suiteRegular } from "./font";
import "./globals.css";

export const metadata: Metadata = {
  title: data.greeting.title,
  description: data.greeting.message,
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
      <body className="break-keep antialiased">
        {children}
        <Toaster
          position="top-center"
          icons={{
            success: <span>🎉</span>,
            error: <span>❗</span>,
          }}
        />
        <Script
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=44331b9a13b30e24e651be862f4436dc&libraries=services,clusterer&autoload=false"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
