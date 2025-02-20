"use client";

import { AnimatePresence, motion } from "motion/react";

interface AnimatedNumberProps {
  value: number;
}

const AnimatedNumber = ({ value }: AnimatedNumberProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={value}
        initial={{ y: 20, opacity: 0 }} // 초기 위치를 아래쪽으로 설정 (20px 아래)
        animate={{ y: 0, opacity: 1 }} // 최종 위치는 원래 위치
        exit={{ y: -20, opacity: 0 }} // 사라질 때는 위로 올라가면서 사라짐 (-20px 위)
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="mt-1 text-base"
      >
        {value}
      </motion.span>
    </AnimatePresence>
  );
};

export default AnimatedNumber;
