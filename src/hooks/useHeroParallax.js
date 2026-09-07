import { useScroll, useTransform } from "framer-motion";

function useHeroParallax(targetRef) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  /*
    Different movement speeds create depth.

    Background → barely moves
    Network   → moves slightly
    Photo     → moves more
    Text      → moves fastest
  */

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -60]
  );

  const networkY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -110]
  );

  const photoY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -150]
  );

  const photoScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.1]
  );

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -210]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.7],
    [1, 0]
  );

  const glowScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.65]
  );

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.75],
    [1, 0.15]
  );

  return {
    scrollYProgress,

    backgroundY,
    networkY,

    photoY,
    photoScale,

    textY,
    textOpacity,

    glowScale,
    glowOpacity,
  };
}

export default useHeroParallax;