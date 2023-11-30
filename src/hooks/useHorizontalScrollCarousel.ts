import { useState, useEffect, RefObject } from "react";
import { useScroll, useTransform, useSpring } from "framer-motion";
import useIsClient from "./useIsClient";

type HorizontalScrollCarouselProps = {
  containerRef: RefObject<HTMLDivElement>;
  containerInnerRef: RefObject<HTMLDivElement>;
  speed?: number;
  scrollDelay?: number;
  startOffset?: number;
};

const useHorizontalScrollCarousel = ({
  containerRef,
  containerInnerRef,
  speed = 2,
  scrollDelay = 100,
  startOffset = 0,
}: HorizontalScrollCarouselProps) => {
  const isClient = useIsClient();

  const [startPos, setStartPos] = useState<number>(0);
  const [endPos, setEndPos] = useState<number>(0);
  const [carouselWidth, setCarouselWidth] = useState<number | "auto">("auto");

  let resizeOutTimeout: NodeJS.Timeout | null = null;
  let resizeOverTime: boolean = false;

  const calculateSizes = () => {
    const container = containerRef.current;
    const innerContainer = containerInnerRef.current;

    if (container && innerContainer) {
      const length = innerContainer.children.length * speed;
      const top = container.offsetTop;
      const h = container.offsetHeight;
      const w = innerContainer.offsetWidth;

      container.style.height = h * length + scrollDelay * speed + startOffset + 'px'
      setCarouselWidth(w);
      setStartPos(top + (scrollDelay * speed) / (10 / 2) - startOffset);
      setEndPos(top + h * (length - 1));
    }
  };

  const handleResize = () => {
    if (!resizeOverTime) {
      resizeOverTime = true;
      if (containerRef.current) containerRef.current.style.height = 'auto'
    }

    resizeOutTimeout && clearTimeout(resizeOutTimeout);

    resizeOutTimeout = setTimeout(() => {
      if (!resizeOverTime) return;

      resizeOverTime = false;
      calculateSizes();
    }, 100);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [containerInnerRef, containerRef, scrollDelay, speed, startOffset]);

  const { scrollY } = useScroll();

  const transformX = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  let x = useTransform(
    transformX,
    [startPos, endPos],
    [0, isClient && -carouselWidth + window.innerWidth]
  );

  return x;
};

export default useHorizontalScrollCarousel;
