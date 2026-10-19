"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Heart, Shield, ChevronRight } from "lucide-react";
import Container from "../ui/Container";
import ThemeToggle from "../ui/ThemeToggle";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Know Your Rights", href: "/know-your-rights" },
  { name: "Our Focus Areas", href: "/focus-areas" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-950 shadow-xs border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      {/* Top Humanitarian Info Bar */}
      <div className="bg-slate-900 dark:bg-black text-slate-200 text-xs py-1.5 border-b border-slate-800">
        <Container>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-slate-300">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-pcrn-red dark:bg-pcrn-red-dark animate-pulse"></span>
                <span className="font-medium text-slate-100 truncate sm:truncate">
                  Patients Rights Concern Nepal (PCRN)
                </span>
              </span>
              <span className="hidden sm:inline text-slate-400 whitespace-nowrap">
                Registered Health Advocacy NGO (Kathmandu, Nepal)
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2 text-xs w-full sm:w-auto">
              <a
                href="tel:+97714792100"
                className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                title="Call PCRN Patient Helpline"
              >
                <Phone className="w-3 h-3 text-pcrn-red-dark" />
                <span className="font-semibold tracking-wide">Helpline: +977-1-4792100</span>
              </a>
              <span className="hidden sm:inline text-slate-500" aria-hidden="true">|</span>
              <span className="text-slate-400 hidden sm:inline whitespace-nowrap">
                Sun &ndash; Fri: 10:00 AM &ndash; 5:00 PM
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-white dark:bg-slate-950 transition-colors duration-200">
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Logo and Brand Title */}
            <Link
              href="/"
              className="flex items-center gap-3.5 group focus:outline-hidden"
              onClick={() => setIsOpen(false)}
            >
              <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 transition-transform duration-200 group-hover:scale-105">
                <Image
                  src="/images/pcrn-logo.png"
                  alt="Patients Rights Concern Nepal Logo"
                  fill
                  sizes="48px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-pcrn-red dark:group-hover:text-pcrn-red-dark transition-colors leading-tight">
                  PCRN
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 block md:inline md:ml-1.5 md:before:content-['—'] md:before:mr-1.5">
                    Patients Rights Concern Nepal
                  </span>
                </span>
                <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
                  बिरामी हक सरोकार नेपाल • Estd. 2026
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors relative ${
                      active
                        ? "text-pcrn-red dark:text-pcrn-red-dark font-semibold bg-rose-50/70 dark:bg-rose-950/40"
                        : "text-slate-700 dark:text-slate-300 hover:text-pcrn-red dark:hover:text-pcrn-red-dark hover:bg-slate-50 dark:hover:bg-slate-900"
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-pcrn-red dark:bg-pcrn-red-dark rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTAs + Dark Mode Toggle */}
            <div className="hidden lg:flex items-center gap-3">
              <ThemeToggle />

              <Link
                href="/get-involved#donate"
                className="inline-flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-md bg-pcrn-red text-white hover:bg-pcrn-red-dark shadow-xs transition-colors"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Donate</span>
              </Link>
            </div>

            {/* Mobile Menu & Toggle */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2">
              <ThemeToggle className="p-3" />

              <Link
                href="/get-involved#donate"
                className="inline-flex items-center gap-1 text-xs font-semibold px-4 py-3 rounded-md bg-pcrn-red text-white hover:bg-pcrn-red-dark"
              >
                <Heart className="w-3.5 h-3.5 fill-white" />
                <span>Donate</span>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 text-slate-700 dark:text-slate-300 hover:text-pcrn-red dark:hover:text-pcrn-red-dark hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md focus:outline-hidden focus:ring-2 focus:ring-pcrn-red"
                aria-label="Toggle Navigation Menu"
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <Container>
            <div className="py-4 space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                      active
                        ? "bg-rose-50 dark:bg-rose-950/40 text-pcrn-red dark:text-pcrn-red-dark font-semibold"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-pcrn-red dark:hover:text-pcrn-red-dark"
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400 dark:text-slate-500" />
                  </Link>
                );
              })}

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-2">
                <Link
                  href="/get-involved"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-medium rounded-md border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-900 text-center"
                >
                  <Shield className="w-3.5 h-3.5 text-pcrn-red dark:text-pcrn-red-dark" />
                  <span>Join Our Cause</span>
                </Link>
                <Link
                  href="/get-involved#donate"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold rounded-md bg-pcrn-red text-white hover:bg-pcrn-red-dark text-center"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>Donate Support</span>
                </Link>
              </div>

              <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
                <span>Helpline: +977-1-4792100</span>
                <span className="text-slate-400 dark:text-slate-500">Kathmandu, Nepal</span>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}