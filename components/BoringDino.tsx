"use client";

import { useEffect, useRef, useState } from "react";

type Obstacle = { x: number; w: number; h: number };

type GameState = {
  y: number;
  vy: number;
  onGround: boolean;
  obstacles: Obstacle[];
  speed: number;
  frame: number;
  score: number;
  running: boolean;
  gameOver: boolean;
};

const W = 760;
const H = 200;
const GROUND_Y = 150;
const PLAYER_X = 60;
const PLAYER_W = 36;
const PLAYER_H = 34;
const GRAVITY = 0.7;
const JUMP_V = -12.8;

export default function BoringDino() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef<GameState>({
    y: 0,
    vy: 0,
    onGround: true,
    obstacles: [],
    speed: 6,
    frame: 0,
    score: 0,
    running: false,
    gameOver: false,
  });

  const [displayScore, setDisplayScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = W * DPR;
    canvas.height = H * DPR;
    canvas.style.width = "100%";
    canvas.style.maxWidth = W + "px";
    canvas.style.aspectRatio = `${W}/${H}`;
    ctx.scale(DPR, DPR);

    let animId = 0;
    let lastObstacleFrame = 0;

    const reset = () => {
      const s = stateRef.current;
      s.y = 0;
      s.vy = 0;
      s.onGround = true;
      s.obstacles = [];
      s.speed = 6;
      s.frame = 0;
      s.score = 0;
      s.running = true;
      s.gameOver = false;
      lastObstacleFrame = 0;
      setDisplayScore(0);
      setIsRunning(true);
      setIsGameOver(false);
    };

    const jump = () => {
      const s = stateRef.current;
      if (s.onGround && s.running && !s.gameOver) {
        s.vy = JUMP_V;
        s.onGround = false;
      }
    };

    const handleInput = () => {
      const s = stateRef.current;
      if (s.gameOver) {
        reset();
      } else if (!s.running) {
        s.running = true;
        setIsRunning(true);
      } else {
        jump();
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Space" || e.code === "ArrowUp") {
        e.preventDefault();
        handleInput();
      }
    };

    const onPointer = (e: PointerEvent) => {
      e.preventDefault();
      handleInput();
      canvas.focus();
    };

    window.addEventListener("keydown", onKey);
    canvas.addEventListener("pointerdown", onPointer);

    const loop = () => {
      ctx.clearRect(0, 0, W, H);
      const s = stateRef.current;

      // Subtle parallax dots in "sky"
      ctx.fillStyle = "rgba(30,42,34,0.08)";
      const dotOffset = (s.frame * s.speed * 0.25) % 80;
      for (let i = 0; i < 8; i++) {
        const x = ((i * 110 - dotOffset) + W * 2) % W;
        const y = 30 + ((i * 13) % 55);
        ctx.beginPath();
        ctx.arc(x, y, 1.4, 0, Math.PI * 2);
        ctx.fill();
      }

      // Ground line
      ctx.strokeStyle = "rgba(30,42,34,0.35)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, GROUND_Y + PLAYER_H);
      ctx.lineTo(W, GROUND_Y + PLAYER_H);
      ctx.stroke();

      // Ground dashes (moving)
      const dashGap = 26;
      const dashOffset = (s.frame * s.speed) % dashGap;
      ctx.fillStyle = "rgba(30,42,34,0.3)";
      for (let x = -dashOffset; x < W; x += dashGap) {
        ctx.fillRect(x, GROUND_Y + PLAYER_H + 5, 9, 1.5);
      }

      if (s.running && !s.gameOver) {
        // Physics
        s.vy += GRAVITY;
        s.y += s.vy;
        if (s.y >= 0) {
          s.y = 0;
          s.vy = 0;
          s.onGround = true;
        }

        // Spawn obstacles
        const minGap = Math.max(60, 140 - s.speed * 5);
        if (s.frame - lastObstacleFrame > minGap && Math.random() < 0.045) {
          const h = 22 + Math.random() * 30;
          const w = 14 + Math.random() * 12;
          s.obstacles.push({ x: W + 20, w, h });
          lastObstacleFrame = s.frame;
        }

        // Move + collide
        for (let i = s.obstacles.length - 1; i >= 0; i--) {
          const o = s.obstacles[i];
          o.x -= s.speed;
          if (o.x + o.w < -20) {
            s.obstacles.splice(i, 1);
            continue;
          }
          const playerTop = GROUND_Y + s.y;
          const playerBottom = playerTop + PLAYER_H;
          const playerLeft = PLAYER_X + 4;
          const playerRight = PLAYER_X + PLAYER_W - 4;
          const obsLeft = o.x + 2;
          const obsRight = o.x + o.w - 2;
          const obsTop = GROUND_Y + PLAYER_H - o.h;
          const obsBottom = GROUND_Y + PLAYER_H;
          if (
            playerRight > obsLeft &&
            playerLeft < obsRight &&
            playerBottom > obsTop + 2 &&
            playerTop < obsBottom
          ) {
            s.gameOver = true;
            s.running = false;
            setIsGameOver(true);
            setIsRunning(false);
            setHighScore((hi) => Math.max(hi, s.score));
          }
        }

        // Score
        s.frame++;
        if (s.frame % 3 === 0) {
          s.score++;
          if (s.score % 2 === 0) setDisplayScore(s.score);
        }
        if (s.frame % 260 === 0) s.speed = Math.min(s.speed + 0.5, 14);
      }

      // Obstacles (red-flag pillars with amber caps)
      for (const o of s.obstacles) {
        const ox = o.x;
        const oy = GROUND_Y + PLAYER_H - o.h;
        ctx.fillStyle = "#2f5f3a";
        roundRect(ctx, ox, oy, o.w, o.h, 2);
        ctx.fillStyle = "#d4a24e";
        ctx.fillRect(ox - 1, oy - 3, o.w + 2, 3);
      }

      // Player (briefcase)
      const py = GROUND_Y + s.y;
      // shadow
      ctx.fillStyle = "rgba(30,42,34,0.15)";
      ctx.beginPath();
      ctx.ellipse(
        PLAYER_X + PLAYER_W / 2,
        GROUND_Y + PLAYER_H + 3,
        18 + s.y * 0.15,
        2.8,
        0,
        0,
        Math.PI * 2
      );
      ctx.fill();
      // handle
      ctx.strokeStyle = "#1e2a22";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(PLAYER_X + PLAYER_W / 2, py + 6, 7, Math.PI, 0);
      ctx.stroke();
      // body
      ctx.fillStyle = "#1e2a22";
      roundRect(ctx, PLAYER_X, py + 6, PLAYER_W, PLAYER_H - 6, 4);
      // accent line
      ctx.strokeStyle = "#d4a24e";
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(PLAYER_X + 4, py + 18);
      ctx.lineTo(PLAYER_X + PLAYER_W - 4, py + 18);
      ctx.stroke();
      // TBB label
      ctx.fillStyle = "#fbf9f2";
      ctx.font = "600 9px Inter, system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("TBB", PLAYER_X + PLAYER_W / 2, py + 26);

      // Start prompt
      if (!s.running && !s.gameOver) {
        ctx.fillStyle = "rgba(30,42,34,0.75)";
        ctx.font = "500 14px Inter, system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("Press Space or tap to open the desk.", W / 2, 68);
        ctx.fillStyle = "rgba(30,42,34,0.45)";
        ctx.font = "500 11px Inter, system-ui, sans-serif";
        ctx.fillText("jump the red flags", W / 2, 88);
      }

      // Game over
      if (s.gameOver) {
        ctx.fillStyle = "#1e2a22";
        ctx.font = "600 22px 'Cormorant Garamond', 'Times New Roman', serif";
        ctx.textAlign = "center";
        ctx.fillText("Close of business.", W / 2, 62);
        ctx.fillStyle = "rgba(30,42,34,0.55)";
        ctx.font = "500 12px Inter, system-ui, sans-serif";
        ctx.fillText("Space or tap to re-run.", W / 2, 86);
      }

      animId = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("keydown", onKey);
      canvas.removeEventListener("pointerdown", onPointer);
    };
  }, []);

  return (
    <div className="dino-wrap">
      <div className="dino-chrome">
        <span className="dino-chrome-brand">the-boring-run</span>
        <div className="dino-scoreboard">
          <span className="dino-score-label">HI</span>
          <span className="dino-score-val">
            {String(highScore).padStart(5, "0")}
          </span>
          <span className="dino-score-sep">·</span>
          <span className="dino-score-val dino-score-val--current">
            {String(displayScore).padStart(5, "0")}
          </span>
        </div>
      </div>
      <canvas
        ref={canvasRef}
        className="dino-canvas"
        tabIndex={0}
        aria-label="Mini jumping game"
      />
      <div className="dino-hint">
        <kbd>Space</kbd> or <kbd>↑</kbd> to jump · tap on mobile
        {isRunning && !isGameOver ? " · running" : ""}
      </div>
    </div>
  );
}

function roundRect(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  w: number,
  h: number,
  r: number
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
  ctx.fill();
}
