import { useEffect, useRef, useContext } from "react";
import { GeolocationContext } from "@/context/GeolocationContext";

export default function useNaverMap() {
  const mapElement = useRef<HTMLElement | null | any>(null);
  const { drugstoreLocation, myLocation } = useContext(GeolocationContext);

  useEffect(() => {
    const { naver } = window;

    if (
      typeof myLocation !== "string" &&
      typeof drugstoreLocation !== "string" &&
      drugstoreLocation !== undefined &&
      myLocation !== undefined
    ) {
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
  }, [drugstoreLocation, myLocation]);
  return mapElement;
}
