"use client";

import React, { useState } from "react";

const seatMapLink = "/seat-map";
const ticketGuideLink = "/912-guide/tickets";
const organizerEmail = "medianchen@gmail.com";
const organizerPhone = "857-233-3407";
const mcphsCommunitySponsorLogo = "/MCPHS-Logo.jpg";
const organizerLogo = "/btcc-btcf-logo.jpg";
const lansdowneMapImage = "/Lansdowne.png";

const sectionThemes = {
  "01": {
    shell: "border-emerald-200 bg-gradient-to-br from-emerald-50/80 via-white to-white",
    badge: "bg-emerald-700 text-white",
    eyebrow: "text-emerald-700",
    bar: "from-emerald-600 to-teal-500",
  },
  "02": {
    shell: "border-sky-200 bg-gradient-to-br from-sky-50/80 via-white to-white",
    badge: "bg-sky-700 text-white",
    eyebrow: "text-sky-700",
    bar: "from-sky-600 to-cyan-500",
  },
  "03": {
    shell: "border-amber-200 bg-gradient-to-br from-amber-50/80 via-white to-white",
    badge: "bg-amber-500 text-slate-950",
    eyebrow: "text-amber-700",
    bar: "from-amber-500 to-orange-400",
  },
  "04": {
    shell: "border-violet-200 bg-gradient-to-br from-violet-50/80 via-white to-white",
    badge: "bg-violet-700 text-white",
    eyebrow: "text-violet-700",
    bar: "from-violet-600 to-fuchsia-500",
  },
  "05": {
    shell: "border-indigo-200 bg-gradient-to-br from-indigo-50/80 via-white to-white",
    badge: "bg-indigo-700 text-white",
    eyebrow: "text-indigo-700",
    bar: "from-indigo-600 to-blue-500",
  },
  "06": {
    shell: "border-rose-200 bg-gradient-to-br from-rose-50/80 via-white to-white",
    badge: "bg-rose-700 text-white",
    eyebrow: "text-rose-700",
    bar: "from-rose-600 to-pink-500",
  },
  "07": {
    shell: "border-orange-200 bg-gradient-to-br from-orange-50/80 via-white to-white",
    badge: "bg-orange-600 text-white",
    eyebrow: "text-orange-700",
    bar: "from-orange-500 to-red-500",
  },
  "08": {
    shell: "border-teal-200 bg-gradient-to-br from-teal-50/80 via-white to-white",
    badge: "bg-teal-700 text-white",
    eyebrow: "text-teal-700",
    bar: "from-teal-600 to-emerald-500",
  },
};

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md ${className}`}>
      {children}
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="flex justify-center py-1">
      <div className="inline-flex items-center justify-center rounded-full bg-white p-1.5 shadow-sm ring-1 ring-slate-200">
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle cx="17" cy="17" r="16" fill="#F8FAFC" stroke="#CBD5E1" />
          <path d="M17 8V21" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M11.5 16.5L17 22L22.5 16.5" stroke="#0F172A" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
}

function Section({ id, title, children, eyebrow }) {
  const theme = sectionThemes[id] || sectionThemes["01"];

  return (
    <section
      id={`section-${id}`}
      className={`relative scroll-mt-6 overflow-hidden rounded-[2rem] border p-6 shadow-sm md:p-8 ${theme.shell}`}
    >
      <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${theme.bar}`} />
      <div className="flex items-start gap-4">
        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-black shadow-sm ${theme.badge}`}>
          {id}
        </div>
        <div>
          <p className={`text-xs font-black uppercase tracking-[0.25em] ${theme.eyebrow}`}>
            {eyebrow || `Section ${id}`}
          </p>
          <h2 className="mt-1 text-2xl font-black leading-tight text-slate-950 md:text-3xl">
            {title}
          </h2>
        </div>
      </div>
      <div className="mt-6 space-y-5 text-base leading-8 text-slate-700">
        {children}
      </div>
    </section>
  );
}


function LanguageToggle({ isZh, setIsZh }) {
  return (
    <div className="mt-6 flex flex-wrap justify-end gap-2">
      <a
        href="/"
        className="rounded-full bg-white/15 px-5 py-2.5 text-sm font-black text-white shadow-sm ring-1 ring-white/20 transition hover:bg-white/20"
      >
        {isZh ? "回到 912 首頁" : "Back to 912 Home"}
      </a>
      <button
        type="button"
        onClick={() => setIsZh(true)}
        className={`rounded-full px-5 py-2.5 text-sm font-black shadow-sm transition ${isZh ? "bg-amber-300 text-slate-950" : "bg-white/15 text-white ring-1 ring-white/20 hover:bg-white/20"}`}
      >
        中文
      </button>
      <button
        type="button"
        onClick={() => setIsZh(false)}
        className={`rounded-full px-5 py-2.5 text-sm font-black shadow-sm transition ${!isZh ? "bg-amber-300 text-slate-950" : "bg-white/15 text-white ring-1 ring-white/20 hover:bg-white/20"}`}
      >
        English
      </button>
    </div>
  );
}

function ContactSection({ isZh }) {
  return (
    <Section id="08" title={isZh ? "聯絡主辦單位" : "Contact the organizers"}>
      <div className="grid gap-5 md:grid-cols-[220px_1fr]">
        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
          <img
            src="/organizer-line-qr.jpg"
            alt={isZh ? "主辦單位 LINE QR Code" : "Organizer LINE QR Code"}
            className="w-full rounded-[1rem] bg-white"
          />
        </div>
        <Card>
          <p className="text-xl font-black text-slate-950">
            {isZh ? "主辦單位 LINE / Email" : "Organizer LINE / Email"}
          </p>
          <p className="mt-3">
            {isZh
              ? "有任何電子票、座位、衣服領取或活動問題，都可以聯絡主辦單位。"
              : "For questions about tickets, seating, shirt pickup, or the event, please contact the organizers."}
          </p>
          <p className="mt-3 break-all font-black text-emerald-800">{organizerEmail}</p>
          <p className="mt-2 font-black text-emerald-800">{organizerPhone}</p>
        </Card>
      </div>
    </Section>
  );
}


// Seat / shirt color lookup data copied from the official Seat Map page.
// Keep this in sync with /seat-map whenever the official lettering pattern changes.
const guideSectionData = {
  "L39": {
    "47": [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21
    ],
    "46": [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21
    ],
    "45": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ],
    "44": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19
    ],
    "43": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19
    ],
    "42": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ],
    "41": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ],
    "40": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17
    ],
    "39": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ],
    "38": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16
    ],
    "37": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ],
    "36": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15
    ],
    "35": [
      1,
      2,
      3,
      4,
      5,
      10,
      11
    ],
    "34": [
      1,
      2,
      3,
      4
    ],
    "33": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13
    ],
    "32": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "31": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "30": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "29": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "28": [
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]
  },
  "L41": {
    "37": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ],
    "38": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ],
    "39": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ],
    "40": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ],
    "41": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ],
    "42": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ],
    "43": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ],
    "44": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ],
    "45": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ],
    "46": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ],
    "47": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ],
    "36": [
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  "L42": {
    "25": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "26": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "27": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "28": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "29": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "30": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "31": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "32": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "33": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "34": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "35": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "36": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "37": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "38": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "39": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "40": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "41": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "42": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "43": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "44": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "45": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "46": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "47": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ]
  },
  "L43": {
    "45": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "44": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "43": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "42": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "41": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "40": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "39": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "38": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "37": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "36": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "35": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "34": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "33": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "32": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "31": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "30": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ],
    "29": [
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12
    ]
  }
};

const guideInning3BlackSeats = {
  "L39": {
    "46": [
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19
    ],
    "45": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ],
    "44": [
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17
    ],
    "43": [
      11,
      12,
      13
    ],
    "42": [
      10,
      11,
      12
    ],
    "41": [
      10,
      11,
      12
    ],
    "40": [
      9,
      10,
      11
    ],
    "39": [
      8,
      9,
      10
    ],
    "38": [
      8,
      9,
      10
    ],
    "37": [
      7,
      8,
      9
    ],
    "36": [
      7,
      8,
      9
    ]
  },
  "L41": {
    "46": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      15,
      16,
      17,
      18,
      19,
      20,
      21
    ],
    "45": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      15,
      16,
      17,
      18,
      19,
      20,
      21
    ],
    "44": [
      2,
      3,
      4,
      8,
      9,
      10,
      15,
      16,
      17,
      18,
      19,
      20,
      21
    ],
    "43": [
      2,
      3,
      4,
      8,
      9,
      10,
      17,
      18,
      19
    ],
    "42": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      17,
      18,
      19
    ],
    "41": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      17,
      18,
      19
    ],
    "40": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      17,
      18,
      19
    ],
    "39": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      17,
      18,
      19
    ],
    "38": [
      2,
      3,
      4,
      8,
      9,
      10,
      15,
      16,
      17,
      18,
      19,
      20,
      21
    ],
    "37": [
      2,
      3,
      4,
      8,
      9,
      10,
      15,
      16,
      17,
      18,
      19,
      20,
      21
    ],
    "36": [
      15,
      16,
      17,
      18,
      19,
      20,
      21
    ]
  },
  "L42": {
    "46": [
      2,
      3,
      4,
      12,
      13,
      14,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "45": [
      2,
      3,
      4,
      7,
      8,
      9,
      12,
      13,
      14,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "44": [
      2,
      3,
      4,
      7,
      8,
      9,
      12,
      13,
      14,
      17,
      18,
      19,
      23,
      24,
      25
    ],
    "43": [
      2,
      3,
      4,
      7,
      8,
      9,
      12,
      13,
      14,
      17,
      18,
      19,
      23,
      24,
      25
    ],
    "42": [
      2,
      3,
      4,
      7,
      8,
      9,
      12,
      13,
      14,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "41": [
      2,
      3,
      4,
      7,
      8,
      9,
      12,
      13,
      14,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "40": [
      2,
      3,
      4,
      7,
      8,
      9,
      12,
      13,
      14,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "39": [
      2,
      3,
      4,
      7,
      8,
      9,
      12,
      13,
      14,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25
    ],
    "38": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      17,
      18,
      19,
      23,
      24,
      25
    ],
    "37": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      17,
      18,
      19,
      23,
      24,
      25
    ],
    "36": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      17,
      18,
      19,
      23,
      24,
      25
    ]
  },
  "L43": {
    "44": [
      2,
      3,
      4,
      9,
      10,
      11
    ],
    "43": [
      2,
      3,
      4,
      9,
      10,
      11
    ],
    "42": [
      2,
      3,
      4,
      5,
      9,
      10,
      11
    ],
    "41": [
      2,
      3,
      4,
      5,
      6,
      9,
      10,
      11
    ],
    "40": [
      2,
      3,
      4,
      5,
      6,
      7,
      9,
      10,
      11
    ],
    "39": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "38": [
      2,
      3,
      4,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "37": [
      2,
      3,
      4,
      7,
      8,
      9,
      10,
      11
    ],
    "36": [
      2,
      3,
      4,
      8,
      9,
      10,
      11
    ],
    "35": [
      2,
      3,
      4,
      9,
      10,
      11
    ],
    "34": [
      2,
      3,
      4,
      9,
      10,
      11
    ]
  }
};

const guideInning6BlackSeats = {
  "L39": {
    "46": [
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ],
    "45": [
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19
    ],
    "44": [
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18
    ],
    "43": [
      11,
      12,
      13,
      14
    ],
    "42": [
      10,
      11,
      12,
      13
    ],
    "41": [
      10,
      11,
      12,
      13
    ],
    "40": [
      9,
      10,
      11,
      12
    ],
    "39": [
      8,
      9,
      10,
      11
    ],
    "38": [
      8,
      9,
      10,
      11
    ],
    "37": [
      7,
      8,
      9,
      10
    ]
  },
  "L41": {
    "38": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      18
    ],
    "39": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      17,
      18,
      19
    ],
    "40": [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      16,
      17,
      18,
      19,
      20
    ],
    "41": [
      1,
      2,
      3,
      6,
      7,
      10,
      11,
      12,
      15,
      16,
      17,
      18,
      19,
      20,
      21
    ],
    "42": [
      1,
      2,
      3,
      6,
      7,
      10,
      11,
      12,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ],
    "43": [
      1,
      2,
      3,
      6,
      7,
      10,
      11,
      12,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ],
    "44": [
      1,
      2,
      3,
      6,
      7,
      10,
      11,
      12,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22
    ],
    "45": [
      1,
      2,
      3,
      6,
      7,
      10,
      11,
      12,
      14,
      15,
      16,
      17,
      19,
      20,
      21,
      22
    ],
    "46": [
      1,
      2,
      3,
      6,
      7,
      10,
      11,
      12,
      15,
      16,
      20,
      21
    ]
  },
  "L42": {
    "34": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ],
    "35": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ],
    "36": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ],
    "37": [
      8,
      9,
      10,
      11,
      15,
      16,
      17,
      22,
      23,
      24
    ],
    "38": [
      8,
      9,
      10,
      11,
      15,
      16,
      17,
      22,
      23,
      24
    ],
    "39": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      15,
      16,
      17,
      22,
      23,
      24
    ],
    "40": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      15,
      16,
      17,
      22,
      23,
      24
    ],
    "41": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      15,
      16,
      17,
      22,
      23,
      24
    ],
    "42": [
      2,
      3,
      4,
      5,
      15,
      16,
      17,
      22,
      23,
      24
    ],
    "43": [
      2,
      3,
      4,
      5,
      15,
      16,
      17,
      22,
      23,
      24
    ],
    "44": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ],
    "45": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ],
    "46": [
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24
    ]
  },
  "L43": {
    "45": [
      1,
      2,
      3,
      10,
      11,
      12
    ],
    "44": [
      1,
      2,
      3,
      4,
      9,
      10,
      11,
      12
    ],
    "43": [
      2,
      3,
      4,
      5,
      8,
      9,
      10,
      11
    ],
    "42": [
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "41": [
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "40": [
      5,
      6,
      7,
      8
    ],
    "39": [
      5,
      6,
      7,
      8,
      9
    ],
    "38": [
      4,
      5,
      6,
      7,
      8,
      9,
      10
    ],
    "37": [
      3,
      4,
      5,
      6,
      8,
      9,
      10,
      11
    ],
    "36": [
      2,
      3,
      4,
      5,
      9,
      10,
      11,
      12
    ],
    "35": [
      1,
      2,
      3,
      4,
      10,
      11,
      12
    ],
    "34": [
      1,
      2,
      3,
      11,
      12
    ]
  }
};

function guideSeatId(section, row, seat) {
  return `${section}-R${row}-S${seat}`;
}

function buildGuideBlackSeatIdSet(pattern) {
  const ids = new Set();
  for (const [section, rows] of Object.entries(pattern)) {
    for (const [row, seats] of Object.entries(rows)) {
      for (const seat of seats) ids.add(guideSeatId(section, row, seat));
    }
  }
  return ids;
}

const guideInning3BlackSeatIds = buildGuideBlackSeatIdSet(guideInning3BlackSeats);
const guideInning6BlackSeatIds = buildGuideBlackSeatIdSet(guideInning6BlackSeats);

function GuideSeatColorLookup({ isZh }) {
  const sections = ["L39", "L41", "L42", "L43"];
  const [section, setSection] = useState("L39");
  const [row, setRow] = useState("47");
  const [seatNumber, setSeatNumber] = useState(3);

  const rows = Object.keys(guideSectionData[section] || {}).sort(
    (a, b) => Number(b) - Number(a)
  );
  const seats = guideSectionData[section]?.[String(row)] || [];

  const inning3IsBlack = guideInning3BlackSeatIds.has(
    guideSeatId(section, row, seatNumber)
  );
  const inning6IsBlack = guideInning6BlackSeatIds.has(
    guideSeatId(section, row, seatNumber)
  );

  function handleSectionChange(nextSection) {
    const nextRows = Object.keys(guideSectionData[nextSection] || {}).sort(
      (a, b) => Number(b) - Number(a)
    );
    const nextRow = nextRows[0] || "";
    const nextSeats = guideSectionData[nextSection]?.[nextRow] || [];
    setSection(nextSection);
    setRow(nextRow);
    setSeatNumber(nextSeats[0] || 1);
  }

  function handleRowChange(nextRow) {
    const nextSeats = guideSectionData[section]?.[String(nextRow)] || [];
    setRow(String(nextRow));
    setSeatNumber(nextSeats[0] || 1);
  }

  function ResultCard({ inning, title, isBlack }) {
    return (
      <div
        className={`p-4 ${
          isBlack
            ? "bg-slate-950 text-white"
            : "bg-transparent text-slate-950"
        }`}
      >
        <p
          className={`text-xs font-black uppercase tracking-[0.18em] ${
            isBlack ? "text-slate-300" : "text-slate-500"
          }`}
        >
          {isZh
            ? `第 ${inning} 局上結束後 · ${title}`
            : `After the top of the ${inning}${inning === 3 ? "rd" : "th"} inning · ${title}`}
        </p>

        <div className="mt-3 flex items-center gap-3">
          <span
            className={`h-11 w-11 shrink-0 rounded-full border-2 ${
              isBlack ? "border-white bg-black" : "border-slate-400 bg-white"
            }`}
          />
          <div>
            <p className="text-2xl font-black">
              {isZh ? (isBlack ? "穿黑色" : "穿白色") : isBlack ? "Wear black" : "Wear white"}
            </p>
            <p
              className={`mt-0.5 text-sm font-bold ${
                isBlack ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {isZh
                ? isBlack
                  ? "Red Sox × Bruins Jersey"
                  : "白色活動 T-shirt"
                : isBlack
                  ? "Red Sox × Bruins Jersey"
                  : "White event T-shirt"}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-sky-200 bg-white shadow-md">
      <div className="bg-gradient-to-r from-sky-50 via-white to-emerald-50 p-5 md:p-6">
        <p className="text-xs font-black uppercase tracking-[0.24em] text-sky-700">
          {isZh ? "找到我的座位與換衣顏色" : "Find my seat & shirt color"}
        </p>
        <h3 className="mt-2 text-2xl font-black leading-tight text-slate-950 md:text-3xl">
          {isZh
            ? "輸入座位，立即查看第 3 局與第 6 局要穿什麼顏色"
            : "Enter your seat to see what color to wear in the 3rd and 6th innings"}
        </h3>

        <div className="mt-5 grid gap-3 md:grid-cols-3">
          <label className="block">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-600">
              Section
            </span>
            <select
              value={section}
              onChange={(e) => handleSectionChange(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-black text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            >
              {sections.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-600">
              Row
            </span>
            <select
              value={row}
              onChange={(e) => handleRowChange(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-black text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            >
              {rows.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-xs font-black uppercase tracking-[0.18em] text-slate-600">
              Seat
            </span>
            <select
              value={seatNumber}
              onChange={(e) => setSeatNumber(Number(e.target.value))}
              className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-black text-slate-950 outline-none transition focus:border-sky-500 focus:ring-2 focus:ring-sky-100"
            >
              {seats.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-4 rounded-xl bg-slate-950 px-4 py-3 text-sm font-black text-white">
          {section} · Row {row} · Seat {seatNumber}
        </div>

        <div className="mt-3 overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white md:grid md:grid-cols-2 md:divide-x md:divide-slate-200">
          <ResultCard inning={3} title="TAIWAN" isBlack={inning3IsBlack} />
          <ResultCard inning={6} title="TW ❤️ SOX" isBlack={inning6IsBlack} />
        </div>
      </div>
    </div>
  );
}


function SeatColorLookupZh() {
  return (
    <Section id="06" title="排字活動說明＋座位／衣服顏色查詢">
      <div className="px-1">
        <p className="text-xl font-black text-rose-900">輕鬆參與，開心一起玩！</p>
        <p className="mt-3 leading-8 text-slate-700">
          這次的排字是一個大家一起完成的小挑戰。因為座位區並不是完整、方正的長方形，而且每一區、每一排的座位數量都不完全相同，所以最後呈現出來的效果，我們也無法百分之百預測。
        </p>
        <p className="mt-3 leading-8 text-slate-700">
          9/12 活動最主要的目標已經達成了——我們已經讓紅襪球團看見台灣社群的熱情、團結與凝聚力。這次排字更像是一個大家一起參與的小遊戲、小挑戰，希望留下屬於我們共同的回憶。
        </p>
        <p className="mt-3 font-black text-rose-800">
          最重要的是——大家一起參與、一起合作、一起玩得開心！ ❤️ TW⚾
        </p>

        <div className="mt-5 border-l-4 border-emerald-300 pl-4">
          <p className="font-black leading-8 text-slate-950">
            這次的排字活動，並不是每一位朋友都需要換衣服。
          </p>
          <p className="mt-2 leading-8 text-slate-700">
            有些座位需要在指定的時間換上不同顏色，有些座位則只需要維持原本的顏色就可以了。
            但其實，<strong>無論你需不需要換衣服，你都是這幅畫裡非常重要的一部分。</strong>
          </p>
          <p className="mt-2 leading-8 text-slate-700">
            我們每一個人的座位，就像是一個小小的拼圖。單看一個位置，也許看不出什麼，但當一千多位朋友一起坐在自己的位置、一起配合的時候，
            才有機會把完整的 <strong>TAIWAN</strong> 呈現在 Fenway。
          </p>
          <p className="mt-2 leading-8 text-slate-700">
            所以這次最重要的，不是「我需不需要換衣服」，而是<strong>我們大家都在，一起完成這件事。</strong>
            也許最後不一定會百分之百完美，但只要大家願意一起參與、一起配合，那一刻本身，就已經會是一個很特別、很值得我們記住的畫面。
          </p>
          <p className="mt-3 font-black leading-8 text-emerald-900">
            每一個人都很重要，少了任何一個位置，都可能讓畫面少了一小塊。只有大家一起，我們才能把 TAIWAN 完整地拼起來。❤️🇹🇼
          </p>
          <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 font-bold leading-7 text-amber-950 ring-1 ring-amber-200">
            👕 換衣服小提醒：建議大家直接穿著白色活動 T-shirt 進場。如果你的座位在指定時間需要換成黑色，直接把黑色 Red Sox × Bruins Jersey 套在白色 T-shirt 外面即可，不需要把白色衣服脫掉，會更方便也更快速。
          </p>
        </div>
      </div>

      <div className="grid gap-4 border-y border-slate-200 py-4 md:grid-cols-2">
        <div className="md:border-r md:border-slate-200 md:pr-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-rose-700">第 1 組排字</p>
          <p className="mt-1 text-sm font-bold text-slate-500">第 3 局上結束後</p>
          <p className="mt-1 text-3xl font-black text-slate-950">TAIWAN</p>
        </div>
        <div className="md:pl-2">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-indigo-700">第 2 組排字</p>
          <p className="mt-1 text-sm font-bold text-slate-500">第 6 局上結束後</p>
          <p className="mt-1 text-3xl font-black text-slate-950">TW ❤️ SOX</p>
        </div>
      </div>

      <GuideSeatColorLookup isZh={true} />

      <Card className="border-amber-200 bg-amber-50">
        <p className="text-xl font-black text-amber-900">完整 Seat Map 與排字參考</p>
        <p className="mt-3">
          上方可以直接輸入自己的 <strong>Section、Row、Seat</strong> 查詢兩次排字應穿的顏色。
          如果想查看完整座位分布，以及 <strong>第 3 局上結束後 TAIWAN</strong> 與 <strong>第 6 局上結束後 TW ❤️ SOX</strong> 的完整排字參考，可以再開啟 Seat Map 頁面。
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={seatMapLink}
            className="inline-flex rounded-full bg-emerald-800 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            開啟完整 Seat Map
          </a>
          <a
            href={`${seatMapLink}#reference`}
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-emerald-900 ring-1 ring-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-50"
          >
            查看第 3 局與第 6 局排字參考
          </a>
        </div>
      </Card>
    </Section>
  );
}

function SeatColorLookupEn() {
  return (
    <Section id="06" title="Lettering activity overview + seat / shirt color lookup">
      <div className="px-1">
        <p className="text-xl font-black text-rose-900">Relax, join in, and have fun!</p>
        <p className="mt-3 leading-8 text-slate-700">
          This lettering activity is a fun community challenge. Because our seating area is not a perfect rectangle and every section and row has a different number of seats, we cannot predict the final result with 100% certainty.
        </p>
        <p className="mt-3 leading-8 text-slate-700">
          The main goal of the 9/12 event has already been achieved—we have shown the Red Sox the energy, unity, and strength of the Taiwanese community. This lettering activity is simply a fun challenge we can complete together and remember.
        </p>
        <p className="mt-3 font-black text-rose-800">
          Most importantly: join in, work together, and have fun! ❤️ TW⚾
        </p>

        <div className="mt-5 border-l-4 border-emerald-300 pl-4">
          <p className="font-black leading-8 text-slate-950">
            Not everyone will need to change shirts during the lettering activity.
          </p>
          <p className="mt-2 leading-8 text-slate-700">
            Some seats will need to switch colors at the designated times, while others will simply stay in the same color.
            But whether or not you need to change shirts, <strong>you are an important part of the picture.</strong>
          </p>
          <p className="mt-2 leading-8 text-slate-700">
            Think of every seat as one small piece of a puzzle. One seat by itself may not look like much, but when more than a thousand of us sit in our assigned places and coordinate together,
            we have the chance to make <strong>TAIWAN</strong> appear across Fenway.
          </p>
          <p className="mt-2 leading-8 text-slate-700">
            The most important question is not “Do I need to change shirts?” It is that <strong>we are all there, completing this together.</strong>
            The final result may not be 100% perfect, but if everyone participates and works together, that moment itself will be something special and worth remembering.
          </p>
          <p className="mt-3 font-black leading-8 text-emerald-900">
            Every person matters. If even one piece is missing, the picture may lose a little part of itself. Only together can we complete TAIWAN. ❤️🇹🇼
          </p>
          <p className="mt-4 rounded-xl bg-amber-50 px-4 py-3 font-bold leading-7 text-amber-950 ring-1 ring-amber-200">
            👕 Shirt-change tip: We recommend entering Fenway already wearing your white event T-shirt. If your seat needs to switch to black at the designated time, simply put the black Red Sox × Bruins Jersey on over your white T-shirt. There is no need to take the white shirt off, which makes the change easier and faster.
          </p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-700">Lettering set 1</p>
          <p className="mt-2 text-lg text-slate-700">After the top of the 3rd inning</p>
          <p className="mt-2 text-3xl font-black text-slate-950">TAIWAN</p>
        </Card>
        <Card>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-700">Lettering set 2</p>
          <p className="mt-2 text-lg text-slate-700">After the top of the 6th inning</p>
          <p className="mt-2 text-3xl font-black text-slate-950">TW ❤️ SOX</p>
        </Card>
      </div>

      <GuideSeatColorLookup isZh={false} />

      <Card className="border-amber-200 bg-amber-50">
        <p className="text-xl font-black text-amber-900">Full Seat Map & lettering reference</p>
        <p className="mt-3">
          Use the lookup above to enter your <strong>Section, Row, and Seat</strong> and immediately see which color to wear for both lettering moments.
          For the complete seating layout and the full <strong>TAIWAN</strong> / <strong>TW ❤️ SOX</strong> reference patterns, open the Seat Map page.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={seatMapLink}
            className="inline-flex rounded-full bg-emerald-800 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            Open full Seat Map
          </a>
          <a
            href={`${seatMapLink}#reference`}
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-emerald-900 ring-1 ring-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-50"
          >
            View 3rd & 6th inning reference
          </a>
        </div>
      </Card>
    </Section>
  );
}

function GuideZh({ isZh, setIsZh }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-sky-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
        <div className="rounded-[2.25rem] bg-gradient-to-r from-emerald-900 via-emerald-800 to-sky-900 p-7 text-white shadow-2xl md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-100">
            9/12 Taiwan Fan Night at Fenway
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            9/12 台灣集結完整懶人包
          </h1>
          <div className="mt-5 space-y-2 text-2xl font-black text-amber-300 md:text-3xl">
            <p>Taiwanese in Boston, Strong Together</p>
            <p>波士頓台灣人，團結在一起！</p>
          </div>
          <LanguageToggle isZh={isZh} setIsZh={setIsZh} />
          <p className="mt-6 max-w-4xl text-lg leading-9 text-emerald-50">
            大家好！再次感謝大家對 9/12 活動的支持！我們在距離活動還有一個半月時，就已經將所有門票全部售完。
            這次總共有 <strong>1,325 位朋友</strong> 一起參加這個活動。也很高興和大家分享，這次的 9/12 台灣集結，
            已經成功讓紅襪球團看見我們台灣社群的力量！
          </p>
          <div className="mt-6 rounded-[1.5rem] border border-white/20 bg-white/10 p-5">
            <p className="text-xl font-black">🎉 紅襪官方已經注意到台灣社群所展現出的力量！</p>
            <p className="mt-4 text-3xl font-black text-amber-300 md:text-5xl">
              Light Up Taiwan, Let Taiwan Be Seen!
            </p>
            <p className="mt-2 text-right text-2xl font-black">點亮台灣，讓台灣被看見！</p>
          </div>
        </div>

        <div className="mt-8 space-y-10">
          <Section id="01" title="活動資訊">
            <p>
              9/12 活動售票目前已經結束。非常感謝大家的熱烈支持，本次活動共有 <strong>1,325 位朋友參加！</strong>
            </p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="!p-4 border-emerald-200 bg-emerald-50">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Date</p>
                <p className="mt-1.5 text-2xl font-black text-slate-950">2026 / 9 / 12</p>
                <p className="text-sm font-bold text-slate-600">星期六</p>
              </Card>
              <Card className="!p-4 border-sky-200 bg-sky-50">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-700">Game Time</p>
                <p className="mt-1.5 text-2xl font-black text-slate-950">4:15 PM</p>
                <p className="text-sm font-bold text-slate-600">Royals vs. Red Sox</p>
              </Card>
              <Card className="!p-4 border-slate-200 bg-slate-50">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-600">Location</p>
                <p className="mt-1.5 text-2xl font-black text-slate-950">Fenway Park</p>
                <p className="text-sm font-bold text-slate-600">4 Jersey St, Boston, MA 02215</p>
              </Card>
              <Card className="!p-4 border-slate-200 bg-white">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-teal-700">Organizer</p>
                    <p className="mt-1 text-sm font-black leading-tight text-slate-950">波克萊台灣商會基金會</p>
                    <p className="mt-1 text-xs font-bold leading-snug text-slate-600">Brookline Taiwanese Chamber Foundation</p>
                  </div>
                  <img
                    src={organizerLogo}
                    alt="波克萊台灣商會基金會 Logo"
                    className="h-12 w-12 shrink-0 rounded-lg bg-white object-contain p-1 ring-1 ring-slate-200"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
              </Card>
            </div>

          </Section>

          <Section id="02" title="活動當天流程">
            <div className="mx-auto max-w-5xl">
              <div className="space-y-2">
                <div className="grid grid-cols-[110px_24px_1fr] gap-3 md:grid-cols-[140px_28px_1fr] md:gap-4">
                  <div className="pt-2 text-right">
                    <p className="text-base font-black leading-tight text-slate-950 md:text-lg">2:45–3:15</p>
                    <p className="mt-0.5 text-xs font-bold text-slate-500">PM</p>
                  </div>

                  <div className="relative flex justify-center">
                    <span className="relative z-10 mt-3 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-4 ring-white" />
                    <span className="absolute bottom-[-10px] top-7 w-px bg-slate-300" />
                  </div>

                  <div className="pb-2">
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 shadow-sm">
                      <p className="text-lg font-black text-emerald-900">Lansdowne Street 集合</p>
                      <p className="mt-1.5 leading-7">請大家在芬威球場旁邊的 <strong>Lansdowne Street</strong> 集合。</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[110px_24px_1fr] gap-3 md:grid-cols-[140px_28px_1fr] md:gap-4">
                  <div className="pt-2 text-right">
                    <p className="text-base font-black leading-tight text-slate-950 md:text-lg">3:15</p>
                    <p className="mt-0.5 text-xs font-bold text-slate-500">PM</p>
                  </div>

                  <div className="relative flex justify-center">
                    <span className="relative z-10 mt-3 h-3.5 w-3.5 rounded-full bg-sky-500 ring-4 ring-white" />
                    <span className="absolute bottom-[-10px] top-7 w-px bg-slate-300" />
                  </div>

                  <div className="pb-2">
                    <div className="rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 shadow-sm">
                      <p className="text-lg font-black text-sky-900">大合照</p>
                      <p className="mt-1.5 leading-7">請大家準時集合，一起完成 912 Taiwan Fan Night 的 1300 人大合照。</p>
                      <div className="mt-2 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2">
                      <p className="font-black leading-6 text-rose-900">
                        🐻 特別感謝 <strong>Keep Taiwan Free</strong> 派出他們的台灣大黑熊來與大家一起合照！
                      </p>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[110px_24px_1fr] gap-3 md:grid-cols-[140px_28px_1fr] md:gap-4">
                  <div className="pt-2 text-right">
                    <p className="text-base font-black leading-tight text-slate-950 md:text-lg">3:20</p>
                    <p className="mt-0.5 text-xs font-bold text-slate-500">PM</p>
                  </div>

                  <div className="relative flex justify-center">
                    <span className="relative z-10 mt-3 h-3.5 w-3.5 rounded-full bg-slate-500 ring-4 ring-white" />
                    <span className="absolute bottom-[-10px] top-7 w-px bg-slate-300" />
                  </div>

                  <div className="pb-2">
                    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                      <p className="text-lg font-black text-slate-950">進場領取黑色 Red Sox × Bruins Jersey</p>
                      <p className="mt-1.5 leading-7">大合照結束後，請大家陸續進入 Fenway Park。通過安檢後，前往球場指定發放地點，使用<strong>當天的電子票</strong>領取紅襪官方發放的限量 Red Sox × Bruins 聯名棒球 Jersey。</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[110px_24px_1fr] gap-3 md:grid-cols-[140px_28px_1fr] md:gap-4">
                  <div className="pt-2 text-right">
                    <p className="text-base font-black leading-tight text-slate-950 md:text-lg">4:15</p>
                    <p className="mt-0.5 text-xs font-bold text-slate-500">PM</p>
                  </div>

                  <div className="relative flex justify-center">
                    <span className="relative z-10 mt-3 h-3.5 w-3.5 rounded-full bg-amber-500 ring-4 ring-white" />
                    <span className="absolute bottom-[-10px] top-7 w-px bg-slate-300" />
                  </div>

                  <div className="pb-2">
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 shadow-sm">
                      <p className="text-lg font-black text-amber-900">比賽開始</p>
                      <p className="mt-1.5 leading-7">比賽正式開始。建議大家在開賽前先完成進場、安檢與 Jersey 領取。</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[110px_24px_1fr] gap-3 md:grid-cols-[140px_28px_1fr] md:gap-4">
                  <div className="pt-2 text-right">
                    <p className="text-base font-black leading-tight text-slate-950 md:text-lg">第 3 局上結束後</p>
                    
                  </div>

                  <div className="relative flex justify-center">
                    <span className="relative z-10 mt-3 h-3.5 w-3.5 rounded-full bg-rose-500 ring-4 ring-white" />
                    <span className="absolute bottom-[-10px] top-7 w-px bg-slate-300" />
                  </div>

                  <div className="pb-2">
                    <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 shadow-sm">
                      <p className="text-lg font-black text-rose-900">排字活動</p>
                      <p className="mt-1 text-2xl font-black tracking-wide text-slate-950">TAIWAN</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[110px_24px_1fr] gap-3 md:grid-cols-[140px_28px_1fr] md:gap-4">
                  <div className="pt-2 text-right">
                    <p className="text-base font-black leading-tight text-slate-950 md:text-lg">第 6 局上結束後</p>
                    
                  </div>

                  <div className="relative flex justify-center">
                    <span className="relative z-10 mt-3 h-3.5 w-3.5 rounded-full bg-indigo-500 ring-4 ring-white" />
                    
                  </div>

                  <div className="pb-2">
                    <div className="rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-3 shadow-sm">
                      <p className="text-lg font-black text-indigo-900">排字活動</p>
                      <p className="mt-1 text-2xl font-black tracking-wide text-slate-950">TW ❤️ SOX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="mt-4 border-emerald-200 bg-white">
              <p className="text-lg font-black text-emerald-900">Lansdowne St 集合位置圖</p>
              <p className="mt-2 text-slate-700">請依照下方位置圖前往 Lansdowne Street 集合。</p>
              <div className="mt-4 overflow-hidden rounded-[1rem] border border-emerald-200 bg-white">
                <img
                  src={lansdowneMapImage}
                  alt="Lansdowne St 集合位置圖"
                  className="w-full object-contain"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
            </Card>

            <Card className="border-rose-200 bg-rose-50">
              <p className="font-black text-rose-900">活動當天小提醒</p>
              <p className="mt-2">建議大家提早抵達，預留集合、合照、安檢與領取 Jersey 的時間，避免錯過比賽開始，也別忘了留意兩次排字活動時間。</p>
            </Card>
          </Section>

          <Section id="03" title="活動衣服發放">
            <div className="grid gap-4">
              <Card className="border-slate-200 bg-white">
                <div className="mb-4 overflow-hidden rounded-[1.1rem] border border-slate-200 bg-slate-50">
                  <img
                    src="/912-fenway-2026-white-event-tshirt.png"
                    alt="白色 9/12 活動 T-shirt"
                    className="h-72 w-full object-contain bg-white md:h-80"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
                <h3 className="text-xl font-black text-slate-950">⚪ 白色 9/12 活動 T-shirt</h3>
                <p className="mt-3">
                  白色衣服是由 <strong>波克萊台灣商會基金會</strong> 所贈送的 <strong>9/12 活動 T-shirt</strong>，請依照下方公布的發放時間與地點提前領取。
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>可本人領取，也可以請朋友代領。</li>
                  <li>活動衣服不提供郵寄。</li>
                  <li><strong>另外加購的活動衣服</strong>也請依照下方公布的相同發放地點與時間領取喔！</li>
                  <li>建議大家活動當天先穿著白色活動 T-shirt 到 Fenway。</li>
                </ul>
              </Card>


            </div>

            <Card className="border-emerald-200 bg-emerald-50">
              <p className="text-lg font-black text-emerald-900">912 衣服發放地點與時間速覽</p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 ring-1 ring-emerald-200">
                  <p className="font-black text-slate-950">8/28 Fri｜Newton 僑教中心</p>
                  <p className="text-sm font-bold text-slate-600">10:30 AM – 4:30 PM｜小教室</p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-emerald-200">
                  <p className="font-black text-slate-950">8/29 Sat｜Cambridge University Park</p>
                  <p className="text-sm font-bold text-slate-600">10:30 AM – 4:30 PM｜戶外</p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-emerald-200">
                  <p className="font-black text-slate-950">8/30 Sun｜Northeastern Crossing</p>
                  <p className="text-sm font-bold text-slate-600">10:30 AM – 4:30 PM｜Conference Room</p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-emerald-200">
                  <p className="font-black text-slate-950">9/9 Wed｜Tai Chi Acupuncture & Wellness Center – Danvers location</p>
                  <p className="text-sm font-bold text-slate-600">4:00 PM – 7:00 PM｜Parking lot</p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-emerald-200">
                  <p className="font-black text-slate-950">9/10 Thu｜Cafe Zing</p>
                  <p className="text-sm font-bold text-slate-600">3:00 PM – 6:00 PM｜Porter Station 附近</p>
                </div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-emerald-200">
                  <p className="font-black text-slate-950">9/11 Fri｜Newton 僑教中心</p>
                  <p className="text-sm font-bold text-slate-600">10:30 AM – 4:30 PM｜小教室</p>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <Card className="border-slate-200 bg-white">
                <div className="grid gap-4 md:grid-cols-[190px_1fr] md:items-start">
                  <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-950 ring-1 ring-emerald-200">
                    <p className="text-2xl font-black">8/28</p>
                    <p className="font-black">Friday</p>
                    <p className="mt-3 text-sm font-bold">10:30 AM – 4:30 PM</p>
                  </div>
                  <div>
                    <p className="text-xl font-black text-slate-950">Newton｜波士頓華僑文教服務中心 — 小教室</p>
                    <p className="mt-2 font-bold text-slate-700">地址：90 Lincoln St, Newton Highlands, MA 02461</p>
                    <p className="mt-3 rounded-2xl bg-slate-50 p-4 font-bold leading-7 text-slate-800 ring-1 ring-slate-200">
                      小提醒：衣服會在小教室發放。此地點也可以領取大小台灣國旗，數量有限！感謝僑教中心的支持！
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-slate-200 bg-white">
                <div className="grid gap-4 md:grid-cols-[190px_1fr] md:items-start">
                  <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-950 ring-1 ring-emerald-200">
                    <p className="text-2xl font-black">8/29</p>
                    <p className="font-black">Saturday</p>
                    <p className="mt-3 text-sm font-bold">10:30 AM – 4:30 PM</p>
                  </div>
                  <div>
                    <p className="text-xl font-black text-slate-950">Cambridge｜University Park Common</p>
                    <p className="mt-2">
                      <a href="https://maps.app.goo.gl/AZhuec9yh3nJjep59" target="_blank" rel="noreferrer" className="font-black text-emerald-700 underline underline-offset-4">
                        Google Maps 地點連結
                      </a>
                    </p>
                    <p className="mt-3 rounded-2xl bg-slate-50 p-4 font-bold leading-7 text-slate-800 ring-1 ring-slate-200">
                      小提醒：此地點為戶外，發放點會在公園正中間附近，靠近 Sidney St。交通可搭乘 MBTA Red Line（紅線）。
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-slate-200 bg-white">
                <div className="grid gap-4 md:grid-cols-[190px_1fr] md:items-start">
                  <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-950 ring-1 ring-emerald-200">
                    <p className="text-2xl font-black">8/30</p>
                    <p className="font-black">Sunday</p>
                    <p className="mt-3 text-sm font-bold">10:30 AM – 4:30 PM</p>
                  </div>
                  <div>
                    <p className="text-xl font-black text-slate-950">Boston｜Northeastern Crossing — Conference Room</p>
                    <p className="mt-2 font-bold text-slate-700">地址：1175 Tremont St, Boston, MA 02120</p>
                    <p className="mt-3 rounded-2xl bg-slate-50 p-4 font-bold leading-7 text-slate-800 ring-1 ring-slate-200">
                      小提醒：MBTA Orange Line（橘線）Ruggles Station 附近。
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-slate-200 bg-white">
                <div className="grid gap-4 md:grid-cols-[190px_1fr] md:items-start">
                  <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-950 ring-1 ring-emerald-200">
                    <p className="text-2xl font-black">9/9</p>
                    <p className="font-black">Wednesday</p>
                    <p className="mt-3 text-sm font-bold">4:00 PM – 7:00 PM</p>
                  </div>
                  <div>
                    <p className="text-xl font-black text-slate-950">Danvers｜Tai Chi Acupuncture & Wellness Center</p>
                    <p className="mt-2 font-bold text-slate-700">地址：2 Orchard Ln, Danvers, MA 01923</p>
                    <p className="mt-3 rounded-2xl bg-slate-50 p-4 font-bold leading-7 text-slate-800 ring-1 ring-slate-200">
                      小提醒：此地點為戶外，會在 parking lot 發放。
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="border-slate-200 bg-white">
                <div className="grid gap-4 md:grid-cols-[190px_1fr] md:items-start">
                  <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-950 ring-1 ring-emerald-200">
                    <p className="text-2xl font-black">9/10</p>
                    <p className="font-black">Thursday</p>
                    <p className="mt-3 text-sm font-bold">3:00 PM – 6:00 PM</p>
                  </div>
                  <div>
                    <p className="text-xl font-black text-slate-950">Cambridge｜Cafe Zing</p>
                    <p className="mt-2 font-bold text-slate-700">地址：25 White St, Cambridge, MA 02140</p>
                    <div className="mt-3 space-y-3">
                      <p className="rounded-2xl bg-slate-50 p-4 font-bold leading-7 text-slate-800 ring-1 ring-slate-200">
                        交通／停車：最近的是 MBTA Red Line（紅線）Porter Station。Cafe Zing 旁邊也有兩小時免費停車。
                      </p>
                      <p className="rounded-2xl bg-rose-50 p-4 font-bold leading-7 text-rose-900 ring-1 ring-rose-200">
                        影展提醒：<strong>8th Taiwan Film Festival of Boston</strong> 當天晚上 7:00 PM 在 Somerville Theatre 上映 HERO! HITO!《冠軍之路》。兩個地點相差不到 1 mile，可以領完衣服後一起去看。
                      </p>
                      <a
                        href="https://www.zeffy.com/en-US/ticketing/8th-taiwan-film-festival-of-boston"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-full bg-rose-700 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-rose-600"
                      >
                        冠軍之路購票連結
                      </a>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="border-slate-200 bg-white">
                <div className="grid gap-4 md:grid-cols-[190px_1fr] md:items-start">
                  <div className="rounded-2xl bg-emerald-100 p-4 text-emerald-950 ring-1 ring-emerald-200">
                    <p className="text-2xl font-black">9/11</p>
                    <p className="font-black">Friday</p>
                    <p className="mt-3 text-sm font-bold">10:30 AM – 4:30 PM</p>
                  </div>
                  <div>
                    <p className="text-xl font-black text-slate-950">Newton｜波士頓華僑文教服務中心 — 小教室</p>
                    <p className="mt-2 font-bold text-slate-700">地址：90 Lincoln St, Newton Highlands, MA 02461</p>
                    <p className="mt-3 rounded-2xl bg-slate-50 p-4 font-bold leading-7 text-slate-800 ring-1 ring-slate-200">
                      小提醒：衣服會在小教室發放。此地點也可以領取大小台灣國旗，數量有限！感謝僑教中心的支持！
                    </p>
                  </div>
                </div>
              </Card>
            </div>

          </Section>

          <Section id="04" title="黑色 Red Sox × Bruins Jersey 領取資訊">
            <div className="grid gap-5 md:grid-cols-[360px_1fr] md:items-center">
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                <img src="/912-fenway-2026-black-redsox-bruins-jersey.jpg" alt="黑色 Red Sox × Bruins Jersey" className="h-72 w-full object-contain md:h-80" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              </div>
              <Card className="border-slate-200 bg-white">
                <h3 className="text-xl font-black text-slate-950">⚫ 黑色 Red Sox × Bruins Jersey</h3>
                <p className="mt-3">這件黑色 Jersey 是由 <strong>Boston Red Sox 官方發放</strong>的 <strong>limited-edition Red Sox and Bruins co-branded baseball jersey</strong>。不需要提前領取，請於活動當天進入 Fenway Park 後領取。</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>建議大合照結束後，約 <strong>3:20 PM</strong> 開始陸續進場。</li>
                  <li>通過安檢後，請前往球場<strong>指定發放地點</strong>。</li>
                  <li>領取時需使用／出示<strong>當天的電子票</strong>。</li>
                  <li>成人尺寸提供 <strong>S–XL</strong>。</li>
                  <li>偏好尺寸採 <strong>first-come, first-served</strong> 方式發放，尺寸依現場供應為準，建議提早進場領取。</li>
                  <li><strong>請不要太晚才去領取：</strong>紅襪球團可能會在比賽開始幾局後結束 Jersey 發放，因此強烈建議大家進場後就先前往指定地點領取。</li>
                  <li>排字時會依照座位安排，在白色活動 T-shirt 與黑色 Jersey 之間配合切換。</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Section id="05" title="電子票領取方式">
            <div className="rounded-[1.25rem] border border-amber-300 bg-amber-50 px-5 py-4 shadow-sm">
              <p className="text-lg font-black leading-8 text-amber-950">
                🎟️ 電子票預計於 <strong className="text-rose-700">8 月 22 日開始發放</strong>，並在<strong className="text-rose-700">當天全部發送完畢</strong>。
              </p>
            </div>
            <ol className="list-decimal space-y-3 pl-6 marker:font-black marker:text-slate-500">
              <li><strong>下載 MLB Ballpark App：</strong>請下載 <strong>MLB Ballpark App</strong>，不是一般的 MLB App。</li>
              <li><strong>註冊或登入 MLB 帳號：</strong>Email 請務必與 <strong>購買 912 活動票券時填寫的 Email</strong> 相同。若 Email 不相同，請務必聯絡主辦單位（波克萊基金會）協助更改 Email，避免後續無法順利收到或接受電子票。</li>
              <li><strong>收到轉票 Email：</strong>收到 Red Sox ticket email 後，請點選 <strong>Access Tickets</strong>。</li>
              <li><strong>查看或轉票：</strong>您可以在 MLB Ballpark App 中查看電子票，也可以將個別門票轉給家人朋友。</li>
            </ol>
            <a
              href={ticketGuideLink}
              className="inline-flex rounded-full bg-emerald-800 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              查看電子票 Step-by-step 教學
            </a>
            <Card className="border-sky-200 bg-sky-50">
              <p className="font-black text-sky-900">🎟️ 電子票問題需要協助？</p>
              <p className="mt-2">
                如果有任何電子票相關問題，除了可以聯絡主辦單位之外，也可以在<strong>領取活動衣服時</strong>，請現場志工協助喔！
              </p>
            </Card>
          </Section>
          <SeatColorLookupZh />

          <Section id="07" title="重要提醒">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-indigo-200 bg-indigo-50">
                <p className="text-lg font-black text-indigo-900">🎟️ 電子票與入場</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>請提前下載並登入 <strong>MLB Ballpark App</strong>，不要等到比賽當天才處理。</li>
                  <li>入場時請直接開啟 App 中的電子票，請勿只使用截圖。</li>
                  <li>一般持票者通常可於開賽前約 <strong>90 分鐘</strong> 入場。</li>
                  <li><strong>No Re-Entry：</strong>門票掃描入場後，原則上不可再次出場後重新入場。</li>
                </ul>
              </Card>

              <Card className="border-sky-200 bg-sky-50">
                <p className="text-lg font-black text-sky-900">🎒 Fenway Park Bag Policy</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>可攜帶<strong>單一夾層、尺寸不超過 12&quot; × 12&quot; × 6&quot;</strong> 的小型包包。</li>
                  <li>建議使用透明單層包，可加快安檢速度。</li>
                  <li><strong>Backpack、duffel bag、backpack-style purse 及多夾層大型包包</strong>禁止攜帶。</li>
                  <li>嬰兒用品袋及必要醫療用品除外。</li>
                </ul>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50">
                <p className="text-lg font-black text-emerald-900">🚇 交通與抵達時間</p>
                <p className="mt-3">
                  比賽日 Fenway Park 周邊交通壅塞、停車費用通常較高，建議優先搭乘大眾交通工具，並提早抵達 Lansdowne Street 集合。
                </p>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <p className="text-lg font-black text-amber-900">🧥 穿著與天氣準備</p>
                <p className="mt-3">
                  波士頓天氣變化較大，建議穿著方便增減的多層衣物。若天氣不穩定，可準備<strong>輕便雨衣 / Poncho</strong> 或輕薄防水外套。
                </p>
              </Card>

              <Card className="border-slate-200 bg-white md:col-span-2">
                <p className="text-lg font-black text-slate-950">🥤 Food & Drinks</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>可攜帶一瓶<strong>未開封的塑膠瓶裝水</strong>。</li>
                  <li>罐裝飲料、玻璃瓶及硬式 cooler 不得攜入。</li>
                </ul>
              </Card>
            </div>

            <Card className="border-rose-200 bg-rose-50">
              <p className="font-black text-rose-900">活動當天最重要的提醒</p>
              <p className="mt-2">
                請提早抵達、準備好 MLB Ballpark App 電子票、攜帶符合規定的小型包包，並預留安檢與領取 Jersey 的時間。
              </p>
            </Card>
          </Section>

          <ContactSection isZh={true} />



          <Card className="overflow-hidden border-rose-200 bg-white p-0 shadow-xl ring-4 ring-rose-50">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="bg-gradient-to-br from-rose-50 via-white to-emerald-50 p-6 md:p-8">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-700">
                  Community Sponsor
                </p>
                <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 md:text-4xl">
                  感謝 MCPHS 支持 912 Taiwan Fan Night
                </h2>
                <p className="mt-4 text-base font-bold leading-8 text-slate-700 md:text-lg">
                  Massachusetts College of Pharmacy and Health Sciences（MCPHS）是我們的 Community Sponsor。感謝 MCPHS 支持波士頓台灣社群，一起讓台灣在 Fenway 被看見。
                </p>
              </div>
              <div className="flex items-center justify-center bg-white p-6 md:p-8">
                <img
                  src={mcphsCommunitySponsorLogo}
                  alt="Massachusetts College of Pharmacy and Health Sciences logo"
                  className="h-auto w-full max-w-2xl object-contain"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}

function GuideEn({ isZh, setIsZh }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-white to-sky-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
        <div className="rounded-[2.25rem] bg-gradient-to-r from-emerald-900 via-emerald-800 to-sky-900 p-7 text-white shadow-2xl md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-100">
            9/12 Taiwan Fan Night at Fenway
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            9/12 Taiwan Fan Night Complete Guide
          </h1>
          <LanguageToggle isZh={isZh} setIsZh={setIsZh} />
          <p className="mt-6 max-w-4xl text-lg leading-9 text-emerald-50">
            Thank you again for your incredible support of our 9/12 event! All tickets were sold out a month and a half before game day,
            and a total of <strong>1,325 friends</strong> will be joining us at Fenway. We are also excited to share that this incredible
            turnout has successfully shown the Red Sox the strength, unity, and spirit of the Taiwanese community!
          </p>
        </div>
<div className="mt-8 space-y-10">
          <Section id="01" title="Event information">
            <p>
              Ticket sales for the 9/12 event are now closed. Thank you for the incredible support. More than <strong>1,325 friends</strong> will join us at Fenway.
            </p>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-emerald-200 bg-emerald-50">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Date</p>
                <p className="mt-1.5 text-2xl font-black text-slate-950">2026 / 9 / 12</p>
                <p className="text-sm font-bold text-slate-600">Saturday</p>
              </Card>
              <Card className="border-sky-200 bg-sky-50">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-700">Game Time</p>
                <p className="mt-1.5 text-2xl font-black text-slate-950">4:15 PM</p>
                <p className="text-sm font-bold text-slate-600">Royals vs. Red Sox</p>
              </Card>
              <Card className="!p-4 border-slate-200 bg-slate-50">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-600">Location</p>
                <p className="mt-1.5 text-2xl font-black text-slate-950">Fenway Park</p>
                <p className="text-sm font-bold text-slate-600">4 Jersey St, Boston, MA 02215</p>
              </Card>
              <Card className="!p-4 border-slate-200 bg-white">
                <div className="flex items-center justify-between gap-4">
                  <div className="min-w-0">
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-teal-700">Organizer</p>
                    <p className="mt-1 text-sm font-black leading-tight text-slate-950">Brookline Taiwanese Chamber Foundation</p>
                    <p className="mt-1 text-xs font-bold leading-snug text-slate-600">波克萊台灣商會基金會</p>
                  </div>
                  <img
                    src={organizerLogo}
                    alt="Brookline Taiwanese Chamber Foundation logo"
                    className="h-12 w-12 shrink-0 rounded-lg bg-white object-contain p-1 ring-1 ring-slate-200"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
              </Card>
            </div>

          </Section>

          <Section id="02" title="Event-day schedule">
            <div className="mx-auto max-w-5xl">
              <div className="space-y-2">
                <div className="grid grid-cols-[110px_24px_1fr] gap-3 md:grid-cols-[140px_28px_1fr] md:gap-4">
                  <div className="pt-2 text-right">
                    <p className="text-base font-black leading-tight text-slate-950 md:text-lg">2:45–3:15</p>
                    <p className="mt-0.5 text-xs font-bold text-slate-500">PM</p>
                  </div>

                  <div className="relative flex justify-center">
                    <span className="relative z-10 mt-3 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-4 ring-white" />
                    <span className="absolute bottom-[-10px] top-7 w-px bg-slate-300" />
                  </div>

                  <div className="pb-2">
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 shadow-sm">
                      <p className="text-lg font-black text-emerald-900">Gather on Lansdowne Street</p>
                      <p className="mt-1.5 leading-7">Please gather on <strong>Lansdowne Street</strong> next to Fenway Park.</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[110px_24px_1fr] gap-3 md:grid-cols-[140px_28px_1fr] md:gap-4">
                  <div className="pt-2 text-right">
                    <p className="text-base font-black leading-tight text-slate-950 md:text-lg">3:15</p>
                    <p className="mt-0.5 text-xs font-bold text-slate-500">PM</p>
                  </div>

                  <div className="relative flex justify-center">
                    <span className="relative z-10 mt-3 h-3.5 w-3.5 rounded-full bg-sky-500 ring-4 ring-white" />
                    <span className="absolute bottom-[-10px] top-7 w-px bg-slate-300" />
                  </div>

                  <div className="pb-2">
                    <div className="rounded-2xl border border-sky-200 bg-sky-50 px-4 py-3 shadow-sm">
                      <p className="text-lg font-black text-sky-900">Group photo</p>
                      <p className="mt-1.5 leading-7">Please arrive on time so we can take the 912 Taiwan Fan Night 1300-person group photo together.</p>
                      <div className="mt-2 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2">
                      <p className="font-black leading-6 text-rose-900">
                        🐻 Special thanks to <strong>Keep Taiwan Free</strong> for bringing their Taiwan black bear to join everyone for photos!
                      </p>
                    </div>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[110px_24px_1fr] gap-3 md:grid-cols-[140px_28px_1fr] md:gap-4">
                  <div className="pt-2 text-right">
                    <p className="text-base font-black leading-tight text-slate-950 md:text-lg">3:20</p>
                    <p className="mt-0.5 text-xs font-bold text-slate-500">PM</p>
                  </div>

                  <div className="relative flex justify-center">
                    <span className="relative z-10 mt-3 h-3.5 w-3.5 rounded-full bg-slate-500 ring-4 ring-white" />
                    <span className="absolute bottom-[-10px] top-7 w-px bg-slate-300" />
                  </div>

                  <div className="pb-2">
                    <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                      <p className="text-lg font-black text-slate-950">Enter Fenway & pick up the black Red Sox × Bruins Jersey</p>
                      <p className="mt-1.5 leading-7">After the group photo, please head into Fenway Park. After security, go to the designated pickup location and use your <strong>digital ticket for that day</strong> to claim the limited-edition Red Sox × Bruins co-branded baseball Jersey distributed by the Red Sox.</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[110px_24px_1fr] gap-3 md:grid-cols-[140px_28px_1fr] md:gap-4">
                  <div className="pt-2 text-right">
                    <p className="text-base font-black leading-tight text-slate-950 md:text-lg">4:15</p>
                    <p className="mt-0.5 text-xs font-bold text-slate-500">PM</p>
                  </div>

                  <div className="relative flex justify-center">
                    <span className="relative z-10 mt-3 h-3.5 w-3.5 rounded-full bg-amber-500 ring-4 ring-white" />
                    <span className="absolute bottom-[-10px] top-7 w-px bg-slate-300" />
                  </div>

                  <div className="pb-2">
                    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 shadow-sm">
                      <p className="text-lg font-black text-amber-900">Game starts</p>
                      <p className="mt-1.5 leading-7">The game begins. We recommend completing entry, security, and Jersey pickup before the game starts.</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[110px_24px_1fr] gap-3 md:grid-cols-[140px_28px_1fr] md:gap-4">
                  <div className="pt-2 text-right">
                    <p className="text-base font-black leading-tight text-slate-950 md:text-lg">After top 3rd</p>
                    
                  </div>

                  <div className="relative flex justify-center">
                    <span className="relative z-10 mt-3 h-3.5 w-3.5 rounded-full bg-rose-500 ring-4 ring-white" />
                    <span className="absolute bottom-[-10px] top-7 w-px bg-slate-300" />
                  </div>

                  <div className="pb-2">
                    <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 shadow-sm">
                      <p className="text-lg font-black text-rose-900">Lettering activity</p>
                      <p className="mt-1 text-2xl font-black tracking-wide text-slate-950">TAIWAN</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-[110px_24px_1fr] gap-3 md:grid-cols-[140px_28px_1fr] md:gap-4">
                  <div className="pt-2 text-right">
                    <p className="text-base font-black leading-tight text-slate-950 md:text-lg">After 6th</p>
                    
                  </div>

                  <div className="relative flex justify-center">
                    <span className="relative z-10 mt-3 h-3.5 w-3.5 rounded-full bg-indigo-500 ring-4 ring-white" />
                    
                  </div>

                  <div className="pb-2">
                    <div className="rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-3 shadow-sm">
                      <p className="text-lg font-black text-indigo-900">Lettering activity</p>
                      <p className="mt-1 text-2xl font-black tracking-wide text-slate-950">TW ❤️ SOX</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="mt-4 border-emerald-200 bg-white">
              <p className="text-lg font-black text-emerald-900">Lansdowne St meeting location map</p>
              <p className="mt-2 text-slate-700">Please use the map below to find the Lansdowne Street gathering location.</p>
              <div className="mt-4 overflow-hidden rounded-[1rem] border border-emerald-200 bg-white">
                <img
                  src={lansdowneMapImage}
                  alt="Lansdowne St meeting location map"
                  className="w-full object-contain"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </div>
            </Card>

            <Card className="border-rose-200 bg-rose-50">
              <p className="font-black text-rose-900">Game-day reminder</p>
              <p className="mt-2">Please arrive early and allow enough time for gathering, the group photo, security, and Jersey pickup before first pitch. Also remember the two lettering activity moments during the game.</p>
            </Card>
          </Section>

          <Section id="03" title="Event shirt pickup">
            <p>Please pick up the white 9/12 event T-shirt at one of the listed pickup sessions. You may pick it up yourself or ask a friend to pick it up for you. Event shirts will not be mailed.</p>

            <div className="grid gap-4">
              <Card className="border-slate-200 bg-white">
                <h3 className="text-xl font-black text-slate-950">⚪ White 9/12 event T-shirt</h3>
                <p className="mt-3">Please pick up the white event T-shirt in advance at one of the sessions below.</p>
                <p className="mt-3 font-bold text-slate-700">
                  <strong>Any additional event shirts purchased separately</strong> should also be picked up at the same distribution locations and times listed below.
                </p>
              </Card>

            </div>

            <Card className="border-emerald-200 bg-emerald-50">
              <p className="text-lg font-black text-emerald-900">Quick pickup overview</p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 ring-1 ring-emerald-200"><p className="font-black">8/28 Fri｜Newton OCAC Center</p><p className="text-sm font-bold text-slate-600">10:30 AM – 4:30 PM｜Small Classroom</p></div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-emerald-200"><p className="font-black">8/29 Sat｜University Park Common</p><p className="text-sm font-bold text-slate-600">10:30 AM – 4:30 PM｜Outdoor</p></div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-emerald-200"><p className="font-black">8/30 Sun｜Northeastern Crossing</p><p className="text-sm font-bold text-slate-600">10:30 AM – 4:30 PM｜Conference Room</p></div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-emerald-200"><p className="font-black">9/9 Wed｜Tai Chi Acupuncture & Wellness Center</p><p className="text-sm font-bold text-slate-600">4:00 PM – 7:00 PM｜Parking lot</p></div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-emerald-200"><p className="font-black">9/10 Thu｜Cafe Zing</p><p className="text-sm font-bold text-slate-600">3:00 PM – 6:00 PM｜Near Porter Station</p></div>
                <div className="rounded-2xl bg-white p-4 ring-1 ring-emerald-200"><p className="font-black">9/11 Fri｜Newton OCAC Center</p><p className="text-sm font-bold text-slate-600">10:30 AM – 4:30 PM｜Small Classroom</p></div>
              </div>
            </Card>

            <div className="space-y-4">
              <Card><p className="text-xl font-black">8/28 Friday｜Newton OCAC Center</p><p className="mt-1 font-bold">10:30 AM – 4:30 PM｜90 Lincoln St, Newton Highlands, MA 02461</p><p className="mt-2 text-slate-700">Small classroom. Taiwan flags will be available while supplies last.</p></Card>
              <Card><p className="text-xl font-black">8/29 Saturday｜University Park Common, Cambridge</p><p className="mt-1"><a href="https://maps.app.goo.gl/AZhuec9yh3nJjep59" target="_blank" rel="noreferrer" className="font-black text-emerald-700 underline underline-offset-4">Google Maps location</a></p><p className="mt-2 text-slate-700">Outdoor pickup near the center of the park, close to Sidney St.</p></Card>
              <Card><p className="text-xl font-black">8/30 Sunday｜Northeastern Crossing — Conference Room</p><p className="mt-1 font-bold">10:30 AM – 4:30 PM｜1175 Tremont St, Boston, MA 02120</p><p className="mt-2 text-slate-700">Near Ruggles Station on the MBTA Orange Line.</p></Card>
              <Card><p className="text-xl font-black">9/9 Wednesday｜Tai Chi Acupuncture & Wellness Center, Danvers</p><p className="mt-1 font-bold">4:00 PM – 7:00 PM｜2 Orchard Ln, Danvers, MA 01923</p><p className="mt-2 text-slate-700">Outdoor pickup in the parking lot.</p></Card>
              <Card><p className="text-xl font-black">9/10 Thursday｜Cafe Zing</p><p className="mt-1 font-bold">3:00 PM – 6:00 PM｜25 White St, Cambridge, MA 02140</p><p className="mt-2 text-slate-700">Near Porter Station on the MBTA Red Line. Two-hour free parking is available nearby.</p><p className="mt-2 text-slate-700">The <strong>8th Taiwan Film Festival of Boston</strong> will screen HERO! HITO! at Somerville Theatre at 7:00 PM that evening.</p><a href="https://www.zeffy.com/en-US/ticketing/8th-taiwan-film-festival-of-boston" target="_blank" rel="noreferrer" className="mt-3 inline-flex rounded-full bg-rose-700 px-5 py-3 text-sm font-black text-white">HERO! HITO! ticket link</a></Card>
              <Card><p className="text-xl font-black">9/11 Friday｜Newton OCAC Center</p><p className="mt-1 font-bold">10:30 AM – 4:30 PM｜90 Lincoln St, Newton Highlands, MA 02461</p><p className="mt-2 text-slate-700">Small classroom. Taiwan flags will be available while supplies last.</p></Card>
            </div>
          </Section>

          <Section id="04" title="Black Red Sox × Bruins Jersey pickup">
            <div className="grid gap-5 md:grid-cols-[360px_1fr] md:items-center">
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
                <img src="/912-fenway-2026-black-redsox-bruins-jersey.jpg" alt="Black Red Sox × Bruins Jersey" className="h-72 w-full object-contain md:h-80" onError={(e) => { e.currentTarget.style.display = "none"; }} />
              </div>
              <Card className="border-slate-200 bg-white">
                <h3 className="text-xl font-black text-slate-950">⚫ Black Red Sox × Bruins Jersey</h3>
                <p className="mt-3">This black jersey is the <strong>limited-edition Red Sox and Bruins co-branded baseball jersey</strong> distributed by the <strong>Boston Red Sox</strong>. It does not need to be picked up in advance; claim it after entering Fenway Park on game day.</p>
                <ul className="mt-4 list-disc space-y-2 pl-5">
                  <li>After the group photo, begin entering the ballpark at about <strong>3:20 PM</strong>.</li>
                  <li>Once through security, go to the <strong>designated distribution location</strong>.</li>
                  <li>Use/present your <strong>game-day digital ticket</strong> to claim the jersey.</li>
                  <li>Adult sizes <strong>S–XL</strong> are available.</li>
                  <li>Preferred sizes are distributed on a <strong>first-come, first-served</strong> basis and are subject to availability, so arriving early is recommended.</li>
                  <li><strong>Please do not wait too long to pick up your Jersey:</strong> the Red Sox may end Jersey distribution a few innings after the game begins, so we strongly recommend picking it up soon after entering the ballpark.</li>
                  <li>During the lettering activity, participants will switch between the white event T-shirt and black Jersey based on seat assignment.</li>
                </ul>
              </Card>
            </div>
          </Section>

          <Section id="05" title="Digital ticket instructions">
            <div className="rounded-[1.25rem] border border-amber-300 bg-amber-50 px-5 py-4 shadow-sm">
              <p className="text-lg font-black leading-8 text-amber-950">
                🎟️ Digital tickets will <strong className="text-rose-700">begin distribution on August 22</strong> and will be <strong className="text-rose-700">fully sent by the end of the day</strong>.
              </p>
            </div>
            <ol className="list-decimal space-y-3 pl-6 marker:font-black marker:text-slate-500">
              <li>Download the <strong>MLB Ballpark App</strong>, not the general MLB App.</li>
              <li>Your MLB account email must match the email used when purchasing 912 tickets. If it is different, please contact the organizers for help updating it.</li>
              <li>Open the Red Sox ticket email and tap <strong>Access Tickets</strong>.</li>
              <li>Use the MLB Ballpark App to view or forward tickets.</li>
            </ol>
            <a
              href={ticketGuideLink}
              className="inline-flex rounded-full bg-emerald-800 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              View step-by-step ticket guide
            </a>
            <Card className="border-sky-200 bg-sky-50">
              <p className="font-black text-sky-900">🎟️ Need help with your digital ticket?</p>
              <p className="mt-2">
                If you have any digital ticket questions, you can contact the organizers. You can also ask one of our volunteers for help when you pick up your <strong>event T-shirt</strong>.
              </p>
            </Card>
          </Section>
          <SeatColorLookupEn />

          <Section id="07" title="Important reminders">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-indigo-200 bg-indigo-50">
                <p className="text-lg font-black text-indigo-900">🎟️ Digital Ticket & Entry</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>Download and log into the <strong>MLB Ballpark App</strong> before game day.</li>
                  <li>Open the ticket directly in the app at the gate; do not rely only on a screenshot.</li>
                  <li>General ticket holders can typically enter about <strong>90 minutes before first pitch</strong>.</li>
                  <li><strong>No Re-Entry:</strong> once your ticket has been scanned, re-entry is generally not permitted.</li>
                </ul>
              </Card>

              <Card className="border-sky-200 bg-sky-50">
                <p className="text-lg font-black text-sky-900">🎒 Fenway Park Bag Policy</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>Small single-compartment bags no larger than <strong>12&quot; × 12&quot; × 6&quot;</strong> are allowed.</li>
                  <li>Clear single-compartment bags are recommended to speed up security.</li>
                  <li><strong>Backpacks, duffel bags, backpack-style purses, and larger multi-compartment bags</strong> are prohibited.</li>
                  <li>Exceptions apply for diaper bags and essential medical equipment.</li>
                </ul>
              </Card>

              <Card className="border-emerald-200 bg-emerald-50">
                <p className="text-lg font-black text-emerald-900">🚇 Transportation & Arrival</p>
                <p className="mt-3">
                  Traffic around Fenway Park can be heavy and parking is often expensive on game days. Public transportation is recommended, and please arrive early for the Lansdowne Street gathering.
                </p>
              </Card>

              <Card className="border-amber-200 bg-amber-50">
                <p className="text-lg font-black text-amber-900">🧥 Clothing & Weather</p>
                <p className="mt-3">
                  Boston weather can change quickly, so dress in layers. If the forecast is uncertain, bring a lightweight <strong>poncho</strong> or thin waterproof jacket.
                </p>
              </Card>

              <Card className="border-slate-200 bg-white md:col-span-2">
                <p className="text-lg font-black text-slate-950">🥤 Food & Drinks</p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>One unopened plastic bottle of water may be brought in.</li>
                  <li>Cans, glass bottles, and hard-sided coolers are not allowed.</li>
                </ul>
              </Card>
            </div>

            <Card className="border-rose-200 bg-rose-50">
              <p className="font-black text-rose-900">Most important game-day reminder</p>
              <p className="mt-2">
                Arrive early, have your MLB Ballpark App ticket ready, bring only an approved small bag, and allow enough time for security and Jersey pickup.
              </p>
            </Card>
          </Section>

          <ContactSection isZh={false} />



          <Card className="overflow-hidden border-rose-200 bg-white p-0 shadow-xl ring-4 ring-rose-50">
            <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="bg-gradient-to-br from-rose-50 via-white to-emerald-50 p-6 md:p-8">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-700">
                  Community Sponsor
                </p>
                <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 md:text-4xl">
                  Thank you, MCPHS, for supporting 912 Taiwan Fan Night
                </h2>
                <p className="mt-4 text-base font-bold leading-8 text-slate-700 md:text-lg">
                  Massachusetts College of Pharmacy and Health Sciences (MCPHS) is our Community Sponsor. Thank you for supporting the Taiwanese community in Boston and helping Taiwan be seen at Fenway.
                </p>
              </div>
              <div className="flex items-center justify-center bg-white p-6 md:p-8">
                <img
                  src={mcphsCommunitySponsorLogo}
                  alt="Massachusetts College of Pharmacy and Health Sciences logo"
                  className="h-auto w-full max-w-2xl object-contain"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default function GuidePage() {
  const [isZh, setIsZh] = useState(true);
  return isZh ? <GuideZh isZh={isZh} setIsZh={setIsZh} /> : <GuideEn isZh={isZh} setIsZh={setIsZh} />;
}
