"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-200 h-0.5 pointer-events-none">
      <div
        className="h-full transition-[width] duration-75 ease-out"
        style={{
          width: `${progress}%`,
          background:
            "linear-gradient(90deg, #a0c8ff, #ffffff, #ffe4a0)",
          boxShadow: "0 0 10px 1px rgba(200, 220, 255, 0.8)",
        }}
      />
    </div>
  );
}
