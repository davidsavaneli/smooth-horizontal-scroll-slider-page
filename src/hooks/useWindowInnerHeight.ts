import { useState, useEffect } from "react";
import useIsClient from "./useIsClient";

const useWindowInnerHeight = () => {
  const isClient = useIsClient();

  const [windowInnerHeight, setWindowInnerHeight] = useState<number>(
    isClient ? window.innerHeight : 0
  );

  useEffect(() => {
    const updateWindowInnerHeight = () =>
      setWindowInnerHeight(window.innerHeight);

    isClient && window.addEventListener("resize", updateWindowInnerHeight);

    return () => {
      isClient && window.addEventListener("resize", updateWindowInnerHeight);
    };
  }, []);

  return windowInnerHeight;
};

export default useWindowInnerHeight;
