"use client";

import React from "react";
import { Map as KakaoMapContainer, MapMarker } from "react-kakao-maps-sdk";
import data from "@/data.json";

const KakaoMap = () => {
  const { lat, lon: lng } = data.mapInfo;

  return (
    <KakaoMapContainer center={{ lat, lng }} className="h-80 w-full">
      <MapMarker position={{ lat, lng }} />
    </KakaoMapContainer>
  );
};

export default KakaoMap;
