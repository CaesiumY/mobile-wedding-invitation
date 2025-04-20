"use client";

import AnimatedNumber from "@/components/primitives/AnimatedNumber";
import { Button } from "@/components/ui/button";
import data from "@/data.json";
import { useRealtimeDB } from "@/features/guestBook/hooks/useGuestComments";
import { realtimeDB } from "@/lib/firebase/firebase-config";
import { increment, ref, update } from "firebase/database";
import JSConfetti from "js-confetti";
import { Heart } from "lucide-react";

const LikeButton = () => {
  const { value: likesCount, isConnected } = useRealtimeDB("likes", 0);
  const { emojis } = data;

  const handleCount = async () => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({ emojis });

    const updates: Record<string, ReturnType<typeof increment>> = {};
    updates.likes = increment(1);

    await update(ref(realtimeDB), updates);
  };

  return (
    <Button onClick={handleCount} variant="outline">
      <Heart className="text-pink-400" />
      {isConnected ? <AnimatedNumber value={likesCount} /> : null}
    </Button>
  );
};

export default LikeButton;
