"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Share } from "lucide-react";
import ShareDialogContent from "./ShareDialogContent";

const ShareButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Share className="text-pink-400" />
          <span className="text-base text-gray-600">공유</span>
        </Button>
      </DialogTrigger>

      <ShareDialogContent />
    </Dialog>
  );
};

export default ShareButton;
