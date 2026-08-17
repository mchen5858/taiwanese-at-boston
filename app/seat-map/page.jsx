"use client";

import React, { useEffect, useMemo, useState } from "react";

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


// Official 9/12 shirt-color patterns.
// First uploaded map = after the top of the 3rd inning (TAIWAN).
// Second uploaded map = after the top of the 6th inning (TW ❤️ SOX).
// Only black seats are listed here; every other valid seat is white.
const inning3BlackSeats = {
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

const inning6BlackSeats = {
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

function buildBlackSeatIdSet(pattern) {
  const ids = new Set();
  for (const [section, rows] of Object.entries(pattern)) {
    for (const [row, seats] of Object.entries(rows)) {
      for (const seat of seats) ids.add(seatId(section, row, seat));
    }
  }
  return ids;
}

const inning3BlackSeatIds = buildBlackSeatIdSet(inning3BlackSeats);
const inning6BlackSeatIds = buildBlackSeatIdSet(inning6BlackSeats);

function getShirtColor(blackSeatIds, section, row, seat) {
  return blackSeatIds.has(seatId(section, row, seat)) ? "black" : "white";
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

function SeatButton({ section, row, seat, selected, paintMode, onPaintStart, onPaintEnter, showSeatNumbers }) {
  const id = seatId(section, row, seat);

  return (
    <button
      type="button"
      data-seat-id={id}
      aria-pressed={selected}
      title={`${section} Row ${row} Seat ${seat}`}
      onPointerDown={(event) => onPaintStart(event, id, selected)}
      onPointerEnter={() => onPaintEnter(id)}
      onDragStart={(event) => event.preventDefault()}
      className={[
        "flex h-3 w-3 select-none items-center justify-center rounded-full border text-[6px] font-black leading-none transition md:h-3.5 md:w-3.5 md:text-[7px]",
        selected
          ? "border-slate-950 bg-slate-950 text-white"
          : "border-slate-500 bg-white text-slate-700 hover:border-slate-950 hover:bg-slate-100",
        paintMode ? "cursor-crosshair" : "cursor-pointer",
      ].join(" ")}
    >
      {showSeatNumbers ? seat : null}
    </button>
  );
}

function RowLabels({ align = "right" }) {
  const justifyClass = align === "left" ? "justify-start pl-1" : "justify-end pr-1";

  return (
    <div className="w-12 shrink-0">
      <div className="h-[2.15rem]" />
      <div className="space-y-0.5">
        {allRows.map((row) => (
          <div
            key={`${align}-${row}`}
            className={`flex h-3 -translate-y-[1px] items-center text-[9px] font-black leading-none text-slate-500 md:h-3.5 ${justifyClass}`}
          >
            Row {row}
          </div>
        ))}
      </div>
    </div>
  );
}

function SectionBlock({ section, selectedSeats, paintMode, onPaintStart, onPaintEnter, showSeatNumbers }) {
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
                style={{ gridTemplateColumns: `repeat(${meta.columns}, minmax(0.75rem, 0.75rem))` }}
              >
                {Array.from({ length: meta.columns }, (_, index) => index + 1).map((columnNumber) => {
                  const seatNumber = getSeatForColumn(section, row, seats, columnNumber);

                  if (!seatNumber) {
                    return <div key={`${row}-empty-${columnNumber}`} className="h-3 w-3 md:h-3.5 md:w-3.5" />;
                  }

                  const id = seatId(section, row, seatNumber);
                  return (
                    <SeatButton
                      key={id}
                      section={section}
                      row={row}
                      seat={seatNumber}
                      selected={selectedSeats.has(id)}
                      paintMode={paintMode}
                      onPaintStart={onPaintStart}
                      onPaintEnter={onPaintEnter}
                      showSeatNumbers={showSeatNumbers}
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

export default function SeatMapPage() {
  const allSeatIds = useMemo(() => buildAllSeatIds(), []);
  const [selectedSeats, setSelectedSeats] = useState(() => new Set());
  const [paintMode, setPaintMode] = useState(null);
  const [lastSeat, setLastSeat] = useState(null);
  const [saveMessage, setSaveMessage] = useState("");
  const [showSeatNumbers, setShowSeatNumbers] = useState(true);
  const [isZh, setIsZh] = useState(true);
  const [lookupSection, setLookupSection] = useState("L39");
  const [lookupRow, setLookupRow] = useState("47");
  const [lookupSeat, setLookupSeat] = useState(3);

  useEffect(() => {
    if (!saveMessage) return;
    const timer = window.setTimeout(() => setSaveMessage(""), 2500);
    return () => window.clearTimeout(timer);
  }, [saveMessage]);

  const selectedCount = selectedSeats.size;
  const totalSeats = allSeatIds.length;

  const lookupRows = useMemo(
    () => Object.keys(sectionData[lookupSection]).sort((a, b) => Number(b) - Number(a)),
    [lookupSection]
  );
  const lookupSeats = sectionData[lookupSection]?.[String(lookupRow)] || [];
  const lookupInning3 = getShirtColor(inning3BlackSeatIds, lookupSection, lookupRow, lookupSeat);
  const lookupInning6 = getShirtColor(inning6BlackSeatIds, lookupSection, lookupRow, lookupSeat);

  function changeLookupSection(section) {
    const rows = Object.keys(sectionData[section]).sort((a, b) => Number(b) - Number(a));
    const nextRow = rows[0];
    const nextSeats = sectionData[section][nextRow] || [];
    setLookupSection(section);
    setLookupRow(nextRow);
    setLookupSeat(nextSeats[0] || 1);
  }

  function changeLookupRow(row) {
    const nextSeats = sectionData[lookupSection][String(row)] || [];
    setLookupRow(String(row));
    setLookupSeat(nextSeats[0] || 1);
  }

  function loadOfficialPattern(blackSeatIds, label) {
    setSelectedSeats(new Set(blackSeatIds));
    setLastSeat(null);
    setSaveMessage(isZh ? `已載入${label}` : `${label} loaded`);
  }

  function updateSeat(id, targetMode) {
    setSelectedSeats((current) => {
      const next = new Set(current);
      if (targetMode === "black") next.add(id);
      if (targetMode === "white") next.delete(id);
      return next;
    });
    setLastSeat(id);
  }

  function handlePaintStart(event, id, isSelected) {
    event.preventDefault();
    const nextMode = isSelected ? "white" : "black";
    setPaintMode(nextMode);
    updateSeat(id, nextMode);
  }

  function handlePaintEnter(id) {
    if (!paintMode) return;
    updateSeat(id, paintMode);
  }

  function stopPainting() {
    setPaintMode(null);
  }

  function clearAll() {
    setSelectedSeats(new Set());
    setLastSeat(null);
  }

  function selectAll() {
    setSelectedSeats(new Set(allSeatIds));
    setLastSeat(null);
  }

  function invertAll() {
    setSelectedSeats((current) => {
      const next = new Set();
      for (const id of allSeatIds) {
        if (!current.has(id)) next.add(id);
      }
      return next;
    });
    setLastSeat(null);
  }

  async function exportToPng() {
    const seatSize = 18;
    const seatGap = 6;
    const rowGap = 6;
    const sectionGap = 22;
    const topPad = 28;
    const bottomPad = 28;
    const leftRowsWidth = 70;
    const rightRowsWidth = 70;
    const sectionPadX = 14;
    const sectionPadY = 16;
    const titleHeight = 34;
    const rowHeight = seatSize + rowGap;
    const gridHeights = allRows.length * rowHeight;
    const sectionHeights = titleHeight + sectionPadY * 2 + gridHeights;

    const sectionWidths = sectionOrder.map((section) => {
      const columns = sectionMeta[section].columns;
      return sectionPadX * 2 + columns * seatSize + (columns - 1) * seatGap;
    });

    const width = leftRowsWidth + rightRowsWidth + sectionWidths.reduce((a, b) => a + b, 0) + sectionGap * (sectionOrder.length - 1) + 40;
    const height = topPad + bottomPad + sectionHeights;

    const canvas = document.createElement("canvas");
    const scale = 2;
    canvas.width = width * scale;
    canvas.height = height * scale;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.scale(scale, scale);

    // background
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(0, 0, width, height);

    const sectionTop = topPad;
    const rowsTop = sectionTop + titleHeight + sectionPadY;

    function drawRoundedRect(x, y, w, h, r, fill, stroke) {
      ctx.beginPath();
      ctx.moveTo(x + r, y);
      ctx.arcTo(x + w, y, x + w, y + h, r);
      ctx.arcTo(x + w, y + h, x, y + h, r);
      ctx.arcTo(x, y + h, x, y, r);
      ctx.arcTo(x, y, x + w, y, r);
      ctx.closePath();
      if (fill) {
        ctx.fillStyle = fill;
        ctx.fill();
      }
      if (stroke) {
        ctx.strokeStyle = stroke;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    function drawRowLabels(x, align) {
      ctx.textBaseline = "middle";
      ctx.font = '700 10px Arial';
      ctx.fillStyle = '#64748b';
      allRows.forEach((row, idx) => {
        const y = rowsTop + idx * rowHeight + seatSize / 2 - 1;
        const label = `Row ${row}`;
        const textWidth = ctx.measureText(label).width;
        const drawX = align === 'left' ? x : x + 56 - textWidth;
        ctx.fillText(label, drawX, y);
      });
    }

    drawRowLabels(12, 'right');

    let currentX = leftRowsWidth;
    sectionOrder.forEach((section) => {
      const secWidth = sectionWidths[sectionOrder.indexOf(section)];
      drawRoundedRect(currentX, sectionTop, secWidth, sectionHeights, 18, '#ffffff', '#cbd5e1');

      ctx.fillStyle = '#0f172a';
      ctx.font = '700 16px Arial';
      ctx.textBaseline = 'top';
      const title = sectionMeta[section].title;
      const titleWidth = ctx.measureText(title).width;
      ctx.fillText(title, currentX + (secWidth - titleWidth) / 2, sectionTop + 12);

      const columns = sectionMeta[section].columns;
      allRows.forEach((row, rowIndex) => {
        const seats = sectionData[section][String(row)] || [];
        for (let col = 1; col <= columns; col += 1) {
          const seat = getSeatForColumn(section, row, seats, col);
          if (!seat) continue;
          const id = seatId(section, row, seat);
          const x = currentX + sectionPadX + (col - 1) * (seatSize + seatGap) + seatSize / 2;
          const y = rowsTop + rowIndex * rowHeight + seatSize / 2;
          ctx.beginPath();
          ctx.arc(x, y, seatSize / 2, 0, Math.PI * 2);
          const selected = selectedSeats.has(id);
          ctx.fillStyle = selected ? '#111827' : '#ffffff';
          ctx.fill();
          ctx.strokeStyle = '#475569';
          ctx.lineWidth = 1;
          ctx.stroke();

          if (showSeatNumbers) {
            ctx.fillStyle = selected ? '#ffffff' : '#334155';
            ctx.font = '700 7px Arial';
            ctx.textBaseline = 'middle';
            const label = String(seat);
            const tw = ctx.measureText(label).width;
            ctx.fillText(label, x - tw / 2, y + 0.5);
          }
        }
      });

      currentX += secWidth + sectionGap;
    });

    drawRowLabels(width - rightRowsWidth + 10, 'left');

    const fileName = `912-seat-map-${new Date().toISOString().slice(0,19).replace(/[:T]/g,'-')}.png`;

    canvas.toBlob(async (blob) => {
      if (!blob) return;

      const file = new File([blob], fileName, { type: "image/png" });

      try {
        if (navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
          await navigator.share({
            files: [file],
            title: "912 Seat Map",
            text: "912 Taiwan Fans Night seat map",
          });
          setSaveMessage(isZh ? "已開啟手機分享／儲存 PNG" : "Opened mobile share/save menu");
          return;
        }
      } catch (error) {
        console.error("Mobile share failed, falling back to download", error);
      }

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setSaveMessage(isZh ? "已匯出 PNG 圖片" : "PNG image exported");
    }, "image/png");
  }

  const selectedBySection = sectionOrder.map((section) => {
    let count = 0;
    for (const row of Object.keys(sectionData[section])) {
      for (const seat of sectionData[section][row]) {
        if (selectedSeats.has(seatId(section, row, seat))) count += 1;
      }
    }
    return [section, count];
  });

  return (
    <main
      className="min-h-screen bg-slate-50 text-slate-900"
      onPointerUp={stopPainting}
      onPointerCancel={stopPainting}
      onPointerLeave={stopPainting}
    >
      <section className="mx-auto max-w-[1900px] px-3 py-6 md:px-5 md:py-8">
        <div className="rounded-[1.75rem] bg-gradient-to-r from-emerald-900 via-emerald-800 to-sky-800 p-5 text-white shadow-xl md:p-6">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-100">{isZh ? "912 互動座位圖" : "912 Interactive Seat Map"}</p>
            <h1 className="mt-3 max-w-6xl tracking-tight">
              <span className="block text-3xl font-black leading-tight text-white md:text-5xl">
                Light Up Taiwan, Let Taiwan Be Seen.
              </span>
              <span className="mt-2 block text-right text-5xl font-black leading-none text-amber-300 drop-shadow-lg md:text-7xl">
                Together We Shine
              </span>
            </h1>
            <div className="mt-5 flex flex-wrap justify-end gap-2">
              <a
                href="/"
                className="rounded-full bg-white/15 px-5 py-2.5 text-sm font-black text-white shadow-sm ring-1 ring-white/20 transition hover:bg-white/20"
              >
                {isZh ? "回到 912 首頁" : "Back to 912 Home"}
              </a>
              <a
                href="/912-guide"
                className="rounded-full bg-white/15 px-5 py-2.5 text-sm font-black text-white shadow-sm ring-1 ring-white/20 transition hover:bg-white/20"
              >
                {isZh ? "回到懶人包" : "Back to Guide"}
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

          </div>
        </div>
        <section className="mt-4 overflow-hidden rounded-[2rem] border border-rose-200 bg-white shadow-sm">
          <div className="bg-gradient-to-br from-white via-rose-50 to-amber-50 p-6 md:p-8">
            <div className="mx-auto max-w-5xl">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-rose-700">
                {isZh ? "Light Up Taiwan Challenge｜排字活動說明" : "Light Up Taiwan Challenge｜Lettering Activity"}
              </p>

              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                {isZh ? "一起用黑白兩色，讓台灣在 Fenway 被看見" : "Use black and white to let Taiwan be seen at Fenway"}
              </h2>

              <div className="mt-5 rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5">
                <p className="text-xl font-black text-amber-900">
                  {isZh
                    ? "我們已經成功讓紅襪球團看見台灣社群的力量，接下來想和大家一起挑戰："
                    : "The Red Sox have already seen the strength of our Taiwanese community. Next, we want to take on one more challenge together:"}
                </p>
                <p className="mt-2 text-3xl font-black leading-tight text-emerald-800 md:text-5xl">
                  Light Up Taiwan, Let Taiwan Be Seen!
                </p>
                <p className="mt-1 text-right text-xl font-black text-slate-900">
                  {isZh ? "點亮台灣，讓台灣被看見！" : "Let Taiwan be seen!"}
                </p>
              </div>

              <p className="mt-5 text-base font-bold leading-8 text-slate-700 md:text-lg">
                {isZh
                  ? "我們會利用 Fenway 現場的實際座位，以及白色活動 T-shirt 和黑色 Red Sox × Bruins Jersey，在兩個指定時間一起完成排字。"
                  : "We will use the actual Fenway seating layout, the white event T-shirt, and the black Red Sox × Bruins Jersey to create two lettering moments during the game."}
              </p>

              <div className="mt-4 grid gap-3 md:grid-cols-2">
                <div className="rounded-[1.25rem] border border-rose-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-rose-700">
                    {isZh ? "第 3 局上結束後" : "After the top of the 3rd inning"}
                  </p>
                  <p className="mt-2 text-3xl font-black text-slate-950">TAIWAN</p>
                </div>
                <div className="rounded-[1.25rem] border border-indigo-200 bg-white p-5 shadow-sm">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-indigo-700">
                    {isZh ? "第 6 局上結束後" : "After the top of the 6th inning"}
                  </p>
                  <p className="mt-2 text-3xl font-black text-slate-950">TW ❤️ SOX</p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-lg font-black text-slate-950">
                    {isZh ? "⚪ 白色活動 T-shirt" : "⚪ White event T-shirt"}
                  </p>
                  <p className="mt-2 leading-7 text-slate-700">
                    {isZh
                      ? "白色衣服為活動 T-shirt，請提前領取並於活動當天穿到 Fenway。"
                      : "The white event T-shirt should be picked up in advance and worn to Fenway on game day."}
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="text-lg font-black text-slate-950">
                    {isZh ? "⚫ 黑色 Red Sox × Bruins Jersey" : "⚫ Black Red Sox × Bruins Jersey"}
                  </p>
                  <p className="mt-2 leading-7 text-slate-700">
                    {isZh
                      ? "黑色 Jersey 由紅襪球團在進場後發放。排字時請依照自己的座位查詢結果切換黑色或白色。"
                      : "The black Jersey is distributed by the Red Sox after entry. During the lettering moments, follow your seat lookup result to switch between black and white."}
                  </p>
                </div>
              </div>

              <div className="mt-5 rounded-[1.25rem] border border-rose-200 bg-rose-50 px-5 py-4">
                <p className="font-black leading-7 text-rose-900">
                  {isZh
                    ? "❤️ 輕鬆參與、開心一起玩！排字是一個大家共同完成的小挑戰，不需要有壓力；成功很棒，就算沒有百分之百完美也完全沒關係。"
                    : "❤️ Relax and have fun! This is a community challenge, not a high-pressure task. If it works beautifully, great—and if it is not 100% perfect, that is completely okay."}
                </p>
              </div>

              <div className="mt-5 border-l-4 border-emerald-300 pl-4">
                {isZh ? (
                  <>
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
                  </>
                ) : (
                  <>
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
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-4 rounded-[1.75rem] border border-sky-200 bg-white p-5 shadow-sm md:p-7">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-sky-700">
              {isZh ? "找到我的座位與換衣顏色" : "Find My Seat & Shirt Color"}
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 md:text-3xl">
              {isZh ? "輸入座位，立即查看第 3 局與第 6 局要穿什麼顏色" : "Enter your seat to see what color to wear in the 3rd and 6th innings"}
            </h2>

            <div className="mt-5 grid gap-3 md:grid-cols-3">
              <label className="block">
                <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.18em] text-slate-500">Section</span>
                <select
                  value={lookupSection}
                  onChange={(event) => changeLookupSection(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base font-black text-slate-950 outline-none ring-sky-500 transition focus:ring-2"
                >
                  {sectionOrder.map((section) => (
                    <option key={section} value={section}>{section}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.18em] text-slate-500">Row</span>
                <select
                  value={lookupRow}
                  onChange={(event) => changeLookupRow(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base font-black text-slate-950 outline-none ring-sky-500 transition focus:ring-2"
                >
                  {lookupRows.map((row) => (
                    <option key={row} value={row}>{row}</option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-black uppercase tracking-[0.18em] text-slate-500">Seat</span>
                <select
                  value={lookupSeat}
                  onChange={(event) => setLookupSeat(Number(event.target.value))}
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base font-black text-slate-950 outline-none ring-sky-500 transition focus:ring-2"
                >
                  {lookupSeats.map((seat) => (
                    <option key={seat} value={seat}>{seat}</option>
                  ))}
                </select>
              </label>
            </div>

            <div className="mt-5 rounded-[1.5rem] bg-slate-950 p-5 text-white shadow-lg">
              <p className="text-sm font-black text-slate-300">
                {lookupSection} · Row {lookupRow} · Seat {lookupSeat}
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-2">
                {[
                  { inning: 3, title: "TAIWAN", color: lookupInning3 },
                  { inning: 6, title: "TW ❤️ SOX", color: lookupInning6 },
                ].map((item) => {
                  const isBlack = item.color === "black";
                  return (
                    <div key={item.inning} className={`rounded-[1.25rem] border p-5 ${isBlack ? "border-slate-600 bg-slate-900" : "border-slate-200 bg-white text-slate-950"}`}>
                      <p className={`text-xs font-black uppercase tracking-[0.2em] ${isBlack ? "text-slate-300" : "text-slate-500"}`}>
                        {isZh ? `第 ${item.inning} 局上結束後` : `After the top of the ${item.inning}${item.inning === 3 ? "rd" : "th"} inning`} · {item.title}
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <span className={`h-11 w-11 shrink-0 rounded-full border-2 ${isBlack ? "border-white bg-black" : "border-slate-400 bg-white"}`} />
                        <div>
                          <p className="text-2xl font-black">
                            {isZh ? (isBlack ? "穿黑色" : "穿白色") : (isBlack ? "WEAR BLACK" : "WEAR WHITE")}
                          </p>
                          <p className={`mt-1 text-sm font-bold ${isBlack ? "text-slate-300" : "text-slate-600"}`}>
                            {isZh
                              ? (isBlack ? "Red Sox × Bruins Jersey" : "9/12 白色活動 T-shirt")
                              : (isBlack ? "Red Sox × Bruins Jersey" : "9/12 white event T-shirt")}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="mt-4 text-xs font-bold leading-6 text-slate-300">
                {isZh ? "" : "Please follow event staff instructions and change shirts at the designated time."}
              </p>
            </div>
          </div>
        </section>

        <section id="reference" className="mt-4 rounded-[1.75rem] border border-amber-200 bg-white p-5 shadow-sm md:p-7">
          <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-700">
                {isZh ? "正式排字參考圖" : "Official Pattern Reference"}
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-950 md:text-3xl">
                {isZh ? "第 3 局與第 6 局排字參考" : "3rd & 6th Inning Pattern Reference"}
              </h2>
            </div>
            <p className="text-sm font-bold text-slate-500">
              {isZh ? "黑色圓點＝穿黑色 Bruins Jersey；白色圓點＝穿白色 9/12 活動 T-shirt" : "Black dot = black Bruins Jersey; white dot = white 9/12 event T-shirt"}
            </p>
          </div>

          <div className="grid gap-5 xl:grid-cols-2">
            <article className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-sm">
              <div className="border-b border-slate-200 bg-white p-4">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-rose-700">
                  {isZh ? "第 3 局上結束後" : "After the top of the 3rd inning"}
                </p>
                <h3 className="mt-1 text-2xl font-black text-slate-950">TAIWAN</h3>
              </div>
              <a href="/912-seat-map-inning-3.png" target="_blank" rel="noreferrer" className="block bg-white">
                <img
                  src="/912-seat-map-inning-3.png"
                  alt="912 Taiwan Fans Night third inning TAIWAN seat pattern reference"
                  className="h-auto w-full"
                />
              </a>
              <p className="px-4 py-3 text-xs font-bold leading-6 text-slate-500">
                {isZh ? "點圖片可開啟原尺寸參考圖。" : "Click the image to open the full-size reference."}
              </p>
            </article>

            <article className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-50 shadow-sm">
              <div className="border-b border-slate-200 bg-white p-4">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-indigo-700">
                  {isZh ? "第 6 局上結束後" : "After the top of the 6th inning"}
                </p>
                <h3 className="mt-1 text-2xl font-black text-slate-950">TW ❤️ SOX</h3>
              </div>
              <a href="/912-seat-map-inning-6.jpg" target="_blank" rel="noreferrer" className="block bg-white">
                <img
                  src="/912-seat-map-inning-6.jpg"
                  alt="912 Taiwan Fans Night 912 Taiwan Fans Night sixth inning TW ❤️ SOX seat pattern reference"
                  className="h-auto w-full"
                />
              </a>
              <p className="px-4 py-3 text-xs font-bold leading-6 text-slate-500">
                {isZh ? "點圖片可開啟原尺寸參考圖。" : "Click the image to open the full-size reference."}
              </p>
            </article>
          </div>
        </section>

        <div className="mt-6 overflow-hidden rounded-[2rem] border border-violet-200 bg-white shadow-sm">
            <div className="bg-gradient-to-r from-violet-50 via-fuchsia-50 to-rose-50 px-5 py-5 md:px-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-violet-700 px-4 py-2 text-base font-black uppercase tracking-[0.16em] text-white md:text-lg">
                  🎮 GAME MODE
                </span>
                <span className="text-xl font-black text-violet-800 md:text-2xl">排字小遊戲</span>
              </div>

              <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <h2 className="text-2xl font-black tracking-tight text-slate-950 md:text-3xl">
                    你也可以自己來玩玩排字小遊戲
                  </h2>
                  <p className="mt-2 max-w-3xl leading-7 text-slate-700">
                    想試試看不同的排字效果嗎？把座位切換成黑色或白色，自己排出想像中的應援文字！
                  </p>
                </div>
                <div className="shrink-0 rounded-2xl border border-violet-200 bg-white px-4 py-3 text-sm font-black text-violet-900 shadow-sm">
                  ▶ 點座位開始玩
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3">
                <p className="text-sm font-bold leading-6 text-amber-950">
                  💡 這裡是互動小遊戲，不會影響正式排字安排。
                </p>
              </div>
            </div>

        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <div className="rounded-2xl border border-emerald-200 bg-white p-4 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700">{isZh ? "全部座位" : "Total seats"}</p>
            <p className="mt-1 text-3xl font-black text-slate-950">{totalSeats}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-600">{isZh ? "黑色座位" : "Black seats"}</p>
            <p className="mt-1 text-3xl font-black text-slate-950">{selectedCount}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-600">{isZh ? "白色座位" : "White seats"}</p>
            <p className="mt-1 text-3xl font-black text-slate-950">{totalSeats - selectedCount}</p>
          </div>
          <div className="rounded-2xl border border-sky-200 bg-white p-4 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sky-700">{isZh ? "最後操作座位" : "Last seat"}</p>
            <p className="mt-1 text-lg font-black text-slate-950">{lastSeat || "—"}</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm leading-7 text-slate-600">
              {isZh ? "點一下圓圈會切換黑 / 白。按住白色座位拖曳，掃過的座位會變黑；按住黑色座位拖曳，掃過的座位會變白。也可以切換是否顯示座位上的數字。手機匯出 PNG 時會優先開啟分享／儲存選單。" : "Click a circle to switch it between black and white. Drag across seats to paint multiple seats. You can also toggle seat numbers. On mobile, PNG export will open the share/save menu when available."}
              {saveMessage ? <span className="ml-2 font-bold text-emerald-700">{saveMessage}</span> : null}
            </p>
            <div className="flex flex-wrap gap-2">
              {selectedBySection.map(([section, count]) => (
                <span key={section} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-black text-slate-700">
                  {section}：{count} 黑
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 rounded-[1.5rem] border border-slate-200 bg-white p-3 shadow-sm">
          <button
            type="button"
            onClick={() => loadOfficialPattern(inning3BlackSeatIds, isZh ? "第 3 局 TAIWAN 排字" : "3rd inning TAIWAN pattern")}
            className="rounded-full bg-rose-100 px-4 py-2.5 text-xs font-black text-rose-900 shadow-sm transition hover:bg-rose-200"
          >
            {isZh ? "載入第 3 局 TAIWAN" : "Load 3rd inning TAIWAN"}
          </button>
          <button
            type="button"
            onClick={() => loadOfficialPattern(inning6BlackSeatIds, isZh ? "第 6 局 TW ❤️ SOX 排字" : "6th inning TW ❤️ SOX pattern")}
            className="rounded-full bg-indigo-100 px-4 py-2.5 text-xs font-black text-indigo-900 shadow-sm transition hover:bg-indigo-200"
          >
            {isZh ? "載入第 6 局 TW ❤️ SOX" : "Load 6th inning TW ❤️ SOX"}
          </button>
          <button type="button" onClick={clearAll} className="rounded-full bg-slate-100 px-4 py-2.5 text-xs font-black text-slate-800 shadow-sm transition hover:bg-slate-200">
            全部變白
          </button>
          <button type="button" onClick={selectAll} className="rounded-full bg-slate-950 px-4 py-2.5 text-xs font-black text-white shadow-sm transition hover:bg-slate-800">
            全部變黑
          </button>
          <button type="button" onClick={invertAll} className="rounded-full bg-amber-400 px-4 py-2.5 text-xs font-black text-slate-950 shadow-sm transition hover:bg-amber-300">
            黑白反轉
          </button>
          <button
            type="button"
            onClick={() => setShowSeatNumbers((current) => !current)}
            className="rounded-full bg-sky-100 px-4 py-2.5 text-xs font-black text-sky-900 shadow-sm transition hover:bg-sky-200"
          >
            {showSeatNumbers ? "拿掉座位數字" : "顯示座位數字"}
          </button>
          <button type="button" onClick={exportToPng} className="rounded-full bg-emerald-100 px-4 py-2.5 text-xs font-black text-emerald-900 shadow-sm transition hover:bg-emerald-200">
            匯出 PNG
          </button>
        </div>


        <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-slate-100 p-3 shadow-inner">
          <div className="flex w-full items-start gap-3 overflow-x-auto xl:overflow-x-visible">
            <RowLabels align="right" />

            <div className="flex shrink-0 items-start gap-3 xl:shrink xl:scale-[0.98] xl:origin-top-left 2xl:scale-100">
              {sectionOrder.map((section) => (
                <SectionBlock
                  key={section}
                  section={section}
                  selectedSeats={selectedSeats}
                  paintMode={paintMode}
                  onPaintStart={handlePaintStart}
                  onPaintEnter={handlePaintEnter}
                  showSeatNumbers={showSeatNumbers}
                />
              ))}
            </div>

            <RowLabels align="left" />
          </div>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-sm">
          <div className="mb-3 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">
                Actual Seat Reference
              </p>
              <h2 className="mt-1 text-2xl font-black text-slate-950">{isZh ? "實際座位區參考圖" : "Actual seat reference"}</h2>
            </div>
            <p className="text-sm font-bold text-slate-500">{isZh ? "L39 / L41 / L42 / L43 實景位置參考" : "Actual view reference for L39 / L41 / L42 / L43"}</p>
          </div>

          <div className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-50">
            <img
              src="/fenway-seat-reference-912.png"
              alt="Fenway Park actual seat reference for sections L39, L41, L42, and L43"
              className="mx-auto max-h-[520px] w-full max-w-5xl object-contain rounded-[1.25rem]"
            />
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-7 text-emerald-900">
          <strong>{isZh ? "備註：" : "Note:"}</strong>{isZh ? "排好座位後，可直接按上方「匯出 PNG」把目前的黑白座位圖存成圖片。" : "After creating your design, click Export PNG to save the current black-and-white seat map as an image."}
        </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 border-t border-slate-200 pt-6">
            <a
              href="/"
              className="inline-flex rounded-full bg-sky-800 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-700"
            >
              {isZh ? "回到 912 首頁" : "Back to 912 Home"}
            </a>
            <a
              href="/912-guide"
              className="inline-flex rounded-full bg-sky-700 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-sky-600"
            >
              {isZh ? "回到懶人包" : "Back to Guide"}
            </a>
          </div>

      </section>
    </main>
  );
}
