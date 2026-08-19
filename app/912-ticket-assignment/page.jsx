"use client";

import React, { useEffect, useMemo, useState } from "react";
import * as XLSX from "xlsx";

const sectionData = {
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

const l39RowStartColumn = {
  "47": 2,
  "46": 2,
  "45": 1,
  "44": 2,
  "43": 2,
  "42": 3,
  "41": 3,
  "40": 4,
  "39": 5,
  "38": 5,
  "37": 6,
  "36": 6,
  "35": 6,
  "34": 8,
  "33": 8,
  "32": 9,
  "31": 10,
  "30": 10,
  "29": 11,
  "28": 11
};

const sectionMeta = {
  L39: { title: "Section L39", columns: 21 },
  L41: { title: "Section L41", columns: 23 },
  L42: { title: "Section L42", columns: 25 },
  L43: { title: "Section L43", columns: 12 },
};

const sectionOrder = ["L39", "L41", "L42", "L43"];
// Common row axis keeps Row 45 aligned across all four sections.
// We stop at Row 25 because L42 is the lowest active section row.
const allRows = Array.from({ length: 23 }, (_, index) => 47 - index);

function seatId(section, row, seat) {
  return `${section}-R${row}-S${seat}`;
}

function buildAllSeatIds() {
  const ids = [];
  for (const section of sectionOrder) {
    const rows = sectionData[section];
    for (const row of Object.keys(rows)) {
      for (const seat of rows[row]) {
        ids.push(seatId(section, row, seat));
      }
    }
  }
  return ids;
}




function getSeatForColumn(section, row, seats, columnNumber) {
  if (section === "L39" && seats.length > 0) {
    const rowKey = String(row);
    const startColumn = l39RowStartColumn[rowKey] || 1;
    const minSeat = Math.min(...seats);
    const matchingSeat = seats.find((seat) => startColumn + (seat - minSeat) === columnNumber);
    return matchingSeat || null;
  }

  return seats.includes(columnNumber) ? columnNumber : null;
}

const GROUP_COLORS = {
  A: "bg-blue-600 border-blue-700 text-white",
  B: "bg-rose-600 border-rose-700 text-white",
  C: "bg-emerald-600 border-emerald-700 text-white",
  D: "bg-amber-400 border-amber-500 text-slate-950",
  E: "bg-violet-600 border-violet-700 text-white",
  F: "bg-cyan-500 border-cyan-600 text-white",
  G: "bg-pink-500 border-pink-600 text-white",
  H: "bg-orange-500 border-orange-600 text-white",
  I: "bg-lime-500 border-lime-600 text-slate-950",
  J: "bg-fuchsia-600 border-fuchsia-700 text-white",
  K: "bg-teal-600 border-teal-700 text-white",
  L: "bg-indigo-600 border-indigo-700 text-white",
};

const DEFAULT_GROUP_COUNT = 100;

const DEFAULT_GROUP_IDS = Array.from({ length: DEFAULT_GROUP_COUNT }, (_, index) =>
  String(index + 1).padStart(3, "0")
);

function formatGroupId(number) {
  return String(number).padStart(3, "0");
}

function sortGroupIds(ids) {
  return [...ids].sort((a, b) => Number(a) - Number(b));
}

function groupColorClass(groupId) {
  const palette = [
    "bg-blue-600 border-blue-700 text-white",
    "bg-rose-600 border-rose-700 text-white",
    "bg-emerald-600 border-emerald-700 text-white",
    "bg-amber-400 border-amber-500 text-slate-950",
    "bg-violet-600 border-violet-700 text-white",
    "bg-cyan-500 border-cyan-600 text-white",
    "bg-pink-500 border-pink-600 text-white",
    "bg-orange-500 border-orange-600 text-white",
    "bg-lime-500 border-lime-600 text-slate-950",
    "bg-fuchsia-600 border-fuchsia-700 text-white",
    "bg-teal-600 border-teal-700 text-white",
    "bg-indigo-600 border-indigo-700 text-white",
  ];

  const number = Math.max(1, Number(groupId) || 1);
  return palette[(number - 1) % palette.length];
}

function parseSeatId(id) {
  const match = id.match(/^(L\d+)-R(\d+)-S(\d+)$/);
  if (!match) return null;

  return {
    id,
    section: match[1],
    row: Number(match[2]),
    seat: Number(match[3]),
  };
}

function sortSeats(a, b) {
  const sectionOrderIndex = (section) => sectionOrder.indexOf(section);
  return (
    sectionOrderIndex(a.section) - sectionOrderIndex(b.section) ||
    b.row - a.row ||
    a.seat - b.seat
  );
}

function groupSeatsByRow(seats) {
  const grouped = {};

  for (const seat of seats) {
    const key = `${seat.section}|${seat.row}`;
    if (!grouped[key]) {
      grouped[key] = {
        section: seat.section,
        row: seat.row,
        seats: [],
      };
    }
    grouped[key].seats.push(seat.seat);
  }

  return Object.values(grouped)
    .map((item) => ({
      ...item,
      seats: item.seats.sort((a, b) => a - b),
    }))
    .sort((a, b) => sortSeats(
      { section: a.section, row: a.row, seat: a.seats[0] || 0 },
      { section: b.section, row: b.row, seat: b.seats[0] || 0 }
    ));
}

function SeatButton({
  section,
  row,
  seat,
  group,
  activeGroup,
  isPainting,
  onPaintStart,
  onPaintEnter,
  groups,
}) {
  const id = seatId(section, row, seat);
  const info = group ? groups[group] : null;

  const baseClass =
    group
      ? groupColorClass(group)
      : "bg-white border-slate-400 text-slate-700 hover:bg-slate-100 hover:border-slate-900";

  const activeRing =
    group === activeGroup ? "ring-2 ring-offset-1 ring-slate-950" : "";

  return (
    <button
      type="button"
      data-seat-id={id}
      title={
        group
          ? `${section} Row ${row} Seat ${seat} — Group ${group} — ${info?.name || "未填姓名"} — ${info?.email || "未填 Email"}`
          : `${section} Row ${row} Seat ${seat}`
      }
      onPointerDown={(event) => onPaintStart(event, id, group)}
      onPointerEnter={() => onPaintEnter(id)}
      onDragStart={(event) => event.preventDefault()}
      className={[
        "flex h-4 w-4 select-none items-center justify-center rounded-full border text-[7px] font-black leading-none transition md:h-5 md:w-5 md:text-[8px]",
        baseClass,
        activeRing,
        isPainting ? "cursor-crosshair" : "cursor-pointer",
      ].join(" ")}
    >
      {group || seat}
    </button>
  );
}

function RowLabels({ align = "right" }) {
  const justifyClass = align === "left" ? "justify-start pl-1" : "justify-end pr-1";

  return (
    <div className="w-14 shrink-0">
      <div className="h-[2.15rem]" />
      <div className="space-y-0.5">
        {allRows.map((row) => (
          <div
            key={`${align}-${row}`}
            className={`flex h-4 items-center text-[9px] font-black leading-none text-slate-500 md:h-5 ${justifyClass}`}
          >
            Row {row}
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionBlock({
  section,
  seatAssignments,
  activeGroup,
  isPainting,
  onPaintStart,
  onPaintEnter,
  groups,
}) {
  const meta = sectionMeta[section];
  const rows = sectionData[section];

  return (
    <div className="shrink-0 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
      <div className="mb-2 flex items-center justify-between gap-2">
        <h2 className="text-sm font-black text-slate-950">{meta.title}</h2>
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-black text-emerald-700">
          {Object.values(rows).reduce((sum, seats) => sum + seats.length, 0)} seats
        </span>
      </div>

      <div className="space-y-0.5">
        {allRows.map((row) => {
          const seats = rows[row] || [];

          return (
            <div key={`${section}-${row}`} className="flex items-center gap-1">
              <div
                className="grid gap-0.5"
                style={{
                  gridTemplateColumns: `repeat(${meta.columns}, minmax(1rem, 1rem))`,
                }}
              >
                {Array.from({ length: meta.columns }, (_, index) => index + 1).map((columnNumber) => {
                  const seatNumber = getSeatForColumn(section, row, seats, columnNumber);

                  if (!seatNumber) {
                    return (
                      <div
                        key={`${row}-empty-${columnNumber}`}
                        className="h-4 w-4 md:h-5 md:w-5"
                      />
                    );
                  }

                  const id = seatId(section, row, seatNumber);

                  return (
                    <SeatButton
                      key={id}
                      section={section}
                      row={row}
                      seat={seatNumber}
                      group={seatAssignments[id]}
                      activeGroup={activeGroup}
                      isPainting={isPainting}
                      onPaintStart={onPaintStart}
                      onPaintEnter={onPaintEnter}
                      groups={groups}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TicketAssignmentPage() {
  const allSeatIds = useMemo(() => buildAllSeatIds(), []);

  const [seatAssignments, setSeatAssignments] = useState({});
  const [groups, setGroups] = useState(() =>
    Object.fromEntries(
      DEFAULT_GROUP_IDS.map((groupId) => [
        groupId,
        { groupName: "", name: "", email: "", note: "" },
      ])
    )
  );

  const [seatDetails, setSeatDetails] = useState({});

  const [activeGroup, setActiveGroup] = useState("001");
  const [isPainting, setIsPainting] = useState(false);
  const [paintAction, setPaintAction] = useState("assign");
  const [saveMessage, setSaveMessage] = useState("");
  const [search, setSearch] = useState("");
  const [groupPickerSearch, setGroupPickerSearch] = useState("");
  const [bulkPaste, setBulkPaste] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const savedAssignments = localStorage.getItem("912-ticket-seat-assignments");
      const savedGroups = localStorage.getItem("912-ticket-groups");
      const savedSeatDetails = localStorage.getItem("912-ticket-seat-details");

      if (savedAssignments) setSeatAssignments(JSON.parse(savedAssignments));
      if (savedGroups) {
        const parsedGroups = JSON.parse(savedGroups);
        const allIds = sortGroupIds(
          Array.from(new Set([
            ...DEFAULT_GROUP_IDS,
            ...Object.keys(parsedGroups),
          ]))
        );

        setGroups(
          Object.fromEntries(
            allIds.map((groupId) => [
              groupId,
              {
                groupName: parsedGroups[groupId]?.groupName || "",
                name: parsedGroups[groupId]?.name || "",
                email: parsedGroups[groupId]?.email || "",
                note: parsedGroups[groupId]?.note || "",
              },
            ])
          )
        );
      }
      if (savedSeatDetails) {
        setSeatDetails(JSON.parse(savedSeatDetails));
      }
    } catch (error) {
      console.error("Unable to load saved ticket assignments", error);
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (!loaded) return;

    localStorage.setItem(
      "912-ticket-seat-assignments",
      JSON.stringify(seatAssignments)
    );
    localStorage.setItem("912-ticket-groups", JSON.stringify(groups));
    localStorage.setItem("912-ticket-seat-details", JSON.stringify(seatDetails));
  }, [seatAssignments, groups, seatDetails, loaded]);

  useEffect(() => {
    if (!saveMessage) return;
    const timer = window.setTimeout(() => setSaveMessage(""), 2500);
    return () => window.clearTimeout(timer);
  }, [saveMessage]);

  const assignedCount = Object.keys(seatAssignments).length;
  const unassignedCount = allSeatIds.length - assignedCount;

  const assignedMissingNameCount = Object.entries(seatAssignments).filter(
    ([seatIdValue, groupId]) =>
      !(
        seatDetails[seatIdValue]?.name ||
        groups[groupId]?.name ||
        ""
      ).trim()
  ).length;

  const assignedMissingEmailCount = Object.entries(seatAssignments).filter(
    ([seatIdValue, groupId]) =>
      !(
        seatDetails[seatIdValue]?.email ||
        groups[groupId]?.email ||
        ""
      ).trim()
  ).length;

  const activeInfo = groups[activeGroup] || {
    groupName: "",
    name: "",
    email: "",
    note: "",
  };

  const groupIds = useMemo(
    () => sortGroupIds(Object.keys(groups)),
    [groups]
  );

  const groupSeatCounts = useMemo(() => {
    const result = {};
    for (const letter of Object.values(seatAssignments)) {
      result[letter] = (result[letter] || 0) + 1;
    }
    return result;
  }, [seatAssignments]);

  function updateActiveGroupField(field, value) {
    setGroups((current) => ({
      ...current,
      [activeGroup]: {
        ...(current[activeGroup] || { groupName: "", name: "", email: "", note: "" }),
        [field]: value,
      },
    }));
  }

  function updateSeatDetail(seatIdValue, field, value) {
    setSeatDetails((current) => ({
      ...current,
      [seatIdValue]: {
        ...(current[seatIdValue] || { name: "", email: "" }),
        [field]: value,
      },
    }));
  }

  function applyGroupInfoToAllSelectedSeats() {
    const info = groups[activeGroup] || {};
    if (!activeGroupSeats.length) return;

    setSeatDetails((current) => {
      const next = { ...current };

      for (const seat of activeGroupSeats) {
        next[seat.id] = {
          name: info.name || "",
          email: info.email || "",
        };
      }

      return next;
    });

    setSaveMessage(`已將 Group ${activeGroup} 的 Name / Email 套用到 ${activeGroupSeats.length} 個座位`);
  }

  function clearSelectedSeatDetails() {
    if (!activeGroupSeats.length) return;

    setSeatDetails((current) => {
      const next = { ...current };
      for (const seat of activeGroupSeats) {
        delete next[seat.id];
      }
      return next;
    });
  }

  function parseBulkNameEmail(text) {
    return String(text || "")
      .replace(/\r/g, "")
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        // Excel normally copies columns with TAB separators.
        const tabParts = line.split("\t").map((part) => part.trim());

        if (tabParts.length >= 2) {
          return {
            name: tabParts[0] || "",
            email: tabParts[1] || "",
          };
        }

        // Fallback: if only one column was pasted and it looks like email,
        // keep name blank. Otherwise treat it as a name.
        if (tabParts[0]?.includes("@")) {
          return { name: "", email: tabParts[0] };
        }

        return { name: tabParts[0] || "", email: "" };
      });
  }

  function applyBulkPasteToSelectedSeats() {
    const pastedRows = parseBulkNameEmail(bulkPaste);

    if (!activeGroupSeats.length) {
      window.alert(`Group ${activeGroup} 還沒有選任何座位。`);
      return;
    }

    if (!pastedRows.length) {
      window.alert("請先從 Excel 複製 Name 和 Email 兩欄，再貼到輸入框。");
      return;
    }

    if (pastedRows.length > activeGroupSeats.length) {
      const proceed = window.confirm(
        `你貼了 ${pastedRows.length} 筆資料，但 Group ${activeGroup} 只有 ${activeGroupSeats.length} 個座位。只會套用前 ${activeGroupSeats.length} 筆，要繼續嗎？`
      );
      if (!proceed) return;
    }

    setSeatDetails((current) => {
      const next = { ...current };
      const count = Math.min(pastedRows.length, activeGroupSeats.length);

      for (let index = 0; index < count; index += 1) {
        const seat = activeGroupSeats[index];
        const row = pastedRows[index];

        next[seat.id] = {
          name: row.name || "",
          email: row.email || "",
        };
      }

      return next;
    });

    const appliedCount = Math.min(pastedRows.length, activeGroupSeats.length);

    setSaveMessage(
      `已成功貼入 ${appliedCount} 筆：Group ${activeGroup} 的 Name / Email 已顯示在下方座位清單`
    );
  }

  function clearBulkPaste() {
    setBulkPaste("");
  }

  function createNewGroup() {
    const highestNumber = groupIds.reduce(
      (max, groupId) => Math.max(max, Number(groupId) || 0),
      0
    );

    const nextGroupId = formatGroupId(highestNumber + 1);

    setGroups((current) => ({
      ...current,
      [nextGroupId]: {
        groupName: "",
        name: "",
        email: "",
        note: "",
      },
    }));

    setActiveGroup(nextGroupId);
    setGroupPickerSearch("");
    setSearch("");
    setSaveMessage(`已建立 Group ${nextGroupId}`);
  }

  function clearGroupInfo(groupId) {
    if (
      !window.confirm(
        `確定要清除 Group ${groupId} 的姓名、Email、備註和全部已分配座位嗎？`
      )
    ) {
      return;
    }

    const seatsToClear = Object.entries(seatAssignments)
      .filter(([, group]) => group === groupId)
      .map(([seat]) => seat);

    setSeatAssignments((current) => {
      const next = { ...current };
      for (const [seat, group] of Object.entries(next)) {
        if (group === groupId) delete next[seat];
      }
      return next;
    });

    setSeatDetails((current) => {
      const next = { ...current };
      for (const seat of seatsToClear) {
        delete next[seat];
      }
      return next;
    });

    setGroups((current) => ({
      ...current,
      [groupId]: { groupName: "", name: "", email: "", note: "" },
    }));
  }

  function handlePaintStart(event, id, existingGroup) {
    event.preventDefault();
    setIsPainting(true);

    if (existingGroup === activeGroup) {
      setPaintAction("remove");
      setSeatAssignments((current) => {
        const next = { ...current };
        delete next[id];
        return next;
      });
      setSeatDetails((current) => {
        const next = { ...current };
        delete next[id];
        return next;
      });
      return;
    }

    setPaintAction("assign");
    setSeatAssignments((current) => ({
      ...current,
      [id]: activeGroup,
    }));

    setSeatDetails((current) => {
      const next = { ...current };
      delete next[id];
      return next;
    });
  }

  function handlePaintEnter(id) {
    if (!isPainting) return;

    setSeatAssignments((current) => {
      const next = { ...current };

      if (paintAction === "remove") {
        if (next[id] === activeGroup) delete next[id];
      } else {
        // Painting another group automatically reassigns that seat to the active group.
        if (next[id] !== activeGroup) {
          setSeatDetails((details) => {
            const nextDetails = { ...details };
            delete nextDetails[id];
            return nextDetails;
          });
        }
        next[id] = activeGroup;
      }

      return next;
    });
  }

  function stopPainting() {
    setIsPainting(false);
  }

  function clearActiveGroupSeats() {
    setSeatAssignments((current) => {
      const next = { ...current };
      for (const [seat, group] of Object.entries(next)) {
        if (group === activeGroup) delete next[seat];
      }
      return next;
    });
  }

  function clearAllAssignments() {
    if (!window.confirm("確定要清除所有分票座位嗎？")) return;
    setSeatAssignments({});
  }

  function exportMlbExcel() {
    // This export intentionally matches the final 1325-seat MLB spreadsheet:
    // Row 1: MLB Group Tickets URL
    // Row 2: blank
    // Row 3: Section | Row | Seat | Name | Email
    // Row 4 onward: all 1,325 seats in the official seat order.
    const rows = [
      ["https://group-tickets.mlb.com/events", "", "", "", ""],
      ["", "", "", "", ""],
      ["Section", "Row", "Seat", "Name", "Email"],
    ];

    let exportedSeatCount = 0;

    for (const section of sectionOrder) {
      const rowNumbers = Object.keys(sectionData[section])
        .map(Number)
        .sort((a, b) => a - b);

      for (const row of rowNumbers) {
        const seats = [...(sectionData[section][String(row)] || [])].sort(
          (a, b) => a - b
        );

        for (const seat of seats) {
          const id = seatId(section, row, seat);
          const groupId = seatAssignments[id];
          const info = groupId ? groups[groupId] || {} : {};
          const seatInfo = seatDetails[id] || {};

          rows.push([
            section,
            row,
            seat,
            seatInfo.name || info.name || "",
            seatInfo.email || info.email || "",
          ]);

          exportedSeatCount += 1;
        }
      }
    }

    if (exportedSeatCount !== 1325) {
      const proceed = window.confirm(
        `目前座位資料共有 ${exportedSeatCount} 張，不是預期的 1325 張。仍然要匯出嗎？`
      );
      if (!proceed) return;
    }

    const worksheet = XLSX.utils.aoa_to_sheet(rows);

    // Match the simple MLB template layout.
    worksheet["!cols"] = [
      { wch: 12 }, // Section
      { wch: 8 },  // Row
      { wch: 8 },  // Seat
      { wch: 28 }, // Name
      { wch: 34 }, // Email
    ];

    // Autofilter is intentionally NOT added because the provided MLB template
    // does not require one.
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    XLSX.writeFile(workbook, "1325 Seat excel spreadsheet - completed.xlsx");

    setSaveMessage(
      `已匯出 MLB Excel：${exportedSeatCount} 張座位，Name / Email 已自動填入`
    );
  }

  function exportBackup() {
    const payload = {
      exportedAt: new Date().toISOString(),
      groups,
      seatAssignments,
      seatDetails,
    };

    const blob = new Blob([JSON.stringify(payload, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "912-ticket-assignment-backup.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);

    setSaveMessage("已匯出備份");
  }

  function importBackup(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result || ""));
        if (!data.groups || !data.seatAssignments) {
          throw new Error("Invalid backup format");
        }

        const importedIds = sortGroupIds(
          Array.from(new Set([
            ...DEFAULT_GROUP_IDS,
            ...Object.keys(data.groups || {}),
          ]))
        );

        setGroups(
          Object.fromEntries(
            importedIds.map((groupId) => [
              groupId,
              {
                groupName: data.groups[groupId]?.groupName || "",
                name: data.groups[groupId]?.name || "",
                email: data.groups[groupId]?.email || "",
                note: data.groups[groupId]?.note || "",
              },
            ])
          )
        );
        setSeatAssignments(data.seatAssignments);
        setSeatDetails(data.seatDetails || {});
        setActiveGroup(importedIds[0] || "001");
        setSaveMessage("備份已載入");
      } catch (error) {
        console.error(error);
        window.alert("這個檔案不是有效的 912 分票備份。");
      }
    };

    reader.readAsText(file);
    event.target.value = "";
  }

  const filteredGroups = groupIds
    .map((groupId) => [groupId, groups[groupId] || { groupName: "", name: "", email: "", note: "" }])
    .filter(([groupId, info]) => {
      const needle = search.trim().toLowerCase();
      if (!needle) return true;

      return (
        groupId.toLowerCase().includes(needle) ||
        (info.name || "").toLowerCase().includes(needle) ||
        (info.email || "").toLowerCase().includes(needle) ||
        (info.note || "").toLowerCase().includes(needle)
      );
    });

  const quickGroupChoices = groupIds.filter((groupId) => {
    const needle = groupPickerSearch.trim().toLowerCase();
    if (!needle) return true;

    const info = groups[groupId] || {};
    return (
      groupId.includes(needle) ||
      (info.groupName || "").toLowerCase().includes(needle) ||
      (info.groupName || "").toLowerCase().includes(needle) ||
      (info.name || "").toLowerCase().includes(needle) ||
      (info.email || "").toLowerCase().includes(needle) ||
      (info.note || "").toLowerCase().includes(needle)
    );
  });

  const activeGroupSeats = Object.entries(seatAssignments)
    .filter(([, group]) => group === activeGroup)
    .map(([id]) => parseSeatId(id))
    .filter(Boolean)
    .sort((a, b) =>
      b.row - a.row ||
      sectionOrder.indexOf(a.section) - sectionOrder.indexOf(b.section) ||
      a.seat - b.seat
    );

  const activeGroupRows = groupSeatsByRow(activeGroupSeats);

  return (
    <main
      className="min-h-screen bg-slate-50 text-slate-900"
      onPointerUp={stopPainting}
      onPointerCancel={stopPainting}
      onPointerLeave={stopPainting}
    >
      <section className="mx-auto max-w-[1900px] px-3 py-5 md:px-5">
        <div className="rounded-[1.75rem] bg-gradient-to-r from-sky-900 via-blue-900 to-indigo-900 p-5 text-white shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-200">
                912 Ticket Assignment
              </p>
              <h1 className="mt-1 text-3xl font-black md:text-5xl">
                9/12 分票座位管理
              </h1>
              <p className="mt-2 text-sm font-semibold text-sky-100">
                直接在 Seat Map 上選座位，以 Group 編號分組；可新增超過 100 組，並自訂 Group 名稱、姓名與 Email。
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={exportMlbExcel}
                className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-black text-slate-950 hover:bg-emerald-300"
              >
                匯出 MLB Excel
              </button>

              <span className="self-center text-xs font-semibold text-sky-100">
                輸出格式：Section / Row / Seat / Name / Email
              </span>

              <button
                type="button"
                onClick={exportBackup}
                className="rounded-full bg-white/15 px-4 py-2 text-sm font-black text-white ring-1 ring-white/20 hover:bg-white/20"
              >
                備份資料
              </button>

              <label className="cursor-pointer rounded-full bg-white/15 px-4 py-2 text-sm font-black text-white ring-1 ring-white/20 hover:bg-white/20">
                載入備份
                <input
                  type="file"
                  accept=".json,application/json"
                  className="hidden"
                  onChange={importBackup}
                />
              </label>
            </div>
          </div>
        </div>

        {saveMessage ? (
          <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-black text-emerald-800">
            {saveMessage}
          </div>
        ) : null}

        <div className="mt-4 grid gap-3 md:grid-cols-3 xl:grid-cols-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">總座位</p>
            <p className="mt-1 text-3xl font-black">{allSeatIds.length}</p>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">已分配</p>
            <p className="mt-1 text-3xl font-black">{assignedCount}</p>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">未分配</p>
            <p className="mt-1 text-3xl font-black">{unassignedCount}</p>
          </div>

          <div className="rounded-2xl border border-violet-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-black uppercase tracking-[0.18em] text-violet-700">已使用 Groups</p>
            <p className="mt-1 text-3xl font-black">
              {groupIds.filter((groupId) => (groupSeatCounts[groupId] || 0) > 0).length}
            </p>
          </div>

          <div className={[
            "rounded-2xl border bg-white p-4 shadow-sm",
            assignedMissingNameCount > 0 ? "border-rose-300" : "border-emerald-200",
          ].join(" ")}>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-600">
              已分票但缺姓名
            </p>
            <p className={[
              "mt-1 text-3xl font-black",
              assignedMissingNameCount > 0 ? "text-rose-700" : "text-emerald-700",
            ].join(" ")}>
              {assignedMissingNameCount}
            </p>
          </div>

          <div className={[
            "rounded-2xl border bg-white p-4 shadow-sm",
            assignedMissingEmailCount > 0 ? "border-rose-300" : "border-emerald-200",
          ].join(" ")}>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-600">
              已分票但缺 Email
            </p>
            <p className={[
              "mt-1 text-3xl font-black",
              assignedMissingEmailCount > 0 ? "text-rose-700" : "text-emerald-700",
            ].join(" ")}>
              {assignedMissingEmailCount}
            </p>
          </div>
        </div>

        <div className="mt-4 grid gap-4 xl:grid-cols-[minmax(0,1fr)_360px]">
          <div className="min-w-0">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                    現在正在分配
                  </p>
                  <div className="mt-1 flex items-center gap-3">
                    <div
                      className={[
                        "flex h-10 w-10 items-center justify-center rounded-full border text-lg font-black",
                        groupColorClass(activeGroup),
                      ].join(" ")}
                    >
                      {activeGroup}
                    </div>
                    <div>
                      <p className="font-black">
                        {activeInfo.groupName || activeInfo.name || `Group ${activeGroup}`}
                      </p>
                      <p className="text-xs text-slate-500">
                        {activeInfo.email || "尚未填 Email"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={clearActiveGroupSeats}
                    className="rounded-xl bg-amber-100 px-4 py-2 text-xs font-black text-amber-900 hover:bg-amber-200"
                  >
                    清除 {activeGroup} 座位
                  </button>

                  <button
                    type="button"
                    onClick={clearAllAssignments}
                    className="rounded-xl bg-rose-100 px-4 py-2 text-xs font-black text-rose-900 hover:bg-rose-200"
                  >
                    清除全部分配
                  </button>
                </div>
              </div>

              <div className="mt-3 rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700">
                操作：點一下座位即可分配給 Group {activeGroup}；按住滑過可以一次選很多座位。
                如果座位已經屬於其他 Group，再用目前 Group 滑過時會直接改分給目前 Group。
                同一個 Group 的座位再點一次可以取消。
              </div>
            </div>

            <div className="mt-4 overflow-x-auto rounded-[1.5rem] border border-slate-200 bg-slate-100 p-3 shadow-sm">
              <div className="flex min-w-max items-start gap-2">
                <RowLabels />

                {sectionOrder.map((section) => (
                  <SectionBlock
                    key={section}
                    section={section}
                    seatAssignments={seatAssignments}
                    activeGroup={activeGroup}
                    isPainting={isPainting}
                    onPaintStart={handlePaintStart}
                    onPaintEnter={handlePaintEnter}
                    groups={groups}
                  />
                ))}

                <RowLabels align="left" />
              </div>
            </div>
        <section className="mt-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">
                    Group {activeGroup}
                  </p>
                  <h2 className="text-xl font-black text-slate-950">
                    分票資料明細
                  </h2>
                </div>

                <div className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-black text-slate-700">
                  {activeGroupSeats.length} seats
                </div>
              </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3">
                      <div className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 p-3">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <div>
                            <p className="text-sm font-black text-emerald-950">
                              從 Excel 直接貼上 Name + Email
                            </p>
                            <p className="mt-1 text-xs font-semibold text-emerald-800">
                              在 Excel 選取兩欄（Name、Email）→ Ctrl+C → 直接貼到下面。
                              每一列會依照目前座位清單由上往下一一對應。
                            </p>
                          </div>

                          <span className="rounded-full bg-white px-2 py-1 text-xs font-black text-emerald-900">
                            需要 {activeGroupSeats.length} 筆
                          </span>
                        </div>

                        <textarea
                          value={bulkPaste}
                          onChange={(e) => setBulkPaste(e.target.value)}
                          placeholder={"例如：\nAmy Chen\tamy@email.com\nDavid Lin\tdavid@email.com\nPeter Wang\tpeter@email.com"}
                          rows={7}
                          className="mt-3 w-full rounded-xl border border-emerald-300 bg-white px-3 py-3 font-mono text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                        />

                        <div className="mt-2 flex flex-wrap items-center gap-2">
                          <button
                            type="button"
                            onClick={applyBulkPasteToSelectedSeats}
                            className="rounded-lg bg-emerald-700 px-4 py-2 text-xs font-black text-white hover:bg-emerald-600"
                          >
                            套用到這組座位
                          </button>

                          <button
                            type="button"
                            onClick={clearBulkPaste}
                            className="rounded-lg bg-white px-3 py-2 text-xs font-black text-slate-700 ring-1 ring-slate-300 hover:bg-slate-50"
                          >
                            清除貼上內容
                          </button>

                          <span className="text-xs font-semibold text-emerald-900">
                            已貼 {parseBulkNameEmail(bulkPaste).length} 筆
                          </span>
                        </div>
                      </div>

                      {activeGroupSeats.length === 0 ? (
                        <p className="mt-3 text-sm text-slate-500">
                          Group {activeGroup} 還沒有選任何座位。
                        </p>
                      ) : (
                        <div className="mt-3 rounded-xl border border-slate-200 bg-white">
                          <div className="w-full">
                            <div className="grid grid-cols-[44px_180px_minmax(220px,0.9fr)_minmax(300px,1.3fr)] items-center gap-2 border-b border-slate-300 bg-slate-100 px-2 py-2 text-xs font-black text-slate-700">
                              <div className="text-center">#</div>
                              <div>Seat</div>
                              <div>Name</div>
                              <div>Email</div>
                            </div>

                          {activeGroupSeats.map((seat, index) => {
                            const seatInfo = seatDetails[seat.id] || {};
                            const groupInfo = groups[activeGroup] || {};

                            return (
                              <div
                                key={seat.id}
                                className="grid grid-cols-[44px_180px_minmax(220px,0.9fr)_minmax(300px,1.3fr)] items-center gap-2 border-b border-slate-200 bg-white px-2 py-2 last:border-b-0"
                              >
                                <div className="text-center text-sm font-black text-slate-500">
                                  {index + 1}
                                </div>

                                <div className="font-black text-slate-950">
                                  {seat.section} · R{seat.row} · S{seat.seat}
                                </div>

                                <input
                                  aria-label={`Name for ${seat.section} Row ${seat.row} Seat ${seat.seat}`}
                                  value={seatInfo.name ?? groupInfo.name ?? ""}
                                  onChange={(e) =>
                                    updateSeatDetail(seat.id, "name", e.target.value)
                                  }
                                  placeholder="Name"
                                  className="w-full min-w-0 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                />

                                <input
                                  aria-label={`Email for ${seat.section} Row ${seat.row} Seat ${seat.seat}`}
                                  value={seatInfo.email ?? groupInfo.email ?? ""}
                                  onChange={(e) =>
                                    updateSeatDetail(seat.id, "email", e.target.value)
                                  }
                                  placeholder="Email"
                                  className="w-full min-w-0 rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                                />
                              </div>
                            );
                          })}
                          </div>
                        </div>
                      )}
                    </div>
            </section>
          </div>

          <aside className="space-y-4 self-start">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">
                    Group {activeGroup}
                  </p>
                  <h2 className="text-xl font-black">Group 基本資料</h2>
                </div>

                <div className="flex items-center gap-2">
                  <select
                    value={activeGroup}
                    onChange={(e) => setActiveGroup(e.target.value)}
                    className="rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm font-black text-slate-950"
                    aria-label="選擇 Group"
                  >
                    {groupIds.map((groupId) => (
                      <option key={groupId} value={groupId}>
                        Group {groupId}
                        {groups[groupId]?.groupName
                          ? ` — ${groups[groupId].groupName}`
                          : groups[groupId]?.name
                          ? ` — ${groups[groupId].name}`
                          : ""}
                      </option>
                    ))}
                  </select>

                  <button
                    type="button"
                    onClick={createNewGroup}
                    className="rounded-xl bg-slate-950 px-3 py-2 text-xs font-black text-white hover:bg-slate-800"
                  >
                    ＋ 新增 Group
                  </button>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <label className="block">
                  <span className="mb-1 block text-xs font-black text-slate-500">
                    Group 名稱
                  </span>
                  <input
                    value={activeInfo.groupName || ""}
                    onChange={(e) => updateActiveGroupField("groupName", e.target.value)}
                    placeholder="例如：Cambridge Team"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-xs font-black text-slate-500">
                    姓名
                  </span>
                  <input
                    value={activeInfo.name}
                    onChange={(e) => updateActiveGroupField("name", e.target.value)}
                    placeholder="Amy Chen"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-xs font-black text-slate-500">
                    Email
                  </span>
                  <input
                    value={activeInfo.email}
                    onChange={(e) => updateActiveGroupField("email", e.target.value)}
                    placeholder="amy@email.com"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </label>

                <label className="block">
                  <span className="mb-1 block text-xs font-black text-slate-500">
                    Team / 備註
                  </span>
                  <input
                    value={activeInfo.note}
                    onChange={(e) => updateActiveGroupField("note", e.target.value)}
                    placeholder="Team 18"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2.5 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                  />
                </label>

                <div className="rounded-xl border border-blue-200 bg-blue-50 p-3">
                  <p className="text-xs font-black text-blue-700">目前分配座位</p>
                  <p className="mt-1 text-2xl font-black text-blue-950">
                    {groupSeatCounts[activeGroup] || 0} 張
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-sm font-semibold text-slate-700">
                  座位、Name、Email 的逐列清單已移到 Seat Map 下方，不需要左右拖動地圖即可查看與編輯。
                </div>


              </div>
            </div>

            <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between gap-2">
                <h2 className="text-lg font-black">Groups 快速選擇</h2>
                <span className="text-xs font-black text-slate-500">
                  {groupIds.length} groups
                </span>
              </div>

              <input
                value={groupPickerSearch}
                onChange={(e) => setGroupPickerSearch(e.target.value)}
                placeholder="快速找 Group 編號 / Group 名稱 / 姓名 / Email"
                className="mt-3 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              />

              <div className="mt-3 grid grid-cols-5 gap-1 sm:grid-cols-10 xl:grid-cols-5">
                {quickGroupChoices.map((groupId) => {
                  const hasSeats = (groupSeatCounts[groupId] || 0) > 0;
                  const hasInfo = Boolean(
                    groups[groupId]?.name ||
                    groups[groupId]?.email ||
                    groups[groupId]?.note
                  );

                  return (
                    <button
                      key={groupId}
                      type="button"
                      onClick={() => setActiveGroup(groupId)}
                      title={
                        groups[groupId]?.groupName
                          ? `Group ${groupId} — ${groups[groupId].groupName}`
                          : groups[groupId]?.name
                          ? `Group ${groupId} — ${groups[groupId].name}`
                          : `Group ${groupId}`
                      }
                      className={[
                        "rounded-lg border px-1 py-2 text-xs font-black transition",
                        activeGroup === groupId
                          ? "border-slate-950 bg-slate-950 text-white"
                          : hasSeats
                          ? "border-blue-300 bg-blue-50 text-blue-900 hover:bg-blue-100"
                          : hasInfo
                          ? "border-amber-300 bg-amber-50 text-amber-900 hover:bg-amber-100"
                          : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50",
                      ].join(" ")}
                    >
                      <div>{groupId}</div>
                      {(groupSeatCounts[groupId] || 0) > 0 ? (
                        <div className="mt-0.5 text-[10px]">
                          {groupSeatCounts[groupId]}張
                        </div>
                      ) : null}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 border-t border-slate-200 pt-4">
                <p className="text-sm font-black text-slate-950">Group 詳細清單</p>
                <input
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="搜尋 Group 名稱 / 姓名 / Email / 編號"
                  className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                />
              </div>

              <div className="mt-3 max-h-[360px] space-y-2 overflow-auto pr-1">
                {filteredGroups.map(([letter, info]) => (
                  <div
                    key={letter}
                    className={[
                      "rounded-xl border p-3",
                      activeGroup === letter
                        ? "border-blue-400 bg-blue-50"
                        : "border-slate-200 bg-white",
                    ].join(" ")}
                  >
                    <button
                      type="button"
                      onClick={() => setActiveGroup(letter)}
                      className="flex w-full items-center gap-3 text-left"
                    >
                      <div
                        className={[
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-black",
                          groupColorClass(letter),
                        ].join(" ")}
                      >
                        {letter}
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="truncate font-black">
                          {info.groupName || info.name || `Group ${letter}`}
                        </p>
                        <p className="truncate text-xs text-slate-500">
                          {info.email || "尚未填 Email"}
                        </p>
                      </div>

                      <div className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-black">
                        {groupSeatCounts[letter] || 0} 張
                      </div>
                    </button>

                    <div className="mt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={() => clearGroupInfo(letter)}
                        className="text-[11px] font-black text-rose-700 hover:text-rose-900"
                      >
                        清除此 Group
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>


      </section>
    </main>
  );
}
