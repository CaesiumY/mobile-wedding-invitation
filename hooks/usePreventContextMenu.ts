import { useEffect, useRef } from "react";

export const usePreventContextMenu = <T extends HTMLElement>() => {
  const elementRef = useRef<T>(null);

  const preventContextMenu = (event: MouseEvent) => {
    event.preventDefault();
  };

  useEffect(() => {
    const element = elementRef.current;

    if (element) {
      element.addEventListener("contextmenu", preventContextMenu);
    }

    return () => {
      if (element) {
        element.removeEventListener("contextmenu", preventContextMenu);
      }
    };
  }, []);

  return elementRef;
};
