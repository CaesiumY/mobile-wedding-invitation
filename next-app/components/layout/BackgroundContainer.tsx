import React, { PropsWithChildren } from "react";

const BackgroundContainer = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen bg-[#d0dbc6] text-center">
      <main className="mx-auto max-w-[512px] border-[30px] border-solid border-transparent bg-white [border-image-slice:30%_49%] [border-image-source:url('/images/background.png')] [border-image-width:280px]">
        {children}
      </main>
    </div>
  );
};

export default BackgroundContainer;
