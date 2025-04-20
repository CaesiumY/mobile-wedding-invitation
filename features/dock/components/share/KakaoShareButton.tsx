"use client";

import { Button } from "@/components/ui/button";
import data from "@/data.json";
import { MessageCircle } from "lucide-react";
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
    <Button
      variant="ghost"
      className="flex flex-col items-center justify-center gap-2 p-12"
      onClick={handleKakaoShare}
      disabled={!data.share.templateId}
    >
      <MessageCircle size={18} />
      카톡으로 공유
    </Button>
  );
};

export default KakaoShareButton;
