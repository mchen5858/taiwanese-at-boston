"use client";

import React, { useMemo, useState } from "react";

const hostLogo = "/btcc-btcf-logo.jpg";
const officialLineGroup = "https://line.me/ti/g/uyAcZJRn75";
const googleFormLink = "https://forms.gle/27V7wtAEBxRbboL79";
const organizerLine = "https://line.me/ti/p/xbvkW3pO20";
const volunteerFormLink = "https://forms.gle/1KrTH1ETd9quXNMJ6";

const jerseyImage = "data:image/jpeg;base64,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";

const navItems = [
  { id: "home", label: "首頁" },
  { id: "tickets", label: "票價優惠" },
  { id: "teams", label: "組隊方式" },
  { id: "leaderboard", label: "組隊排行榜" },
  { id: "payment", label: "付款方式" },
  { id: "raffle", label: "抽獎活動" },
  { id: "shirt-design", label: "衣服設計" },
  { id: "faq", label: "注意事項" },
  { id: "contact", label: "聯絡我們" },
];

const teamExamples = [
  "家庭隊",
  "朋友隊",
  "媽媽隊",
  "校友隊",
  "公司隊",
  "商家隊",
  "社團隊",
  "志工隊",
  "僑團隊",
  "創意隊名隊",
];

const teamLeaderboard = [
  { rank: 1, name: "波克萊台灣商會", tickets: "130", note: "目前領先" },
  { rank: 2, name: "媽媽會", tickets: "30+", note: "持續增加中" },
  { rank: 3, name: "波士頓台灣人生技協會 BTBA", tickets: "20+", note: "持續增加中" },
];

