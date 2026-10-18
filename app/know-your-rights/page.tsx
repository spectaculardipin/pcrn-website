"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Download,
  HelpCircle,
  Search,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Surface from "@/components/ui/Surface";
import { patientRights, patientFAQ } from "@/content/rights";
import RightIndexRow from "@/components/RightIndexRow";

export default function KnowYourRightsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const filteredRights = patientRights.filter(
    (right) =>
      right.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      right.nepaliTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      right.shortSummary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      right.legalBasis.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-slate-50/40 dark:bg-slate-950 transition-colors duration-200">
      {/* Page Header */}
      <section className="bg-slate-50 dark:bg-slate-900/60 py-12 md:py-16 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-xs font-semibold text-[#9E1B28] dark:text-rose-400">
              <span>Educational Hub &ndash; बिरामी अधिकार निर्देशिका</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Know Your Rights as a Patient in Nepal
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              In Nepal, healthcare is not an act of charity—it is a protected constitutional and legal right.
              Explore your essential entitlements under the <strong>Public Health Service Act 2075</strong>,
              the <strong>Constitution of Nepal</strong>, the <strong>Health Institution Operation Standards 2077</strong>,
              and the <strong>Nepal Medical Council Act 2020 (1964)</strong>.
            </p>

            {/* Download CTA Ribbon */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="/documents/PCRN-Patient-Rights-Guide-Nepal.pdf"
                download
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md bg-[#9E1B28] dark:bg-rose-600 text-white hover:bg-[#7F121D] dark:hover:bg-rose-700 shadow-xs transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Patient Rights Handbook (PDF)</span>
              </a>
              <Link
                href="/contact?subject=Grievance"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#9E1B28] dark:text-rose-400" />
                <span>Need Assistance with a Hospital Dispute?</span>
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Search & Quick Navigator Strip */}
      <section className="py-5 bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 sticky top-[130px] z-40 backdrop-blur-md transition-colors duration-200 shadow-xs">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 text-slate-400 dark:text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <label htmlFor="rights-search" className="sr-only">
                Search patient rights
              </label>
              <input
                id="rights-search"
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search rights (e.g., consent, emergency, billing, privacy)..."
                className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#9E1B28] dark:focus:ring-rose-500 focus:border-transparent transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick jump anchor tags */}
            <div className="hidden lg:flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 overflow-x-auto">
              <span className="font-semibold text-slate-700 dark:text-slate-200 shrink-0">Quick Jump:</span>
              <Link href="/know-your-rights/right-to-information" className="hover:text-[#9E1B28] dark:hover:text-rose-400 hover:underline">Information</Link>
              <span aria-hidden="true">/</span>
              <Link href="/know-your-rights/right-to-informed-consent" className="hover:text-[#9E1B28] dark:hover:text-rose-400 hover:underline">Consent</Link>
              <span aria-hidden="true">/</span>
              <Link href="/know-your-rights/right-to-emergency-care" className="hover:text-[#9E1B28] dark:hover:text-rose-400 hover:underline">Emergency</Link>
              <span aria-hidden="true">/</span>
              <Link href="/know-your-rights/right-to-transparent-billing" className="hover:text-[#9E1B28] dark:hover:text-rose-400 hover:underline">Billing</Link>
              <span aria-hidden="true">/</span>
              <a href="#faq" className="hover:text-[#9E1B28] dark:hover:text-rose-400 hover:underline">FAQs</a>
            </div>
          </div>
        </Container>
      </section>

      {/* Rights Index List */}
      <section className="py-12 md:py-16 bg-slate-50/40 dark:bg-slate-950">
        <Container>
          <div className="space-y-4">
            {filteredRights.length === 0 ? (
              <Surface padding="lg" className="text-center">
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                  No rights found matching &ldquo;{searchQuery}&rdquo;
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Try searching for keywords like &ldquo;consent&rdquo;, &ldquo;billing&rdquo;,
                  &ldquo;emergency&rdquo;, or &ldquo;records&rdquo;.
                </p>
                <button
                  onClick={() => setSearchQuery("")}
                  className="mt-4 text-xs font-bold text-[#9E1B28] dark:text-rose-400 hover:underline cursor-pointer"
                >
                  Reset Search
                </button>
              </Surface>
            ) : (
              filteredRights.map((right) => (
                <RightIndexRow key={right.id} right={right} />
              ))
            )}
          </div>
        </Container>
      </section>

      {/* Downloadable Handbook Feature */}
      <section className="py-14 bg-slate-900 dark:bg-black text-white border-t border-slate-800">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-3">
              <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">
                Public Reference Material
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Download the Patient Rights Handbook
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
                Carry this concise, plain-language document when visiting hospitals. Covers legal provisions under Public Health Service Act 2075, Health Institution Operation Standards 2077, and Nepal Medical Council Act 2020 (1964).
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href="/documents/PCRN-Patient-Rights-Guide-Nepal.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#9E1B28] hover:bg-[#7F121D] dark:bg-rose-600 dark:hover:bg-rose-700 text-white text-sm font-semibold transition-colors shadow-lg"
              >
                <Download className="w-4 h-4" />
                <span>Download Patient Rights Handbook (PDF)</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Frequently Asked Questions (FAQ) */}
      <section id="faq" className="py-16 md:py-20 bg-slate-100/60 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E1B28] dark:text-rose-400">
              Legal Clarifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions Regarding Patient Rights
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Plain-language answers to everyday legal and practical dilemmas faced by patients in Nepalese healthcare facilities.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {patientFAQ.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <Surface key={index} padding="none" className="overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-slate-900 dark:text-slate-100 hover:text-[#9E1B28] dark:hover:text-rose-400 transition-colors cursor-pointer"
                  >
                    <span className="text-sm sm:text-base leading-snug">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 text-slate-400 dark:text-slate-500 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#9E1B28] dark:text-rose-400" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-800/50">
                      {faq.a}
                    </div>
                  )}
                </Surface>
              );
            })}
          </div>

          {/* Need Further Help Card */}
          <Surface padding="md" className="mt-14 max-w-2xl mx-auto text-center space-y-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Have a Specific Hospital Rights Question?
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300">
              Our advocacy team provides free informational guidance to help you navigate medical disputes, understand treatment consent, or request medical records.
            </p>
            <div className="pt-2">
              <Button href="/contact" size="sm" icon={<ArrowRight className="w-3.5 h-3.5" />}>
                Contact Our Patient Support Desk
              </Button>
            </div>
          </Surface>
        </Container>
      </section>
    </div>
  );
}