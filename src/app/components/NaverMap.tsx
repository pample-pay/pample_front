"use client";
import { useEffect, useRef, useState } from "react";
import mapMark from "../api/mapMark";

export default function NaverMap() {
  const success = (position: GeolocationPosition) => {
    if (!mapElement.current || !naver) return;
    const mapLocation = new naver.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );
    const drugstoreLocation = mapMark(
      position.coords.latitude,
      position.coords.longitude
    );
    //네이버 지도 옵션 선택
    const mapOptions = {
      center: mapLocation,
      zoom: 16,
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
        });
      });
    });

    new naver.maps.Marker({
      position: mapLocation,
      map: map,
    });
  };
  const mapElement = useRef(null);

  useEffect(() => {
    const { naver } = window;
    //현재 위치 불러오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success);
    }
  }, []);
  return (
    <div className="container	mx-auto">
      <div
        ref={mapElement}
        className="w-[40rem] h-[40rem] rounded-2xl border"
      ></div>
      <script
        type="text/javascript"
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=8bqnf5try9"
        async
      ></script>
    </div>
  );
}
