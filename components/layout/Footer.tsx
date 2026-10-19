import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  FileText,
  Heart,
  ExternalLink,
} from "lucide-react";
import Container from "../ui/Container";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-slate-300 border-t-4 border-[#9E1B28]">
      {/* Top Registration & Legitimacy Banner */}
      <div className="bg-slate-900/90 py-5 border-b border-slate-800">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-300">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-rose-950/80 border border-rose-700/60 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4 text-rose-400" />
              </div>
              <div>
                <p className="font-semibold text-slate-100">
                  Officially Registered Non-Governmental Organization (NGO) in Nepal
                </p>
                <p className="text-slate-400 text-[11px]">
                  Govt. Regd. No: 1284/081/082 (DAO Kathmandu) • SWC Affiliation No: 56214 • PAN: 619842301
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/about#registration"
                className="inline-flex items-center gap-1.5 text-xs text-rose-300 hover:text-white underline decoration-rose-500/50 underline-offset-4"
              >
                <span>View Registration & Compliance Details</span>
                <ExternalLink className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Footer Links */}
      <div className="py-12 md:py-16">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
            {/* Col 1: Brand & Mission */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 bg-white rounded-lg p-1 shrink-0">
                  <Image
                    src="images/pcrn-logo.png"
                    alt="PCRN Logo"
                    fill
                    sizes="48px"
                    className="object-contain p-0.5"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base leading-tight">
                    Patients Rights Concern Nepal
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    बिरामी हक सरोकार नेपाल
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                PCRN is a dedicated health advocacy NGO safeguarding the fundamental human dignity, safety, and legal rights of every patient across Nepal. We work to promote transparent healthcare, informed consent, and equitable access.
              </p>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-xs text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span>Volunteer-Driven, Non-Partisan, Non-Profit</span>
                </div>
              </div>
            </div>

            {/* Col 2: Patient Rights Hub */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-[#9E1B28]" />
                <span>Patient Rights</span>
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <Link href="/know-your-rights#right-to-information" className="hover:text-white transition-colors">
                    Right to Information
                  </Link>
                </li>
                <li>
                  <Link href="/know-your-rights#right-to-informed-consent" className="hover:text-white transition-colors">
                    Informed Consent
                  </Link>
                </li>
                <li>
                  <Link href="/know-your-rights#right-to-emergency-care" className="hover:text-white transition-colors">
                    Emergency Treatment
                  </Link>
                </li>
                <li>
                  <Link href="/know-your-rights#right-to-privacy-confidentiality" className="hover:text-white transition-colors">
                    Privacy & Confidentiality
                  </Link>
                </li>
                <li>
                  <Link href="/know-your-rights#right-to-transparent-billing" className="hover:text-white transition-colors">
                    Itemized Billing & 10% Quota
                  </Link>
                </li>
                <li>
                  <Link href="/know-your-rights#right-to-grievance-redress" className="hover:text-white transition-colors">
                    Grievance & Redress
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Focus Areas & Organization */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
                Organization
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    Our Founding Story
                  </Link>
                </li>
                <li>
                  <Link href="/about#board" className="hover:text-white transition-colors">
                    Executive Board & Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/focus-areas" className="hover:text-white transition-colors">
                    Our Focus Initiatives
                  </Link>
                </li>
                <li>
                  <Link href="/get-involved" className="hover:text-white transition-colors">
                    Volunteer With Us
                  </Link>
                </li>
                <li>
                  <Link href="/get-involved#membership" className="hover:text-white transition-colors">
                    Membership Information
                  </Link>
                </li>
                <li>
                  <Link href="/get-involved#donate" className="hover:text-white transition-colors flex items-center gap-1 text-rose-300">
                    <Heart className="w-3 h-3 fill-rose-300" />
                    <span>Support Our Work</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Office */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-4 border-b border-slate-800 pb-2">
                Kathmandu Office
              </h4>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#E11D48] shrink-0 mt-0.5" />
                  <span>
                    New Baneshwor, Ward No. 10<br />
                    Kathmandu, Bagmati Province<br />
                    Nepal
                  </span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#E11D48] shrink-0" />
                  <a href="tel:+97714792100" className="hover:text-white transition-colors">
                    +977-1-4792100
                  </a>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#E11D48] shrink-0" />
                  <a href="mailto:info@pcrnepal.org" className="hover:text-white transition-colors">
                    info@pcrnepal.org
                  </a>
                </li>
              </ul>

              <div className="mt-5 pt-4 border-t border-slate-800">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-3 py-2 text-xs font-medium rounded-md bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-colors"
                >
                  Send Grievance / Inquiry
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Legal Disclaimer & Copyright */}
      <div className="border-t border-slate-800/80 py-6 bg-black/40">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
            <p className="max-w-2xl text-center md:text-left leading-relaxed">
              <strong className="text-slate-300">Legal Notice:</strong> Patients Rights Concern Nepal (PCRN) is an independent civic advocacy non-profit organization. Information provided on this website is for public educational awareness under the Public Health Service Act 2075 and Constitution of Nepal, and does not replace individualized clinical judgment or formal legal representation.
            </p>
            <p className="shrink-0 text-slate-400 text-center md:text-right">
              © {currentYear} Patients Rights Concern Nepal.<br />All Rights Reserved.
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
