import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import {
  setMyLocation,
  setDrugstoreLocation,
} from "@/redux/features/userLocation";
import mapMarkApi from "@/app/apis/navermap/mapMarkApi";

export default function useUserLocation() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const error = () => {
      dispatch(setDrugstoreLocation(mapMarkApi(37.5666103, 126.9783882)));
    };
    //현재 위치 불러오기
    const success = (position: GeolocationPosition) => {
      dispatch(
        setMyLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        })
      );
      dispatch(
        setDrugstoreLocation(
          mapMarkApi(position.coords.latitude, position.coords.longitude)
        )
      );
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, [dispatch]);

  return {};
}
