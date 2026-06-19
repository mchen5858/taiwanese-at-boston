"use client";

import React, { useState } from "react";

export default function TshirtContestInfoPage() {
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
                className={`rounded-full px-4 py-2 text-sm font-black transition ${
                  isZh ? "bg-white text-emerald-900" : "text-white/80 hover:text-white"
                }`}
              >
                中文
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-4 py-2 text-sm font-black transition ${
                  !isZh ? "bg-white text-emerald-900" : "text-white/80 hover:text-white"
                }`}
              >
                English
              </button>
            </div>
          </div>

          <p className="mb-4 inline-flex rounded-full bg-amber-300 px-5 py-2 text-sm font-black uppercase tracking-[0.22em] text-emerald-950">
            {isZh ? "912 T-shirt 設計徵選" : "912 T-shirt Design Contest"}
          </p>

          <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            {isZh ? "912 T-shirt 設計徵選資訊" : "912 T-shirt Design Contest Information"}
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/85 md:text-xl">
            {isZh
              ? "本頁整理本次 912 T-shirt 設計徵選的主題、投稿規格、重要時程、獎項、評選方式與相關規則，供參賽者與社群參考。"
              : "This page summarizes the theme, submission requirements, timeline, prizes, judging method, and related rules for the 912 T-shirt design contest."}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            ["🎯", isZh ? "設計主題" : "Design Theme", isZh ? "Taiwan、Boston、Baseball、Fenway、Taiwanese Community、台灣文化、台灣精神、912 Taiwan Fans Night。" : "Taiwan, Boston, Baseball, Fenway, Taiwanese Community, Taiwanese culture, Taiwanese spirit, and 912 Taiwan Fans Night."],
            ["⚾", isZh ? "設計方向" : "Design Direction", isZh ? "以「棒球文化 × 台灣認同 × 波士頓社群」為方向。建議適合球場穿搭、遠距離辨識度高、拍照效果佳。" : "The design should connect baseball culture, Taiwanese identity, and the Boston community. We recommend a design that works well for ballpark wear, is recognizable from a distance, and looks great in photos."],
            ["👥", isZh ? "參賽資格" : "Eligibility", isZh ? "不限年齡、國籍與居住地。歡迎設計師、學生、插畫創作者、棒球愛好者與台灣文化支持者參加。" : "Open to all ages, nationalities, and locations. Designers, students, illustrators, baseball fans, and supporters of Taiwanese culture are all welcome."],
            ["📁", isZh ? "投稿規格" : "Submission Requirements", isZh ? "可提交正面、背面或完整正反面設計，並附 50–150 字設計理念。接受 PNG、JPG、PDF。" : "Participants could submit a front design, back design, or complete front-and-back design with a 50–150 word design statement. PNG, JPG, and PDF were accepted."],
          ].map(([icon, title, body]) => (
            <div key={title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-4xl">{icon}</p>
              <h2 className="mt-4 text-2xl font-black text-slate-950">{title}</h2>
              <p className="mt-3 leading-8 text-slate-600">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-emerald-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-3xl font-black text-slate-950">
            {isZh ? "重要時程" : "Important Timeline"}
          </h2>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {[
              [isZh ? "投稿截止" : "Submission Deadline", isZh ? "2026 年 5 月 31 日午夜" : "May 31 midnight, 2026"],
              [isZh ? "入圍公布" : "Finalists Announced", isZh ? "2026 年 6 月 6 日" : "June 6, 2026"],
              [isZh ? "社群人氣票選" : "Community Voting", isZh ? "2026 年 6 月 6 日 – 6 月 12 日" : "June 6 – June 12, 2026"],
              [isZh ? "得獎公布" : "Winners Announced", isZh ? "2026 年 6 月 14 日" : "June 14, 2026"],
            ].map(([label, date]) => (
              <div key={label} className="rounded-2xl bg-emerald-50 p-5">
                <p className="text-sm font-black text-emerald-700">{label}</p>
                <p className="mt-2 text-xl font-black text-slate-950">{date}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] border border-amber-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-black text-slate-950">
              {isZh ? "獎項" : "Prizes"}
            </h2>

            <div className="mt-6 space-y-5">
              <div className="rounded-2xl bg-amber-50 p-5">
                <h3 className="text-2xl font-black text-amber-800">
                  {isZh ? "官方首獎" : "Official Grand Prize"}
                </h3>
                <p className="mt-3 leading-8 text-slate-700">
                  {isZh ? "$1,000 獎金、9/12 球票一張、鄭宗哲簽名球。" : "$1,000 prize, one 9/12 event ticket, and a Tsung-Che Cheng signed baseball."}
                </p>
              </div>

              <div className="rounded-2xl bg-rose-50 p-5">
                <h3 className="text-2xl font-black text-rose-700">
                  {isZh ? "社群人氣獎" : "Community Popularity Award"}
                </h3>
                <p className="mt-3 leading-8 text-slate-700">
                  {isZh ? "9/12 球票一張，並加碼 $100 獎金。" : "One 9/12 event ticket, plus an additional $100 prize."}
                </p>
              </div>

              <div className="rounded-2xl bg-sky-50 p-5">
                <h3 className="text-2xl font-black text-sky-700">
                  {isZh ? "特別表現獎" : "Special Recognition Award"}
                </h3>
                <p className="mt-3 leading-8 text-slate-700">
                  {isZh ? "表揚在創意、主題呈現與活動精神上表現突出的作品。" : "Recognizing a design that stood out in creativity, theme expression, and event spirit."}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-black text-slate-950">
              {isZh ? "評選方式" : "Judging Method"}
            </h2>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-emerald-50 p-5">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
                  {isZh ? "社群人氣票選" : "Community Vote"}
                </p>
                <p className="mt-2 text-4xl font-black text-slate-950">40%</p>
              </div>
              <div className="rounded-2xl bg-sky-50 p-5">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-700">
                  {isZh ? "主辦單位評選" : "Organizer Evaluation"}
                </p>
                <p className="mt-2 text-4xl font-black text-slate-950">60%</p>
              </div>
            </div>
            <p className="mt-6 leading-8 text-slate-700">
              {isZh
                ? "主辦單位綜合考量設計品質、主題契合度、球場效果、社群代表性與實際製作可行性。"
                : "The organizer considered design quality, theme alignment, stadium impact, community representation, and practical production feasibility."}
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-3xl font-black text-slate-950">
            {isZh ? "規則與授權說明" : "Rules and Usage Rights"}
          </h2>
          <div className="mt-5 space-y-4 leading-8 text-slate-700">
            {isZh ? (
              <>
                <p>作品需為原創，不能侵犯他人版權、商標權或其他智慧財產權。</p>
                <p>請避免使用 Red Sox 官方 Logo、MLB 官方 Logo 或其他未授權商標。</p>
                <p>設計需適合實際印刷與量產，主辦單位保留調整印刷位置、顏色與細節的權利。</p>
                <p>主辦單位保留對作品進行最終選擇、修改、調整、合併、重製、公開展示、印刷製作與實際製作之權利，並得依印刷、成本、版型或活動需求進行適度調整。</p>
              </>
            ) : (
              <>
                <p>Designs had to be original and must not infringe on copyrights, trademarks, or other intellectual property rights.</p>
                <p>Participants were asked to avoid using the official Red Sox logo, MLB logo, or other unauthorized trademarks.</p>
                <p>Designs had to be suitable for actual printing and mass production. The organizer reserved the right to adjust print placement, color, and production details.</p>
                <p>The organizer reserved the right to make final selections, modifications, adjustments, combinations, reproduction, public display, printing, and final production based on production, cost, sizing, or event needs.</p>
              </>
            )}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/tshirt-finalists"
            className="inline-flex justify-center rounded-full bg-emerald-700 px-7 py-4 text-sm font-black text-white shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-800"
          >
            {isZh ? "查看入圍作品" : "View Finalists"}
          </a>
          <a
            href="/tshirt-results"
            className="inline-flex justify-center rounded-full bg-amber-300 px-7 py-4 text-sm font-black text-emerald-950 shadow-md transition hover:-translate-y-0.5 hover:bg-amber-200"
          >
            {isZh ? "查看得獎公布" : "View Results"}
          </a>
        </div>
      </section>
    </main>
  );
}
