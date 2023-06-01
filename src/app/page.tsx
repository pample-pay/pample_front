"use client";
import { useEffect, useRef } from "react";
import mapMark from "./api/mapMark";
import NaverMap from "../components/NaverMap";
import DrugstoreList from "../components/DrugstoreList";

export default function Home() {
  return (
    <div className="container mx-auto flex justify-between">
      <NaverMap />
      <DrugstoreList />
    </div>
  );
}
