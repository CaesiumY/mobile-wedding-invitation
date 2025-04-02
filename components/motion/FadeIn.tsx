"use client";
import { HTMLMotionProps, motion } from "motion/react";
import { PropsWithChildren } from "react";

const FadeIn = ({
  children,
  ...props
}: PropsWithChildren<HTMLMotionProps<"div">>) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
