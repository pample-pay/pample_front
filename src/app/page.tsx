"use client";
import NaverMap from "../components/home/NaverMap";
import DrugstoreList from "../components/home/DrugstoreList";
import HomeContainer from "@/components/home/HomeContainer";
import { geolocationContext } from "@/context/geolocationContext";
import useUserLocation from "../hooks/useUserLocation";

export default function Home() {
  const { drugstoreLocation, myLocation } = useUserLocation();
  const value = { drugstoreLocation, myLocation };
  return (
    <HomeContainer>
      <NaverMap />
      <DrugstoreList />
    </HomeContainer>
  );
}
