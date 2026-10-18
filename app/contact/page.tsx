import React from "react";
import { Metadata } from "next";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  AlertTriangle,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/ContactForm";
import Surface from "@/components/ui/Surface";
import Callout from "@/components/ui/Callout";

export const metadata: Metadata = {
  title: "Contact Us | Patient Support Desk & Kathmandu Office",
  description:
    "Contact Patients Rights Concern Nepal (PCRN) in New Baneshwor, Kathmandu. Submit a patient grievance, inquiry, or volunteer application.",
};

export default function ContactPage() {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors">
      {/* Page Header */}
      <section className="bg-slate-50 dark:bg-slate-900/60 py-12 md:py-16 border-b border-slate-200 dark:border-slate-800">
        <Container>
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 text-xs font-semibold text-[#9E1B28] dark:text-rose-400">
              <span>Contact Us &bull; सम्पर्क तथा सहयोग</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Get in Touch With PCRN
            </h1>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Whether you are seeking advice regarding a hospital dispute, reporting a violation of the 10% free bed quota, or exploring policy partnerships, our secretariat is here to listen and guide you.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Content: Info & Form */}
      <section className="py-16 md:py-20">
        <Container>
          {/* Emergency Alert Ribbon */}
          <Callout variant="amber" padding="md" className="mb-12">
            <div className="flex items-start gap-3.5 text-xs text-amber-900 dark:text-amber-200">
              <AlertTriangle className="w-5 h-5 text-amber-700 dark:text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold text-sm text-amber-950 dark:text-amber-100">
                  Notice for Acute Medical Emergencies:
                </p>
                <p className="leading-relaxed">
                  PCRN is an advocacy and legal rights educational NGO, not a clinical treatment center or emergency dispatch. If someone is experiencing a medical crisis, immediately call <strong>102</strong> (Ambulance) or <strong>100</strong> (Nepal Police) or visit the nearest emergency department.
                </p>
              </div>
            </div>
          </Callout>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Contact Details Column */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#9E1B28] dark:text-rose-400">
                  Office Coordinates
                </span>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  PCRN Secretariat
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Located in the central administrative hub of Kathmandu
                </p>
              </div>

              <div className="space-y-6">
                {/* Physical Address */}
                <Surface padding="md" className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Physical Office</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      New Baneshwor, Ward No. 10<br />
                      (Near Civil Hospital & Shankhamul Road Junction)<br />
                      Kathmandu, Bagmati Province, Nepal
                    </p>
                  </div>
                </Surface>

                {/* Telephone */}
                <Surface padding="md" className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Telephone Lines</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 space-y-1">
                      <span className="block">
                        Landline / Helpline:{" "}
                        <a href="tel:+97714792100" className="text-[#9E1B28] dark:text-rose-400 font-semibold hover:underline">
                          +977-1-4792100
                        </a>
                      </span>
                      <span className="block">
                        Mobile / WhatsApp:{" "}
                        <a href="tel:+9779851029384" className="text-slate-800 dark:text-slate-200 font-medium hover:underline">
                          +977-9851029384
                        </a>
                      </span>
                    </p>
                  </div>
                </Surface>

                {/* Email */}
                <Surface padding="md" className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Email Desks</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 space-y-1">
                      <span className="block">
                        General Inquiries:{" "}
                        <a href="mailto:info@pcrnepal.org" className="text-[#9E1B28] dark:text-rose-400 hover:underline">
                          info@pcrnepal.org
                        </a>
                      </span>
                      <span className="block">
                        Patient Grievances:{" "}
                        <a href="mailto:grievance@pcrnepal.org" className="text-[#9E1B28] dark:text-rose-400 hover:underline">
                          grievance@pcrnepal.org
                        </a>
                      </span>
                      <span className="block">
                        Finance & Donations:{" "}
                        <a href="mailto:finance@pcrnepal.org" className="text-slate-700 dark:text-slate-300 hover:underline">
                          finance@pcrnepal.org
                        </a>
                      </span>
                    </p>
                  </div>
                </Surface>

                {/* Working Hours */}
                <Surface padding="md" className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#9E1B28] dark:text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">Public Consultation Hours</h3>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                      Sunday to Thursday: 10:00 AM &ndash; 5:00 PM<br />
                      Friday: 10:00 AM &ndash; 3:00 PM<br />
                      <span className="text-slate-400 dark:text-slate-500">Closed Saturdays & Gazetted Holidays</span>
                    </p>
                  </div>
                </Surface>
              </div>

              {/* Confidentiality Commitment */}
              <Surface padding="md">
                <p className="font-bold text-slate-800 dark:text-white flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#9E1B28] dark:text-rose-400" />
                  <span>Confidentiality & Data Protection:</span>
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-1.5">
                  Medical records, patient names, and private diagnosis documents shared with PCRN are never publicized or disclosed without the patient&apos;s explicit written consent.
                </p>
              </Surface>
            </div>

            {/* Contact Form Column */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      {/* Embedded Location Map Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800">
        <Container>
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Find Our Kathmandu Office
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Accessible via public transit along the Ring Road and Baneshwor corridor
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=New+Baneshwor+Kathmandu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#9E1B28] dark:text-rose-400 hover:underline flex items-center gap-1"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <Surface padding="none" className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm bg-white dark:bg-slate-900 aspect-21/9 min-h-[320px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14131.066495204273!2d85.33418579999999!3d27.6935105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb199a06c2e99f%3A0x6a0a0dc221c563d7!2sNew%20Baneshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1716982000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Patients Rights Concern Nepal Office Location in New Baneshwor, Kathmandu"
              className="w-full h-full"
            />
          </Surface>
        </Container>
      </section>
    </div>
  );
}