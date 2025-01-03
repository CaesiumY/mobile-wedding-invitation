import React from "react";
import SectionTitle from "../common/SectionTitle";
import { Map } from "lucide-react";
import data from "@/data.json";
import { Button } from "../ui/button";
import KakaoMap from "../KakaoMap";

const LocationSection = () => {
  const { mapInfo, locationInfo } = data;

  return (
    <section className="mx-auto flex max-w-[400px] flex-col items-center gap-8">
      <div className="space-y-3">
        <SectionTitle title="오시는 길" icon={<Map strokeWidth={3} />} />
        <h3 className="font-santokki whitespace-pre-line text-primary">
          {mapInfo.address1}
        </h3>
        <p className="whitespace-pre-line text-center font-extralight">
          {mapInfo.address2}
        </p>
      </div>

      {/* map */}
      <div className="w-full space-y-2">
        <KakaoMap />

        <div className="flex justify-center gap-2">
          <a href={mapInfo.naverMap} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">네이버 지도</Button>
          </a>
          <a href={mapInfo.kakaoMap} target="_blank" rel="noopener noreferrer">
            <Button variant="outline">카카오맵</Button>
          </a>
        </div>
      </div>

      {/* Address */}
      <div className="flex w-full flex-col items-start gap-5">
        {locationInfo?.map((item) => (
          <div key={item.title} className="space-y-1 text-left">
            <h4 className="font-santokki text-lg text-primary">{item.title}</h4>
            <p className="whitespace-pre-line font-extralight">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LocationSection;
