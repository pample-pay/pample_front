"use client";
import { useEffect, useRef, useState } from "react";
import mapMark from "../app/api/mapMark";

export default function NaverMap() {
  const mapElement = useRef<HTMLElement | null | any>(null);

  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >("");

  const success = (position: GeolocationPosition) => {
    if (!mapElement.current || !naver) return;
    setMyLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  const error = () => {
    setMyLocation({ latitude: 37.5666103, longitude: 126.9783882 });
  };

  useEffect(() => {
    const { naver } = window;
    //현재 위치 불러오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);

  useEffect(() => {
    if (typeof myLocation !== "string") {
      const mapLocation = new naver.maps.LatLng(
        myLocation.latitude,
        myLocation.longitude
      );
      const drugstoreLocation = mapMark(
        myLocation.latitude,
        myLocation.longitude
      );
      //네이버 지도 옵션 선택
      const mapOptions = {
        center: mapLocation,
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT,
        },
      };
      const map = new naver.maps.Map(mapElement.current, mapOptions);
      //지도상에 핀 표시 할 부분
      drugstoreLocation.then((obj) => {
        Object.values(obj).forEach((index) => {
          const aroundDrugstore = new naver.maps.LatLng(
            index.drugstore_lat,
            index.drugstore_lng
          );
          new naver.maps.Marker({
            position: aroundDrugstore,
            map: map,
            icon: {
              content: [
                '<div class="flex rounded-[12px] justify-center bg-white p-1 border	border-sky-500">',
                `<div class="font-bold	">${index.drugstore_name}</div>`,
                "</div>",
              ].join(""),
            },
          });
        });
      });

      new naver.maps.Marker({
        position: mapLocation,
        map: map,
      });
    }
  }, [myLocation]);
  return (
    <>
      <div
        ref={mapElement}
        className="w-[40rem] h-[40rem] rounded-2xl border"
      ></div>
      <script
        type="text/javascript"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=8bqnf5try9"
        async
      ></script>
    </>
  );
}
