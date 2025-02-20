import data from "@/data.json";
import mainImage from "@images/main.webp";
import Image from "next/image";
import FadeIn from "../motion/FadeIn";
import ScrollFadeIn from "../motion/ScrollFadeIn";

const MainSection = () => {
  const {
    greeting: { title, eventDetail },
  } = data;

  return (
    <section className="flex flex-col items-center gap-9">
      <FadeIn>
        <Image
          src={mainImage}
          alt="메인 이미지"
          className="rounded-t-[200px] pt-4"
          width={396}
          height={614}
          priority
          quality={100}
        />
      </FadeIn>
      <ScrollFadeIn className="flex flex-col items-center gap-8">
        <h1 className="whitespace-pre-line font-dodum text-4xl font-bold leading-tight text-[#2F2120]">
          {title}
        </h1>
        <p className="whitespace-pre-line text-lg leading-snug text-[#2F2120]">
          {eventDetail}
        </p>
      </ScrollFadeIn>
    </section>
  );
};

export default MainSection;
