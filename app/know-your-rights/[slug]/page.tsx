import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Surface from "@/components/ui/Surface";
import Callout from "@/components/ui/Callout";
import { patientRights } from "@/content/rights";

export async function generateStaticParams() {
  return patientRights.map((right) => ({
    slug: right.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const right = patientRights.find((r) => r.id === resolvedParams.slug);

  if (!right) {
    return {
      title: "Not Found | PCRN",
    };
  }

  return {
    title: `${right.title} | Patients Rights Concern Nepal (PCRN)`,
    description: right.shortSummary,
    openGraph: {
      title: `${right.title} | PCRN`,
      description: right.shortSummary,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: right.title,
      description: right.shortSummary,
    },
  };
}

export default async function RightDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const right = patientRights.find((r) => r.id === resolvedParams.slug);

  if (!right) {
    notFound();
  }

  return (
    <div className="bg-slate-50/40 dark:bg-slate-950 transition-colors duration-200">
      {/* Page Header */}
      <section className="bg-slate-50 dark:bg-slate-900/60 py-12 md:py-16 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <Container>
          <div className="max-w-3xl space-y-4">
            {/* Breadcrumbs */}
            <nav className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-[#9E1B28] dark:hover:text-rose-400">Home</Link>
              <span aria-hidden="true">/</span>
              <Link href="/know-your-rights" className="hover:text-[#9E1B28] dark:hover:text-rose-400">Know Your Rights</Link>
              <span aria-hidden="true">/</span>
              <span className="text-slate-900 dark:text-white font-medium truncate max-w-[200px]">{right.title}</span>
            </nav>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-xs font-semibold text-[#9E1B28] dark:text-rose-400">
              <span>Patient Right #{right.number}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              {right.title}
            </h1>

            <p className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400 mt-1">
              {right.nepaliTitle}
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed pt-2 border-t border-slate-200 dark:border-slate-800">
              {right.shortSummary}
            </p>

            <p className="text-xs text-slate-500 dark:text-slate-400 pt-2">
              <strong>Statutory Basis:</strong> {right.legalBasis}
            </p>
          </div>
        </Container>
      </section>

      {/* Rights Content */}
      <section className="py-12 md:py-16 bg-slate-50/40 dark:bg-slate-950">
        <Container>
          <div className="max-w-3xl space-y-10">

            {/* Key Entitlements + Checklist merged */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#9E1B28] dark:text-rose-400" />
                What You Are Legally Entitled To & Patient Verification Checklist
              </h2>

              <ul className="space-y-3">
                {right.keyPoints.map((point, i) => (
                  <li key={i}>
                    <Surface padding="sm" className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3 h-3 text-[#9E1B28] dark:text-rose-400" />
                      </span>
                      <div className="flex-1">
                        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{point}</p>
                        {right.patientChecklist[i] && (
                          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 flex items-center gap-1.5">
                            <ArrowRight className="w-3 h-3" />
                            <em>Check: {right.patientChecklist[i]}</em>
                          </p>
                        )}
                      </div>
                    </Surface>
                  </li>
                ))}
                {/* Remaining checklist items if more than keyPoints */}
                {right.patientChecklist.length > right.keyPoints.length && (
                  <React.Fragment>
                    {right.patientChecklist.slice(right.keyPoints.length).map((check, idx) => (
                      <li key={`check-${idx}`}>
                        <Surface padding="sm" className="flex items-start gap-3">
                          <span className="w-5 h-5 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 flex items-center justify-center shrink-0 mt-0.5">
                            <CheckCircle2 className="w-3 h-3 text-[#9E1B28] dark:text-rose-400" />
                          </span>
                          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            <em>Check: {check}</em>
                          </p>
                        </Surface>
                      </li>
                    ))}
                  </React.Fragment>
                )}
              </ul>
            </div>

            {/* Actionable Redress */}
            <Callout variant="rose" padding="md" className="text-xs space-y-2">
              <p className="font-bold text-[#9E1B28] dark:text-rose-400 flex items-center gap-1.5">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>Actionable Redress: What to do if this right is violated:</span>
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed pl-5">
                {right.whatToDoIfViolated}
              </p>
            </Callout>

            {/* Citation footer */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span><strong>Statutory Citation:</strong> {right.legalBasis}</span>
              <Link href="/know-your-rights#faq" className="text-[#9E1B28] dark:text-rose-400 hover:underline inline-flex items-center gap-1">
                <span>Questions? View FAQs</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Back to index CTA */}
          <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center">
            <Link
              href="/know-your-rights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#9E1B28] dark:text-rose-400 hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Rights</span>
            </Link>
          </div>

          {/* Need Further Help Card */}
          <Surface padding="md" className="max-w-2xl mx-auto text-center space-y-3">
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