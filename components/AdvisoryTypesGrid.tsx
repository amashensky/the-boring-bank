"use client";

import { useEffect, useRef, useState } from "react";

type Side = "customer" | "banker";

type Msg = {
  side: Side;
  text?: string;
  file?: string;
  typingMs?: number;
  pauseAfter?: number;
};

type ChatItem = {
  id: number;
  side: Side;
  text?: string;
  file?: string;
};

type Phase = "intro" | "selecting" | "playing";

type Scenario = {
  key: string;
  title: string;
  short: string;
  accent: string;
  status: string;
  messages: Msg[];
};

const INTRO: Msg[] = [
  {
    side: "banker",
    text: "Hi — Banker here. What can I help with today?",
    typingMs: 1600,
    pauseAfter: 500,
  },
];

const SCENARIOS: Scenario[] = [
  {
    key: "portfolio",
    title: "Portfolio Advisory",
    short: "Portfolio",
    accent: "#8b6c2c",
    status: "Reviewing LP book",
    messages: [
      { side: "banker", text: "Portfolio — got it. Tell me about the book.", typingMs: 1400, pauseAfter: 400 },
      { side: "customer", text: "14 LP positions. Need liquidity by Q3.", typingMs: 1500, pauseAfter: 400 },
      { side: "banker", text: "Can you send the manager list?", typingMs: 1300, pauseAfter: 400 },
      { side: "customer", file: "LP_positions.xlsx", typingMs: 900, pauseAfter: 400 },
      { side: "banker", text: "Running a clearing screen. Short list Friday.", typingMs: 1500, pauseAfter: 400 },
      { side: "banker", text: "I'd sequence Vantage IV first.", typingMs: 1200, pauseAfter: 900 },
    ],
  },
  {
    key: "gp",
    title: "GP Advisory",
    short: "GP",
    accent: "#9a5a30",
    status: "Scoping CV design",
    messages: [
      { side: "banker", text: "GP-side — walk me through it.", typingMs: 1300, pauseAfter: 400 },
      { side: "customer", text: "Fund IV's aging. Extension window closing.", typingMs: 1500, pauseAfter: 400 },
      { side: "banker", text: "Continuation vehicle?", typingMs: 1000, pauseAfter: 400 },
      { side: "customer", text: "3 core assets. ~60% of NAV.", typingMs: 1300, pauseAfter: 400 },
      { side: "banker", text: "Tender or full roll?", typingMs: 1000, pauseAfter: 400 },
      { side: "customer", text: "Tender. Send me a structure memo.", typingMs: 1400, pauseAfter: 900 },
    ],
  },
  {
    key: "valuation",
    title: "Valuation Advisory",
    short: "Valuation",
    accent: "#3e6747",
    status: "Building pricing opinion",
    messages: [
      { side: "banker", text: "Valuation — when do you need it by?", typingMs: 1400, pauseAfter: 400 },
      { side: "customer", text: "Board meets Tuesday. Need a range on our stake in Strand IV.", typingMs: 1800, pauseAfter: 400 },
      { side: "banker", text: "Vintage, GP, current mark?", typingMs: 1100, pauseAfter: 400 },
      { side: "customer", text: "2018. Vantage. Marked at $58M.", typingMs: 1400, pauseAfter: 400 },
      { side: "banker", file: "Pricing_opinion_LP.pdf", typingMs: 1200, pauseAfter: 400 },
      { side: "banker", text: "$42–48M indicative. Comp-anchored, IC-ready.", typingMs: 1500, pauseAfter: 900 },
    ],
  },
  {
    key: "transaction",
    title: "Transaction Advisory",
    short: "Transaction",
    accent: "#36627f",
    status: "Scoping bespoke structure",
    messages: [
      { side: "banker", text: "Transaction — what are we working with?", typingMs: 1400, pauseAfter: 400 },
      { side: "customer", text: "6 stakes, mixed vintages, one side letter.", typingMs: 1600, pauseAfter: 400 },
      { side: "banker", text: "Strip transaction?", typingMs: 1000, pauseAfter: 400 },
      { side: "customer", text: "Probably. Need a syndicate of buyers.", typingMs: 1400, pauseAfter: 400 },
      { side: "banker", text: "Lead + 2–3 tail. Bespoke structure.", typingMs: 1400, pauseAfter: 400 },
      { side: "customer", text: "Let's scope it.", typingMs: 1000, pauseAfter: 900 },
    ],
  },
];

