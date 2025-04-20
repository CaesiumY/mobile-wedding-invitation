"use client";

import data from "@/data.json";
import Script from "next/script";

/**
 * 카카오 SDK를 로드하고 초기화하는 wrapper 컴포넌트
 */
export function KakaoSDKProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.5/kakao.min.js"
        integrity="sha384-dok87au0gKqJdxs7msEdBPNnKSRT+/mhTVzq+qOhcL464zXwvcrpjeWvyj1kCdq6"
        crossOrigin="anonymous"
        onReady={() => {
          window.Kakao.init(data.mapInfo.kakaoAppKey);
        }}
        onError={() => {
          console.error("Kakao SDK loading error");
        }}
      />
    </>
  );
}
