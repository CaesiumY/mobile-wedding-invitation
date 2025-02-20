import React, { PropsWithChildren } from "react";

const BackgroundContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-[#e0e7d9] text-center">
      <main className="mx-auto max-w-[560px] space-y-16 border-[30px] border-transparent bg-white p-8 [border-image-slice:30%_49%] [border-image-source:url('/images/background.avif')] [border-image-width:280px]">
        {children}
      </main>
    </div>
  );
};

export default BackgroundContainer;
