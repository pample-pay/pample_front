import { useContext, useEffect, useState } from "react";
import { GeolocationContext } from "@/context/GeolocationContext";

export default function useDrugstoreList() {
  const [location, setLocation] = useState<object>({});
  const { drugstoreLocation } = useContext(GeolocationContext);
  useEffect(() => {
    if (typeof drugstoreLocation !== "string") {
      drugstoreLocation?.then((obj) => {
        setLocation(obj);
        return;
      });
    }
  }, [drugstoreLocation]);

  return location;
}
