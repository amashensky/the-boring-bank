"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { APP_BUYER_SIGNUP, APP_SELLER_SIGNUP } from "@/lib/appUrls";

// Seamless night-only palindrome loop (forward + reverse of the 0–4.5s nighttime segment).
const HERO_VIDEO_SRC = "/night-loop.mp4";
// Lower = slower cloud drift. 0.7 keeps the drift gentle without looking glitchy.
const HERO_VIDEO_SPEED = 0.7;

const CHAR_DELAY = 30;
const INITIAL_DELAY = 200;

type Line = { text: string; style?: CSSProperties; className?: string };

/* Character-by-character entrance animation across multiple lines.
   Delay for char i on line l = (sum of prior line lengths) * CHAR_DELAY + i * CHAR_DELAY. */
function AnimatedLines({
  lines,
  className,
  style,
}: {
  lines: Line[];
  className?: string;
  style?: CSSProperties;
}) {
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setOn(true), INITIAL_DELAY);
    return () => window.clearTimeout(t);
  }, []);
  const ariaLabel = lines.map((l) => l.text).join(" ");
  let cumulativeChars = 0;
  return (
    <h1 className={className} style={style} aria-label={ariaLabel}>
      {lines.map((line, lineIdx) => {
        const chars = Array.from(line.text);
        const baseOffset = cumulativeChars * CHAR_DELAY;
        cumulativeChars += chars.length;
        return (
          <span
            key={lineIdx}
            className={line.className}
            style={{ display: "block", ...(line.style ?? {}) }}
          >
            {chars.map((ch, i) => (
              <span
                key={i}
                aria-hidden
                style={{
                  display: "inline-block",
                  opacity: on ? 1 : 0,
                  transform: on ? "translateX(0)" : "translateX(-18px)",
                  transition: "opacity 500ms ease, transform 500ms ease",
                  transitionDelay: `${baseOffset + i * CHAR_DELAY}ms`,
                }}
              >
                {ch === " " ? "\u00A0" : ch}
              </span>
            ))}
          </span>
        );
      })}
    </h1>
  );
}

/* Fade-in wrapper. */
function FadeIn({
  children,
  delay = 0,
  duration = 1000,
  className,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setVisible(true), delay);
    return () => window.clearTimeout(t);
  }, [delay]);
  return (
    <div
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transition: `opacity ${duration}ms ease`,
      }}
    >
      {children}
    </div>
  );
}

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Slow the video down so clouds drift more languidly. Reapply on loop in case the browser resets rate.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const apply = () => {
      v.playbackRate = HERO_VIDEO_SPEED;
    };
    apply();
    v.addEventListener("loadedmetadata", apply);
    v.addEventListener("play", apply);
    return () => {
      v.removeEventListener("loadedmetadata", apply);
      v.removeEventListener("play", apply);
    };
  }, []);

  return (
    <header className="hero-vex">
      <video
        ref={videoRef}
        className="hero-vex__video"
        src={HERO_VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden
      />

      <div className="hero-vex__content">
        <div className="container">
          <div className="hero-vex__inner">
            <AnimatedLines
              className="hero-vex__h1"
              lines={[
                { text: "The Investment Bank" },
                {
                  text: "for LP\u2011Led Secondaries.",
                  className: "hero-vex__h1-accent",
                },
              ]}
            />

            <FadeIn delay={800} duration={1000}>
              <p className="hero-vex__sub">
                The Modern Exit for Private Fund Investors.
              </p>
            </FadeIn>

            <FadeIn delay={1200} duration={1000}>
              <div className="hero-vex__ctas">
                <Link
                  href={APP_SELLER_SIGNUP}
                  className="hero-vex__btn hero-vex__btn--solid"
                >
                  Get Started
                </Link>
                <Link
                  href={APP_BUYER_SIGNUP}
                  className="hero-vex__btn hero-vex__btn--glass liquid-glass"
                >
                  Join our Buyer Network
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </header>
  );
}
