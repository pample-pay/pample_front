import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";

export default function DrugstoreList() {
  const drugstoreLocation = useAppSelector(
    (state) => state.locationReducer.drugstoreLocation
  );

  return (
    <div className="w-[37rem] h-[40rem] rounded-2xl border-white overflow-auto">
      {drugstoreLocation &&
        Object.values(drugstoreLocation).map((item) => (
          <Link
            href={`/lists/${item.id}`}
            key={item.id}
            className="flex flex-col w-80% rounded-2xl border p-3 m-5 justify-evenly"
          >
            <div className="font-bold">{item.drugstore_name}</div>
            <div className="">{item.drugstore_address}</div>
          </Link>
        ))}
    </div>
  );
}
