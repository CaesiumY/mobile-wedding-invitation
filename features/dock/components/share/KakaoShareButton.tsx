"use client";

import { Button } from "@/components/ui/button";
import data from "@/data.json";
import { MessageCircle } from "lucide-react";
import Script from "next/script";
import { toast } from "sonner";

const KakaoShareButton = () => {
  const handleKakaoShare = async () => {
    if (!window.Kakao.isInitialized() || !data.share.templateId) {
      toast.error("카카오톡 SDK가 초기화되지 않았습니다.");
      return;
    }

    window.Kakao.Share.sendCustom({
      templateId: data.share.templateId,
    });
  };

  return (
    <>
      <Button
        variant="ghost"
        className="flex flex-col items-center justify-center gap-2 p-12"
        onClick={handleKakaoShare}
        disabled={!data.share.templateId}
      >
        <MessageCircle size={18} />
        카톡으로 공유
      </Button>

      {/* TODO - 아래 카카오 Script는 나중에 wrapper provider 스타일로 변경하면 좋을 듯 */}
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
};

export default KakaoShareButton;
