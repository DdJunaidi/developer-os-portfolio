// src/App.jsx

//==================================================
//  MAIN PORTFOLIO APP
//==================================================
// This file controls the full Bento layout.
//
// Requested layout:
//
// Row 1:
// - Profile
// - Terminal
//
// Row 2:
// - Now Building
// - Professional Experience
//
// Row 3:
// - Flagship Project
// - Impact Snapshot
//
// Row 4:
// - Certifications
// - Capstone Project
//
// Row 5:
// - Full Stack App
// - Engineering Toolkit
//
// Row 6:
// - Let's Connect
//
// The layout uses a 4-column grid on desktop.
// Each row is built using md:col-span-* classes.
// Mobile automatically stacks everything into 1 column.

import BentoGrid from "./components/BentoGrid";
import BentoTile from "./components/BentoTile";
import ProfileTile from "./components/ProfileTile";
import NowBuildingTile from "./components/NowBuildingTile";
import MetricsTile from "./components/MetricsTile";
import TerminalTile from "./components/TerminalTile";
import TechStackTile from "./components/TechStackTile";
import CertificationsTile from "./components/CertificationsTile";
import ProjectCard from "./components/ProjectCard";
import { SITE_CONFIG } from "./config";
import { Github, Linkedin, Mail, FileDown, Ship } from "lucide-react";

function App() {
  //==================================================
  //  PROJECT SELECTIONS
  //==================================================
  // This keeps the JSX readable below.
  // If you add more projects in config.jsx, update the logic here
  // or create categories like featured/capstone/fullstack.

  const flagshipProject = SITE_CONFIG.projects.find(
    (project) => project.featured
  );

  const capstoneProject = SITE_CONFIG.projects.find(
    (project) => project.title.includes("TasteMatch")
  );

  const fullStackProject = SITE_CONFIG.projects.find(
    (project) => project.title.includes("Silent Library")
  );

  return (
    <main className="min-h-screen overflow-hidden bg-zinc-950 text-white selection:bg-blue-500/30">
      {/*==================================================
          PREMIUM BACKGROUND GLOW
      ==================================================*/}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_35%)]" />

      <BentoGrid className="relative z-10 grid-flow-dense">
        {/*==================================================
            ROW 1 — PROFILE
        ==================================================*/}
        <BentoTile className="md:col-span-2 md:row-span-2">
          <ProfileTile />
        </BentoTile>

        {/*==================================================
            ROW 1 — INTERACTIVE TERMINAL
        ==================================================*/}
        <BentoTile className="md:col-span-2 md:row-span-2 !p-0">
          <TerminalTile />
        </BentoTile>

        {/*==================================================
            ROW 2 — NOW BUILDING
        ==================================================*/}
        <BentoTile className="md:col-span-2 md:row-span-2">
          <NowBuildingTile />
        </BentoTile>

        {/*==================================================
            ROW 2 — PROFESSIONAL EXPERIENCE / NAVTOR
        ==================================================*/}
        <BentoTile className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-950/80 to-zinc-900">
          <div className="flex h-full flex-col justify-between gap-8">
            <div>
              <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-blue-300/70">
                <Ship size={14} />
                Professional Experience
              </p>

              <h2 className="text-2xl font-black tracking-tight">
                Development work in maritime software.
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-zinc-300">
                Currently contributing in NAVTOR’s development environment,
                bringing together support engineering, domain knowledge, legacy
                systems understanding and modern software development.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {[
                "NAVTOR",
                "Maritime Tech",
                "Support Engineering",
                "Development",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-blue-300/20 bg-blue-300/10 px-3 py-1 text-xs text-blue-100"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </BentoTile>

        {/*==================================================
            ROW 3 — FLAGSHIP PROJECT
        ==================================================*/}
        {flagshipProject && (
          <ProjectCard project={flagshipProject} />
        )}

        {/*==================================================
            ROW 3 — IMPACT SNAPSHOT
        ==================================================*/}
        <BentoTile className="md:col-span-1 md:row-span-2">
          <MetricsTile />
        </BentoTile>

        {/*==================================================
            ROW 4 — CERTIFICATIONS
        ==================================================*/}
        <BentoTile className="md:col-span-2 md:row-span-1">
          <CertificationsTile />
        </BentoTile>

        {/*==================================================
            ROW 4 — CAPSTONE PROJECT
        ==================================================*/}
        {capstoneProject && (
          <ProjectCard project={capstoneProject} />
        )}

        {/*==================================================
            ROW 5 — FULL STACK APP
        ==================================================*/}
        {fullStackProject && (
          <ProjectCard project={fullStackProject} />
        )}

        {/*==================================================
            ROW 5 — ENGINEERING TOOLKIT
        ==================================================*/}
        <BentoTile className="md:col-span-3 md:row-span-2">
          <TechStackTile />
        </BentoTile>

        {/*==================================================
            ROW 6 — CONTACT CTA
        ==================================================*/}
        <BentoTile className="md:col-span-4 md:row-span-1 bg-white text-black">
          <div className="flex h-full flex-col gap-6 md:flex-row md:items-center md:justify-between">
            {/* Left text */}
            <div className="max-w-xl">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
                Let’s Connect
              </p>

              <h2 className="mt-2 text-3xl font-black leading-tight tracking-tight text-white md:text-4xl">
                Open to software engineering conversations.
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Feel free to reach out for software engineering roles,
                collaboration, project discussions or professional networking.
              </p>
            </div>

            {/* Right buttons */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 md:min-w-[420px]">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex min-h-[82px] flex-col items-center justify-center rounded-2xl bg-black px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-zinc-800"
              >
                <Mail size={18} className="mb-2" />
                Email
              </a>

              <a
                href={SITE_CONFIG.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[82px] flex-col items-center justify-center rounded-2xl bg-zinc-200 px-4 py-3 text-center text-sm font-bold text-black transition hover:bg-zinc-300"
              >
                <FileDown size={18} className="mb-2" />
                CV
              </a>

              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[82px] flex-col items-center justify-center rounded-2xl bg-zinc-200 px-4 py-3 text-center text-sm font-bold text-black transition hover:bg-zinc-300"
              >
                <Github size={18} className="mb-2" />
                GitHub
              </a>

              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[82px] flex-col items-center justify-center rounded-2xl bg-zinc-200 px-4 py-3 text-center text-sm font-bold text-black transition hover:bg-zinc-300"
              >
                <Linkedin size={18} className="mb-2" />
                LinkedIn
              </a>
            </div>
          </div>
        </BentoTile>
      </BentoGrid>

      {/*==================================================
          FOOTER
      ==================================================*/}
      <footer className="relative z-10 pb-10 text-center text-[10px] uppercase tracking-[0.3em] text-zinc-600">
        Designed & Built by {SITE_CONFIG.name} • Portfolio V3 Auto Deploy Test • 2026
      </footer>
    </main>
  );
}

export default App;