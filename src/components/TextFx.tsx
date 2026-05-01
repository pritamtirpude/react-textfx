import type { Transition } from "motion/react";
import { motion } from "motion/react";
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

  return (
    <motion.span
      initial={selectedAnimation.initial}
      animate={selectedAnimation.animate}
      transition={transition}
      className={cn(
        "bg-clip-text text-transparent bg-cover bg-center bg-no-repeat",
        !backgroundImage && variants[variant],
        animation === "shimmer" && "bg-size-[200%_200%]",
        className,
      )}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage})` }
          : undefined
      }
    >
      {text}
    </motion.span>
  );
}

export default TextFx;
