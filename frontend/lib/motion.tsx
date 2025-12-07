"use client"
import {motion, Variants, useReducedMotion, type MotionProps} from 'framer-motion'
import { JSX, ReactNode, createElement, PropsWithChildren } from "react";

export const fadeInUp = {
  initial: {opacity: 0, y: 16},
  animate: {opacity: 1, y: 0},
}

export const fadeIn = {
  initial: {opacity: 0},
  animate: {opacity: 1},
}

const defaultTransition = {duration: 0.5}

type WithClassName<T> = T & {className?: string}

export function MotionDiv({children, ...props}: PropsWithChildren<WithClassName<MotionProps>>) {
  return (
    <motion.div
      initial={fadeInUp.initial}
      whileInView={fadeInUp.animate}
      viewport={{once: true, amount: 0.2}}
      transition={defaultTransition}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function MotionSection({children, ...props}: PropsWithChildren<WithClassName<MotionProps>>) {
  return (
    <motion.section
      initial={fadeInUp.initial}
      whileInView={fadeInUp.animate}
      viewport={{once: true, amount: 0.2}}
      transition={defaultTransition}
      {...props}
    >
      {children}
    </motion.section>
  )
}

export function MotionImage({children, ...props}: PropsWithChildren<WithClassName<MotionProps>>) {
  return (
    <motion.div initial={fadeIn.initial} whileInView={fadeIn.animate} viewport={{once: true}} transition={defaultTransition} {...props}>
      {children}
    </motion.div>
  )
}

/** Viewport default: animasi sekali saat 20% elemen masuk layar */
const VIEWPORT = { once: true, amount: 0.2 };

/* =========================
   1) TEXT REVEAL (headline / subheadline)
   ========================= */
type TextRevealProps = {
  text: string;
  as?: keyof JSX.IntrinsicElements; // "h1" | "h2" | "p" | ...
  split?: "word" | "char";
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  y?: number; // jarak naik
};
export function TextReveal({
  text,
  as = "h2",
  split = "word",
  className = "",
  delay = 0,
  stagger = 0.04,
  duration = 0.5,
  y = 16,
}: TextRevealProps) {
  const reduce = useReducedMotion();
  const parts = split === "char" ? [...text] : text.split(/(\s+)/); // pertahankan spasi
  const baseDuration = reduce ? 0 : duration;
  const baseStagger = reduce ? 0 : stagger;

  return createElement(
    as,
    { className },
    parts.map((t, i) =>
      t.trim() === "" ? (
        // spasi tetap ditampilkan
        <span key={`s-${i}`}>{t}</span>
      ) : (
        <motion.span
          key={i}
          initial={{ y, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={VIEWPORT}
          transition={{
            delay: delay + i * baseStagger,
            duration: baseDuration,
            ease: "easeOut",
          }}
          style={{ display: "inline-block", willChange: "transform, opacity" }}
        >
          {t}
        </motion.span>
      )
    )
  );
}

/* =========================
   2) SLIDE IN (utility serbaguna)
   ========================= */
type SlideInProps = {
  children: ReactNode;
  className?: string;
  from?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
};
export function SlideIn({
  children,
  className = "",
  from = "up",
  delay = 0,
  duration = 0.6,
  distance = 24,
}: SlideInProps) {
  const reduce = useReducedMotion();
  const d = reduce ? 0 : distance;
  const dur = reduce ? 0 : duration;
  const pos = {
    up: { y: d },
    down: { y: -d },
    left: { x: d },
    right: { x: -d },
  }[from];

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...pos }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={VIEWPORT}
      transition={{ delay, duration: dur, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* =========================
   3) BLUR IN (lembut buat gambar/illustration)
   ========================= */
export function BlurIn({
  children,
  className = "",
  delay = 0,
  duration = 0.7,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      viewport={VIEWPORT}
      transition={{
        delay,
        duration: reduce ? 0 : duration,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================
   4) STAGGER GRID (container + item)
   ========================= */
type StaggerGridProps = {
  children: ReactNode;
  className?: string;
  delay?: number; // delay sebelum anak pertama
  stagger?: number; // jarak antar anak
};
export function StaggerGrid({
  children,
  className = "",
  delay = 0.1,
  stagger = 0.07,
}: StaggerGridProps) {
  const reduce = useReducedMotion();
  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduce ? 0 : stagger,
        delayChildren: reduce ? 0 : delay,
      },
    },
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

type StaggerItemProps = {
  children: ReactNode;
  className?: string;
  from?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
};
export function StaggerItem({
  children,
  className = "",
  from = "up",
  distance = 20,
  duration = 0.45,
}: StaggerItemProps) {
  const reduce = useReducedMotion();
  const offset = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
  }[from];

  const item: Variants = {
    hidden: { opacity: 0, ...offset },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: reduce ? 0 : duration, ease: "easeOut" },
    },
  };

  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

/* =========================
   5) POP (scale-in halus, cocok untuk badge/CTA)
   ========================= */
export function Pop({
  children,
  className = "",
  delay = 0,
  duration = 0.35,
  from = 0.9,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  from?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: from }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={VIEWPORT}
      transition={{
        delay,
        duration: reduce ? 0 : duration,
        type: "spring",
        stiffness: 260,
        damping: 24,
      }}
    >
      {children}
    </motion.div>
  );
}
