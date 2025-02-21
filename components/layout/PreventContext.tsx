"use client";

import { usePreventContextMenu } from "@/hooks/usePreventContextMenu";
import { HTMLAttributes, ReactNode } from "react";

interface PreventContextProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const PreventContext = ({ children, ...props }: PreventContextProps) => {
  const ref = usePreventContextMenu<HTMLDivElement>();

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
};

export default PreventContext;
