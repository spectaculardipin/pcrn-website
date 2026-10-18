import React from "react";

interface SurfaceProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

export default function Surface({
  children,
  className = "",
  padding = "md",
}: SurfaceProps) {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
}