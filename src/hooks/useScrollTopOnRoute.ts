import { useEffect } from "react";
import router from "next/router";

const useScrollTopOnRoute = () => {
  useEffect(() => {
    const handleRouteChange = () =>
      setTimeout(() => window.scrollTo(0, 0), 300);
  
    router.events.on("routeChangeComplete", handleRouteChange);
  
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
};

export default useScrollTopOnRoute;
