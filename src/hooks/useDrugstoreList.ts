import { useAppSelector } from "@/redux/hooks";
import { useEffect, useState } from "react";

export default function useDrugstoreList() {
  const [location, setLocation] = useState<object>({});
  const drugstoreLocation = useAppSelector(
    (state) => state.locationReducer.drugstoreLocation
  );

  useEffect(() => {
    drugstoreLocation?.then((obj) => {
      setLocation(obj);
      return;
    });
  }, [drugstoreLocation]);

  return location;
}
