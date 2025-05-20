import React, { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const PRIMARY_COLOR = "#C27AFF";

const isMobile = () => /Mobi|Android/i.test(navigator.userAgent);

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  const ringSpringX = useSpring(ringX, { stiffness: 200, damping: 30 });
  const ringSpringY = useSpring(ringY, { stiffness: 200, damping: 30 });

  const [isHovering, setIsHovering] = useState(false);
  const [sparkles, setSparkles] = useState([]);
  const sparkleId = useRef(0);
  const magneticTargets = useRef([]);
  const lastSparkleTime = useRef(0);
  const SPARKLE_INTERVAL = 30;

  const updatePosition = (e) => {
    const mx = e.clientX;
    const my = e.clientY;
    let pullX = 0,
      pullY = 0,
      pulled = false;

    magneticTargets.current.forEach((el) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = centerX - mx;
      const dy = centerY - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const radius = 100;

      if (dist < radius) {
        const force = (radius - dist) / radius;
        pullX += dx * force * 0.4;
        pullY += dy * force * 0.4;
        pulled = true;
      }
    });

    const cursorOffset = pulled ? [pullX - 12, pullY - 12] : [-12, -12];
    cursorX.set(mx + cursorOffset[0]);
    cursorY.set(my + cursorOffset[1]);
    ringX.set(mx + cursorOffset[0] - 12);
    ringY.set(my + cursorOffset[1] - 12);

    const now = Date.now();
    if (now - lastSparkleTime.current > SPARKLE_INTERVAL) {
      triggerSplitSparkle(mx, my);
      lastSparkleTime.current = now;
    }
  };

  const triggerSplitSparkle = (x, y) => {
    const sparkleCount = 4;
    const spread = 8;
    const newSparkles = [];

    for (let i = 0; i < sparkleCount; i++) {
      const angle = (Math.PI * 2 * i) / sparkleCount;
      const id = sparkleId.current++;
      const size = 4 + Math.random() * 2;
      const life = 500 + Math.random() * 200;
      newSparkles.push({
        id,
        x,
        y,
        size,
        life,
        vx: Math.cos(angle) * spread,
        vy: Math.sin(angle) * spread,
      });

      setTimeout(() => {
       setSparkles((prev) => prev.filter((s) => s.id !== id));
      }, life); 
    }

    setSparkles((prev) => [...prev, ...newSparkles]);
  };

  useEffect(() => {
    if (isMobile()) return;

    magneticTargets.current = Array.from(document.querySelectorAll(".magnetic"));
    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mouseover", (e) => {
      setIsHovering(
        ["A", "BUTTON"].includes(e.target.tagName) ||
          e.target.classList.contains("cursor-pointer") ||
          e.target.classList.contains("magnetic")
      );
    });

    return () => {
      window.removeEventListener("mousemove", updatePosition);
    };
  }, []);

  if (isMobile()) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 z-[9999] pointer-events-none rounded-full"
        style={{
          translateX: springX,
          translateY: springY,
          width: isHovering ? 30 : 20,
          height: isHovering ? 30 : 20,
          backgroundColor: PRIMARY_COLOR,
          mixBlendMode: "exclusion",
          boxShadow: `0 0 10px ${PRIMARY_COLOR}`,
          transition: "0.3s ease",
        }}
      />

      <motion.div
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full border"
        style={{
          translateX: ringSpringX,
          translateY: ringSpringY,
          width: isHovering ? 60 : 40,
          height: isHovering ? 60 : 40,
          borderColor: PRIMARY_COLOR,
          opacity: 0.5,
          transition: "0.3s ease",
        }}
      />

      {sparkles.map(({ id, x, y, size, vx, vy, life }) => (
        <motion.div
          key={id}
          className="pointer-events-none fixed rounded-full"
          style={{
            width: size,
            height: size,
            left: x,
            top: y,
            backgroundColor: PRIMARY_COLOR,
            boxShadow: `0 0 6px 2px ${PRIMARY_COLOR}`,
          }}
          initial={{ opacity: 0.8, scale: 1 }}
          animate={{ x: vx, y: vy, opacity: 0 }}
          transition={{ duration: life / 1000, ease: "easeOut" }}
        />
      ))}
    </>
  );
};

export default CustomCursor;
