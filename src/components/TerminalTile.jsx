// src/components/TerminalTile.jsx

//==============================
//  TERMINAL TILE
//==============================
// Simulates a developer terminal.
// This adds personality while still communicating useful information.

import { useEffect, useState } from "react";

const TerminalTile = () => {
  //==============================
  //  TERMINAL STATE
  //==============================
  const [lines, setLines] = useState(["// booting developer profile..."]);

  //==============================
  //  COMMAND CONTENT
  //==============================
  // Update these commands whenever your role, stack or focus changes.
  const commands = [
    {
      cmd: "whoami",
      res: "Junaidi Samsudin — Full Stack Developer",
    },
    {
      cmd: "current_role",
      res: "Development team @ NAVTOR | Maritime software domain",
    },
    {
      cmd: "stack --core",
      res: "Python · Django · DRF · React · Node.js · MySQL",
    },
    {
      cmd: "focus --2026",
      res: "AI-enabled products · Software Engineering MSc · Clean APIs",
    },
  ];

  //==============================
  //  TYPE COMMANDS OVER TIME
  //==============================
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < commands.length) {
        const current = commands[index];

        setLines((prev) => [
          ...prev,
          `> ${current.cmd}`,
          current.res,
        ]);

        index += 1;
      } else {
        clearInterval(interval);
      }
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full rounded-3xl bg-black/40 p-5 font-mono text-sm">
      {/* Terminal header */}
      <div className="mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
        <div className="h-3 w-3 rounded-full bg-red-500/50" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/50" />
        <div className="h-3 w-3 rounded-full bg-green-500/50" />

        <span className="ml-2 text-xs uppercase tracking-widest text-zinc-500">
          developer-os
        </span>
      </div>

      {/* Terminal output */}
      <div className="space-y-2">
        {lines.map((line, index) => (
          <p
            key={`${line}-${index}`}
            className={
              line.startsWith(">")
                ? "text-blue-300"
                : "text-zinc-300"
            }
          >
            {line}
          </p>
        ))}

        <span className="inline-block h-4 w-2 animate-pulse bg-emerald-400" />
      </div>
    </div>
  );
};

export default TerminalTile;