const SELECTING_MS = 1900;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function AdvisoryTypesGrid() {
  const [items, setItems] = useState<ChatItem[]>([]);
  const [typing, setTyping] = useState<Side | null>(null);
  const [phase, setPhase] = useState<Phase>("intro");
  const [currentKey, setCurrentKey] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [selectingTick, setSelectingTick] = useState<number>(0);
  const idRef = useRef(0);
  const timers = useRef<number[]>([]);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const queueRef = useRef<string[]>([]);

  const newId = () => ++idRef.current;
  const clearAll = () => {
    timers.current.forEach((t) => window.clearTimeout(t));
    timers.current = [];
  };

  const enqueue = (msgs: Msg[], onDone?: () => void) => {
    let t = 0;
    msgs.forEach((m) => {
      const typingMs = m.typingMs ?? 1200;
      const pauseAfter = m.pauseAfter ?? 400;
      timers.current.push(window.setTimeout(() => setTyping(m.side), t));
      t += typingMs;
      timers.current.push(
        window.setTimeout(() => {
          setTyping(null);
          setItems((prev) => [
            ...prev,
            { id: newId(), side: m.side, text: m.text, file: m.file },
          ]);
        }, t)
      );
      t += pauseAfter;
    });
    timers.current.push(window.setTimeout(() => onDone?.(), t));
  };

  const refillQueue = () => {
    queueRef.current = shuffle(SCENARIOS.map((s) => s.key));
  };

  // Show the picker overlay, animate cursor clicking a choice, then start scenario.
  const goSelect = (key: string) => {
    const idx = SCENARIOS.findIndex((s) => s.key === key);
    if (idx < 0) return;
    setSelectedIndex(idx);
    setSelectingTick((t) => t + 1);
    setPhase("selecting");
    timers.current.push(
      window.setTimeout(() => {
        playScenario(key);
      }, SELECTING_MS)
    );
  };

  const playScenario = (key: string) => {
    const s = SCENARIOS.find((x) => x.key === key);
    if (!s) return;
    setCurrentKey(key);
    // Clear the transcript so it feels like a fresh screen loaded.
    setItems([]);
    setPhase("playing");
    // Customer "picks" the advisory type (matches the click they just saw).
    timers.current.push(
      window.setTimeout(() => {
        setItems((prev) => [
          ...prev,
          { id: newId(), side: "customer", text: s.short },
        ]);
        timers.current.push(
          window.setTimeout(() => {
            enqueue(s.messages, () => {
              timers.current.push(
                window.setTimeout(() => {
                  playNext();
                }, 700)
              );
            });
          }, 500)
        );
      }, 350)
    );
  };

  const playNext = () => {
    if (queueRef.current.length === 0) refillQueue();
    const key = queueRef.current.shift();
    if (!key) return;
    goSelect(key);
  };

  // Kick off: intro greeting, then auto-play scenarios forever.
  useEffect(() => {
    clearAll();
    setItems([]);
    setPhase("intro");
    refillQueue();
    enqueue(INTRO, () => {
      timers.current.push(
        window.setTimeout(() => {
          playNext();
        }, 600)
      );
    });
    return clearAll;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Autoscroll transcript.
  useEffect(() => {
    const el = transcriptRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
  }, [items, typing, phase]);

  const currentStatus = (() => {
    if (phase === "intro") return "Connecting…";
    if (phase === "selecting") {
      const s = SCENARIOS[selectedIndex];
      return s ? `Opening ${s.title}…` : "Opening session…";
    }
    if (phase === "playing") {
      const cur = SCENARIOS.find((s) => s.key === currentKey);
      return cur?.status ?? "In session";
    }
    return "In session";
  })();

  return (
    <div className="adv-chat">
      <div className="adv-chat__screen">
        <div className="adv-chat__chrome">
          <span className="adv-chat__dots" aria-hidden>
            <span className="adv-chat__dot adv-chat__dot--red" />
            <span className="adv-chat__dot adv-chat__dot--yellow" />
            <span className="adv-chat__dot adv-chat__dot--green" />
          </span>
          <span className="adv-chat__chrome-title">Advisory Portal</span>
          <span className="adv-chat__chrome-pad" aria-hidden />
        </div>

        <div className="adv-chat__header">
          <div className="adv-chat__party">
            <span className="adv-chat__avatar adv-chat__avatar--customer">
              <UserIcon />
            </span>
            <span className="adv-chat__party-text">
              <span className="adv-chat__party-name">LP-GP</span>
              <span className="adv-chat__party-role">Customer</span>
            </span>
          </div>
          <div className="adv-chat__party-sep" aria-hidden>
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none">
              <path
                d="M1 5h16M12 1l5 4-5 4"
                stroke="currentColor"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="adv-chat__party adv-chat__party--right">
            <span className="adv-chat__party-text adv-chat__party-text--right">
              <span className="adv-chat__party-name">Banker</span>
              <span className="adv-chat__party-role">The Boring Bank</span>
            </span>
            <span className="adv-chat__avatar adv-chat__avatar--banker">
              TBB
            </span>
          </div>
        </div>

        <div className="adv-chat__stage">
          <div
            ref={transcriptRef}
            className={`adv-chat__transcript${
              phase === "selecting" ? " is-dimmed" : ""
            }`}
            aria-live="polite"
          >
            {items.map((it) => (
              <div
                key={it.id}
                className={`adv-chat__msg adv-chat__msg--${it.side}`}
              >
                <div className="adv-chat__bubble">
                  {it.file ? (
                    <FilePill name={it.file} />
                  ) : (
                    it.text
                  )}
                </div>
              </div>
            ))}
            {typing ? <TypingDots side={typing} /> : null}
          </div>

          {phase === "selecting" && (
            <div
              key={`sel-${selectingTick}`}
              className="adv-chat__picker"
              aria-hidden
            >
              <div className="adv-chat__picker-label">
                Select an advisory type
              </div>
              <div className="adv-chat__picker-chips">
                {SCENARIOS.map((s, i) => (
                  <div
                    key={s.key}
                    className={`adv-chat__picker-chip${
                      i === selectedIndex ? " is-selected" : ""
                    }`}
                    style={
                      {
                        ["--accent" as string]: s.accent,
                      } as React.CSSProperties
                    }
                  >
                    {s.short}
                  </div>
                ))}
                <div
                  className="adv-chat__picker-cursor"
                  style={
                    {
                      ["--i" as string]: selectedIndex,
                    } as React.CSSProperties
                  }
                >
                  <CursorIcon />
                </div>
              </div>
              <div className="adv-chat__picker-loading">
                <span className="adv-chat__picker-loading-dot" />
                <span className="adv-chat__picker-loading-dot" />
                <span className="adv-chat__picker-loading-dot" />
              </div>
            </div>
          )}
        </div>

        <div className="adv-chat__footer">
          <span className="adv-chat__status">
            <span className="adv-chat__status-dot" aria-hidden />
            {currentStatus}
          </span>
          <span className="adv-chat__live" aria-hidden>
            <span className="adv-chat__live-dot" />
            Live
          </span>
        </div>
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden
    >
      <circle
        cx="10"
        cy="7"
        r="3"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M3.5 17c1.1-3 3.6-4.9 6.5-4.9s5.4 1.9 6.5 4.9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FilePill({ name }: { name: string }) {
  return (
    <span className="adv-chat__file">
      <svg
        className="adv-chat__file-icon"
        width="14"
        height="16"
        viewBox="0 0 14 16"
        fill="none"
        aria-hidden
      >
        <path
          d="M2 1h7l4 4v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M9 1v4h4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      <span className="adv-chat__file-name">{name}</span>
    </span>
  );
}

function TypingDots({ side }: { side: Side }) {
  return (
    <div
      className={`adv-chat__typing adv-chat__typing--${side}`}
      aria-hidden
    >
      <span className="adv-chat__typing-dot" />
      <span className="adv-chat__typing-dot" />
      <span className="adv-chat__typing-dot" />
    </div>
  );
}

function CursorIcon() {
  return (
    <svg
      width="22"
      height="24"
      viewBox="0 0 22 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M3 2l13.2 5.5-5.7 1.9-2.3 5.7L3 2z"
        fill="#1c1c1e"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
