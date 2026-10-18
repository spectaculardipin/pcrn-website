import React from "react";

interface CalloutProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  variant?: "rose" | "amber" | "emerald" | "blue";
}

const variantClasses = {
  rose: "bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900/30",
  amber: "bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900/30",
  emerald: "bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/30",
  blue: "bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-900/30",
};

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

interface CalloutProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
  variant?: "rose" | "amber" | "emerald" | "blue";
}

export default function Callout({
  children,
  className = "",
  padding = "md",
  variant = "rose",
}: CalloutProps) {
  return (
    <div
      className={`rounded-xl border ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
}