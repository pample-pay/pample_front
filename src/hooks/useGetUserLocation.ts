import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useAppDispatch } from "@/redux/hooks";
import {
  setMyLocation,
  setDrugstoreLocation,
} from "@/redux/features/userLocation";
import mapMarkApi from "@/app/apis/navermap/mapMarkApi";

export default function useGetUserLocation() {
  const dispatch = useAppDispatch();

  const error = () =>
    dispatch(setDrugstoreLocation(mapMarkApi(37.5666103, 126.9783882)));

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

  const { data, isLoading } = useQuery(["getUserLocation"], () => {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(success, error);
    return null;
  });

  return { isLoading };
}
