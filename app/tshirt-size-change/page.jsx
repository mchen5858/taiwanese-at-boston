"use client";

import React, { useState } from "react";

const sizeChangeWebAppLink = "https://script.google.com/macros/s/AKfycbzbuIQiQC2_-4yr-X5Woqj5iepRuUqO66gvkqSBe141vrDOu8HGtBLI_dmRTpUj6WFS/exec?v=2";

const menRows = [
  ["S", "28″", "18″"],
  ["M", "29″", "20″"],
  ["L", "30″", "22″"],
  ["XL", "31″", "24″"],
  ["2XL", "33″", "26″"],
];

const ladiesRows = [
  ["S", "25.5″", "17.25″"],
  ["M", "26″", "19.25″"],
  ["L", "27″", "21.25″"],
  ["XL", "28″", "23.25″"],
  ["2XL", "28.5″", "25.25″"],
];

const youthRows = [
  ["YXS", "2–4", "18″", "13.5″"],
  ["YS", "6–8", "20.5″", "15.5″"],
  ["YM", "10–12", "23″", "17″"],
  ["YL", "14–16", "25″", "18″"],
  ["YXL", "18–20", "27″", "20″"],
];

function SizeTable({ number, title, note, headers, rows }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-lg">
      <div className="flex flex-col gap-4 border-b border-slate-100 bg-white p-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-700 text-3xl font-black text-white shadow-md">
            {number}
          </div>
          <h3 className="text-3xl font-black text-slate-950">{title}</h3>
        </div>
        {note ? <p className="rounded-full bg-amber-50 px-4 py-2 text-sm font-black text-amber-800">{note}</p> : null}
      </div>

      <div className="w-full">
        <table className="w-full table-fixed text-left text-xs md:text-sm">
          <thead className="bg-emerald-800 text-white">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="whitespace-normal break-words px-2 py-3 align-middle font-black leading-tight md:px-3 md:py-4"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-b border-slate-100 odd:bg-white even:bg-slate-50">
                {row.map((cell, index) => (
                  <td
                    key={index}
                    className={`whitespace-normal break-words px-2 py-4 align-middle md:px-3 ${
                      index === 0 ? "text-base font-black text-slate-950 md:text-lg" : "font-semibold text-slate-700"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function NoteItem({ number, children }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-black text-white">
        {number}
      </div>
      <p className="leading-8 text-slate-700">{children}</p>
    </div>
  );
}

export default function TshirtSizeChangePage() {
  const [lang, setLang] = useState("zh");
  const isZh = lang === "zh";

  return (
    <main className="min-h-screen bg-[#f6fbf8] text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-sky-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-300 blur-3xl" />
          <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-sky-300 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16">
          <div className="mb-8 flex items-center justify-between gap-4">
            <a
              href="/"
              className="rounded-full bg-white/10 px-5 py-2 text-sm font-black text-white ring-1 ring-white/20 transition hover:bg-white/20"
            >
              {isZh ? "回到 912 活動首頁" : "Back to 912 Home"}
            </a>

            <div className="flex rounded-full bg-white/10 p-1 ring-1 ring-white/20">
              <button
                type="button"
                onClick={() => setLang("zh")}
                className={`rounded-full px-4 py-2 text-sm font-black transition ${isZh ? "bg-white text-emerald-900" : "text-white/80 hover:text-white"}`}
              >
                中文
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-4 py-2 text-sm font-black transition ${!isZh ? "bg-white text-emerald-900" : "text-white/80 hover:text-white"}`}
              >
                English
              </button>
            </div>
          </div>

          <p className="mb-4 inline-flex rounded-full bg-amber-300 px-5 py-2 text-sm font-black uppercase tracking-[0.22em] text-emerald-950">
            {isZh ? "912 T-shirt 尺寸查詢與更改" : "912 T-shirt Size Check & Change"}
          </p>

          <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            {isZh ? "查詢目前尺寸，提交更改需求" : "Check Your Current Size and Submit a Change Request"}
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/85 md:text-xl">
            {isZh
              ? "請輸入報名或購票時使用的 email，查詢目前登記的 T-shirt 尺寸。如果需要更改，請選擇新的尺寸並送出。主辦單位會統一整理所有更改需求。"
              : "Enter the email used for registration or ticket purchase to check your current T-shirt size. If you need to change it, select the new size and submit your request. The organizer will review and process all change requests."}
          </p>

          <div className="mt-7 inline-flex rounded-2xl bg-white/10 px-5 py-3 text-base font-black text-white ring-1 ring-white/20 backdrop-blur">
            {isZh ? "目前仍可更改尺寸" : "Size changes are still open"}
          </div>
          
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="mb-8 rounded-[1.75rem] border border-sky-200 bg-sky-50 p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sky-100 text-2xl">
              🔎
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-sky-700">
                {isZh ? "查詢方式提醒" : "Lookup Notice"}
              </p>
              <h2 className="mt-2 text-xl font-black leading-tight text-slate-950 md:text-2xl">
                {isZh ? "只需要輸入 email 即可查詢所有衣服" : "Enter your email to view all shirts"}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">
                {isZh
                  ? "買球票附贈的 912 活動衣服，以及另外加購的衣服，都會一起出現在尺寸查詢與更改系統裡。您只需要輸入購票或加購時使用的 email，即可查看並更改相關尺寸。"
                  : "The 912 event shirt included with your game ticket and any add-on shirts you purchased will all appear in the size check and change system. Simply enter the email used for your ticket purchase or add-on order to view and update the related sizes."}
              </p>
            </div>
          </div>
        </div>

        <div className="mb-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 md:grid-cols-2">
            <div className="border-b border-slate-100 p-6 md:border-b-0 md:border-r md:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                  ✅
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">
                    {isZh ? "系統更新提醒" : "System Update Notice"}
                  </p>
                  <h2 className="mt-2 text-xl font-black leading-tight text-slate-950">
                    {isZh ? "送出後會直接顯示新的 size" : "Updated size appears after submission"}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {isZh
                      ? "尺寸更改送出後，系統會直接更新並顯示您最新選擇的 size。"
                      : "After submitting your size change, the system will update and display your newly selected size directly."}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
                  📏
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-700">
                    {isZh ? "實際尺寸提醒" : "Actual Fit Notice"}
                  </p>
                  <h2 className="mt-2 text-xl font-black leading-tight text-slate-950">
                    {isZh ? "實際衣服可能略小" : "Actual shirts may run smaller"}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {isZh
                      ? "衣長與 Flat Chest 可能比 size chart 小約 1 吋；黑色款可能小 1–2 吋；Youth 可能小約 0.5 吋。尺寸剛好者建議選大一號。"
                      : "Body length and flat chest width may be about 1 inch smaller than the size chart; black shirts may be 1–2 inches smaller; Youth may be about 0.5 inch smaller. If your size is close, we recommend sizing up."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-[1.75rem] border border-amber-200 bg-white p-5 shadow-sm md:p-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-2xl">
              ⚠️
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-700">
                {isZh ? "重要尺寸提醒" : "Important Size Notice"}
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-amber-900 md:text-3xl">
                {isZh ? "男版 / 女版 Adult XS 不提供" : "Adult XS is not available"}
              </h2>
              <div className="mt-4 space-y-3 text-sm font-bold leading-7 text-slate-800 md:text-base">
                <p>
                  {isZh
                    ? "我們決定將不提供 Men / Unisex 成人 XS 與 Ladies 成人 XS。"
                    : "We will not offer Men / Unisex Adult XS or Ladies Adult XS."}
                </p>
                <p>
                  {isZh
                    ? "所有原本選擇男版 XS 或女版 XS 的參加者，請重新選擇 Youth YXL 或 Youth YL。"
                    : "If you originally selected Men XS or Ladies XS, please choose Youth YXL or Youth YL instead."}
                </p>
                <p>
                  {isZh
                    ? "如果沒有重新選擇，主辦單位將自動更新為原本所選版型的 S：Men / Unisex XS → Men / Unisex S；Ladies XS → Ladies S。"
                    : "If no new selection is made, the organizer will automatically update your size to the same style in S: Men / Unisex XS → Men / Unisex S; Ladies XS → Ladies S."}
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-emerald-200 bg-white p-6 shadow-sm">
            <p className="text-3xl">1️⃣</p>
            <h2 className="mt-3 text-2xl font-black text-slate-950">
              {isZh ? "輸入 Email" : "Enter Email"}
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              {isZh
                ? "請使用報名或購票時填寫的 email。大小寫通常不影響，但請確認拼字正確。"
                : "Please use the email used for registration or ticket purchase. Capitalization usually does not matter, but spelling must be correct."}
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-sky-200 bg-white p-6 shadow-sm">
            <p className="text-3xl">2️⃣</p>
            <h2 className="mt-3 text-2xl font-black text-slate-950">
              {isZh ? "確認目前尺寸" : "Check Current Size"}
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              {isZh
                ? "如果同一個 email 有多筆報名資料，系統會列出多筆資料，請逐一確認。"
                : "If one email has multiple registrations, the system will show multiple records. Please check each one carefully."}
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-rose-200 bg-white p-6 shadow-sm">
            <p className="text-3xl">3️⃣</p>
            <h2 className="mt-3 text-2xl font-black text-slate-950">
              {isZh ? "提交新的尺寸" : "Submit New Size"}
            </h2>
            <p className="mt-3 leading-7 text-slate-600">
              {isZh
                ? "送出後系統會直接更新，並顯示您最新選擇的 size。"
                : "After submission, the system will update and display your newly selected size directly."}
            </p>
          </div>
        </div>

        <div className="mt-12">
          <p className="text-center text-sm font-black uppercase tracking-[0.25em] text-amber-800">
            {isZh ? "Men / Unisex, Ladies, and Youth" : "Men / Unisex, Ladies, and Youth"}
          </p>
          <h2 className="mt-3 text-center text-4xl font-black text-slate-950 md:text-5xl">
            912 T-shirt Size Chart
          </h2>

          <div className="mt-10 grid gap-8">
            <SizeTable
              number="1"
              title={isZh ? "Men / Unisex｜男版 / 中性版" : "Men / Unisex"}
              note={isZh ? "Adult XS not available 成人 XS 無提供" : "Adult XS not available"}
              headers={isZh ? ["Size", "Body Length 衣長", "Flat Chest Width 平放胸寬"] : ["Size", "Body Length", "Flat Chest Width"]}
              rows={menRows}
            />

            <SizeTable
              number="2"
              title={isZh ? "Ladies｜女版" : "Ladies"}
              note={isZh ? "Adult XS not available 成人 XS 無提供" : "Adult XS not available"}
              headers={isZh ? ["Size", "Body Length 衣長", "Flat Chest Width 平放胸寬"] : ["Size", "Body Length", "Flat Chest Width"]}
              rows={ladiesRows}
            />

            <SizeTable
              number="3"
              title={isZh ? "Youth｜兒童版" : "Youth"}
              headers={isZh ? ["Size", "Approx. Age / Body Size 參考年齡／體型", "Body Length 衣長", "Flat Chest Width 平放胸寬"] : ["Size", "Approx. Age / Body Size", "Body Length", "Flat Chest Width"]}
              rows={youthRows}
            />
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] border border-amber-200 bg-white p-6 shadow-lg md:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-amber-500 text-2xl font-black text-amber-800">
              !
            </div>
            <h2 className="text-3xl font-black text-slate-950">
              {isZh ? "Size Notes｜尺寸提醒" : "Size Notes"}
            </h2>
          </div>

          <div className="mt-7 grid gap-5">
            <NoteItem number="1">
              {isZh ? "Measurements are approximate and may vary slightly.｜尺寸為約略量，可能會有些誤差。" : "Measurements are approximate and may vary slightly."}
            </NoteItem>
            <NoteItem number="2">
              {isZh ? "Men / Unisex style has a standard straight fit.｜男版 / 中性版版型較標準、較直筒。" : "Men / Unisex style has a standard straight fit."}
            </NoteItem>
            <NoteItem number="3">
              {isZh ? "Ladies style has a more fitted cut and is generally shorter than Men / Unisex.｜女版版型較合身，通常也比男版 / 中性版稍短。" : "Ladies style has a more fitted cut and is generally shorter than Men / Unisex."}
            </NoteItem>
            <NoteItem number="4">
              {isZh ? "If you usually wear Adult XS, Youth XL or Adult S may be the closest options.｜平常穿成人 XS 的朋友，可考慮 Youth XL 或 Adult S。" : "If you usually wear Adult XS, Youth XL or Adult S may be the closest options."}
            </NoteItem>
            <NoteItem number="5">
              {isZh ? "Youth sizes are generally shorter and narrower than adult sizes.｜兒童版通常比成人版更短，也更窄。" : "Youth sizes are generally shorter and narrower than adult sizes."}
            </NoteItem>
            <NoteItem number="6">
              {isZh ? "If you are between sizes or prefer a looser fit, we recommend sizing up.｜若介於兩個尺寸之間，或喜歡寬鬆穿著，建議選大一號。" : "If you are between sizes or prefer a looser fit, we recommend sizing up."}
            </NoteItem>
            <NoteItem number="7">
              {isZh ? "For the most accurate fit, please compare these measurements with a T-shirt you already own.｜建議以自己現有的 T-shirt 平量後對照，會最準確。" : "For the most accurate fit, please compare these measurements with a T-shirt you already own."}
            </NoteItem>
            <NoteItem number="8">
              {isZh
                ? "實際衣服的衣長與 Flat Chest 平放胸寬可能會比 size chart 小約 1 吋左右；黑色款可能小 1–2 吋；Youth 尺寸可能小約 0.5 吋。若尺寸選擇非常剛好，建議往上一號。"
                : "Actual body length and flat chest width may be about 1 inch smaller than the size chart; black shirts may be 1–2 inches smaller; Youth sizes may be about 0.5 inch smaller. If your size is very close, we recommend sizing up."}
            </NoteItem>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] bg-gradient-to-br from-emerald-900 to-sky-900 p-7 text-white shadow-lg md:p-9">
          <h2 className="text-3xl font-black text-white">
            {isZh ? "準備好更改尺寸了嗎？" : "Ready to Change Your Size?"}
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/85">
            {isZh
              ? "請先確認尺寸表與提醒事項，再前往尺寸查詢與更改系統提交需求。"
              : "Please review the size chart and notes, then go to the size check and change system to submit your request."}
          </p>

          <div className="mt-8">
            <a
              href={sizeChangeWebAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center rounded-full bg-amber-300 px-8 py-4 text-base font-black text-emerald-950 shadow-md transition hover:-translate-y-0.5 hover:bg-amber-200"
            >
              {isZh ? "前往尺寸查詢與更改系統" : "Go to Size Check & Change System"}
            </a>

            <div className="mt-5">
              <a
                href="/"
                className="text-sm font-black text-white/80 underline-offset-4 transition hover:text-white hover:underline"
              >
                {isZh ? "回到 912 活動首頁" : "Back to 912 Home"}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
