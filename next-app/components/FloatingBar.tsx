"use client";

import data from "@/data.json";
import { realtimeDB } from "@/lib/firebase/config";
import { increment, onValue, ref, update } from "firebase/database";
import JSConfetti from "js-confetti";
import { ArrowUp, Heart, Share } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import AnimatedNumber from "./common/AnimatedNumber";
import { Button } from "./ui/button";

interface FloatingBarProps {
  isVisible: boolean;
}

const FloatingBar = ({ isVisible }: FloatingBarProps) => {
  const [count, setCount] = useState(0);
  const [channelConnected, setChannelConnected] = useState(false);

  const handleCount = async () => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({ emojis });

    const updates: Record<string, unknown> = {};
    updates["likes"] = increment(1);

    try {
      await update(ref(realtimeDB), updates);
    } catch {
      toast.error("증가에 실패했습니다.🥲");
    }
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("주소가 복사되었습니다.😉😉");
    } catch {
      toast.error("주소 복사에 실패했습니다.🥲🥲");
    }
  };

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const countRef = ref(realtimeDB, "likes");
    onValue(countRef, (snapshot) => {
      if (snapshot.exists()) {
        setChannelConnected(true);
        setCount(snapshot.val());
      }
    });
  }, []);

  if (!isVisible) return null;

  const { emojis } = data;

  return (
    <nav className="fixed bottom-8 left-0 right-0 z-20 flex flex-row items-center justify-center gap-1">
      <Button onClick={handleCount} variant="outline">
        <Heart className="text-pink-400" />
        {channelConnected ? <AnimatedNumber value={count} /> : null}
      </Button>
      <Button onClick={handleShare} variant="outline">
        <Share className="text-pink-400" />
        <span className="text-sm text-gray-600">공유</span>
      </Button>
      <Button onClick={handleScroll} variant="outline">
        <ArrowUp className="text-pink-400" />
        <span className="text-sm text-gray-600">위로</span>
      </Button>
    </nav>
  );
};

export default FloatingBar;
