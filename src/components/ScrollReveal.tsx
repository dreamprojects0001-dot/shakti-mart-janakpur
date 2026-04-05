import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "fade" | "flip" | "tilt" | "zoom" | "slide";
}

const variants = {
  fade: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
  },
  flip: {
    initial: { opacity: 0, rotateX: 25, y: 60, scale: 0.92 },
    animate: { opacity: 1, rotateX: 0, y: 0, scale: 1 },
  },
  tilt: {
    initial: { opacity: 0, rotateY: -15, x: -40, scale: 0.95 },
    animate: { opacity: 1, rotateY: 0, x: 0, scale: 1 },
  },
  zoom: {
    initial: { opacity: 0, scale: 0.8, rotateX: 10 },
    animate: { opacity: 1, scale: 1, rotateX: 0 },
  },
  slide: {
    initial: { opacity: 0, x: 60, rotateY: 10 },
    animate: { opacity: 1, x: 0, rotateY: 0 },
  },
};

const ScrollReveal = ({ children, className, delay = 0, variant = "fade" }: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle parallax shift as user scrolls past
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  const v = variants[variant];

  return (
    <motion.div
      ref={ref}
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      style={{ perspective: 1200, y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
