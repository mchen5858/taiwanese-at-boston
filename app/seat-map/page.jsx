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
// Second uploaded map = after the top of the 6th inning (RED SOX).
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
      8,
      9,
      10,
      11,
      16,
      17,
      18
    ],
    "43": [
      8,
      9,
      10,
      11,
      16,
      17,
      18
    ],
    "42": [
      7,
      8,
      9,
      10,
      15,
      16,
      17
    ],
    "41": [
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
    "40": [
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
    "39": [
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14
    ],
    "38": [
      5,
      6,
      7,
      8,
      11,
      12,
      13,
      14,
      15
    ],
    "37": [
      4,
      5,
      6,
      7,
      11,
      12,
      13,
      14,
      15
    ],
    "36": [
      4,
      5,
      6,
      7,
      12,
      13,
      14,
      15
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
      14,
      15,
      16,
      17,
      18,
      19,
      20
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
      14,
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
      2,
      3,
      4,
      14,
      15,
      16,
      20,
      21,
      22
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
      14,
      15,
      16,
      20,
      21,
      22
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
      14,
      15,
      16,
      20,
      21,
      22
    ],
    "40": [
      2,
      3,
      4,
      14,
      15,
      16,
      20,
      21,
      22
    ],
    "39": [
      2,
      3,
      4,
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
      14,
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
      5,
      6,
      7,
      8,
      9,
      10,
      14,
      15,
      16,
      17,
      18,
      19,
      20
    ]
  },
  "L42": {
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
        <div className="mt-4 overflow-hidden rounded-[2rem] border border-rose-200 shadow-sm">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-white via-rose-50 to-amber-50 p-6 md:p-8">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-rose-200/50 blur-3xl" />
            <div className="absolute -left-8 bottom-0 h-28 w-28 rounded-full bg-amber-200/40 blur-3xl" />

            <div className="relative">
              <div className="inline-flex rounded-full border border-rose-200 bg-white/90 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.32em] text-rose-700 shadow-sm">
                Light Up Taiwan Challenge
              </div>

              <h2 className="mt-4 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                <span className="inline-block rounded-2xl bg-white px-4 py-2 shadow-sm ring-1 ring-rose-100">
                  輕鬆參與
                </span>
                <span className="mx-2 text-rose-500">・</span>
                <span className="inline-block rounded-2xl bg-amber-100/90 px-4 py-2 shadow-sm ring-1 ring-amber-200">
                  開心一起玩！
                </span>
              </h2>

              <div className="mt-6 grid gap-4 md:grid-cols-[1.4fr_0.9fr]">
                <div className="space-y-4 text-base font-bold leading-8 text-slate-700 md:text-lg">
                  <p>
                    <strong className="text-slate-950">這次的排字其實是一個不小的挑戰。</strong>
                  </p>
                  <p>
                    因為我們的座位區並不是完整、方正的長方形，而且每一區、每一排的座位數量都不完全相同，所以實際排字的難度會比想像中高很多，最後呈現出來的效果，我們也無法百分之百預測。
                  </p>
                  <p>
                    但既然有這麼多朋友難得一起聚在 Fenway，我們還是很想和大家一起試試看！
                  </p>
                  <p>
                    其實，<strong className="text-rose-700">9/12 活動最主要的目標已經達成了</strong>——我們已經讓紅襪球團看見台灣社群的熱情、團結與凝聚力。這次的排字活動並不是一定要完成的任務，而更像是一個大家一起參與的小遊戲、小挑戰。
                  </p>
                  <p>
                    我們只是希望趁著這麼多人難得聚在一起，一起做一件有趣的事情，留下一個屬於大家、也屬於 9/12 的共同回憶。
                  </p>
                </div>

                <div className="rounded-[1.75rem] border border-amber-200 bg-white/85 p-5 shadow-sm backdrop-blur-sm">
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-700">
                    Friendly Reminder
                  </p>
                  <p className="mt-4 text-xl font-black leading-8 text-amber-950 md:text-2xl">
                    所以真的不用有任何壓力，成功了當然很棒；就算最後沒有百分之百完美，也完全沒關係。
                  </p>
                  <p className="mt-4 text-base font-black text-slate-700">
                    最重要的是——
                  </p>
                  <div className="mt-3 rounded-2xl bg-gradient-to-r from-rose-600 to-pink-600 px-5 py-4 text-white shadow-sm">
                    <p className="text-2xl font-black leading-9">
                      大家一起參與、一起合作、一起玩得開心！ ❤️🇹🇼
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                  { inning: 6, title: "RED SOX", color: lookupInning6 },
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

        <section className="mt-4 rounded-[1.75rem] border border-amber-200 bg-white p-5 shadow-sm md:p-7">
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
                <h3 className="mt-1 text-2xl font-black text-slate-950">RED SOX</h3>
              </div>
              <a href="/912-seat-map-inning-6.png" target="_blank" rel="noreferrer" className="block bg-white">
                <img
                  src="/912-seat-map-inning-6.png"
                  alt="912 Taiwan Fans Night sixth inning RED SOX seat pattern reference"
                  className="h-auto w-full"
                />
              </a>
              <p className="px-4 py-3 text-xs font-bold leading-6 text-slate-500">
                {isZh ? "點圖片可開啟原尺寸參考圖。" : "Click the image to open the full-size reference."}
              </p>
            </article>
          </div>
        </section>


        {isZh ? (
        <section className="mt-4 rounded-[1.75rem] border border-emerald-200 bg-white p-5 shadow-sm md:p-7">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">
              排字活動說明
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 md:text-3xl">
              一起用黑白兩色，讓台灣在 Fenway 被看見
            </h2>

            <div className="mt-5 space-y-5 text-base leading-8 text-slate-700">
              <p>
                大家好，再次感謝大家對 9/12 活動的支持！
              </p>

              <p>
                這次共有超過 <strong>1,300 位朋友</strong>購票參加，而且在距離活動還有一個半月時，我們就已經提前結束售票。相信大家和我們抱持著同樣的想法：希望用最實際的行動，讓紅襪球團看見台灣社群的團結與凝聚力。
              </p>

              <p>
                我們也非常高興地向大家報告，第一階段的目標已經成功達成——<strong>紅襪官方已經注意到台灣社群所展現出的力量！</strong>
              </p>

              <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5">
                <p className="text-xl font-black leading-tight text-amber-900 md:text-2xl">
                  接下來，我們想和大家一起挑戰下一個目標：
                </p>
                <p className="mt-3 text-3xl font-black leading-tight text-emerald-800 md:text-5xl">
                  Light Up Taiwan, Let Taiwan Be Seen!
                </p>
                <p className="mt-2 text-xl font-black text-slate-900 md:text-2xl">
                  點亮台灣，讓台灣被看見！
                </p>
              </div>

              <p>
                這次我們希望利用現場的實際座位，以及黑色、白色兩種衣服，在 Fenway 觀眾席上一起排出大型文字。
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">3 局上結束後</p>
                  <p className="mt-2 text-3xl font-black text-slate-950">TAIWAN</p>
                </div>
                <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">6 局上結束後</p>
                  <p className="mt-2 text-3xl font-black text-slate-950">RED SOX</p>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-rose-200 bg-rose-50 p-5">
                <p className="text-xl font-black text-rose-900">輕鬆參與，開心一起玩！</p>
                <div className="mt-3 space-y-3 text-slate-700">
                  <p>這次的排字其實是一個不小的挑戰。</p>
                  <p>因為我們的座位區並不是完整、方正的長方形，而且每一區、每一排的座位數量都不完全相同，所以實際排字的難度會比想像中高很多，最後呈現出來的效果，我們也無法百分之百預測。</p>
                  <p>但既然有這麼多朋友難得一起聚在 Fenway，我們還是很想和大家一起試試看！</p>
                  <p>其實 9/12 活動最主要的目標已經達成了。這次排字更像是一個大家一起完成的小挑戰，希望留下屬於我們共同的回憶。</p>
                  <p><strong>成功了當然很棒；就算沒有百分之百完美，也完全沒關係。</strong></p>
                  <p className="font-black text-rose-900">一起參與、一起合作、一起玩得開心！ ❤️🇹🇼⚾</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-black text-slate-950">黑白兩件衣服怎麼使用？</h3>
                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                    <h4 className="text-xl font-black text-slate-950">白色衣服</h4>
                    <p className="mt-3">
                      白色衣服是這次特別製作的 <strong>9/12 活動 T-shirt</strong>。我們會陸續公布衣服的發放時間與地點，讓大家可以在活動前提前領取。也希望大家在活動當天，可以直接穿著白色活動衣進場。
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                    <h4 className="text-xl font-black text-slate-950">黑色衣服</h4>
                    <p className="mt-3">
                      黑色衣服則是大家進入球場時，由紅襪球團發送的 <strong>Red Sox × Bruins Jersey</strong>。
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5">
                <p className="font-black text-slate-950">因此，活動當天每一位參加者都會有：</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 font-bold text-slate-800">
                  <li>一件白色 9/12 活動 T-shirt</li>
                  <li>一件黑色 Red Sox × Bruins Jersey</li>
                </ul>
                <p className="mt-4">我們會利用這兩種不同顏色的衣服，配合每個人的實際座位位置，一起完成排字。</p>
              </div>

              <div className="rounded-[1.5rem] border border-sky-200 bg-sky-50 p-5">
                <h3 className="text-2xl font-black text-slate-950">排字方式</h3>
                <p className="mt-3">我們會在比賽中的兩個指定時間進行排字。</p>

                <div className="mt-4 grid gap-4 md:grid-cols-2">
                  <div className="rounded-[1.25rem] border border-sky-200 bg-white p-4">
                    <p className="text-sm font-black text-sky-700">第 3 局</p>
                    <p className="mt-1 text-2xl font-black text-slate-950">TAIWAN</p>
                    <p className="mt-2">大家依照自己的座位安排，穿上指定的黑色或白色衣服，一起排出第一組文字。</p>
                  </div>
                  <div className="rounded-[1.25rem] border border-sky-200 bg-white p-4">
                    <p className="text-sm font-black text-sky-700">第 6 局</p>
                    <p className="mt-1 text-2xl font-black text-slate-950">RED SOX</p>
                    <p className="mt-2">到了第二個指定時間，部分朋友可能需要更換衣服顏色，再一起排出第二組文字。</p>
                  </div>
                </div>

                <p className="mt-4">
                  每個座位在第 3 局與第 6 局應該穿什麼顏色，都可以直接使用網站上的 <strong>「找到我的座位與換衣顏色」</strong>。
                </p>
                <p className="mt-3">
                  輸入自己的 <strong>Section、Row、Seat</strong>，系統就會直接告訴你第 3 局與第 6 局應該穿黑色還是白色。
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5">
                <h3 className="text-xl font-black text-emerald-900">我們希望一起完成</h3>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-black text-slate-600">3 局上結束後</p>
                    <p className="mt-1 text-3xl font-black text-slate-950">TAIWAN</p>
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-600">6 局上結束後</p>
                    <p className="mt-1 text-3xl font-black text-slate-950">RED SOX</p>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.5rem] bg-gradient-to-r from-emerald-900 to-sky-900 p-6 text-white">
                <p className="text-2xl font-black leading-tight md:text-4xl">
                  讓我們一起用台灣社群的力量點亮球場，讓更多人看見台灣！
                </p>
                <p className="mt-4 text-xl font-black leading-relaxed text-amber-300 md:text-3xl">
                  Light Up Taiwan.<br />
                  Let Taiwan Be Seen.<br />
                  Together We Shine. 🇹🇼⚾
                </p>
              </div>
            </div>
          </div>
        </section>
        ) : (
        <section className="mt-4 rounded-[1.75rem] border border-emerald-200 bg-white p-5 shadow-sm md:p-7">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">
              Lettering activity overview
            </p>
            <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 md:text-3xl">
              Let’s use black and white to let Taiwan be seen at Fenway
            </h2>

            <div className="mt-5 space-y-5 text-base leading-8 text-slate-700">
              <p>
                Hello everyone, and thank you again for supporting the 9/12 event. This time, more than 1,300 friends purchased tickets, and ticket sales closed early with more than a month and a half still remaining before the event.
              </p>

              <p>
                We believe everyone shares the same goal: to use real action to show the Red Sox organization the unity and strength of the Taiwanese community.
              </p>

              <p>
                We are also very happy to share that we have successfully reached our first-stage goal — the Red Sox organization has already noticed the strength shown by the Taiwanese community.
              </p>

              <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5">
                <p className="text-xl font-black leading-tight text-amber-900 md:text-2xl">
                  Next, we hope to challenge the next goal together:
                </p>
                <p className="mt-3 text-3xl font-black leading-tight text-emerald-800 md:text-5xl">
                  Light Up Taiwan, Let Taiwan Be Seen!
                </p>
                <p className="mt-2 text-xl font-black text-slate-900 md:text-2xl">
                  Let Taiwan be seen.
                </p>
              </div>

              <p>
                We plan to use the actual seats at Fenway, along with black and white shirts, to create large lettering in the stands. Our initial goal is to create two designs:
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">After the top of the 3rd inning</p>
                  <p className="mt-2 text-3xl font-black text-slate-950">TAIWAN</p>
                </div>
                <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">After the top of the 6th inning</p>
                  <p className="mt-2 text-xl font-black text-slate-950">RED SOX</p>
                </div>
              </div>

              <p>
                We invite everyone to use this actual Seat Map to brainstorm and try using black and white seats to create letters that are clear, simple, and recognizable from a distance.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-xl font-black text-slate-950">White shirt</h3>
                  <p className="mt-3">
                    The white shirt is the special 9/12 event shirt made for this activity. Pickup time and locations will be announced between mid-August and the end of August so everyone can pick up the shirt in advance. We hope attendees can wear the white event shirt directly to Fenway on event day.
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 text-slate-900 shadow-sm">
                  <h3 className="text-xl font-black text-slate-950">Black shirt</h3>
                  <p className="mt-3 text-slate-700">
                    The black shirt is the Red Sox × Bruins Jersey distributed by the Red Sox when attendees enter the ballpark. Each attendee will have one white event shirt and one black Bruins Jersey.
                  </p>
                </div>
              </div>

              <p>
                We will use these two shirt colors together with the actual seat locations to complete the live lettering activity.
              </p>

              <div className="rounded-[1.5rem] border border-sky-200 bg-sky-50 p-5">
                <h3 className="text-xl font-black text-slate-950">How the lettering will work</h3>
                <div className="mt-3 space-y-3">
                  <p>
                    We plan to choose two specific moments during the game for the lettering activity. During one moment, some seats will wear the white event shirt, while others will wear the black Bruins Jersey, together forming the first design.
                  </p>
                  <p>
                    During the second moment, attendees may change shirt colors according to the arrangement to create a second design. The exact timing, which color each seat should wear, and how everyone should participate will be announced later.
                  </p>
                </div>
              </div>

              <p>
                Honestly, this is a very difficult challenge. Our seating area is not a complete rectangle, and each section and row has a different number of seats. This makes the lettering much harder than it may seem.
              </p>

              <p>
                We cannot fully predict the final result yet, but we still believe this is something worth trying together.
              </p>

              <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5">
                <h3 className="text-xl font-black text-emerald-900">We hope everyone can try designing:</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-5 font-bold text-slate-800">
                  <li>TAIWAN</li>
                  <li>RED SOX</li>
                </ol>
                <p className="mt-4">
                  The second design is now RED SOX. The most important things are simple letter shapes, clear lines, and readability from far away.
                </p>
              </div>

              <p>
                After completing your design, please share the exported image and your idea with us. We will consider everyone’s creativity, the actual seat layout, readability from a distance, and feasibility for live execution.
              </p>

              <div className="rounded-[1.5rem] bg-gradient-to-r from-emerald-900 to-sky-900 p-6 text-white">
                <p className="text-2xl font-black leading-tight md:text-4xl">
                  Let’s use the strength of the Taiwanese community to light up the ballpark and let more people see Taiwan.
                </p>
                <p className="mt-4 text-xl font-black leading-relaxed text-amber-300 md:text-3xl">
                  Light Up Taiwan.<br />
                  Let Taiwan Be Seen.<br />
                  Together We Shine.
                </p>
              </div>
            </div>
          </div>
        </section>
        )}

        <div className="mt-10 rounded-[2rem] border border-sky-200 bg-gradient-to-r from-sky-50 via-white to-emerald-50 p-6 shadow-sm md:p-8">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-sky-700">
            排字小遊戲
          </p>
          <h2 className="mt-2 text-3xl font-black leading-tight text-slate-950 md:text-4xl">
            你也可以自己來玩玩排字小遊戲
          </h2>
          <p className="mt-4 max-w-4xl text-base font-bold leading-8 text-slate-700 md:text-lg">
            想試試看不同的排字效果嗎？可以使用下面的工具，把座位切換成黑色或白色，自己排出想像中的應援文字。這裡是互動小遊戲，不會影響正式排字安排。
          </p>
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
            onClick={() => loadOfficialPattern(inning6BlackSeatIds, isZh ? "第 6 局 RED SOX 排字" : "6th inning RED SOX pattern")}
            className="rounded-full bg-indigo-100 px-4 py-2.5 text-xs font-black text-indigo-900 shadow-sm transition hover:bg-indigo-200"
          >
            {isZh ? "載入第 6 局 RED SOX" : "Load 6th inning RED SOX"}
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
      </section>
    </main>
  );
}
