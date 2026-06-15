"use client";

import React, { useState } from "react";

const images = {
  grandOriginal: "/tshirt-results/grand-prize-original.png",
  grandProduction: "/tshirt-results/grand-prize-production.png",
  communityFavorite: "/tshirt-results/community-favorite.png",
  specialRecognition: "/tshirt-results/special-recognition.png",
};

function ImageCard({ src, label, sublabel, onClick }) {
  const [error, setError] = useState(false);

  return (
    <button
      type="button"
      onClick={() => !error && onClick(src)}
      className="group block w-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="aspect-[1.25/1] w-full bg-slate-100 md:aspect-[1.35/1]">
        {!error ? (
          <img
            src={src}
            alt={label}
            className="h-full w-full object-contain p-2 transition duration-300 group-hover:scale-[1.03] md:p-3"
            onError={() => setError(true)}
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center text-slate-500">
            <p className="text-lg font-black">Image Placeholder</p>
            <p className="mt-2 text-sm leading-6">
              Please upload image to:
              <br />
              <span className="font-mono text-xs">{src}</span>
            </p>
          </div>
        )}
      </div>

      <div className="border-t border-slate-100 p-5 md:p-6">
        <p className="text-xl font-black leading-tight text-slate-950">{label}</p>
        {sublabel ? <p className="mt-2 text-sm font-semibold leading-6 text-slate-500">{sublabel}</p> : null}
      </div>
    </button>
  );
}

