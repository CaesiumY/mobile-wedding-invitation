import Image from "next/image";
import React from "react";
import mainImage from "@images/main.webp";
import data from "@/data.json";

const MainSection = () => {
  const {
    greeting: { title, eventDetail },
  } = data;

  return (
    <section className="flex flex-col items-center gap-9">
      <Image
        src={mainImage}
        alt="메인 이미지"
        className="w-full max-w-[450px] rounded-t-[200px] pt-4"
        width={396}
        height={614}
        priority
        quality={100}
      />
      <div className="flex flex-col items-center gap-8">
        <h1 className="font-dodum whitespace-pre-line text-4xl font-bold leading-tight text-[#2F2120]">
          {title}
        </h1>
        <p className="whitespace-pre-line text-lg leading-snug text-[#2F2120]">
          {eventDetail}
        </p>
      </div>
    </section>
  );
};

export default MainSection;
