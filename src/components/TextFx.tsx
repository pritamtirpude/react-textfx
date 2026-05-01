import type { Transition } from "motion/react";
import { motion } from "motion/react";
import type { CSSProperties } from "react";
import { cn } from "../utils";
import {
  animationVariants,
  type TextFxAnimationVariant,
} from "../utils/animationVariants";
import { type TextFxVariant, variants } from "../utils/variants";

type TextFxProps = {
  text: string;
  variant?: TextFxVariant;
  animation?: TextFxAnimationVariant;
  backgroundImage?: string;
  className?: string;
  duration?: number;
  delay?: number;
} & React.HTMLAttributes<HTMLSpanElement>;

function TextFx({
  text,
  variant = "instagram",
  animation = "none",
  backgroundImage,
  className,
  duration,
  delay,
}: TextFxProps) {
  const selectedAnimation = animationVariants[animation];
  const transition: Transition = {
    ...selectedAnimation.transition,
    ...(duration !== undefined ? { duration } : {}),
    ...(delay !== undefined ? { delay } : {}),
  };

  const inlineStyle: CSSProperties = {
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    backgroundImage: backgroundImage
      ? `url(${backgroundImage})`
      : variants[variant],
    backgroundSize: animation === "shimmer" ? "200% 200%" : "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <motion.span
      initial={selectedAnimation.initial}
      animate={selectedAnimation.animate}
      transition={transition}
      className={cn(className)}
      style={inlineStyle}
    >
      {text}
    </motion.span>
  );
}

export default TextFx;
