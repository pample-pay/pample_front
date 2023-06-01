"use client";
import { SetStateAction, useContext, useEffect, useState } from "react";
import { GeolocationContext } from "@/context/GeolocationContext";
export default function DrugstoreList() {
  const [location, setLocation] = useState<object>({});
  const { drugstoreLocation, myLocation } = useContext(GeolocationContext);
  useEffect(() => {
    if (typeof drugstoreLocation !== "string") {
      const eee = drugstoreLocation?.then((obj) => {
        setLocation(obj);
        return;
      });
    }
  }, [drugstoreLocation]);
  return (
    <div className="w-[37rem] h-[40rem] rounded-2xl border overflow-auto	">
      {/* <div className="flex flex-col w-80% h-[5rem] rounded-2xl border p-3 m-5  justify-evenly">
        <div className="font-bold">약국 이름</div>
        <div className="">약국 주소9</div>
      </div> */}

      {Object.values(location).map((item) => {
        return (
          <div
            key={item.drugstore_hp}
            className="flex flex-col w-80% h-[5rem] rounded-2xl border p-3 m-5  justify-evenly"
          >
            <div className="font-bold">{item.drugstore_name}</div>
            <div className="">{item.drugstore_address}</div>
          </div>
        );
      })}
    </div>
  );
}
