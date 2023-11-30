import { useEffect } from "react";

const useDynamicVh = () => {
  useEffect(() => {
    const setWindowHeight = () =>
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01 - 0.01}px`
      );
    setWindowHeight();
    window.addEventListener("resize", setWindowHeight);

    return () => {
      window.removeEventListener("resize", setWindowHeight);
    };
  }, []);
};

export default useDynamicVh;
