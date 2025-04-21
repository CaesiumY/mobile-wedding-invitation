"use client"; // Error boundaries must be Client Components

import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-secondary p-4 text-center">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-6">
          <span className="mb-2 block text-3xl font-semibold text-gray-700">
            죄송합니다, 오류가 발생했습니다.
          </span>
          <span className="block text-lg font-medium text-red-500">
            {error.message || "알 수 없는 오류가 발생했습니다."}
          </span>
        </h2>
        <Button type="button" onClick={() => reset()} className="w-full">
          다시 시도하기
        </Button>
      </div>
    </div>
  );
}
