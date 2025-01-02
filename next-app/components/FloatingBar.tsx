"use client";

import data from "@/data.json";
import JSConfetti from "js-confetti";
import { ChevronUp, Heart, Share } from "lucide-react";
import { toast } from "sonner";
import { Button } from "./ui/button";

interface FloatingBarProps {
  isVisible: boolean;
}

const FloatingBar = ({ isVisible }: FloatingBarProps) => {
  const { emojis } = data;

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("주소가 복사되었습니다.😉😉");
    } catch {
      toast.error("주소 복사에 실패했습니다.🥲🥲");
    }
  };

  const handleCount = () => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({ emojis });
  };

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <nav className="fixed bottom-8 left-0 right-0 z-20 flex min-w-[280px] items-center justify-center gap-1">
      <Button onClick={handleCount} variant="outline">
        <Heart className="text-pink-400" />
      </Button>
      <Button onClick={handleShare} variant="outline">
        <Share className="h-5 w-5 text-pink-400" />
        <span className="text-sm text-gray-600">공유</span>
      </Button>
      <Button onClick={handleScroll} variant="outline">
        <ChevronUp className="h-5 w-5 text-pink-400" />
        <span className="text-sm text-gray-600">위로</span>
      </Button>
    </nav>
  );
};

export default FloatingBar;
