"use client";

import React, { PropsWithChildren, useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

const OverlayHiddenBox = ({ children }: PropsWithChildren) => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="w-full space-y-4">
      <div
        className={cn("relative overflow-hidden", { "h-[512px]": isHidden })}
      >
        {children}
        {isHidden && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-white" />
        )}
      </div>

      {isHidden && (
        <Button
          variant="outline"
          className="w-full rounded-sm border-secondary hover:bg-secondary/80"
          onClick={() => setIsHidden(false)}
        >
          <ChevronDown />
          더보기
        </Button>
      )}
    </div>
  );
};

export default OverlayHiddenBox;
