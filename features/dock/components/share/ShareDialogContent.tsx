"use client";

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import KakaoShareButton from "./KakaoShareButton";
import LinkShareButton from "./LinkShareButton";

const ShareDialogContent = () => {
  return (
    <DialogContent>
      {/* SECTION - 모달 창 헤더 */}
      <DialogHeader>
        <DialogTitle className="text-center text-2xl">
          <div className="flex items-center justify-center gap-2">
            <Mail className="text-primary" />
            공유하기
          </div>
        </DialogTitle>
        <DialogDescription className="text-center text-base">
          친구에게 공유하고 싶은 방법을 선택하세요.
        </DialogDescription>
      </DialogHeader>

      {/* SECTION - 공유하기 버튼 */}
      <div className="mx-auto my-6 flex w-3/4 flex-row justify-center gap-3">
        <KakaoShareButton />
        <Separator orientation="vertical" />
        <LinkShareButton />
      </div>

      {/* SECTION - 모달 창 닫기 */}
      <DialogFooter>
        <DialogClose asChild>
          <Button type="button" variant="secondary" className="w-full">
            다음에 공유하기
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
};

export default ShareDialogContent;
