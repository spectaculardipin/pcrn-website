import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import {
  Scale,
  Megaphone,
  Building,
  CheckCircle2,
  Compass,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Surface from "@/components/ui/Surface";
import Callout from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "Our Focus Areas | Planned Advocacy Initiatives",
  description:
    "Explore PCRN's forward-looking commitments in Legal Advocacy, Public Awareness, and Hospital Policy Monitoring across Nepal's healthcare system.",
};

export default function FocusAreasPage() {
  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-200">
      {/* Page Header */}
      <section className="bg-slate-50 dark:bg-slate-950 py-12 md:py-16 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-xs font-semibold text-[#9E1B28] dark:text-rose-400">
              <span>Our Strategic Focus &ndash; कार्यक्षेत्र तथा भावी योजनाहरू</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight leading-tight">
              Forward-Looking Commitments to Patient Advocacy
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              As a newly established non-profit NGO, Patients Rights Concern Nepal structures its roadmap around three core pillars. These initiatives represent our clear, forward-looking commitments to institutional change rather than historical claims.
            </p>
          </div>
        </Container>
      </section>

      {/* Transparency & Humility Commitment Banner */}
      <Callout variant="rose" padding="md" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-start sm:items-center gap-3.5 text-xs text-slate-700 dark:text-slate-300">
          <Compass className="w-5 h-5 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong>Our Commitment to Transparency:</strong> PCRN is in its foundational phase (established 2026). The initiatives outlined below represent our planned multi-year programs. We actively invite collaborating partners, medical professionals, legal scholars, and volunteers to help us execute these goals.
          </p>
        </div>
      </Callout>

      {/* Focus Area 1: Legal & Policy Advocacy */}
      <section id="legal-advocacy" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-rose-50 dark:bg-rose-950/60 text-[#9E1B28] dark:text-rose-400 border border-rose-200 dark:border-rose-900">
                <Scale className="w-4 h-4" />
                <span>Pillar 1 &ndash; Legal & Policy Advocacy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                Strengthening Legislation & Institutional Policy
              </h2>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 italic">
                &ldquo;Bridging the divide between constitutional promises and hospital bylaws.&rdquo;
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Nepal has progressive health legislation in the Public Health Service Act 2075 and Health Institution Operation Standards 2077, yet secondary bylaws and hospital compliance guidelines remain fragmented. PCRN&apos;s legal advocacy wing works directly with lawmakers, parliamentary health committees, and health rights jurists to turn statutory rights into enforceable everyday practices.
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                  Planned Strategic Actions:
                </h3>
                <Surface padding="none" className="space-y-2.5">
                  <li className="flex items-start gap-2.5 px-4 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <CheckCircle2 className="w-4 h-4 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Model Patient Charter:</strong> Drafting a model patient rights charter for voluntary municipal adoption by local governments (Palikas).</span>
                  </li>
                  <li className="flex items-start gap-2.5 px-4 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <CheckCircle2 className="w-4 h-4 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Informed Consent Directives:</strong> Advocating under Section 11 of the Public Health Service Act to mandate accessible Nepali-language consent documents.</span>
                  </li>
                  <li className="flex items-start gap-2.5 px-4 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <CheckCircle2 className="w-4 h-4 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Alternative Dispute Framework:</strong> Developing non-violent, hospital-based mediation models to resolve medical grievances amicably.</span>
                  </li>
                  <li className="flex items-start gap-2.5 px-4 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <CheckCircle2 className="w-4 h-4 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Public Interest Litigation (PIL):</strong> Challenging systemic emergency care refusal or unlawful billing practices in the courts.</span>
                  </li>
                </Surface>
              </div>

              <div className="pt-2">
                <Button href="/contact?subject=Legal+Advocacy+Partnership" variant="outline" size="sm">
                  Collaborate on Policy Reform
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 aspect-16/10">
                <Image
                  src="/images/policy-advocacy.jpg"
                  alt="PCRN legal policy round table in Kathmandu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Focus Area 2: Public Rights Awareness */}
      <section id="public-awareness" className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-rose-50 dark:bg-rose-950/60 text-[#9E1B28] dark:text-rose-400 border border-rose-200 dark:border-rose-900">
                <Megaphone className="w-4 h-4" />
                <span>Pillar 2 &ndash; Public Rights Literacy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                Empowering Citizens Through Accessible Education
              </h2>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 italic">
                &ldquo;A patient who knows their rights is protected from exploitation.&rdquo;
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                When patients understand what they are entitled to&mdash;such as receiving an itemized bill before payment, or demanding to know potential drug side effects&mdash;they interact with healthcare providers with confidence and mutual respect. PCRN conducts accessible education across diverse linguistic and demographic groups in Nepal.
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                  Planned Strategic Actions:
                </h3>
                <Surface padding="none" className="space-y-2.5">
                  <li className="flex items-start gap-2.5 px-4 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <CheckCircle2 className="w-4 h-4 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Hospital OPD Awareness Camps:</strong> Distributing plain-language infographics at major public hospital waiting zones.</span>
                  </li>
                  <li className="flex items-start gap-2.5 px-4 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <CheckCircle2 className="w-4 h-4 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Community Radio Series:</strong> Broadcasting weekly educational audio segments in Nepali, Maithili, and Bhojpuri across community stations.</span>
                  </li>
                  <li className="flex items-start gap-2.5 px-4 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <CheckCircle2 className="w-4 h-4 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Nursing & Medical College Seminars:</strong> Training future healthcare professionals on patient-centric communication ethics.</span>
                  </li>
                  <li className="flex items-start gap-2.5 px-4 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <CheckCircle2 className="w-4 h-4 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Free Patient Rights Handbook:</strong> Publishing digital and printed summaries of the Patient Rights Charter for citizens.</span>
                  </li>
                </Surface>
              </div>

              <div className="pt-2">
                <Button href="/know-your-rights" size="sm">
                  View Educational Rights Charter
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 aspect-16/10">
                <Image
                  src="/images/community-workshop.jpg"
                  alt="Community health education and patient rights workshop in Nepal"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Focus Area 3: Hospital Policy Monitoring */}
      <section id="hospital-monitoring" className="py-16 md:py-20 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold bg-rose-50 dark:bg-rose-950/60 text-[#9E1B28] dark:text-rose-400 border border-rose-200 dark:border-rose-900">
                <Building className="w-4 h-4" />
                <span>Pillar 3 &ndash; Hospital Policy Monitoring</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                Promoting Transparency & Institutional Compliance
              </h2>
              <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 italic">
                &ldquo;Constructive oversight that elevates standards for both patients and healthcare workers.&rdquo;
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Hospital monitoring is not about adversarial opposition; it is about establishing constructive accountability. When hospitals openly display rate cards, protect emergency admissions, and maintain an active grievance desk, public trust in medical institutions increases dramatically.
              </p>

              <div className="space-y-3 pt-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-slate-100">
                  Planned Strategic Actions:
                </h3>
                <Surface padding="none" className="space-y-2.5">
                  <li className="flex items-start gap-2.5 px-4 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <CheckCircle2 className="w-4 h-4 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>10% Indigent Quota Audits:</strong> Reviewing implementation of mandatory free bed allocations under Health Institution Operation Standards 2077.</span>
                  </li>
                  <li className="flex items-start gap-2.5 px-4 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <CheckCircle2 className="w-4 h-4 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Grievance Desk Functionality Index:</strong> Assessing whether patient help desks are staffed, signposted, and responsive.</span>
                  </li>
                  <li className="flex items-start gap-2.5 px-4 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <CheckCircle2 className="w-4 h-4 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Transparent Rate Card Compliance:</strong> Monitoring whether hospitals publicly display treatment, lab, and bed tariffs.</span>
                  </li>
                  <li className="flex items-start gap-2.5 px-4 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0">
                    <CheckCircle2 className="w-4 h-4 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                    <span><strong>Annual Patient Experience Report:</strong> Publishing independent data on healthcare grievances, trends, and systemic gaps.</span>
                  </li>
                </Surface>
              </div>

              <div className="pt-2">
                <Button href="/contact?subject=Hospital+Monitoring+Inquiry" variant="outline" size="sm">
                  Report a Facility Observation
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 aspect-16/10">
                <Image
                  src="/images/hero-patient-care.jpg"
                  alt="Doctor and nurse in hospital consultation setting in Kathmandu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Cross-Cutting Support Desk */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
        <Container>
          <Surface padding="lg" className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9E1B28] dark:text-rose-400">
                Direct Citizen Service
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
                Patient Grievance & Guidance Desk
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl">
                While our broad initiatives reshape policy, our immediate priority is helping real individuals. If you or a family member has faced denial of care, opaque billing, or malpractice, reach out to our team.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <Button href="/contact" size="md">
                Contact Guidance Desk
              </Button>
            </div>
          </Surface>
        </Container>
      </section>
    </div>
  );
}