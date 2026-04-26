// Apple-style cubic bezier easing
export const EASE = [0.16, 1, 0.3, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: EASE },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" },
  }),
};

export const maskReveal = {
  hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)" },
  visible: (i = 0) => ({
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    transition: { duration: 1.2, delay: i * 0.15, ease: EASE },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, delay: i * 0.1, ease: EASE },
  }),
};

export const cardHover = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -8,
    scale: 1.02,
    transition: { duration: 0.4, ease: EASE },
  },
};

export const viewportSettings = { once: true, amount: 0.15 };