function AwardPrize({ icon, title, tone = "amber" }) {
  const toneMap = {
    amber: "border-amber-300 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-100 text-amber-950",
    rose: "border-rose-300 bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-100 text-rose-950",
    sky: "border-sky-300 bg-gradient-to-br from-sky-50 via-cyan-50 to-blue-100 text-sky-950",
  };

  return (
    <div
      className={`relative overflow-hidden rounded-[1.6rem] border p-5 shadow-md ${toneMap[tone] || toneMap.amber}`}
    >
      <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-white/45 blur-xl" />
      <div className="relative flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/80 text-3xl shadow-sm">
          {icon}
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] opacity-70">
            Prize
          </p>
          <p className="mt-1 text-xl font-black leading-tight">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TshirtResultsPage() {
  const [lang, setLang] = useState("zh");
  const [lightbox, setLightbox] = useState(null);
  const isZh = lang === "zh";

  return (
    <main className="min-h-screen bg-[#f6fbf8] text-slate-900">
      {lightbox ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-sm font-black text-slate-900"
            onClick={() => setLightbox(null)}
          >
            ✕
          </button>
          <img src={lightbox} alt="Preview" className="max-h-[90vh] max-w-[95vw] rounded-2xl bg-white object-contain p-3" />
        </div>
      ) : null}

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-sky-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-300 blur-3xl" />
          <div className="absolute right-0 top-32 h-96 w-96 rounded-full bg-sky-300 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-80 w-80 rounded-full bg-emerald-300 blur-3xl" />
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
            {isZh ? "912 T-shirt 設計徵選結果公告" : "912 T-shirt Design Contest Results"}
          </p>

          <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            {isZh ? "912 T-shirt 設計徵選結果公布" : "912 T-shirt Design Contest Results Announced"}
          </h1>

          <div className="mt-6 max-w-4xl space-y-5 text-lg leading-8 text-white/85 md:text-xl">
            {isZh ? (
              <>
                <p>
                  感謝大家熱情參與本次 912 Taiwan Fans Night at Fenway T-shirt 設計徵選。
                </p>
                <p>
                  這次我們一共收到超過 40 件作品，也有超過 300 位朋友參與社群票選。每一件作品都展現了設計者對台灣、棒球、社群凝聚力，以及 912 活動的支持與想像。主辦單位在此誠摯感謝所有投稿者、投票者與支持 912 的朋友。
                </p>
              </>
            ) : (
              <>
                <p>
                  Thank you to everyone who enthusiastically participated in the 912 Taiwan Fans Night at Fenway T-shirt design contest.
                </p>
                <p>
                  We received more than 40 submissions, and more than 300 friends participated in the community vote. Every design reflected the designer’s support and imagination for Taiwan, baseball, community unity, and the 912 event. The organizers sincerely thank all submitters, voters, and friends who support 912.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <article className="mb-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-9">
          <h2 className="text-3xl font-black text-slate-950">
            {isZh ? "本次評選方式" : "Selection Method"}
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700">
            {isZh ? (
              <>
                <p>
                  本次最終評選方式依照活動一開始公布的規則進行：
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-emerald-50 p-5">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">社群人氣票選</p>
                    <p className="mt-2 text-4xl font-black text-slate-950">40%</p>
                  </div>
                  <div className="rounded-2xl bg-sky-50 p-5">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-700">主辦單位評選</p>
                    <p className="mt-2 text-4xl font-black text-slate-950">60%</p>
                  </div>
                </div>

                <p>
                  主辦單位在評選時，除了參考社群票選結果，也綜合考量作品的主題契合度、設計完整性、球場辨識度、不同底色呈現效果，以及今年活動整體視覺規劃需求。
                </p>
                <p>
                  經過綜合評選後，我們很高興公布本次得獎名單。
                </p>
                <p>
                  除了原先公布的官方首獎與社群人氣獎之外，主辦單位也決定額外增設
                  <strong> 特別表現獎 Special Recognition Award</strong>，以肯定在設計創意、主題呈現與活動精神上表現突出的作品。
                </p>
              </>
            ) : (
              <>
                <p>
                  The final selection followed the method announced at the beginning of the event:
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-emerald-50 p-5">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">Community Vote</p>
                    <p className="mt-2 text-4xl font-black text-slate-950">40%</p>
                  </div>
                  <div className="rounded-2xl bg-sky-50 p-5">
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-700">Organizer Evaluation</p>
                    <p className="mt-2 text-4xl font-black text-slate-950">60%</p>
                  </div>
                </div>

                <p>
                  In addition to the community voting results, the organizers also considered theme alignment, design completeness, stadium visibility, how the design would appear on different background colors, and the overall visual planning needs for this year’s event.
                </p>
                <p>
                  After a comprehensive evaluation, we are happy to announce this year’s award recipients.
                </p>
                <p>
                  In addition to the previously announced Grand Prize and Community Favorite Award, the organizers have also decided
                  to add a <strong> Special Recognition Award</strong> to recognize a design that stood out in creativity, theme expression,
                  and event spirit.
                </p>
              </>
            )}
          </div>
        </article>

        <article className="rounded-[2.5rem] border border-amber-200 bg-white p-6 shadow-sm md:p-10">
          <div className="mb-5 inline-flex rounded-full bg-amber-100 px-5 py-2 text-sm font-black text-amber-800">
            🏆 {isZh ? "官方首獎 Grand Prize" : "Grand Prize"}
          </div>

          <div className="grid gap-8">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">Finalist #05</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                Boston 27｜Taiwan Strong Together
              </h2>
              <p className="mt-4 text-lg font-bold text-slate-700">
                {isZh ? "設計者：Alex Lin" : "Designed by Alex Lin"}
              </p>

              <div className="mt-7 space-y-5 leading-8 text-slate-700">
                {isZh ? (
                  <>
                    <p>
                      恭喜 Alex Lin！Finalist #05〈Boston 27｜Taiwan Strong Together〉獲選為本次 912 T-shirt 設計徵選的 <strong>官方首獎 Grand Prize</strong>。
                    </p>
                    <p>
                      這件作品以簡潔、有力的視覺語言，結合 Boston、棒球、台灣與 2027 Taiwan Day 的願景，呈現出台灣社群在 Fenway Park 集結的精神，也呼應我們希望透過今年 912 活動展現團結、凝聚與被看見的核心目標。
                    </p>
                    <p>
                      本件作品將作為今年 912 Taiwan Fans Night at Fenway 官方 T-shirt 的主要設計基礎，並由主辦單位進行正式製作版本的確認與調整。
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Congratulations to Alex Lin! Finalist #05, “Boston 27｜Taiwan Strong Together,” has been selected as the <strong>Grand Prize</strong> winner of the 912 T-shirt design contest.
                    </p>
                    <p>
                      With a clean and powerful visual language, this design connects Boston, baseball, Taiwan, and the vision for a 2027 Taiwan Day. It reflects the spirit of the Taiwanese community gathering at Fenway Park and the core goal of showing unity, community strength, and visibility through this year’s 912 event.
                    </p>
                    <p>
                      This design will serve as the main design foundation for this year’s official 912 Taiwan Fans Night at Fenway T-shirt, with the final production version confirmed and adjusted by the organizers.
                    </p>
                  </>
                )}
              </div>

              <div className="mt-7 grid gap-4 md:grid-cols-3">
                <AwardPrize
                  icon="🏆"
                  tone="amber"
                  title={isZh ? "$1,000 獎金" : "$1,000 Prize"}
                />
                <AwardPrize
                  icon="🎟️"
                  tone="rose"
                  title={isZh ? "9/12 球票一張" : "One 9/12 Event Ticket"}
                />
                <AwardPrize
                  icon="⚾"
                  tone="sky"
                  title={isZh ? "鄭宗哲簽名球" : "Tsung-Che Cheng Signed Baseball"}
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ImageCard
                src={images.grandOriginal}
                label={isZh ? "Original Submitted Design｜原投稿版本" : "Original Submitted Design"}
                sublabel="Finalist #05｜Boston 27｜Taiwan Strong Together"
                onClick={setLightbox}
              />
              <ImageCard
                src={images.grandProduction}
                label={isZh ? "Official Production Version｜官方製作版本" : "Official Production Version"}
                sublabel="Finalist #05｜Boston 27｜Taiwan Strong Together"
                onClick={setLightbox}
              />
            </div>
          </div>

          <div className="mt-9 rounded-[1.75rem] bg-amber-50 p-6 leading-8 text-slate-700">
            <h3 className="text-2xl font-black text-slate-950">
              {isZh ? "關於官方製作版本" : "About the Official Production Version"}
            </h3>

            {isZh ? (
              <div className="mt-4 space-y-4">
                <p>
                  Finalist #05 的原投稿版本為黑色底設計。為了配合 912 活動的整體規劃、視覺呈現與 Fenway Park 現場效果，主辦單位依照徵選規則中保留之最終製作與調整權利，以原投稿設計為基礎，將底色調整為白色，作為官方製作版本。
                </p>
                <p>
                  此調整已先通知設計者 Alex Lin。最終製作版本將在保留原設計精神與主要視覺元素的前提下，由主辦單位進行必要的製作細節確認。
                  也提醒大家，公告中展示的官方製作版本仍可能依實際印製、版型、顏色呈現與活動需求進行最後微調。
                </p>
                <p>
                  本次公告將一併展示 <strong>Original Submitted Design｜原投稿版本</strong> 與 <strong>Official Production Version｜官方製作版本</strong>，讓大家可以看到作品從投稿設計到正式製作版本的呈現。
                </p>
              </div>
            ) : (
              <div className="mt-4 space-y-4">
                <p>
                  The original submission of Finalist #05 was designed with a black background. To align with the overall planning, visual presentation, and Fenway Park in-stadium effect of the 912 event, the organizers, pursuant to the contest rules reserving final production and adjustment rights, used the original submission as the foundation and adjusted the background to white for the official production version.
                </p>
                <p>
                  This adjustment was communicated to designer Alex Lin in advance. The final production version will preserve the spirit and main visual elements of the original design while the organizers confirm necessary production details.
                  Please also note that the official production version shown in this announcement may still be fine-tuned based on actual printing, sizing, color presentation, and event needs.
                </p>
                <p>
                  This announcement displays both the <strong>Original Submitted Design</strong> and the <strong>Official Production Version</strong>, allowing everyone to see the design from its submitted version to its official production presentation.
                </p>
              </div>
            )}
          </div>
        </article>

        <article className="mt-10 rounded-[2rem] border border-rose-200 bg-white p-6 shadow-sm md:p-9">
          <div className="mb-5 inline-flex rounded-full bg-rose-100 px-5 py-2 text-sm font-black text-rose-700">
            💗 {isZh ? "社群人氣獎 Community Favorite Award" : "Community Favorite Award"}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">Finalist #01</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                台灣強棒
              </h2>
              <p className="mt-4 text-lg font-bold text-slate-700">
                {isZh ? "設計者：黃秀滿" : "Designed by 黃秀滿"}
              </p>

              <div className="mt-7 space-y-5 leading-8 text-slate-700">
                {isZh ? (
                  <>
                    <p>
                      恭喜黃秀滿！Finalist #01〈台灣強棒〉在本次社群票選中獲得最高人氣，獲頒 <strong>社群人氣獎 Community Favorite Award</strong>。
                    </p>
                    <p>
                      這件作品獲得許多朋友的支持與喜愛，展現出強烈的台灣精神與棒球熱情。主辦單位也非常感謝設計者透過作品凝聚大家對台灣與 912 活動的支持。
                    </p>
                    <p>
                      社群人氣獎原獎項為 9/12 球票一張。為了感謝社群票選最高票作品所獲得的熱烈支持，主辦單位決定額外加碼 <strong>$100 獎金</strong>，作為對設計者的肯定與祝賀。
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Congratulations to 黃秀滿! Finalist #01, “台灣強棒,” received the highest level of support in the community vote and has been awarded the <strong>Community Favorite Award</strong>.
                    </p>
                    <p>
                      This design received strong support and appreciation from many friends, showing a strong Taiwanese spirit and baseball passion. The organizers sincerely thank the designer for helping bring people together in support of Taiwan and the 912 event.
                    </p>
                    <p>
                      The original prize for the Community Favorite Award was one 9/12 event ticket. To recognize the enthusiastic support received by the top community-voted design, the organizers have decided to add an additional <strong>$100 prize</strong> as appreciation and congratulations to the designer.
                    </p>
                  </>
                )}
              </div>
            </div>

            <ImageCard
              src={images.communityFavorite}
              label={isZh ? "社群票選最高票作品" : "Highest number of votes in the community voting"}
              sublabel="Finalist #01｜台灣強棒｜Designed by 黃秀滿"
              onClick={setLightbox}
            />
          </div>
        </article>

        <article className="mt-10 rounded-[2rem] border border-sky-200 bg-white p-6 shadow-sm md:p-9">
          <div className="mb-5 inline-flex rounded-full bg-sky-100 px-5 py-2 text-sm font-black text-sky-700">
            🌟 {isZh ? "特別表現獎 Special Recognition Award" : "Special Recognition Award"}
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.85fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">Finalist #04</p>
              <h2 className="mt-3 text-3xl font-black leading-tight text-slate-950 md:text-5xl">
                {isZh ? "特別表現獎" : "Special Recognition Award"}
              </h2>
              <p className="mt-4 text-lg font-bold text-slate-700">
                {isZh ? "設計者：妞妞" : "Designed by Niu Niu"}
              </p>

              <div className="mt-7 space-y-5 leading-8 text-slate-700">
                {isZh ? (
                  <>
                    <p>
                      恭喜妞妞！Finalist #04 獲頒本次 912 T-shirt 設計徵選的 <strong>特別表現獎 Special Recognition Award</strong>。
                    </p>
                    <p>
                      這件作品在設計創意、主題呈現與活動精神上都有很好的表現，主辦單位特別頒發 Special Recognition Award，以感謝設計者的用心參與與支持。
                    </p>
                    <p>
                      本獎項獎金為 <strong>$50</strong>。
                    </p>
                  </>
                ) : (
                  <>
                    <p>
                      Congratulations to Niu Niu! Finalist #04 has received the <strong>Special Recognition Award</strong> for this 912 T-shirt design contest.
                    </p>
                    <p>
                      This design showed strong creativity, theme expression, and event spirit. The organizers are presenting the Special Recognition Award to thank the designer for their thoughtful participation and support.
                    </p>
                    <p>
                      This award includes a <strong>$50 prize</strong>.
                    </p>
                  </>
                )}
              </div>
            </div>

            <ImageCard
              src={images.specialRecognition}
              label={isZh ? "特別表現獎作品" : "Special Recognition Award Design"}
              sublabel="Finalist #04｜Designed by 妞妞"
              onClick={setLightbox}
            />
          </div>
        </article>

        <article className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-9">
          <h2 className="text-3xl font-black text-slate-950">
            {isZh ? "關於最終評選" : "About the Final Selection"}
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-slate-700">
            {isZh ? (
              <>
                <p>
                  本次社群人氣票選是最終評選的重要依據之一，但不是唯一標準。依照一開始公布的評選方式，最終結果由 <strong>社群人氣票選 40%</strong> 與 <strong>主辦單位評選 60%</strong> 綜合評估後產生。
                </p>
                <p>
                  主辦單位在最後評選時，必須同時考量作品本身的設計表現，以及活動現場呈現的整體需求。部分作品在原始設計中非常出色，也獲得許多朋友支持；但在後續評估不同底色、球場整體視覺呈現與活動規劃需求時，可能會和原設計效果有所不同。
                </p>
                <p>
                  因此，主辦單位最後依照原先公布的評選方式，綜合社群票選、設計完整性、現場視覺效果與整體活動需求，做出最終決定。
                </p>
              </>
            ) : (
              <>
                <p>
                  The community vote was an important part of the final evaluation, but it was not the only factor. As announced from the beginning, the final result was determined through a comprehensive evaluation of <strong>40% community vote</strong> and <strong>60% organizer evaluation</strong>.
                </p>
                <p>
                  During the final evaluation, the organizers had to consider both the design quality of each submission and the overall needs of event presentation. Some designs were outstanding in their original form and received strong community support; however, when evaluating different background colors, stadium visual impact, and event planning needs, the final effect could differ from the original design.
                </p>
                <p>
                  Therefore, following the evaluation method announced from the beginning, the organizers made the final decision by considering community voting, design completeness, stadium visual effect, and overall event needs.
                </p>
              </>
            )}
          </div>
        </article>

        <article className="mt-10 rounded-[2rem] border border-amber-200 bg-amber-50 p-6 shadow-sm md:p-9">
          <h2 className="text-3xl font-black text-slate-950">
            {isZh ? "獎品與後續通知" : "Prizes and Next Steps"}
          </h2>
          <p className="mt-5 leading-8 text-slate-700">
            {isZh
              ? "本次各獎項之獎品與領取方式，主辦單位將另外以 email 聯繫得獎者並安排後續發送事宜。"
              : "The organizers will contact each award recipient separately by email to arrange prize delivery and next steps."}
          </p>
        </article>

        <article className="mt-10 rounded-[2rem] bg-gradient-to-br from-emerald-900 to-sky-900 p-7 text-white shadow-lg md:p-9">
          <h2 className="text-3xl font-black">
            {isZh ? "感謝所有參與者" : "Thank You to All Participants"}
          </h2>

          <div className="mt-5 space-y-5 leading-8 text-white/85">
            {isZh ? (
              <>
                <p>
                  我們想再次感謝所有投稿者。這次真的有非常多精彩作品，沒有獲選並不代表作品不好。每一件作品都為 912 活動增添了不同的創意、能量與想像。
                </p>
                <p>
                  也感謝所有參與投票的朋友。因為大家的支持，這次 T-shirt 設計徵選不只是一次比賽，更成為台灣社群一起參與、一起期待 912 的重要過程。
                </p>
                <p>
                  接下來，我們也會陸續公布更多 912 當天的活動亮點，敬請期待！
                </p>
                <p className="text-2xl font-black text-amber-200">
                  Light Up Fenway. Let TAIWAN Be Seen. 🇹🇼⚾
                </p>
              </>
            ) : (
              <>
                <p>
                  We would like to thank all submitters again. There were many wonderful designs, and not being selected does not mean a design was not strong. Every submission added creativity, energy, and imagination to the 912 event.
                </p>
                <p>
                  We also thank everyone who participated in the voting. Because of your support, this T-shirt design contest became more than a competition. It became an important process for the Taiwanese community to participate together and look forward to 912 together.
                </p>
                <p>
                  More highlights for the 912 event will be announced soon. Please stay tuned!
                </p>
                <p className="text-2xl font-black text-amber-200">
                  Light Up Fenway. Let TAIWAN Be Seen. 🇹🇼⚾
                </p>
              </>
            )}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/tshirt-finalists"
              className="inline-flex justify-center rounded-full bg-amber-300 px-7 py-4 text-sm font-black text-emerald-950 shadow-md transition hover:-translate-y-0.5 hover:bg-amber-200"
            >
              {isZh ? "查看入圍作品" : "View Finalist Designs"}
            </a>

            <a
              href="/"
              className="inline-flex justify-center rounded-full bg-white px-7 py-4 text-sm font-black text-emerald-900 shadow-md transition hover:-translate-y-0.5 hover:bg-emerald-50"
            >
              {isZh ? "回到 912 活動首頁" : "Back to 912 Home"}
            </a>
          </div>
        </article>
      </section>
    </main>
  );
}