const faqs = [
  {
    q: "5/31 前一定要完成什麼？",
    a: "隊長必須完成隊伍登記與整隊付款，才算鎖定每人 $47 的組隊優惠。隊員個人資料可以之後補齊。",
  },
  {
    q: "同隊會坐在一起嗎？",
    a: "主辦單位會在 6/1 前依付款完成順序安排座位，並盡量讓同隊坐在一起。若人數較多，可能安排在前後排或相鄰座位。",
  },
  {
    q: "隊員資料可以之後補嗎？",
    a: "可以。5/31 前最重要的是隊長完成隊伍登記與整隊付款。隊員姓名、Email、手機與 T-shirt size 可於主辦單位指定日期前補齊。",
  },
  {
    q: "付款後可以退款嗎？",
    a: "付款完成後原則上不接受退款。若臨時無法參加，可自行轉讓給親友，並通知主辦單位更新參加者資料。",
  },
  {
    q: "Red Sox × Bruins Jersey 可以選尺寸嗎？",
    a: "此為 Red Sox 當天現場限量贈品，於 Fenway Park 領取，先到先領，尺寸發完為止。主辦單位無法保證指定尺寸。",
  },
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Button({ children, onClick, variant = "solid" }) {
  const base = "rounded-full px-6 py-3 font-semibold transition active:scale-95";
  const styles =
    variant === "outline"
      ? "border border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-50"
      : "bg-emerald-700 text-white hover:bg-emerald-800";
  return (
    <button onClick={onClick} className={`${base} ${styles}`}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-slate-200 bg-white shadow-sm ${className}`}>{children}</div>;
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">{eyebrow}</p>}
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p>}
    </div>
  );
}

function InfoCard({ icon, title, children }) {
  return (
    <Card className="h-full p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-2xl text-emerald-700">
        {icon}
      </div>
      <h3 className="mb-2 text-xl font-bold text-slate-950">{title}</h3>
      <div className="text-sm leading-7 text-slate-600">{children}</div>
    </Card>
  );
}

export default function TaiwanFanNightWebsite() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const stats = useMemo(
    () => [
      { label: "組隊票價", value: "$47" },
      { label: "付款截止", value: "5/31" },
      { label: "比賽時間", value: "4:15 PM" },
      { label: "座位區域", value: "Bleacher 42" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <button onClick={() => scrollToSection("home")} className="text-left">
            <p className="text-sm font-bold tracking-wide text-emerald-700">🇹🇼⚾ 912 台灣集結</p>
            <p className="text-xs text-slate-500">Taiwan Fan Night at Fenway</p>
          </button>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button onClick={() => scrollToSection("teams")}>立即組隊</Button>
          </div>

          <button className="text-2xl md:hidden" onClick={() => setOpenMenu(!openMenu)} aria-label="Open menu">
            {openMenu ? "✕" : "☰"}
          </button>
        </div>

        {openMenu && (
          <div className="border-t border-slate-200 bg-white px-4 py-3 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setOpenMenu(false);
                  scrollToSection(item.id);
                }}
                className="block w-full rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-700 hover:bg-emerald-50"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden px-4 py-16 md:px-8 md:py-24">
          <div className="absolute left-1/2 top-8 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="animate-[fadeIn_0.6s_ease-out]">
              <div className="mb-5 inline-flex items-center rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">
                票價公布｜Team Taiwan 組隊正式開始
              </div>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl lg:text-7xl">
                912 Taiwan Fan Night at Fenway
                <span className="block text-emerald-700">912 台灣集結</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                9/12，我們要一起走進 Fenway Park，讓 Red Sox 看見波士頓台灣人的凝聚力，為 2027 Red Sox Taiwan Day 鋪路，也用行動支持波士頓在地公益。
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button onClick={() => scrollToSection("tickets")}>查看組隊優惠 →</Button>
                <Button onClick={() => window.open(officialLineGroup, "_blank")}>加入官方 LINE 群</Button>
                <Button onClick={() => window.open(googleFormLink, "_blank")} variant="outline">填寫 Google Form</Button>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm">
                    <p className="text-2xl font-black text-slate-950">{s.value}</p>
                    <p className="mt-1 text-xs font-medium text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="border-emerald-100 bg-white/95 p-7 shadow-xl md:p-8">
                <div className="mb-6 flex justify-center rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
                  <img src={hostLogo} alt="BTCC & BTCF Logo" className="h-auto w-full max-w-[300px] object-contain" />
                </div>
                <div className="mb-6 rounded-3xl bg-gradient-to-br from-emerald-700 to-sky-700 p-7 text-white">
                  <p className="text-sm font-semibold opacity-90">活動目的</p>
                  <h3 className="mt-2 text-3xl font-black">讓 Fenway 看見台灣</h3>
                  <p className="mt-4 text-sm leading-7 text-white/90">
                    本活動由波克萊台灣商會基金會（BTCF）主辦。每售出一張票，BTCF 將捐出 $3 給 Boys & Girls Clubs of Boston；BTCF 不從門票中獲利。
                  </p>
                </div>
                <div className="grid gap-4">
                  <div className="flex gap-4">
                    <span className="text-xl">🏛️</span>
                    <div>
                      <p className="font-bold">主辦單位</p>
                      <p className="text-sm text-slate-600">波克萊台灣商會基金會（BTCF）主辦｜波克萊台灣商會（BTCC）協辦</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-xl">📅</span>
                    <div>
                      <p className="font-bold">日期</p>
                      <p className="text-sm text-slate-600">2026 年 9 月 12 日｜4:15 PM</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-xl">📍</span>
                    <div>
                      <p className="font-bold">地點</p>
                      <p className="text-sm text-slate-600">Fenway Park｜Bleacher 42</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-xl">👥</span>
                    <div>
                      <p className="font-bold">主軸</p>
                      <p className="text-sm text-slate-600">3 人以上即可成立 Team Taiwan 小隊</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="mission" className="bg-white px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Mission"
              title="做公益，也讓台灣被看見"
              description="本活動的主要目的，是凝聚波士頓台灣社群力量，支持在地公益，並為 2027 Red Sox Taiwan Day 鋪路。"
            />
            <div className="grid gap-6 lg:grid-cols-3">
              <InfoCard icon="🏛️" title="BTCF 主辦">
                本活動由 <strong>波克萊台灣商會基金會（BTCF）</strong> 主辦。BTCF 不從門票中獲利。
              </InfoCard>
              <InfoCard icon="❤️" title="每張票捐 $3">
                每售出一張票，BTCF 將捐出 <strong>$3</strong> 給 <strong>Boys & Girls Clubs of Boston</strong>，支持波士頓在地青少年與社區。
              </InfoCard>
              <InfoCard icon="👕" title="台灣主題紀念 T-shirt">
                所有參與者將獲得一件台灣主題紀念 T-shirt，將公開徵稿及公開票選，由 BTCF 與贊助單位提供。
              </InfoCard>
            </div>
            <div className="mt-8 rounded-[2rem] bg-gradient-to-br from-emerald-700 to-sky-700 p-8 text-center text-white shadow-lg">
              <h3 className="text-3xl font-black">9/12，讓我們一起在 Fenway 集結</h3>
              <p className="mx-auto mt-4 max-w-3xl leading-7 text-white/90">
                一起做公益，也讓台灣被看見！我們也歡迎您一起加入波克萊志工團隊，協助推廣台灣、服務社區。
              </p>
              <a href={volunteerFormLink} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-bold text-emerald-800 transition hover:bg-emerald-50">
                加入波克萊志工團隊
              </a>
            </div>
          </div>
        </section>

        <section id="tickets" className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Tickets"
              title="5/31 前組隊優惠"
              description="只要 3 人以上組隊，並由隊長在 5/31 前完成整隊報名與付款，即可鎖定組隊優惠。"
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-emerald-200 p-8 shadow-lg">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-emerald-700">5/31 前完成付款</p>
                    <h3 className="mt-1 text-3xl font-black text-slate-950">組隊優惠票</h3>
                  </div>
                  <div className="rounded-3xl bg-emerald-700 px-5 py-4 text-center text-white">
                    <p className="text-4xl font-black">$47</p>
                    <p className="text-xs">per ticket</p>
                  </div>
                </div>
                <ul className="space-y-4 text-slate-700">
                  {[
                    "無額外手續費",
                    "每張票 BTCF 捐出 $3 給 Boys & Girls Clubs of Boston",
                    "每人一件台灣主題 T-shirt",
                    "Red Sox × Bruins co-branding Baseball Jersey 現場限量贈品",
                    "同隊盡量安排坐在一起",
                    "可參加最佳創意隊名獎",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 rounded-2xl bg-amber-50 p-4 text-sm leading-7 text-amber-900">
                  想享有組隊優惠，隊長必須在 5/31 前完成「隊伍登記 + 整隊付款」。
                </div>
              </Card>

              <Card className="p-8">
                <p className="text-sm font-bold text-slate-500">6/1 後正式開賣</p>
                <h3 className="mt-1 text-3xl font-black text-slate-950">一般購票連結</h3>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  6/1 之後，大家也可以透過 Red Sox 提供的 Taiwan Fans Night 購票連結自行購票。
                </p>
                <div className="mt-6 rounded-3xl bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-slate-500">票價</p>
                  <p className="mt-1 text-4xl font-black text-slate-950">$41 + 約 8–9% 手續費</p>
                </div>
                <p className="mt-6 text-sm leading-7 text-slate-600">
                  6/1 後購票者仍可坐在 Bleacher 42 同一區、拿台灣主題 T-shirt、參加活動抽獎，並成為 Team Taiwan 的一份子。
                </p>
              </Card>
            </div>

            <Card className="mt-8 overflow-hidden border-slate-200 bg-white shadow-lg">
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="bg-gradient-to-br from-emerald-700 to-sky-700 p-8 text-white md:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">Red Sox Giveaway</p>
                  <h3 className="mt-3 text-3xl font-black">當天紅襪現場贈品</h3>
                  <p className="mt-4 leading-7 text-white/90">
                    5/31 前完成組隊付款者，可獲得 Red Sox 提供的限量 Red Sox × Bruins co-branding Baseball Jersey。此為 9/12 當天在 Fenway Park 現場領取的贈品。
                  </p>
                  <p className="mt-4 rounded-2xl bg-white/15 p-4 text-sm leading-7 text-white/90">
                    先到先領，尺寸發完為止；數量與尺寸依 Red Sox 現場提供為準。
                  </p>
                </div>
                <div className="bg-emerald-900/5 p-5">
                  <img src={jerseyImage} alt="Red Sox × Bruins co-branding Baseball Jersey" className="h-auto w-full rounded-3xl object-cover shadow-md" />
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="teams" className="bg-white px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Teams"
              title="Team Taiwan 組隊方式"
              description="採用隊長制：隊長開隊、確認人數、收錢、統一付款；隊員填自己的資料。"
            />
            <div className="grid gap-6 md:grid-cols-3">
              <InfoCard icon="👥" title="1. 隊長建立隊伍">
                隊長填寫報名表，建立隊名、隊長聯絡方式與預計人數。隊長送出後，請把表單連結傳給隊員。
              </InfoCard>
              <InfoCard icon="📝" title="2. 隊員加入隊伍">
                隊員填同一份表單，選擇加入已成立隊伍，並填寫隊名、姓名、Email、手機與 T-shirt size。
              </InfoCard>
              <InfoCard icon="🎟️" title="3. 主辦安排座位">
                隊長在 5/31 前完成整隊付款後，主辦單位會在 6/1 前依付款順序安排座位。
              </InfoCard>
            </div>

            <div className="mt-10 rounded-[2rem] bg-gradient-to-br from-emerald-700 to-sky-700 p-8 text-white shadow-lg">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">Team Name Ideas</p>
                  <h3 className="mt-3 text-3xl font-black">3 人以上就可以成立自己的小隊</h3>
                  <p className="mt-4 text-sm leading-7 text-white/85">
                    每隊都可以自取隊名，並列入 Team Taiwan 集結名單，也可以參加最佳創意隊名獎。
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {teamExamples.map((name) => (
                    <span key={name} className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="leaderboard" className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Leaderboard"
              title="Team Taiwan 組隊排行榜"
              description="感謝各隊熱情響應！排行榜將依照各隊目前認票／報名票數持續更新。"
            />

            <Card className="overflow-hidden border-emerald-200 bg-white shadow-lg">
              <div className="bg-gradient-to-br from-emerald-700 to-sky-700 p-8 text-white md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">Current Teams</p>
                <h3 className="mt-3 text-3xl font-black">讓 Red Sox 看見 Team Taiwan 的力量</h3>
                <p className="mt-4 max-w-3xl leading-7 text-white/90">
                  認領越多、集結越多，越能讓 Fenway 看見台灣社群的凝聚力。歡迎更多家庭、朋友、公司、校友會、社團與商家一起加入！
                </p>
              </div>

              <div className="p-6 md:p-8">
                <div className="space-y-4">
                  {teamLeaderboard.map((team, index) => {
                    const widths = ["w-full", "w-[72%]", "w-[58%]"];
                    const badges = ["🥇", "🥈", "🥉"];
                    return (
                      <div key={team.name} className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">{badges[index]}</div>
                            <div>
                              <p className="text-lg font-black text-slate-950">{team.name}</p>
                              <p className="text-sm text-slate-500">{team.note}</p>
                            </div>
                          </div>
                          <div className="rounded-full bg-emerald-700 px-5 py-2 text-center font-black text-white">
                            {team.tickets} 張票
                          </div>
                        </div>
                        <div className="h-4 overflow-hidden rounded-full bg-white">
                          <div className={`${widths[index]} h-full rounded-full bg-emerald-600`} />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                  <h4 className="text-2xl font-black text-slate-950">你的隊伍也可以上榜！</h4>
                  <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
                    3 人以上就可以組隊，自取隊名並加入 Team Taiwan 集結名單。5/31 前完成隊伍登記與整隊付款，就能鎖定組隊優惠。
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <a href={officialLineGroup} target="_blank" rel="noreferrer" className="rounded-full bg-emerald-700 px-6 py-3 text-center font-bold text-white transition hover:bg-emerald-800">
                      加入官方 LINE 群
                    </a>
                    <a href={googleFormLink} target="_blank" rel="noreferrer" className="rounded-full border border-emerald-300 bg-white px-6 py-3 text-center font-bold text-emerald-800 transition hover:bg-emerald-50">
                      沒有 LINE？填 Google Form
                    </a>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section className="px-4 pb-20 md:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">Join Team Taiwan</p>
                <h2 className="mt-3 text-3xl font-black md:text-5xl">3 人以上就可以組隊，現在開始揪團！</h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  5/31 前完成隊伍登記與整隊付款，就能鎖定組隊優惠。讓我們一起穿上台灣、支持台灣，也用行動回饋波士頓社區。
                </p>
                <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                  🙌 我們也歡迎您一起加入波克萊志工團隊。
                </p>
                <a href={volunteerFormLink} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full border border-emerald-300 px-6 py-3 font-bold text-emerald-200 transition hover:bg-emerald-950">
                  加入志工團隊
                </a>
              </div>
              <Button onClick={() => scrollToSection("teams")}>查看報名流程</Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white px-4 py-8 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex justify-center md:justify-start">
            <img src={hostLogo} alt="BTCC & BTCF Logo" className="h-auto w-full max-w-[220px] object-contain" />
          </div>
          <div className="flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>© 2026 912 Taiwan Fan Night at Fenway｜912 台灣集結</p>
            <p>Hosted by 波克萊台灣商會基金會（BTCF） & 波克萊台灣商會（BTCC）｜Contact: medianchen@gmail.com｜LINE: line.me/ti/p/xbvkW3pO20</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
