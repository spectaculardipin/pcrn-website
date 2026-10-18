import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  ShieldCheck,
  Award,
  Heart,
  Scale,
  FileCheck,
  Building2,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Surface from "@/components/ui/Surface";
import Callout from "@/components/ui/Callout";
import TeamMemberCard from "@/components/TeamMemberCard";

export const metadata: Metadata = {
  title: "About Us | Founding Story & Leadership",
  description:
    "Learn about the founding story of Patients Rights Concern Nepal (PCRN), our executive board, mission, and official Government of Nepal registration details.",
};

const boardMembers = [
  {
    name: "Dr. Rajesh Shrestha",
    role: "Founder & Chairperson",
    nepaliRole: "संस्थापक तथा अध्यक्ष",
    qualifications: "MD, Senior Consultant Physician & Health Ethicist",
    bio: "With over two decades of clinical service in both public tertiary centers and community hospitals in Nepal, Dr. Shrestha founded PCRN to address the critical breakdown in patient communication, ethical consent, and transparency across the healthcare sector.",
    imageSrc: "/images/team-founder.jpg",
  },
  {
    name: "Advocate Sunita Sharma",
    role: "Vice-President & Legal Director",
    nepaliRole: "उपाध्यक्ष तथा कानुनी सल्लाहकार",
    qualifications: "LL.M. Human Rights & Constitutional Law",
    bio: "Advocate Sharma is an experienced human rights litigator at the Supreme Court of Nepal. She has authored leading legal analyses on the Public Health Service Act 2075 and represents marginalized families seeking justice for medical negligence and billing abuse.",
    imageSrc: "/images/team-legal.jpg",
  },
  {
    name: "Dr. Kedar Prasad Sharma",
    role: "General Secretary",
    nepaliRole: "महासचिव",
    qualifications: "Ph.D. in Community Health & Health Policy",
    bio: "A veteran public health educator and researcher, Dr. Sharma oversees PCRN's grassroots awareness campaigns, training modules, and outreach to community healthcare centers across Nepal's seven provinces.",
    imageSrc: "/images/team-secretary.jpg",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-200">
      {/* Page Header */}
      <section className="bg-slate-50 dark:bg-slate-950 py-12 md:py-16 border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <Container>
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-900 text-xs font-semibold text-[#9E1B28] dark:text-rose-400">
              <span>About Us &ndash; हाम्रो बारेमा</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
              Championing Patient Dignity & Accountability in Nepal
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Patients Rights Concern Nepal (PCRN) was established as an independent non-governmental organization to bridge the gap between Nepal&apos;s progressive constitutional guarantees and the daily reality faced by patients inside hospitals.
            </p>
          </div>
        </Container>
      </section>

      {/* Founding Story */}
      <section className="py-16 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-200">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-[#9E1B28] dark:text-rose-400">
                Our Founding Story
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight">
                Born From a Critical Void in Nepal&apos;s Healthcare Landscape
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  Over the past two decades, Nepal has witnessed a massive expansion in healthcare infrastructure. Specialized private hospitals, tertiary teaching institutes, and diagnostic clinics have proliferated across urban centers. Yet, this rapid technological growth was not accompanied by a corresponding growth in patient advocacy, transparency, or institutional accountability.
                </p>
                <p>
                  Families frequently found themselves stranded in unfamiliar hospital corridors, handed illegible billing statements, asked to sign English consent forms without explanation, or facing demands for advance deposits during acute medical crises. When clinical errors or tragic outcomes occurred, the total absence of trusted patient grievance desks often drove frustrated relatives toward despair or chaotic hospital confrontations.
                </p>
                <p>
                  In September 2026, a coalition of compassionate physicians, senior human rights lawyers, and public health educators came together to formally establish <strong>Patients Rights Concern Nepal (PCRN)</strong>. Our founding purpose is unequivocal: to ensure that every patient in Nepal—regardless of economic standing, caste, gender, or geography—is treated as a dignity-bearing citizen with full legal rights.
                </p>
              </div>

              <Callout variant="rose" padding="md" className="pt-2">
                <div className="flex items-start gap-3">
                  <Heart className="w-5 h-5 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong>Our Core Conviction:</strong> Healing requires trust, and trust cannot exist without transparency. Protecting patient rights strengthens the entire healthcare ecosystem—including the safety and ethical standing of honest medical professionals.
                  </p>
                </div>
              </Callout>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-800 aspect-4/3">
                <Image
                  src="/images/policy-advocacy.jpg"
                  alt="PCRN founding roundtable and policy dialogue in Kathmandu"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 text-center italic">
                PCRN leadership in consultative dialogue on patient charter enforcement in Kathmandu.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-slate-50 dark:bg-slate-950 border-y border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E1B28] dark:text-rose-400">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              Our Vision, Mission & Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Surface padding="md">
              <div className="w-6 h-6 text-[#9E1B28] dark:text-rose-400 mb-3">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Our Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                A just and compassionate healthcare system in Nepal where every patient&apos;s human dignity is honored, informed consent is universally practiced, and institutional accountability is standard practice.
              </p>
            </Surface>

            <Surface padding="md">
              <div className="w-6 h-6 text-[#9E1B28] dark:text-rose-400 mb-3">
                <Scale className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Our Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                To educate patients on their legal entitlements, provide independent guidance during medical disputes, advocate for transparent health policies, and partner with institutions to create functional grievance mechanisms.
              </p>
            </Surface>

            <Surface padding="md">
              <div className="w-6 h-6 text-[#9E1B28] dark:text-rose-400 mb-3">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Our Values</h3>
              <ul className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1.5 pt-1">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9E1B28] dark:bg-rose-400"></span>
                  <span><strong>Humanity & Dignity:</strong> Every patient first.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9E1B28] dark:bg-rose-400"></span>
                  <span><strong>Transparency:</strong> Open medical information.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9E1B28] dark:bg-rose-400"></span>
                  <span><strong>Impartiality:</strong> Independent of commercial interests.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#9E1B28] dark:bg-rose-400"></span>
                  <span><strong>Legal Integrity:</strong> Grounded in Nepalese law.</span>
                </li>
              </ul>
            </Surface>
          </div>
        </Container>
      </section>

      {/* Official Registration Details (Critical for NGO Legitimacy) */}
      <section id="registration" className="py-16 md:py-20 bg-white dark:bg-slate-900 transition-colors duration-200">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border-2 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-sm">
              <div className="bg-slate-900 dark:bg-slate-950 text-white p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-rose-400 shrink-0">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-rose-400 uppercase tracking-wider">
                      Official Government Accreditation
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Legal Registration & Institutional Details
                    </h3>
                  </div>
                </div>
                <div className="shrink-0">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>Status: Active & In Good Standing</span>
                  </span>
                </div>
              </div>

              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Patients Rights Concern Nepal (PCRN) operates strictly within the non-governmental legal framework of the Government of Nepal, registered under the Associations Registration Act 2034 and affiliated with the Social Welfare Council.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                  <Surface padding="sm">
                    <p className="text-slate-500 dark:text-slate-400 font-medium mb-1">Full Registered Name</p>
                    <p className="font-bold text-slate-900 dark:text-slate-100">Patients Rights Concern Nepal</p>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">बिरामी हक सरोकार नेपाल</p>
                  </Surface>

                  <Surface padding="sm">
                    <p className="text-slate-500 dark:text-slate-400 font-medium mb-1">Registration Number</p>
                    <p className="font-bold text-[#9E1B28] dark:text-rose-400">Reg. No. 1284/081/082</p>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">Associations Act 2034</p>
                  </Surface>

                  <Surface padding="sm">
                    <p className="text-slate-500 dark:text-slate-400 font-medium mb-1">Issuing Authority</p>
                    <p className="font-bold text-slate-900 dark:text-slate-100">District Administration Office (DAO)</p>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">Kathmandu, Bagmati Province</p>
                  </Surface>

                  <Surface padding="sm">
                    <p className="text-slate-500 dark:text-slate-400 font-medium mb-1">Social Welfare Council (SWC)</p>
                    <p className="font-bold text-slate-900 dark:text-slate-100">Affiliation No. 56214</p>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">National NGO Accreditation</p>
                  </Surface>

                  <Surface padding="sm">
                    <p className="text-slate-500 dark:text-slate-400 font-medium mb-1">Permanent Account Number (PAN)</p>
                    <p className="font-bold text-slate-900 dark:text-slate-100">PAN: 619842301</p>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">Inland Revenue Department</p>
                  </Surface>

                  <Surface padding="sm">
                    <p className="text-slate-500 dark:text-slate-400 font-medium mb-1">Registered Address</p>
                    <p className="font-bold text-slate-900 dark:text-slate-100">New Baneshwor, Ward No. 10</p>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px]">Kathmandu, Nepal</p>
                  </Surface>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-800 pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-slate-400" />
                    <span>Non-profit, non-partisan, non-governmental public health organization.</span>
                  </div>
                  <Link
                    href="/contact?subject=Official+Registration+Verification"
                    className="text-[#9E1B28] dark:text-rose-400 font-semibold hover:underline"
                  >
                    Request certified copies &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Executive Board & Leadership */}
      <section id="board" className="py-16 md:py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <Container>
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#9E1B28] dark:text-rose-400">
              Leadership & Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-slate-100">
              Founder & Executive Board
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Our board comprises experienced medical professionals, human rights advocates, and community organizers dedicated to advancing patient protection across Nepal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boardMembers.map((member) => (
              <TeamMemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                nepaliRole={member.nepaliRole}
                qualifications={member.qualifications}
                bio={member.bio}
                imageSrc={member.imageSrc}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              PCRN is guided by an independent advisory council of healthcare workers, bioethicists, and patient representatives.
            </p>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="py-14 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Interested in Partnering With Us?
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              We welcome partnerships with medical associations, legal aid clinics, hospital administrations, and civic bodies committed to transparent healthcare delivery.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Button href="/contact" size="md">
                Get In Touch
              </Button>
              <Button href="/know-your-rights" variant="outline" size="md">
                View Patient Rights Charter
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}