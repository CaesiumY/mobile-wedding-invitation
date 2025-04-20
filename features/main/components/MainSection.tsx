import data from "@/data.json";
import mainImage from "@images/main.webp";
import Image from "next/image";
import FadeIn from "../../../components/motion/FadeIn";
import ScrollFadeIn from "../../../components/motion/ScrollFadeIn";
import PreventContext from "../../../components/layout/PreventContext";
import DDayBadge from "@/components/primitives/DDayBadge";

const MainSection = () => {
  const {
    greeting: { title, eventDetail },
  } = data;

  return (
    <section className="flex flex-col items-center gap-9">
      <FadeIn>
        <PreventContext>
          <Image
            src={mainImage}
            alt="메인 이미지"
            className="h-auto w-[396px] rounded-t-[200px] pt-4"
            width={468}
            height={701}
            priority
            quality={100}
          />
        </PreventContext>
      </FadeIn>
      <ScrollFadeIn className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-3">
          <DDayBadge />
          <h1 className="whitespace-pre-line font-dodum text-4xl font-bold leading-tight text-[#2F2120]">
            {title}
          </h1>
        </div>
        <p className="whitespace-pre-line text-lg leading-snug text-[#2F2120]">
          {eventDetail}
        </p>
      </ScrollFadeIn>
    </section>
  );
};

export default MainSection;
