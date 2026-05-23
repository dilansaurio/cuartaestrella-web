"use client";

import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export default function RevealOnScroll({
  children,
  delay = 0,
  className = "",
}: Props) {
  const ref = useRevealOnScroll(delay);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: "translateY(32px)",
        transition: `opacity 0.65s ease, transform 0.65s ease`,
      }}
    >
      {children}
    </div>
  );
}
