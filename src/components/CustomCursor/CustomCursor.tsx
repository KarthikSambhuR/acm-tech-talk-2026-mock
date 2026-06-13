"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsHidden(false);
    };

    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseEnter = () => setIsHidden(false);

    const addHoverListeners = () => {
      const clickables = document.querySelectorAll("a, button, [role='button'], input, select, textarea");
      clickables.forEach((el) => {
        el.addEventListener("mouseenter", () => setIsHovered(true));
        el.addEventListener("mouseleave", () => setIsHovered(false));
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Initial query
    addHoverListeners();

    // Re-bind on dynamic content changes
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      observer.disconnect();
    };
  }, []);

  if (isHidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: isHovered ? "48px" : "24px",
        height: isHovered ? "48px" : "24px",
        border: "2px solid var(--accent-1)",
        borderRadius: "50%",
        pointerEvents: "none",
        transform: `translate3d(${position.x - (isHovered ? 24 : 12)}px, ${position.y - (isHovered ? 24 : 12)}px, 0)`,
        transition: "width 0.25s cubic-bezier(0.16, 1, 0.3, 1), height 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.08s ease-out, background-color 0.25s",
        backgroundColor: isHovered ? "rgba(48, 169, 221, 0.15)" : "transparent",
        zIndex: 9999,
      }}
    />
  );
}
