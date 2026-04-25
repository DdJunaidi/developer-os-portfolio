// src/components/TechStackTile.jsx

//==============================
//  CAPABILITY-BASED TECH STACK
//==============================
// Instead of showing random technology logos,
// this groups your skills by engineering capability.
// This feels more mature and recruiter-friendly.

import { SITE_CONFIG } from "../config";

const TechStackTile = () => {
  return (
    <div className="h-full">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
        Engineering Toolkit
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {SITE_CONFIG.capabilities.map((group) => (
          <div key={group.title}>
            <h3 className="mb-2 text-sm font-bold text-white">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    border border-white/10
                    bg-white/[0.04]
                    px-3 py-1
                    text-xs
                    text-zinc-300
                  "
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackTile;