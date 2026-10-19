import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pcrnepal.org"),
  title: {
    default: "Patients Rights Concern Nepal (PCRN) | Patient Advocacy & Health Rights",
    template: "%s | Patients Rights Concern Nepal (PCRN)",
  },
  description:
    "Patients Rights Concern Nepal (PCRN) is an independent non-governmental organization dedicated to safeguarding patient dignity, informed consent, fair billing, and healthcare accountability under Nepalese law.",
  keywords: [
    "patient rights Nepal",
    "informed consent Nepal",
    "healthcare law Nepal",
    "PCRN",
    "Patients Rights Concern Nepal",
    "Public Health Service Act 2075",
    "Health Institution Operation Standards 2077",
    "emergency healthcare Nepal",
    "medical grievance Kathmandu",
    "patient charter Nepal",
  ],
  authors: [{ name: "Patients Rights Concern Nepal (PCRN)" }],
  creator: "Patients Rights Concern Nepal",
  publisher: "Patients Rights Concern Nepal",
  icons: {
    icon: [
      { url: "favicon.ico" },
      { url: "images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "images/pcrn-logo.png", sizes: "256x256", type: "image/png" },
    ],
    apple: [{ url: "images/pcrn-logo.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_NP",
    url: "https://pcrnepal.org",
    siteName: "Patients Rights Concern Nepal (PCRN)",
    title: "Patients Rights Concern Nepal (PCRN) | Defending Dignity, Empowering Patients",
    description:
      "Advancing constitutional rights to health, voluntary informed consent, itemized hospital billing, and accessible grievance redressal across Nepal.",
    images: [
      {
        url: "images/pcrn-logo.png",
        width: 256,
        height: 256,
        alt: "Patients Rights Concern Nepal Emblem",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patients Rights Concern Nepal (PCRN)",
    description:
      "Defending dignity and empowering patients across Nepal. Independent health advocacy NGO.",
    images: ["images/pcrn-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  var supportDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (theme === 'dark' || (!theme && supportDarkMode)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-full flex flex-col bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 selection:bg-[#9E1B28] selection:text-white transition-colors duration-200`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#9E1B28] focus:text-white focus:rounded-md focus:font-medium focus:outline-none focus:ring-2 focus:ring-[#9E1B28] focus:ring-offset-2"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
