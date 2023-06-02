"use client";
import NaverMap from "../components/home/NaverMap";
import DrugstoreList from "../components/home/DrugstoreList";
import HomeContainer from "@/components/home/HomeContainer";
import { GeolocationContext } from "@/context/GeolocationContext";
import useUserLocation from "../hooks/useUserLocation";

export default function Home() {
  const { drugstoreLocation, myLocation } = useUserLocation();
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
