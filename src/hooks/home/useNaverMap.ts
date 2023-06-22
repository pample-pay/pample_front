import { useEffect, useRef } from "react";
import { useAppSelector } from "@/redux/hooks";
import useUserLocation from "./useGetUserLocation";

export default function useNaverMap() {
  const mapElement = useRef<HTMLElement | null | any>(null);
  useUserLocation();
  const drugstoreLocation = useAppSelector(
    (state) => state.locationReducer.drugstoreLocation
  );
  const myLocation = useAppSelector(
    (state) => state.locationReducer.myLocation
  );
  useEffect(() => {
    const { naver } = window;

    if (drugstoreLocation !== null && myLocation !== null) {
      const mapLocation = new naver.maps.LatLng(
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
      drugstoreLocation?.then((obj) => {
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
                `<div style="background-color:white; border-radius:12px; padding:3px; border: 1px solid rgb(34 211 238); ">`,
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
  }, [drugstoreLocation, myLocation]);
  return mapElement;
}
