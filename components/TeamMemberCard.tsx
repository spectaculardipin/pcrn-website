import React from "react";
import Image from "next/image";

export interface TeamMemberProps {
  name: string;
  role: string;
  nepaliRole?: string;
  qualifications?: string;
  bio: string;
  imageSrc: string;
}

export default function TeamMemberCard({
  name,
  role,
  nepaliRole,
  qualifications,
  bio,
  imageSrc,
}: TeamMemberProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col">
      <div className="relative aspect-square w-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/95 via-slate-950/80 to-slate-950/20 p-4 text-white">
          <p className="text-xs font-semibold text-rose-300 tracking-wide">
            {role}
          </p>
          {nepaliRole && (
            <p className="text-[11px] text-slate-200 font-medium">
              {nepaliRole}
            </p>
          )}
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug">
            {name}
          </h3>
          {qualifications && (
            <p className="text-xs text-[#9E1B28] dark:text-rose-400 font-medium mt-0.5">
              {qualifications}
            </p>
          )}
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5">
            {bio}
          </p>
        </div>

        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>PCRN Executive Board</span>
          </span>
          <span className="text-slate-400 dark:text-slate-500">Kathmandu</span>
        </div>
      </div>
    </div>
  );
}
