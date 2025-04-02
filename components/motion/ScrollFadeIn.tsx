"use client";
import { HTMLMotionProps, motion, useInView } from "motion/react";
import { useRef } from "react";

interface ScrollFadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
}

const ScrollFadeIn = ({ children, ...props }: ScrollFadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default ScrollFadeIn;
