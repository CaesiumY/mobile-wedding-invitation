"use client";

import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload("/images/background.avif", { as: "image" });

  return null;
}
