import { useEffect, useRef, useState } from "react";
import { useAppSelector } from "@/redux/hooks";

export default function useNaverMap() {
  const mapElement = useRef<HTMLDivElement | null>(null); // HTMLElement로 타입 수정
  const drugstoreLocation = useAppSelector(
    (state) => state.locationReducer.drugstoreLocation
  );
  const myLocation = useAppSelector(
    (state) => state.locationReducer.myLocation
  );

  useEffect(() => {
    const { naver } = window;

    if (drugstoreLocation && myLocation && mapElement.current) {
      const mapLocation = new naver.maps.LatLng(myLocation.lat, myLocation.lng);
      const mapOptions = {
        center: mapLocation,
        zoom: 17,
        zoomControl: true,
        zoomControlOptions: {
          position: naver.maps.Position.TOP_RIGHT,
        },
      };
      const map = new naver.maps.Map(mapElement.current, mapOptions);

      Object.values(drugstoreLocation).forEach((index) => {
        const aroundDrugstore = new naver.maps.LatLng(
          index.drugstore_lat,
          index.drugstore_lng
        );
        new naver.maps.Marker({
          position: aroundDrugstore,
          map: map,
          icon: {
            content: [
              `<div style="background-color:white; border-radius:12px; padding:3px; border: 1px solid rgb(34 211 238); ">`,
              `<div class="font-bold">${index.drugstore_name}</div>`,
              "</div>",
            ].join(""),
          },
        });
      });

      new naver.maps.Marker({
        position: mapLocation,
        map: map,
      });
    }
  }, [drugstoreLocation, myLocation]);
  return mapElement;
}
