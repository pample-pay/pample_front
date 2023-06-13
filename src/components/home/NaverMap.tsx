"use client";

import useNaverMap from "@/hooks/home/useNaverMap";

export default function NaverMap() {
  const mapElement = useNaverMap();
  return (
    <>
      <div
        ref={mapElement}
        className="w-[40rem] h-[40rem] rounded-2xl border-white drop-shadow-lg"
      ></div>
      <script
        type="text/javascript"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=8bqnf5try9"
        async
      ></script>
    </>
  );
}
