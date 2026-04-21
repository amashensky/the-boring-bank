"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Nav from "./Nav";

export default function NavWrapper() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const transparentPaths = ["/", "/for-buyers"];
  const solid = !transparentPaths.includes(pathname) || scrolled;
  return <Nav solid={solid} />;
}
