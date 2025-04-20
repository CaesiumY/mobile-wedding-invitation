import { Toaster } from "@/components/ui/sonner";
import data from "@/data.json";
import type { Metadata } from "next";
import Script from "next/script";
import { gangwonEduFont, gowunDodumFont } from "./font";
import "@/styles/globals.css";
import Providers from "./providers";
import { PreloadResources } from "./preload-resources";

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
      className={`${gangwonEduFont.variable} ${gowunDodumFont.variable}`}
    >
      <body className="break-keep antialiased">
        <PreloadResources />
        <Providers>{children}</Providers>
        <Toaster
          position="top-center"
          icons={{
            success: <span>🎉</span>,
            error: <span>❗</span>,
          }}
        />
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${data.mapInfo.kakaoAppKey}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
