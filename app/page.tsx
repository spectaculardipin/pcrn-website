import React from "react";
import Link from "next/link";
import {
  FileText,
  ShieldCheck,
  Scale,
  ArrowRight,
  AlertTriangle,
  Receipt,
  HeartPulse,
} from "lucide-react";
import Hero from "@/components/Hero";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Surface from "@/components/ui/Surface";
import Callout from "@/components/ui/Callout";

export default function HomePage() {
  return (
    <div className="transition-colors duration-200">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. The Patient Rights Problem in Nepal */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E1B28] dark:text-rose-400">
              The Problem in Nepal
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Why Patient Rights Advocacy is Urgently Needed in Nepal
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              While the Constitution of Nepal recognizes health as a fundamental human right, patients and families across both public and private hospitals frequently encounter severe barriers to dignity, transparency, and justice.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Issue 1 */}
            <Surface padding="sm">
              <div className="w-9 h-9 rounded-lg bg-rose-100/80 dark:bg-rose-950/70 text-[#9E1B28] dark:text-rose-400 flex items-center justify-center mb-3">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
                Informed Consent Disregard
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Consent forms are frequently printed in English or legalistic jargon, signed under extreme distress moments before surgery without verbal counseling or alternative explanations.
              </p>
            </Surface>

            {/* Issue 2 */}
            <Surface padding="sm">
              <div className="w-9 h-9 rounded-lg bg-rose-100/80 dark:bg-rose-950/70 text-[#9E1B28] dark:text-rose-400 flex items-center justify-center mb-3">
                <HeartPulse className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
                Emergency Denial & Deposits
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Despite constitutional guarantees under Article 35, critically ill trauma or obstetric patients are regularly denied emergency admission until cash deposits are produced.
              </p>
            </Surface>

            {/* Issue 3 */}
            <Surface padding="sm">
              <div className="w-9 h-9 rounded-lg bg-rose-100/80 dark:bg-rose-950/70 text-[#9E1B28] dark:text-rose-400 flex items-center justify-center mb-3">
                <Receipt className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
                Opaque Billing & Retentions
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Lump-sum hospital bills, medicine markups exceeding official MRPs, and unlawful detention of impoverished patients or deceased bodies remain distressing occurrences.
              </p>
            </Surface>

            {/* Issue 4 */}
            <Surface padding="sm">
              <div className="w-9 h-9 rounded-lg bg-rose-100/80 dark:bg-rose-950/70 text-[#9E1B28] dark:text-rose-400 flex items-center justify-center mb-3">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-2">
                Absent Grievance Recourse
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Most hospitals lack functioning patient grievance desks. When tragic outcomes occur, the lack of transparent dialogue frequently leads to destructive physical clashes.
              </p>
            </Surface>
          </div>

          {/* Legal quotation highlight */}
          <Callout variant="rose" padding="lg" className="mt-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 border border-rose-300 dark:border-rose-800 text-[#9E1B28] dark:text-rose-400 flex items-center justify-center shrink-0 shadow-xs">
                <Scale className="w-6 h-6" />
              </div>
              <div className="space-y-1 text-center md:text-left">
                <h4 className="text-sm font-bold text-[#9E1B28] dark:text-rose-400 tracking-wide uppercase">
                  Constitutional Guarantee • Article 35(1), Constitution of Nepal
                </h4>
                <p className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-medium italic">
                  &ldquo;Every citizen shall have the right to free basic health services from the State, and no one shall be deprived of emergency health services.&rdquo;
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 pt-0.5">
                  Public Health Service Act 2075 enforces mandatory emergency care across both private and government healthcare institutions.
                </p>
              </div>
            </div>
          </Callout>
        </Container>
      </section>

      {/* 3. Our Core Focus Initiatives — Responding to the Crisis */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E1B28] dark:text-rose-400">
              Our Response
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Three Commitments to Turn Rights into Reality
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              As a newly founded advocacy NGO, PCRN structures its work across three forward-looking commitments designed to achieve lasting institutional change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <Surface padding="md" className="hover:border-[#9E1B28] dark:hover:border-rose-500 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-[#9E1B28] dark:text-rose-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                1. Legal & Policy Advocacy
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Engaging lawmakers, the Nepal Medical Council, and Ministry of Health to formulate binding Patient Charters and streamline administrative dispute resolution.
              </p>
              <Link
                href="/focus-areas#legal-advocacy"
                className="text-xs font-semibold text-[#9E1B28] dark:text-rose-400 inline-flex items-center gap-1"
              >
                <span>Learn more</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </Surface>

            {/* Pillar 2 */}
            <Surface padding="md" className="hover:border-[#9E1B28] dark:hover:border-rose-500 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-[#9E1B28] dark:text-rose-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                2. Public Rights Literacy
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Producing multilingual pamphlets, conducting hospital patient awareness camps, and educating youth so every family enters health clinics with confidence.
              </p>
              <Link
                href="/focus-areas#public-awareness"
                className="text-xs font-semibold text-[#9E1B28] dark:text-rose-400 inline-flex items-center gap-1"
              >
                <span>Learn more</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </Surface>

            {/* Pillar 3 */}
            <Surface padding="md" className="hover:border-[#9E1B28] dark:hover:border-rose-500 transition-all group">
              <div className="w-12 h-12 rounded-lg bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-[#9E1B28] dark:text-rose-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
                3. Hospital Policy Monitoring
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Tracking whether public and private facilities actively maintain functional grievance desks, display price lists, and honor the 10% indigent bed quota.
              </p>
              <Link
                href="/focus-areas#hospital-monitoring"
                className="text-xs font-semibold text-[#9E1B28] dark:text-rose-400 inline-flex items-center gap-1"
              >
                <span>Learn more</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </Surface>
          </div>
        </Container>
      </section>

      {/* 4. Latest Updates */}
      <section className="py-10 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <Container>
          <div className="text-center space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E1B28] dark:text-rose-400">
              Latest Updates
            </span>
            <p className="text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              <span className="font-medium">Latest:</span> PCRN registered Sep 2026 • 10% bed quota reminder • Patient Rights Handbook released
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs">
              <Link href="/about#registration" className="font-semibold text-[#9E1B28] dark:text-rose-400 hover:underline">
                Registration details
              </Link>
              <span aria-hidden="true">/</span>
              <Link href="/know-your-rights/right-to-transparent-billing" className="font-semibold text-[#9E1B28] dark:text-rose-400 hover:underline">
                10% quota guide
              </Link>
              <span aria-hidden="true">/</span>
              <a href="/documents/PCRN-Patient-Rights-Guide-Nepal.pdf" download className="font-semibold text-[#9E1B28] dark:text-rose-400 hover:underline">
                Download Patient Rights Handbook
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Call To Action Footer Banner */}
      <section className="bg-[#9E1B28] dark:bg-rose-950 text-white py-14 border-t border-rose-900/40">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Stand with Patients Across Nepal
            </h2>
            <p className="text-sm sm:text-base text-rose-100 leading-relaxed">
              Whether by reporting a hospital grievance, volunteering your legal or medical expertise, or becoming a founding member, your voice helps create a healthcare system governed by dignity and law.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Button href="/get-involved" variant="white" size="lg">
                Join Our Cause
              </Button>
              <Button href="/contact" variant="white" size="lg" className="bg-transparent text-white border-white hover:bg-white/10 dark:bg-transparent dark:text-white dark:border-white/80 dark:hover:bg-white/10">
                Contact Our Secretariat
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}