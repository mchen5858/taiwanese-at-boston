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

  useEffect(() => {
    if (!saveMessage) return;
    const timer = window.setTimeout(() => setSaveMessage(""), 2500);
    return () => window.clearTimeout(timer);
  }, [saveMessage]);

  const selectedCount = selectedSeats.size;
  const totalSeats = allSeatIds.length;

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

  function exportToPng() {
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

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = `912-seat-map-${new Date().toISOString().slice(0,19).replace(/[:T]/g,'-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setSaveMessage('已匯出 PNG 圖片');
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
            <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-100">
              912 Interactive Seat Map
            </p>
            <h1 className="mt-3 max-w-6xl tracking-tight">
              <span className="block text-3xl font-black leading-tight text-white md:text-5xl">
                Light Up Taiwan, Let Taiwan Be Seen.
              </span>
              <span className="mt-2 block text-right text-5xl font-black leading-none text-amber-300 drop-shadow-lg md:text-7xl">
                Together We Shine
              </span>
            </h1>
          </div>
        </div>

        <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur md:p-5">
          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-emerald-800 px-4 py-2.5 text-xs font-black text-white shadow-sm transition hover:bg-emerald-700"
            >
              回首頁
            </a>
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
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <div className="rounded-2xl border border-emerald-200 bg-white p-4 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700">Total Seats</p>
            <p className="mt-1 text-3xl font-black text-slate-950">{totalSeats}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-600">Black Seats</p>
            <p className="mt-1 text-3xl font-black text-slate-950">{selectedCount}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-slate-600">White Seats</p>
            <p className="mt-1 text-3xl font-black text-slate-950">{totalSeats - selectedCount}</p>
          </div>
          <div className="rounded-2xl border border-sky-200 bg-white p-4 shadow-sm">
            <p className="text-[10px] font-black uppercase tracking-[0.22em] text-sky-700">Last Seat</p>
            <p className="mt-1 text-lg font-black text-slate-950">{lastSeat || "—"}</p>
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm leading-7 text-slate-600">
              點一下圓圈會切換黑 / 白。按住白色座位拖曳，掃過的座位會變黑；按住黑色座位拖曳，掃過的座位會變白。也可以切換是否顯示座位上的數字。
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
              <h2 className="mt-1 text-2xl font-black text-slate-950">
                實際座位區參考圖
              </h2>
            </div>
            <p className="text-sm font-bold text-slate-500">
              L39 / L41 / L42 / L43 實景位置參考
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.25rem] border border-slate-200 bg-slate-50">
            <img
              src="/fenway-seat-reference-912.png"
              alt="Fenway Park actual seat reference for sections L39, L41, L42, and L43"
              className="h-auto w-full"
            />
          </div>
        </div>

        <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm leading-7 text-emerald-900">
          <strong>備註：</strong>排好座位後，可直接按上方「匯出 PNG」把目前的黑白座位圖存成圖片。
        </div>
      </section>
    </main>
  );
}
