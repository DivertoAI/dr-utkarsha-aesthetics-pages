"use client";

import { useEffect, useRef, useState } from "react";
import Lottie, { type LottieRefCurrentProps } from "lottie-react";
import lights from "@/lib/lottie/lights.json";
import ripple from "@/lib/lottie/ripple.json";
import starfish from "@/lib/lottie/starfish.json";

const animationByVariant = {
  lights,
  ripple,
  starfish
} as const;

type StoryLottieProps = {
  variant: keyof typeof animationByVariant;
  className?: string;
  speed?: number;
};

export function StoryLottie({ variant, className, speed = 1 }: StoryLottieProps) {
  const [shouldAnimate, setShouldAnimate] = useState(true);
  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onMotionPreference = () => setShouldAnimate(!mediaQuery.matches);
    onMotionPreference();
    mediaQuery.addEventListener("change", onMotionPreference);
    return () => mediaQuery.removeEventListener("change", onMotionPreference);
  }, []);

  useEffect(() => {
    lottieRef.current?.setSpeed(speed);
  }, [speed]);

  return (
    <div className={className} aria-hidden>
      <Lottie
        animationData={animationByVariant[variant]}
        autoplay={shouldAnimate}
        loop={shouldAnimate}
        lottieRef={lottieRef}
      />
    </div>
  );
}
