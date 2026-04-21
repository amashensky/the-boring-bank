"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutStory() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    v.playsInline = true;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    const onVis = () => {
      if (document.visibilityState === "visible") tryPlay();
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const toggleAudio = () => {
    const v = videoRef.current;
    if (!v) return;
    const next = !muted;
    v.muted = next;
    setMuted(next);
    v.play().catch(() => {});
  };

  return (
    <section className="about-why about-why--split sr sr-up sr-1">
      <div className="container about-why__grid">
        <div className="about-why__media">
          <div className="about-why__video-wrap">
            <video
              ref={videoRef}
              className="about-why__video"
              src="/about-glass.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label="The Boring Bank"
            />
            <button
              type="button"
              className="about-why__audio-btn"
              onClick={toggleAudio}
              aria-label={muted ? "Unmute video" : "Mute video"}
              aria-pressed={!muted}
            >
              {muted ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M11 5 6 9H3v6h3l5 4V5Z"
                    fill="currentColor"
                  />
                  <path
                    d="m16 9 5 6m0-6-5 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M11 5 6 9H3v6h3l5 4V5Z"
                    fill="currentColor"
                  />
                  <path
                    d="M15.5 8.5a5 5 0 0 1 0 7M18.5 5.5a9 9 0 0 1 0 13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              )}
              <span>{muted ? "Sound off" : "Sound on"}</span>
            </button>
          </div>
        </div>

        <div className="about-why__col">
          <h2 className="ag-heading about-why__h">
            Here&rsquo;s a{" "}
            <span className="ag-heading-rotator">
              <span className="ag-heading-word about-why__h-word">
                handful of reasons.
              </span>
            </span>
          </h2>
          <ul className="about-why__list">
            <li>Every LP&#8209;led secondary runs the same broken playbook.</li>
            <li>Price discovery happens in bilateral phone calls.</li>
            <li>Big desks skip the deals that don&rsquo;t justify their fee.</li>
            <li>Buyers have teams and models. Sellers don&rsquo;t.</li>
            <li>We built it so sellers walk in with the same facts and leverage.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
