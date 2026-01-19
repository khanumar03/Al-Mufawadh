"use client";

import DottedMap from "dotted-map/without-countries";
import mapData from "@/lib/middleEastMap.json";

export default function MiddleEastMap() {
  const map = new DottedMap({
    map: typeof mapData === "string" ? JSON.parse(mapData) : mapData,
  });

  // Add Country Pins
  map.addPin({
    lat: 24.7,
    lng: 46.7,
    svgOptions: { color: "#FFD700", radius: 0.45 },
    data: { label: "Riyadh" },
  });

  map.addPin({
    lat: 31.95,
    lng: 35.93,
    svgOptions: { color: "#FFD700", radius: 0.45 },
    data: { label: "Amman" },
  });

  const svg = map.getSVG({
    shape: "circle",
    radius: 0.35,
    color: "#777272",
    backgroundColor: "#FFFFFF",
  });

  return (
    <div
      dangerouslySetInnerHTML={{ __html: svg }}
      className="w-full max-w-2xl mx-auto"
    />
  );
}
