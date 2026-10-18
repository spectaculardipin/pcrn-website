import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "white";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  iconPosition = "right",
  children,
  className = "",
  target,
  rel,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-offset-2 min-h-[44px]";

  const sizeClasses = {
    sm: "text-xs px-4 py-2 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  };

  const variantClasses = {
    primary:
      "bg-[#9E1B28] dark:bg-rose-600 text-white hover:bg-[#7F121D] dark:hover:bg-rose-700 shadow-sm active:bg-[#680F18] focus-visible:outline-[#9E1B28]",
    secondary:
      "bg-white dark:bg-slate-900 text-[#9E1B28] dark:text-rose-400 border border-[#9E1B28] dark:border-rose-500/60 hover:bg-[#FEF2F2] dark:hover:bg-rose-950/40 active:bg-[#FEE2E2] focus-visible:outline-[#9E1B28]",
    outline:
      "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white active:bg-slate-100 focus-visible:outline-slate-500",
    white:
      "bg-white text-[#9E1B28] hover:bg-slate-50 shadow-sm active:bg-slate-100 focus-visible:outline-white",
  };

  const combinedClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === "left" && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} target={target} rel={rel}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
