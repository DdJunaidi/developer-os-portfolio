// src/components/MetricsTile.jsx

//==============================
//  IMPACT METRICS TILE
//==============================
// This tile gives recruiters fast proof points.
// Keep the numbers short and easy to scan.

import { SITE_CONFIG } from "../config";

const MetricsTile = () => {
  return (
    <div className="h-full">
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
        Impact Snapshot
      </p>

      <div className="grid grid-cols-2 gap-3">
        {SITE_CONFIG.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-4"
          >
            <p className="text-2xl font-black text-white">{metric.value}</p>
            <p className="mt-1 text-xs leading-relaxed text-zinc-400">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsTile;