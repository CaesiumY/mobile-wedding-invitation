"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const ScrollTopButton = () => {
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Button onClick={handleScroll} variant="outline">
      <ArrowUp className="text-pink-400" />
      <span className="text-base text-gray-600">위로</span>
    </Button>
  );
};

export default ScrollTopButton;
