import { useEffect, useState } from "react";
import mapMark from "../app/api/navermap/mapMark";

export default function useUserLocation() {
  const [drugstoreLocation, setDrugstoreLocation] = useState<
    Promise<object> | string
  >("");
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >("");
  const success = (position: GeolocationPosition) => {
    setMyLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    setDrugstoreLocation(
      mapMark(position.coords.latitude, position.coords.longitude)
    );
  };

  const error = () => {
    setMyLocation({ latitude: 37.5666103, longitude: 126.9783882 });
    setDrugstoreLocation(mapMark(37.5666103, 126.9783882));
  };

  useEffect(() => {
    //현재 위치 불러오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);

  return { drugstoreLocation, myLocation };
}
