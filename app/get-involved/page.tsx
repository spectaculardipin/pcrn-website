"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Heart,
  Users,
  ShieldCheck,
  Building,
  CheckCircle2,
  Copy,
  Check,
  QrCode,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Surface from "@/components/ui/Surface";
import Callout from "@/components/ui/Callout";

export default function GetInvolvedPage() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, fieldName: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      }
    } catch {}
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <div className="bg-slate-50/40 dark:bg-slate-950 transition-colors duration-200">
      {/* Page Header */}
      <section className="bg-slate-50 dark:bg-slate-900/60 py-12 md:py-16 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-xs font-semibold text-[#9E1B28] dark:text-rose-400">
              <span>Get Involved &ndash; सहकार्य तथा सहयोग</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Support the Movement for Patient Rights in Nepal
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Every citizen has a stake in a humane healthcare system. Whether by volunteering your expertise, becoming a formal member, or contributing to our public education fund, your support directly empowers vulnerable patients.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <a
                href="#volunteer"
                className="px-4 py-2 text-xs font-semibold rounded-md bg-[#9E1B28] dark:bg-rose-600 text-white hover:bg-[#7F121D] dark:hover:bg-rose-700 shadow-xs transition-colors"
              >
                Volunteer With Us
              </a>
              <a
                href="#membership"
                className="px-4 py-2 text-xs font-semibold rounded-md bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              >
                Membership Information
              </a>
              <a
                href="#donate"
                className="px-4 py-2 text-xs font-semibold rounded-md bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-[#9E1B28] dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-950/80 flex items-center gap-1.5 transition-colors"
              >
                <Heart className="w-3.5 h-3.5 fill-[#9E1B28] dark:fill-rose-400" />
                <span>Donate & Support</span>
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 1. Volunteer Opportunities */}
      <section id="volunteer" className="py-16 md:py-20 bg-slate-50/40 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 scroll-mt-24 transition-colors duration-200">
        <Container>
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E1B28] dark:text-rose-400">
              1. Volunteer Network
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Lend Your Skills to Patient Rights Advocacy
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              PCRN is driven by passionate volunteers across Nepal. We welcome professionals, students, and civic activists eager to make healthcare transparent, fair, and compassionate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Volunteer Role 1 */}
            <Surface padding="md" className="flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-6 h-6 text-[#9E1B28] dark:text-rose-400">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Legal Advocates & Law Students
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Assist in researching consumer health jurisprudence, drafting formal grievance petitions to hospital administrations, and monitoring compliance with the Public Health Service Act 2075.
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Commitment: 2&ndash;4 hrs/week</span>
              </div>
            </Surface>

            {/* Volunteer Role 2 */}
            <Surface padding="md" className="flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-6 h-6 text-[#9E1B28] dark:text-rose-400">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Doctors & Nursing Professionals
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Help conduct medical literacy workshops, evaluate technical aspects of patient grievances objectively, and mentor junior doctors on ethical communication and informed consent.
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Commitment: Flexible / On-Call</span>
              </div>
            </Surface>

            {/* Volunteer Role 3 */}
            <Surface padding="md" className="flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-6 h-6 text-[#9E1B28] dark:text-rose-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Community Organizers & Educators
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Facilitate patient rights outreach sessions at community health posts, women&apos;s savings groups, and local schools in municipal wards outside the Kathmandu Valley.
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Commitment: Monthly Events</span>
              </div>
            </Surface>

            {/* Volunteer Role 4 */}
            <Surface padding="md" className="flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-6 h-6 text-[#9E1B28] dark:text-rose-400">
                  <Building className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  Translators & Content Creators
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Translate patient rights charters into Nepali regional languages (Maithili, Bhojpuri, Tamang, Newari) and design accessible infographics for digital campaigns.
                </p>
              </div>
              <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400">Commitment: Remote / Project-based</span>
              </div>
            </Surface>
          </div>

          <Surface padding="md" className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-sm">
                Ready to Join Our Volunteer Roster?
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Fill out our quick inquiry form indicating your background and areas of interest.
              </p>
            </div>
            <Button
              href="/contact?category=volunteer"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Submit Volunteer Application
            </Button>
          </Surface>
        </Container>
      </section>

      {/* 2. Membership Information */}
      <section id="membership" className="py-16 md:py-20 bg-slate-100/50 dark:bg-slate-900/40 border-b border-slate-200 dark:border-slate-800 scroll-mt-24 transition-colors duration-200">
        <Container>
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E1B28] dark:text-rose-400">
              2. Organizational Membership
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Become a Member of PCRN
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              PCRN is a democratic, membership-based NGO governed in accordance with the Associations Registration Act 2034. Members participate in our General Assemblies and shape our institutional priorities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Membership Tier 1 */}
            <Surface padding="lg" className="flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#9E1B28] dark:text-rose-400 uppercase tracking-wide">
                  General Membership &bull; साधारण सदस्यता
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Individual Citizen
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Open to any citizen of Nepal over 18 years of age committed to patient protection.
                </p>
                <div className="py-2 border-y border-slate-100 dark:border-slate-800">
                  <span className="text-2xl font-extrabold text-slate-900 dark:text-white">NPR 1,000</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400"> / year</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9E1B28] dark:text-rose-400 shrink-0" />
                    <span>Voting rights in Annual General Assembly</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9E1B28] dark:text-rose-400 shrink-0" />
                    <span>Official PCRN Membership Card</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9E1B28] dark:text-rose-400 shrink-0" />
                    <span>Invitations to policy consultations</span>
                  </li>
                </ul>
              </div>
              <Button href="/contact?category=membership" variant="outline" size="sm">
                Apply for General Membership
              </Button>
            </Surface>

            {/* Membership Tier 2 */}
            <Surface padding="lg" className="flex flex-col justify-between space-y-5 relative ring-1 ring-[#9E1B28]/20 dark:ring-rose-500/20 border-2 border-[#9E1B28] dark:border-rose-500 shadow-md">
              <div className="absolute -top-3 right-4">
                <span className="bg-[#9E1B28] dark:bg-rose-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                  Founding Patron
                </span>
              </div>
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#9E1B28] dark:text-rose-400 uppercase tracking-wide">
                  Life Membership &bull; आजीवन सदस्यता
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Life Member & Patron
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  For dedicated advocates seeking a permanent role in guiding PCRN&apos;s mission.
                </p>
                <div className="py-2 border-y border-slate-100 dark:border-slate-800">
                  <span className="text-2xl font-extrabold text-[#9E1B28] dark:text-rose-400">NPR 15,000</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400"> / one-time</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9E1B28] dark:text-rose-400 shrink-0" />
                    <span>Lifetime General Assembly voting privileges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9E1B28] dark:text-rose-400 shrink-0" />
                    <span>Eligibility for Executive Board election</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9E1B28] dark:text-rose-400 shrink-0" />
                    <span>Founding recognition in annual report</span>
                  </li>
                </ul>
              </div>
              <Button href="/contact?category=membership" size="sm">
                Apply for Life Membership
              </Button>
            </Surface>

            {/* Membership Tier 3 */}
            <Surface padding="lg" className="flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <span className="text-xs font-semibold text-[#9E1B28] dark:text-rose-400 uppercase tracking-wide">
                  Student / Youth &bull; विद्यार्थी सदस्यता
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Student Advocate
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Subsidized membership for medical, nursing, and law students in Nepal.
                </p>
                <div className="py-2 border-y border-slate-100 dark:border-slate-800">
                  <span className="text-2xl font-extrabold text-slate-900 dark:text-white">NPR 300</span>
                  <span className="text-xs text-slate-500 dark:text-slate-400"> / year</span>
                </div>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 pt-1">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9E1B28] dark:text-rose-400 shrink-0" />
                    <span>Access to legal and clinical workshops</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9E1B28] dark:text-rose-400 shrink-0" />
                    <span>Certificate of advocacy participation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#9E1B28] dark:text-rose-400 shrink-0" />
                    <span>Mentorship from senior health rights jurists</span>
                  </li>
                </ul>
              </div>
              <Button href="/contact?category=membership" variant="outline" size="sm">
                Apply as Student Member
              </Button>
            </Surface>
          </div>
        </Container>
      </section>

      {/* 3. Donate & Financial Transparency */}
      <section id="donate" className="py-16 md:py-20 bg-slate-50/40 dark:bg-slate-950 scroll-mt-24 transition-colors duration-200">
        <Container>
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E1B28] dark:text-rose-400">
              3. Support Our Cause
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Contribute to Patient Protection & Public Literacy
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              PCRN is fully non-profit and maintains strict editorial and policy independence. We accept no pharmaceutical advertising or hospital sponsorships. Your voluntary contributions directly fund printed educational handbooks, community outreach camps, and patient grievance support.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Bank Transfer Box */}
            <Surface padding="lg" className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-[#9E1B28] dark:text-rose-400">
                  <Building className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Direct Bank Transfer (Nepal)
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Official PCRN Operating Account
                  </p>
                </div>
              </div>

              <div className="space-y-3 text-xs">
                {/* Account Name */}
                <Surface padding="sm" className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">Account Name</p>
                    <p className="font-bold text-slate-900 dark:text-white text-sm">Patients Rights Concern Nepal</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard("Patients Rights Concern Nepal", "accName")}
                    className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-colors cursor-pointer"
                    title="Copy Account Name"
                  >
                    {copiedField === "accName" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </Surface>

                {/* Account Number */}
                <Surface padding="sm" className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">Account Number (A/C No.)</p>
                    <p className="font-bold text-[#9E1B28] dark:text-rose-400 text-sm tracking-wide">1090100028491001</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard("1090100028491001", "accNum")}
                    className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-colors cursor-pointer"
                    title="Copy Account Number"
                  >
                    {copiedField === "accNum" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </Surface>

                {/* Bank Name & Branch */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <Surface padding="sm">
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">Bank Name</p>
                    <p className="font-bold text-slate-900 dark:text-white">Rastriya Banijya Bank</p>
                  </Surface>
                  <Surface padding="sm">
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">Branch</p>
                    <p className="font-bold text-slate-900 dark:text-white">New Baneshwor, Kathmandu</p>
                  </Surface>
                </div>

                {/* SWIFT Code */}
                <Surface padding="sm" className="flex items-center justify-between">
                  <div>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">SWIFT Code (International Transfers)</p>
                    <p className="font-bold text-slate-900 dark:text-white">RBBANPKA</p>
                  </div>
                  <button
                    onClick={() => copyToClipboard("RBBANPKA", "swift")}
                    className="p-1.5 rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-100 transition-colors cursor-pointer"
                    title="Copy SWIFT"
                  >
                    {copiedField === "swift" ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </Surface>
              </div>

              {copiedField && (
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold text-center">
                  &check; Copied to clipboard!
                </p>
              )}

              <Callout variant="rose" padding="sm" className="text-xs">
                <p className="text-slate-700 dark:text-slate-300 italic">
                  <strong>Note:</strong> Please email a screenshot or reference number of your transfer to{" "}
                  <a href="mailto:finance@pcrnepal.org" className="text-[#9E1B28] dark:text-rose-400 underline font-medium">
                    finance@pcrnepal.org
                  </a>{" "}
                  so we can issue an official tax-compliant receipt.
                </p>
              </Callout>
            </Surface>

            {/* Digital Wallet QR Codes (eSewa & Khalti) */}
            <Surface padding="lg" className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 text-[#9E1B28] dark:text-rose-400">
                  <QrCode className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Scan & Donate via eSewa or Khalti
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    Instant static QR codes for mobile banking
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* eSewa QR Card */}
                <Surface padding="md" className="text-center space-y-3">
                  <div className="py-1 px-2.5 rounded-md bg-[#60BB46]/10 text-[#60BB46] dark:bg-emerald-950/60 dark:text-emerald-400 dark:border dark:border-emerald-800/80 font-bold text-xs inline-block">
                    eSewa Mobile Wallet
                  </div>
                  <div className="relative aspect-square w-48 max-w-full mx-auto rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-white p-1">
                    <Image
                      src="/images/esewa-qr.png"
                      alt="PCRN eSewa Donation QR Code"
                      fill
                      sizes="192px"
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Open eSewa app & scan to support PCRN
                  </p>
                </Surface>

                {/* Khalti QR Card */}
                <Surface padding="md" className="text-center space-y-3">
                  <div className="py-1 px-2.5 rounded-md bg-[#5C2D91]/15 text-[#5C2D91] dark:bg-purple-950/60 dark:text-purple-300 dark:border dark:border-purple-800/80 font-bold text-xs inline-block">
                    Khalti Digital Wallet
                  </div>
                  <div className="relative aspect-square w-48 max-w-full mx-auto rounded-lg overflow-hidden border border-slate-200 dark:border-slate-700 bg-white p-1">
                    <Image
                      src="/images/khalti-qr.png"
                      alt="PCRN Khalti Donation QR Code"
                      fill
                      sizes="192px"
                      className="object-contain p-2"
                    />
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Open Khalti app & scan to contribute
                  </p>
                </Surface>
              </div>

              <Callout variant="rose" padding="md" className="text-xs">
                <div className="flex items-start gap-2.5">
                  <Heart className="w-4 h-4 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                  <p className="text-slate-700 dark:text-slate-300">
                    <strong>100% Impartiality Guarantee:</strong> All funds are audited annually by an independent certified chartered accountant in Kathmandu and filed with the Social Welfare Council (SWC).
                  </p>
                </div>
              </Callout>
            </Surface>
          </div>
        </Container>
      </section>
    </div>
  );
}