import { geolocationContext } from "@/context/geolocationContext";
import { useContext, useEffect, useState } from "react";

export default function useDrugstoreList() {
  const [location, setLocation] = useState<object>({});
  const { drugstoreLocation } = useContext(geolocationContext);
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
