"use client";

import useDrugstoreList from "@/hooks/useDrugstoreList";

export default function DrugstoreList() {
  const location = useDrugstoreList();

  return (
    <div className="w-[37rem] h-[40rem] rounded-2xl border-white overflow-auto		">
      {Object.values(location).map((item) => {
        return (
          <div
            key={item.drugstore_hp}
            className="flex flex-col w-80% h-[5rem] rounded-2xl border p-3 m-5 justify-evenly"
          >
            <div className="font-bold">{item.drugstore_name}</div>
            <div className="">{item.drugstore_address}</div>
          </div>
        );
      })}
    </div>
  );
}
