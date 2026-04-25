// src/components/ProjectCard.jsx

//==============================
//  PROJECT CARD
//==============================
// Reusable project tile.
// Supports both flagship and normal project cards.

import { ExternalLink } from "lucide-react";

const ProjectCard = ({ project }) => {
  const isFeatured = project.featured;

  return (
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group
        relative
        overflow-hidden
        rounded-3xl
        border border-white/10
        bg-zinc-900
        p-6
        transition-all duration-300
        hover:-translate-y-1
        hover:border-white/20
        ${project.size}
      `}
    >
      {/* Decorative glow */}
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-blue-500/20 blur-3xl transition group-hover:bg-blue-500/30" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        {/* Top row */}
        <div className="flex items-start justify-between gap-4">
          <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300">
            {project.type}
          </span>

          <ExternalLink
            size={18}
            className="text-zinc-500 transition group-hover:text-white"
          />
        </div>

        {/* Main content */}
        <div className={isFeatured ? "mt-16" : "mt-8"}>
          <h3
            className={
              isFeatured
                ? "max-w-2xl text-4xl font-black tracking-tight md:text-5xl"
                : "text-2xl font-bold tracking-tight"
            }
          >
            {project.title}
          </h3>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-400">
            {project.description}
          </p>

          {/* Stack pills */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Footer hint */}
        <p className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 transition group-hover:text-white">
          Open project ↗
        </p>
      </div>
    </a>
  );
};

export default ProjectCard;