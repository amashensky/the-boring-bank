"use client";

import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { APP_BUYER_SIGNUP, SITE_ADVISORY_INQUIRY } from "@/lib/appUrls";

/* ----------------------------------------------------------------
 * BuyerHeroVideo — cinematic fullscreen video hero for /for-buyers.
 *
 * Mirrors HeroVideo (homepage) in structure: fullscreen autoplay
 * loop video, character-by-character headline entrance, staggered
 * fade-ins for subtitle and CTAs, glassmorphic CTA buttons.
 * -------------------------------------------------------------- */

// Primary video source (buyer-facing cinematic loop).
const HERO_VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";
// Local fallback if remote source is unavailable.
const HERO_VIDEO_FALLBACK = "/night-loop.mp4";
const HERO_VIDEO_SPEED = 0.8;

const CHAR_DELAY = 30;
const INITIAL_DELAY = 200;

type Line = { text: string; style?: CSSProperties; className?: string };

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
        transform: visible ? "translateY(0)" : "translateY(14px)",
        transition: `opacity ${duration}ms ease, transform ${duration}ms ease`,
      }}
    >
      {children}
    </div>
  );
}

export default function BuyerHeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [useFallback, setUseFallback] = useState(false);

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
    <header className="hero-vex hero-vex--buyer">
      <video
        ref={videoRef}
        key={useFallback ? "fb" : "primary"}
        className="hero-vex__video"
        src={useFallback ? HERO_VIDEO_FALLBACK : HERO_VIDEO_SRC}
        onError={() => {
          if (!useFallback) setUseFallback(true);
        }}
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
                { text: "Secondaries Platform" },
                {
                  text: "Built for Buyers.",
                  className: "hero-vex__h1-accent",
                },
              ]}
            />

            <FadeIn delay={800} duration={1000}>
              <p className="hero-vex__sub">
                Mandate-matched deal flow. IC-ready packages. No cost to join.
              </p>
            </FadeIn>

            <FadeIn delay={1200} duration={1000}>
              <div className="hero-vex__ctas">
                <Link
                  href={APP_BUYER_SIGNUP}
                  className="hero-vex__btn hero-vex__btn--solid"
                >
                  Join our Buyer Network
                </Link>
                <Link
                  href={SITE_ADVISORY_INQUIRY}
                  className="hero-vex__btn hero-vex__btn--glass liquid-glass"
                >
                  Speak with a Banker
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </header>
  );
}
