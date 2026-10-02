import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "../../lib/cn";
import { usePrefersReducedMotion } from "../../hooks/use-reduced-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: Math.min(i * 0.08, 0.4) },
  }),
};

export function Reveal({
  children,
  className,
  index = 0,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  index?: number;
  as?: "div" | "section" | "li" | "span";
}) {
  const reduced = usePrefersReducedMotion();
  if (reduced) return <div className={className}>{children}</div>;
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={cn(className)}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-72px" }}
      custom={index}
    >
      {children}
    </Tag>
  );
}
