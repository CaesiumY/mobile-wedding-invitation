import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { differenceInDays, parseISO, isValid } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isMobile = (): boolean => {
  if (typeof navigator === "undefined") return false;

  const userAgent = navigator.userAgent || navigator.vendor;
  const mobileRegex =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

  return mobileRegex.test(userAgent);
};

export const calculateDDay = (targetDateStr: string) => {
  // YYYY-MM-DD 형식인지 검증
  const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
  if (!dateRegex.test(targetDateStr)) {
    throw new Error(
      '날짜 형식이 올바르지 않습니다. "YYYY-MM-DD" 형식이어야 합니다.',
    );
  }

  const targetDate = parseISO(targetDateStr);

  // 유효한 날짜인지 검증
  if (!isValid(targetDate)) {
    throw new Error("유효하지 않은 날짜입니다.");
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const diffDays = differenceInDays(today, targetDate);

  if (diffDays > 0) {
    return `+${Math.abs(diffDays)}`;
  }

  return diffDays.toString();
};
