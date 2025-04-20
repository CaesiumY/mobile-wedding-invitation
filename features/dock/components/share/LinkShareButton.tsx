"use client";

import { Button } from "@/components/ui/button";
import { Link2 } from "lucide-react";
import { toast } from "sonner";

const LinkShareButton = () => {
  const handleLinkShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("주소가 복사되었습니다.😉");
    } catch {
      toast.error("주소 복사에 실패했습니다.🥲");
    }
  };

  return (
    <Button
      variant="ghost"
      className="flex flex-col items-center justify-center gap-2 p-12"
      onClick={handleLinkShare}
    >
      <Link2 size={18} />
      링크 복사하기
    </Button>
  );
};

export default LinkShareButton;
