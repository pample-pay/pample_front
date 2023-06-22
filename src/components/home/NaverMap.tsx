"use client";
import useNaverMap from "@/hooks/useNaverMap";

export default function NaverMap() {
  const mapElement = useNaverMap();
  return (
    <>
      <div
        ref={mapElement}
        className="w-[40rem] h-[40rem] rounded-2xl border-white drop-shadow-lg"
      ></div>
    </>
  );
}
