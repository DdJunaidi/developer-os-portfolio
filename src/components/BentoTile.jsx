// src/components/BentoTile.jsx

//==============================
//  BENTO TILE WRAPPER
//==============================
// This is the reusable card wrapper used across the portfolio.
// Keep common styling here so all tiles stay visually consistent.

import { motion } from "framer-motion";

const BentoTile = ({ children, className = "" }) => {
  return (
    <motion.div
      //==============================
      //  ENTRY ANIMATION
      //==============================
      // Each tile fades and slides up slightly when it enters the viewport.
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`
        relative
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-zinc-900/80
        p-6
        shadow-2xl shadow-black/20
        backdrop-blur
        transition-all duration-300
        hover:border-white/20
        ${className}
      `}
    >
      {/* Subtle premium glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/8 via-transparent to-transparent opacity-60" />

      {/* Actual tile content */}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};

export default BentoTile;