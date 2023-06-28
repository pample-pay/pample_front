import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useAppDispatch } from "@/redux/hooks";
import {
  setMyLocation,
  setDrugstoreLocation,
} from "@/redux/features/userLocation";
import mapMarkApi from "@/app/apis/navermap/mapMarkApi";

interface latLug {
  lat: number;
  lng: number;
}

export default function useGetUserLocation() {
  const dispatch = useAppDispatch();
  const useGetMapMark = useMutation(
    (latLug: latLug) => mapMarkApi(latLug.lat, latLug.lng),
    {
      onSuccess: (response) => {
        const data = response.data;
        dispatch(setDrugstoreLocation(data));
      },
      cacheTime: 1000 * 30,
    }
  );
  const error = async () => {
    await useGetMapMark.mutateAsync({
      lat: 37.5666103,
      lng: 126.9783882,
      // 위치 거부시 서울 시청 좌표
    });
  };

  const success = async (position: GeolocationPosition) => {
    const updatedLatLug = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    dispatch(
      setMyLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      })
    );
    await useGetMapMark.mutateAsync(updatedLatLug);
  };
  const { isLoading } = useQuery(["getUserLocation"], () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
      return null;
    }
  });

  return { isLoading };
}
