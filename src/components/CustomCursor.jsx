import { useState, useEffect } from 'react';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [hovered, setHovered] = useState(false);
  const isReduced = usePrefersReducedMotion();

  useEffect(() => {
    if (isReduced) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const onMouseEnter = () => setHidden(false);
    const onMouseLeave = () => setHidden(true);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    const onMouseOver = (e) => {
      const isInteractive =
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.closest('button') ||
        e.target.closest('a') ||
        e.target.closest('.interactive-card');
      setHovered(!!isInteractive);
    };

    document.addEventListener("mouseover", onMouseOver);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [isReduced]);

  if (isReduced || hidden) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed w-2.5 h-2.5 bg-gold rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {/* Expanding outer ring */}
      <div
        className={`fixed border border-gold/45 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ease-out ${
          hovered ? "w-14 h-14 bg-gold/10 border-gold scale-110" : "w-7 h-7"
        }`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
    </>
  );
}
