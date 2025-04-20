import { realtimeDB } from "@/lib/firebase/firebase-config";
import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

export const useRealtimeDB = <T>(path: string, initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const dbRef = ref(realtimeDB, path);
    const unsubscribe = onValue(dbRef, (snapshot) => {
      if (snapshot.exists()) {
        setIsConnected(true);
        setValue(snapshot.val());
      }
    });

    return () => unsubscribe();
  }, [path]);

  return { value, isConnected };
};
