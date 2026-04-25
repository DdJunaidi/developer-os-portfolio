// src/components/CertificationsTile.jsx

//==============================
//  CERTIFICATIONS TILE
//==============================
// Certifications are still useful, but they should not overpower projects.
// This version keeps them compact and premium.

import { SITE_CONFIG } from "../config";

const CertificationsTile = () => {
  return (
    <div className="h-full">
      <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-zinc-500">
        Certifications
      </p>

      <div className="grid grid-cols-2 gap-3">
        {SITE_CONFIG.certifications.map((cert) => (
          <div
            key={cert.name}
            className="flex items-center gap-3 rounded-2xl bg-white/[0.03] p-3"
          >
            <img
              src={cert.badge}
              alt={cert.name}
              className="h-10 w-10 rounded-lg object-contain grayscale transition duration-300 hover:grayscale-0"
            />

            <div>
              <p className="text-sm font-bold leading-tight">{cert.name}</p>
              <p className="text-[10px] uppercase tracking-wide text-zinc-500">
                {cert.org}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificationsTile;