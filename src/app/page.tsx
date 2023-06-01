"use client";
import { useEffect, useRef } from "react";
import mapMark from "./api/mapMark";
import NaverMap from './components/NaverMap';

export default function Home() {
  return (
    <>
      <NaverMap />
    </>
  );
}
