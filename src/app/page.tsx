"use client";
import NaverMap from "../components/home/NaverMap";
import DrugstoreList from "../components/home/DrugstoreList";
import HomeContainer from "@/components/home/HomeContainer";
import { useEffect, useState } from "react";
import { GeolocationContext } from "@/context/GeolocationContext";
import mapMark from "./api/mapMark";

export default function Home() {
  const [drugstoreLocation, setDrugstoreLocation] = useState<Promise<object>>(
    mapMark(37.5666103, 126.9783882)
  );
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
  };

  useEffect(() => {
    //현재 위치 불러오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);

  const value = { drugstoreLocation, myLocation };
  return (
    <HomeContainer>
      <GeolocationContext.Provider value={value}>
        <NaverMap />
        <DrugstoreList />
      </GeolocationContext.Provider>
    </HomeContainer>
  );
}
