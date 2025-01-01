import React, { PropsWithChildren } from "react";

const SectionBox = ({ children }: PropsWithChildren) => {
  return (
    <section className="flex flex-col items-center p-[30px]">
      {children}
    </section>
  );
};

export default SectionBox;
