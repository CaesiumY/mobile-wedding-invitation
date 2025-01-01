"use client";

import React from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import data from "@/data.json";

const KakaoMap = () => {
  const { lat, lon: lng } = data.mapInfo;

  return (
    <Map center={{ lat, lng }} className="h-80 w-full">
      <MapMarker position={{ lat, lng }}></MapMarker>
    </Map>
  );
};

export default KakaoMap;
