import React from "react";
import SectionTitle from "../common/SectionTitle";
import { Map } from "lucide-react";
import data from "@/data.json";
import { Button } from "../ui/button";
import KakaoMap from "../KakaoMap";
import ScrollFadeIn from "../motion/ScrollFadeIn";

const LocationSection = () => {
  const { mapInfo, locationInfo } = data;

  return (
    <section className="mx-auto flex max-w-[400px] flex-col items-center gap-8">
      <ScrollFadeIn className="space-y-3">
        <SectionTitle title="오시는 길" icon={<Map strokeWidth={3} />} />
        <h3 className="whitespace-pre-line font-dodum font-bold text-primary">
          {mapInfo.address1}
        </h3>
        <p className="whitespace-pre-line text-center font-extralight">
          {mapInfo.address2}
        </p>
      </ScrollFadeIn>

      {/* map */}
      <ScrollFadeIn className="w-full space-y-2">
        <KakaoMap />

        <div className="flex justify-center gap-2">
          <a href={mapInfo.naverMap} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="items-end">
              네이버 지도
            </Button>
          </a>
          <a href={mapInfo.kakaoMap} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="items-end">
              카카오맵
            </Button>
          </a>
        </div>
      </ScrollFadeIn>

      {/* Address */}
      <ScrollFadeIn className="flex w-full flex-col items-start gap-5">
        {locationInfo?.map((item) => (
          <div key={item.title} className="space-y-1 text-left">
            <h4 className="font-dodum text-lg font-bold text-primary">
              {item.title}
            </h4>
            <p className="whitespace-pre-line font-extralight">{item.desc}</p>
          </div>
        ))}
      </ScrollFadeIn>
    </section>
  );
};

export default LocationSection;
