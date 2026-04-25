// src/components/NowBuildingTile.jsx

//==============================
//  NOW BUILDING TILE
//==============================
// Shows what you are currently focused on.
// This makes the portfolio feel alive and current.

import { Hammer } from "lucide-react";
import { SITE_CONFIG } from "../config";

const NowBuildingTile = () => {
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
          <Hammer size={14} />
          Now Building
        </p>

        <h2 className="text-2xl font-bold tracking-tight">
          Software, AI products and engineering depth.
        </h2>
      </div>

      <div className="mt-6 space-y-3">
        {SITE_CONFIG.currentFocus.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NowBuildingTile;