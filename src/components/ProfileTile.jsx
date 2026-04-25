// src/components/ProfileTile.jsx

//==============================
//  PROFILE / IDENTITY TILE
//==============================
// This tile gives the portfolio a human identity.
// It uses your photo, role, location and short positioning statement.

import profilePhoto from "../assets/ddjunaidi4k.webp";
import { MapPin, CircleCheck } from "lucide-react";
import { SITE_CONFIG } from "../config";

const ProfileTile = () => {
  return (
    <div className="flex h-full flex-col justify-between gap-6">
      {/*==============================
      TOP HEADER
      ==============================*/}
      <div className="flex items-start justify-between gap-4">

        {/* Profile Photo */}
        <img
          src={profilePhoto}
          alt="Junaidi Samsudin"
          className="
            h-32 w-24
            rounded-3xl
            object-cover
            object-top
            ring-2 ring-white/10
            shadow-2xl
          "
        />

        {/* Status Badge */}
        <div className="
            flex items-center gap-2
            rounded-full
            border border-emerald-400/20
            bg-emerald-400/10
            px-4 py-2
            text-xs font-medium
            text-emerald-300
        ">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Open to Opportunities
        </div>

      </div>

      {/* Identity text */}
      <div>
        <p className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-zinc-500">
          <MapPin size={14} />
          {SITE_CONFIG.location}
        </p>

        <h1 className="text-3xl font-black tracking-tight text-white md:text-4xl">
          {SITE_CONFIG.name}
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          {SITE_CONFIG.shortIntro}
        </p>
      </div>

      {/* Status */}
      <div className="flex items-center gap-2 rounded-2xl bg-white/5 p-3 text-sm text-zinc-300">
        <CircleCheck size={16} className="text-blue-400" />
        {SITE_CONFIG.status}
      </div>
    </div>
  );
};

export default ProfileTile;