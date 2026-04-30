import type { Transition } from "motion/react";

type AnimationConfig = {
  initial: Record<string, unknown>;
  animate: Record<string, unknown>;
  transition?: Transition;
};

export const animationVariants = {
  none: {
    initial: {},
    animate: {},
    transition: {},
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: 0.45,
      ease: [0, 0, 0.2, 1] as [number, number, number, number],
    },
  },
  slideUp: {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
  pop: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: {
      duration: 0.4,
      ease: [0, 0, 0.2, 1] as [number, number, number, number],
    },
  },
  shimmer: {
    initial: { backgroundPosition: "0% 50%" },
    animate: { backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] },
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      ease: [0, 0, 1, 1] as [number, number, number, number],
    },
  },
} satisfies Record<string, AnimationConfig>;

export type TextFxAnimationVariant = keyof typeof animationVariants;
