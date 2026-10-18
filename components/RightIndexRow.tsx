import Link from "next/link";
import { FileText, ShieldCheck, HeartPulse, Lock, AlertOctagon, Receipt, ClipboardList, Scale, ArrowRight } from "lucide-react";
import { PatientRight } from "@/content/rights";

interface RightIndexRowProps {
  right: PatientRight;
}

function getIcon(iconName: string) {
  switch (iconName) {
    case "FileText":
      return <FileText className="w-5 h-5 text-[#9E1B28] dark:text-rose-400" />;
    case "ShieldCheck":
      return <ShieldCheck className="w-5 h-5 text-[#9E1B28] dark:text-rose-400" />;
    case "HeartPulse":
      return <HeartPulse className="w-5 h-5 text-[#9E1B28] dark:text-rose-400" />;
    case "Lock":
      return <Lock className="w-5 h-5 text-[#9E1B28] dark:text-rose-400" />;
    case "AlertOctagon":
      return <AlertOctagon className="w-5 h-5 text-[#9E1B28] dark:text-rose-400" />;
    case "Receipt":
      return <Receipt className="w-5 h-5 text-[#9E1B28] dark:text-rose-400" />;
    case "ClipboardList":
      return <ClipboardList className="w-5 h-5 text-[#9E1B28] dark:text-rose-400" />;
    case "Scale":
    default:
      return <Scale className="w-5 h-5 text-[#9E1B28] dark:text-rose-400" />;
  }
}

export default function RightIndexRow({ right }: RightIndexRowProps) {
  return (
    <Link
      href={`/know-your-rights/${right.id}`}
      className="group flex items-start gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-[#9E1B28]/40 dark:hover:border-rose-500/50 transition-all shadow-sm"
    >
      <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-800 border border-rose-200 dark:border-rose-900/60 flex items-center justify-center shrink-0 shadow-xs">
        {getIcon(right.iconName)}
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-[11px] font-bold text-[#9E1B28] dark:text-rose-400 uppercase tracking-wider block">
          Patient Right #{right.number}
        </span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-tight group-hover:text-[#9E1B28] dark:group-hover:text-rose-400 transition-colors">
          {right.title}
        </h3>
        <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-0.5 truncate">
          {right.nepaliTitle}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 line-clamp-2">
          {right.shortSummary}
        </p>
      </div>
      <div className="shrink-0 flex items-center">
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#9E1B28] dark:text-rose-400 group-hover:underline">
          <span>Read details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}