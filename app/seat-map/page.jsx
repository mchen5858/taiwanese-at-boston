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
  const [isZh, setIsZh] = useState(true);

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

        <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-bold leading-7 text-emerald-900">
          {isZh ? "歡迎大家一起來玩玩這個排字小遊戲！可以用黑白按鈕與座位圓點，試著排出最清楚、最有創意的台灣應援文字。" : "Try this fun lettering design game! Use the black/white buttons and seat circles to create the clearest and most creative Taiwan cheer message."}
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

        <div className="mt-4 rounded-[1.5rem] border border-slate-200 bg-white/95 p-4 shadow-sm backdrop-blur md:p-5">
          <div className="mb-3 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">
                Seat Map Controls
              </p>
              <h2 className="mt-1 text-xl font-black text-slate-950">
                {isZh ? "排字位置圖操作工具" : "Seat map tools"}
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 md:gap-3">
            <button
              type="button"
              onClick={clearAll}
              className="rounded-full bg-slate-100 px-4 py-2.5 text-xs font-black text-slate-800 shadow-sm transition hover:bg-slate-200"
            >
              {isZh ? "全部變白" : "All white"}
            </button>

            <button
              type="button"
              onClick={selectAll}
              className="rounded-full bg-slate-950 px-4 py-2.5 text-xs font-black text-white shadow-sm transition hover:bg-slate-800"
            >
              {isZh ? "全部變黑" : "All black"}
            </button>

            <button
              type="button"
              onClick={invertAll}
              className="rounded-full bg-amber-400 px-4 py-2.5 text-xs font-black text-slate-950 shadow-sm transition hover:bg-amber-300"
            >
              {isZh ? "黑白反轉" : "Invert"}
            </button>

            <button
              type="button"
              onClick={() => setShowSeatNumbers((current) => !current)}
              className="rounded-full bg-sky-100 px-4 py-2.5 text-xs font-black text-sky-900 shadow-sm transition hover:bg-sky-200"
            >
              {showSeatNumbers ? (isZh ? "拿掉座位數字" : "Hide numbers") : (isZh ? "顯示座位數字" : "Show numbers")}
            </button>

            <button
              type="button"
              onClick={exportToPng}
              className="rounded-full bg-emerald-100 px-4 py-2.5 text-xs font-black text-emerald-900 shadow-sm transition hover:bg-emerald-200"
            >
              {isZh ? "匯出 PNG" : "Export PNG"}
            </button>
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
                大家好，再次感謝大家對 9/12 活動的支持！這次共有超過 1,300 位朋友購票參加，而且在距離活動還有一個半月時，我們就已經提前結束售票。相信大家和我們抱持著同樣的想法：希望用最實際的行動，讓紅襪球團看見台灣社群強大的團結力與凝聚力！
              </p>

              <p>
                我也非常高興地向大家報告，我們已經成功達成了第一階段的目標——紅襪官方已經注意到台灣社群所展現出的力量！
              </p>

              <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5">
                <p className="text-xl font-black leading-tight text-amber-900 md:text-2xl">
                  接下來，我們希望一起挑戰下一個目標：
                </p>
                <p className="mt-3 text-3xl font-black leading-tight text-emerald-800 md:text-5xl">
                  Light Up Taiwan, Let Taiwan Be Seen!
                </p>
                <p className="mt-2 text-xl font-black text-slate-900 md:text-2xl">
                  點亮台灣，讓台灣被看見！
                </p>
              </div>

              <p>
                我們計畫利用現場的實際座位，以及黑色、白色兩種衣服，在觀眾席上排出大型文字。目前初步希望排出兩組文字：
              </p>

              <div className="grid gap-3 md:grid-cols-2">
                <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">第一組</p>
                  <p className="mt-2 text-3xl font-black text-slate-950">TAIWAN</p>
                </div>
                <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">第二組</p>
                  <p className="mt-2 text-xl font-black text-slate-950">目前尚未決定，歡迎大家一起提供創意！</p>
                </div>
              </div>

              <p>
                我們希望邀請大家利用這份實際的 Seat Map（座位圖），一起動動腦，嘗試使用黑、白兩種顏色，排出清楚、簡單，而且從遠方也能辨識的文字。
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-xl font-black text-slate-950">白色衣服</h3>
                  <p className="mt-3">
                    白色衣服是我們這次特別製作的 9/12 活動衣服。我們預計會在八月中旬至八月底之間，陸續公布衣服的發放時間與地點，讓大家提前前往領取。也希望大家在活動當天，可以直接穿著白色活動衣進場。
                  </p>
                </div>
                <div className="rounded-[1.5rem] border border-slate-200 bg-white p-5 text-slate-900 shadow-sm">
                  <h3 className="text-xl font-black text-slate-950">黑色衣服</h3>
                  <p className="mt-3 text-slate-700">
                    黑色衣服則是大家進入球場時，由紅襪球團發送的 Red Sox × Bruins Jersey。因此，活動當天每一位參加者都會有一件白色活動衣服，以及一件黑色 Bruins Jersey。
                  </p>
                </div>
              </div>

              <p>
                我們會運用這兩種不同顏色的衣服，配合實際的座位位置，完成現場的排字活動。
              </p>

              <div className="rounded-[1.5rem] border border-sky-200 bg-sky-50 p-5">
                <h3 className="text-xl font-black text-slate-950">排字方式</h3>
                <div className="mt-3 space-y-3">
                  <p>
                    我們預計會選擇比賽中的兩個指定時間進行排字。在其中一個時間，部分座位的朋友會穿白色活動衣，其他座位的朋友則穿黑色 Bruins Jersey，共同排出第一組文字。
                  </p>
                  <p>
                    到了第二個指定時間，大家可能會依照安排更換衣服顏色，再排出第二組不同的文字。實際的排字時間、每個座位應該穿白色或黑色衣服，以及現場如何配合，我們之後都會再提供清楚的說明。
                  </p>
                </div>
              </div>

              <p>
                老實說，這是一個非常困難的挑戰。因為我們的座位區並不是一個完整、方正的長方形，每一區及每一排的座位數量也不完全相同，因此排字的難度會比一般想像中高很多。
              </p>

              <p>
                最後呈現出來的效果會如何，目前我們也無法完全確定。但是我仍然覺得，這是一件非常值得大家一起嘗試的事情！
              </p>

              <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5">
                <h3 className="text-xl font-black text-emerald-900">希望大家一起嘗試排出：</h3>
                <ol className="mt-3 list-decimal space-y-2 pl-5 font-bold text-slate-800">
                  <li>TAIWAN</li>
                  <li>另外一組你認為最適合的文字</li>
                </ol>
                <p className="mt-4">
                  第二組文字不需要太長，最重要的是：字體簡單、線條清楚，而且從遠方也能看得出來。
                </p>
              </div>

              <p>
                完成後，歡迎將你的設計與想法提供給我們參考。我們會綜合大家的創意，以及現場實際執行的可行性，選出最適合的排字方案。
              </p>

              <div className="rounded-[1.5rem] bg-gradient-to-r from-emerald-900 to-sky-900 p-6 text-white">
                <p className="text-2xl font-black leading-tight md:text-4xl">
                  讓我們一起用台灣社群的力量點亮球場，讓更多人看見台灣！
                </p>
                <p className="mt-4 text-xl font-black leading-relaxed text-amber-300 md:text-3xl">
                  Light Up Taiwan.<br />
                  Let Taiwan Be Seen.<br />
                  {isZh ? "Together We Shine" : "Together We Shine"}.
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
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">First design</p>
                  <p className="mt-2 text-3xl font-black text-slate-950">TAIWAN</p>
                </div>
                <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">Second design</p>
                  <p className="mt-2 text-xl font-black text-slate-950">Still open — we welcome everyone’s ideas.</p>
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
                  <li>Another word or phrase you think would work best</li>
                </ol>
                <p className="mt-4">
                  The second phrase does not need to be long. The most important things are simple letter shapes, clear lines, and readability from far away.
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
              className="h-auto w-full"
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
