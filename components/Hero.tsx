import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, HeartHandshake, PhoneCall, CheckCircle } from "lucide-react";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 py-12 md:py-20 border-b border-slate-200 dark:border-slate-800 overflow-hidden transition-colors duration-200">
      {/* Subtle background motif */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-rose-50/60 dark:bg-rose-950/20 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-6">
            {/* Humanitarian Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-xs font-semibold text-[#9E1B28] dark:text-rose-400">
              <span className="w-2 h-2 rounded-full bg-[#9E1B28] dark:bg-rose-500"></span>
              <span>Constitutional Right to Health &ndash; Article 35 of Nepal Constitution</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-[1.2]">
              Defending Dignity, Empowering Patients Across
              <span className="text-[#9E1B28] dark:text-rose-500">
                Nepal
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Every citizen deserves compassionate healthcare, clear medical information, and complete transparency. 
              <strong> Patients Rights Concern Nepal (PCRN)</strong> is an independent non-governmental organization 
              championing informed consent, fair medical treatment, and institutional accountability throughout Nepal’s health system.
            </p>

            {/* Value Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle className="w-4 h-4 text-[#9E1B28] dark:text-rose-500 shrink-0" />
                <span>Zero tolerance for emergency denial</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle className="w-4 h-4 text-[#9E1B28] dark:text-rose-500 shrink-0" />
                <span>Transparent & itemized hospital billing</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle className="w-4 h-4 text-[#9E1B28] dark:text-rose-500 shrink-0" />
                <span>Legally backed informed consent</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <CheckCircle className="w-4 h-4 text-[#9E1B28] dark:text-rose-500 shrink-0" />
                <span>Guidance on medical dispute redressal</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Button href="/know-your-rights" size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                Know Your Rights
              </Button>
              <Button href="/get-involved" variant="secondary" size="lg" icon={<HeartHandshake className="w-4 h-4" />}>
                Join Our Cause
              </Button>
            </div>

            {/* Helpline quick strip */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 font-medium">
                <PhoneCall className="w-4 h-4 text-[#9E1B28] dark:text-rose-400" />
                <span>Patient Guidance Helpline:</span>
                <a href="tel:+97714792100" className="text-[#9E1B28] dark:text-rose-400 font-bold hover:underline">
                  +977-1-4792100
                </a>
              </div>
              <span className="hidden sm:inline text-slate-300 dark:text-slate-700" aria-hidden="true"></span>
              <span>Free informational assistance for patients and families</span>
            </div>
          </div>

          {/* Humanitarian Image Column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 bg-slate-100 dark:bg-slate-900 group">
              <div className="relative aspect-4/3 w-full">
                <Image
                  src="images/hero-patient-care.jpg"
                  alt="Doctor and nurse in Nepal compassionately explaining medical treatment to a patient and family"
                  fill
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>

              {/* Gradient overlay for text protection */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating Bottom Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-100 dark:border-slate-800">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-rose-50 dark:bg-rose-950/70 border border-rose-200 dark:border-rose-900/80 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-[#9E1B28] dark:text-rose-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-tight">
                        Right to Dignity & Care
                      </p>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400">
                        Public Health Service Act 2075
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/know-your-rights"
                    className="text-xs font-semibold text-[#9E1B28] dark:text-rose-400 hover:text-[#7F121D] flex items-center gap-1 shrink-0"
                  >
                    <span>Read charter</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
