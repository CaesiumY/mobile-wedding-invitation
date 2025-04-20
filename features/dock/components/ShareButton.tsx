"use client";

import { Button } from "@/components/ui/button";
import { Share } from "lucide-react";
import { toast } from "sonner";

const ShareButton = () => {
  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("주소가 복사되었습니다.😉😉");
    } catch {
      toast.error("주소 복사에 실패했습니다.🥲🥲");
    }
  };

  return (
    <Button onClick={handleShare} variant="outline">
      <Share className="text-pink-400" />
      <span className="text-base text-gray-600">공유</span>
    </Button>
  );
};

export default ShareButton;
