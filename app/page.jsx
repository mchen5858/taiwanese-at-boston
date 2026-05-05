"use client";

import React, { useMemo, useState } from "react";

const hostLogo = "/btcc-btcf-logo.jpg";
const officialLineGroup = "https://line.me/ti/g/uyAcZJRn75";
const googleFormLink = "https://forms.gle/27V7wtAEBxRbboL79";
const teamRegistrationFormLink = "#team-form-coming-soon";
const organizerLine = "https://line.me/ti/p/xbvkW3pO20";
const volunteerFormLink = "https://forms.gle/1KrTH1ETd9quXNMJ6";

const jerseyImage = "/red-sox-bruins-jersey.jpg";

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
                <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                  目前 Fenway Park 當天 Bleacher 42 區票價約為 <strong>$64–$88</strong> 一張，而且一般購票還需要再加上每張 <strong>$8.75 per-ticket fee</strong>。
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
                <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                  目前 Fenway Park 當天 Bleacher 42 區票價約為 <strong>$64–$88</strong> 一張，而且一般購票還需要再加上每張 <strong>$8.75 per-ticket fee</strong>。
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
              description="隊長與隊員使用同一份 Google Form。表單第一題會請大家選擇身分：隊長建立隊伍，或隊員加入已成立隊伍。"
            />
            <div className="grid gap-6 md:grid-cols-3">
              <InfoCard icon="👥" title="1. 隊長先建立隊伍">
                隊長請填寫同一份 Google Form，第一題選擇 <strong>「我是隊長：我要建立隊伍」</strong>，並填寫隊名、隊長聯絡方式與預計人數。
              </InfoCard>
              <InfoCard icon="📝" title="2. 隊員再加入隊伍">
                隊員也填寫同一份 Google Form，第一題選擇 <strong>「我是隊員：我要加入已成立隊伍」</strong>，並填寫與隊長登記完全相同的隊名。
              </InfoCard>
              <InfoCard icon="🎟️" title="3. 隊長統一付款">
                隊長確認人數後，請於 5/31 前完成整隊付款。主辦單位會在 6/1 前依付款完成順序安排座位。
              </InfoCard>
            </div>

            <Card id="team-form-coming-soon" className="mt-8 border-emerald-200 bg-emerald-50 p-6 md:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">One Form Only</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">隊長與隊員使用同一份 Google Form</h3>
                  <p className="mt-4 leading-7 text-slate-700">
                    為了避免大家搞混，組隊報名會使用同一份 Google Form。隊長先填表建立隊伍，送出後把同一個表單連結傳給隊員；隊員進入表單後選擇「我是隊員」，再填寫自己的資料。
                  </p>
                  <p className="mt-3 leading-7 text-slate-700">
                    建議表單第一題設定為：<strong>請問你是？</strong> 選項包含 <strong>我是隊長：我要建立隊伍</strong>、<strong>我是隊員：我要加入已成立隊伍</strong>、<strong>我是個人：我還沒有隊伍，但想參加</strong>。
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    組隊報名 Google Form 連結即將公布。若你已經有表單連結，請提供給主辦單位更新到此網站。
                  </p>
                </div>
                <a href={teamRegistrationFormLink} className="rounded-full bg-emerald-700 px-6 py-3 text-center font-bold text-white transition hover:bg-emerald-800">
                  組隊報名表即將公布
                </a>
              </div>
            </Card>

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

        <section id="payment" className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Payment"
              title="付款方式"
              description="為了方便對帳，請採用「隊員付給隊長 → 隊長統一付款給主辦單位」。Zelle 帳號與銀行轉帳資料請向主辦單位聯絡人索取。"
            />
            <div className="grid gap-6 lg:grid-cols-3">
              <InfoCard icon="💳" title="Zelle">
                建議優先使用 Zelle。請使用主辦單位提供的 Zelle 帳號付款，並在付款備註寫：<br />
                <strong>912 + 隊名 + 隊長姓名 + 人數</strong>
              </InfoCard>
              <InfoCard icon="🏦" title="銀行轉帳 / ACH">
                適合公司隊、商家隊、社團隊或大型隊伍。請先向主辦單位索取銀行轉帳資料，並在轉帳備註寫：<br />
                <strong>912 + 隊名 + 隊長姓名 + 人數</strong>
              </InfoCard>
              <InfoCard icon="🧾" title="支票 Check">
                支票請寄至：<br />
                <strong>7 Bow St., Suite 1<br />North Reading, MA 01864</strong><br />
                請確認支票可於 5/31 前完成付款確認。
              </InfoCard>
            </div>

            <Card className="mt-8 p-8">
              <h3 className="text-2xl font-black text-slate-950">付款金額範例</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  ["5 人隊伍", "$47 × 5", "$235"],
                  ["10 人隊伍", "$47 × 10", "$470"],
                  ["20 人隊伍", "$47 × 20", "$940"],
                ].map(([label, formula, total]) => (
                  <div key={label} className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-sm font-bold text-slate-500">{label}</p>
                    <p className="mt-2 text-sm text-slate-600">{formula}</p>
                    <p className="mt-2 text-3xl font-black text-emerald-700">{total}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-emerald-50 p-5 text-sm leading-7 text-emerald-900">
                隊長完成付款後，請將付款截圖、轉帳紀錄或支票寄出紀錄傳給主辦單位，並註明隊名、隊長姓名、付款金額、隊伍人數與付款方式。Zelle 帳號與銀行轉帳資料請向主辦單位聯絡人索取：medianchen@gmail.com。
              </div>
            </Card>
          </div>
        </section>

        <section id="raffle" className="bg-white px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Raffle"
              title="抽獎活動"
              description="抽獎分成 5/31 前早鳥宣傳抽獎，以及所有購票參加者都可參加的活動抽獎。"
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-emerald-200 bg-emerald-50/70 p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">🎁</div>
                <h3 className="text-2xl font-black text-slate-950">5/31 前｜早鳥宣傳抽獎</h3>
                <p className="mt-4 leading-7 text-slate-700">
                  只要在 5/31 前加入 912 台灣集結官方 LINE 群，或填寫 912 台灣集結 Google Form，就有機會參加早鳥抽獎，並收到最新活動資訊。
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={officialLineGroup} target="_blank" rel="noreferrer" className="rounded-full bg-emerald-700 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-emerald-800">
                    加入官方 LINE 群
                  </a>
                  <a href={googleFormLink} target="_blank" rel="noreferrer" className="rounded-full border border-emerald-200 bg-white px-5 py-3 text-center text-sm font-bold text-emerald-800 transition hover:bg-emerald-50">
                    沒有 LINE？填 Google Form
                  </a>
                </div>
                <div className="mt-6 space-y-3 text-slate-700">
                  <p className="rounded-2xl bg-white p-4 font-semibold">🎟 912 球票多張</p>
                  <p className="rounded-2xl bg-white p-4 font-semibold">👕 鄭宗哲簽名台灣主題 T-shirt 多件</p>
                </div>
              </Card>

              <Card className="p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-3xl shadow-sm">🏆</div>
                <h3 className="text-2xl font-black text-slate-950">912 活動參加者抽獎</h3>
                <p className="mt-4 leading-7 text-slate-700">
                  所有購票參加 912 Taiwan Fan Night at Fenway 的朋友，都可以參加活動抽獎。
                </p>
                <div className="mt-6 rounded-2xl bg-sky-50 p-5 font-semibold text-sky-900">
                  ⚾ 鄭宗哲簽名球多顆
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="shirt-design" className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="T-shirt Design"
              title="台灣主題 T-shirt 設計比賽"
              description="912 當天大家都會穿上的台灣主題 T-shirt，將由社群一起參與設計。"
            />
            <Card className="overflow-hidden border-emerald-200 bg-white shadow-lg">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
                <div className="bg-gradient-to-br from-emerald-700 to-sky-700 p-8 text-white md:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">Coming Soon</p>
                  <h3 className="mt-3 text-4xl font-black">設計比賽即將公布</h3>
                  <p className="mt-5 leading-7 text-white/90">
                    912 Taiwan Fan Night at Fenway｜912 台灣集結的台灣主題 T-shirt 設計比賽即將公開公布。
                  </p>
                  <p className="mt-4 leading-7 text-white/90">
                    我們將邀請社群一起參與設計、投稿與投票，選出最能代表台灣精神與波士頓台灣社群凝聚力的紀念 T-shirt。
                  </p>
                </div>
                <div className="p-8 md:p-10">
                  <div className="rounded-[2rem] border border-emerald-100 bg-emerald-50 p-8 text-center">
                    <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-4xl shadow-sm">👕</div>
                    <h4 className="text-2xl font-black text-slate-950">敬請期待</h4>
                    <p className="mt-4 leading-7 text-slate-600">
                      投稿規則、設計主題、獎品、截止日期與投票方式，將於近期公布。請加入官方 LINE 群或填寫 Google Form，收到最新消息。
                    </p>
                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                      <a href={officialLineGroup} target="_blank" rel="noreferrer" className="rounded-full bg-emerald-700 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-emerald-800">
                        加入官方 LINE 群
                      </a>
                      <a href={googleFormLink} target="_blank" rel="noreferrer" className="rounded-full border border-emerald-200 bg-white px-5 py-3 text-center text-sm font-bold text-emerald-800 transition hover:bg-emerald-50">
                        填寫 Google Form
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="faq" className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-5xl">
            <SectionTitle
              eyebrow="FAQ"
              title="注意事項與常見問題"
              description="這些規則可以放在報名表底部，避免後續對帳、座位、衣服尺寸與退款爭議。"
            />

            <div className="space-y-4">
              {faqs.map((item, index) => (
                <Card key={item.q}>
                  <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left">
                    <span className="font-bold text-slate-950">{item.q}</span>
                    <span className={`text-slate-400 transition ${openFaq === index ? "rotate-90" : ""}`}>›</span>
                  </button>
                  {openFaq === index && <div className="px-5 pb-5 pt-0 text-sm leading-7 text-slate-600">{item.a}</div>}
                </Card>
              ))}
            </div>

            <div className="mt-8 rounded-[2rem] border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-amber-950">
              <div className="flex gap-3">
                <span className="mt-1 text-xl">⚠️</span>
                <div>
                  <p className="font-bold">重要提醒</p>
                  <p>
                    台灣主題 T-shirt 將公開徵稿與投票，並會在 9/12 比賽當天前發出。Red Sox × Bruins co-branding Baseball Jersey 是 Red Sox 現場限量贈品，先到先領，尺寸發完為止。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-white px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-5xl">
            <SectionTitle
              eyebrow="Contact"
              title="主辦單位與聯絡方式"
              description="如需組隊表單、付款資訊、Zelle 帳號、銀行轉帳資料，或有大隊伍報名問題，請 Email 主辦單位，或加入 LINE 聯絡。"
            />
            <div className="mb-10 flex justify-center">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <img src={hostLogo} alt="BTCC & BTCF Logo" className="h-auto w-full max-w-[380px] object-contain" />
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <InfoCard icon="🏛️" title="主辦單位">
                波克萊台灣商會基金會（BTCF）主辦<br />
                波克萊台灣商會（BTCC）協辦<br />
                <span className="text-xs text-slate-500">BTCF 不從門票中獲利</span>
              </InfoCard>
              <InfoCard icon="✉️" title="主辦單位 Email">
                <a className="font-bold text-emerald-700 underline" href="mailto:medianchen@gmail.com">medianchen@gmail.com</a><br />
                Zelle 帳號與銀行轉帳資料請向主辦單位聯絡人索取。
              </InfoCard>
              <InfoCard icon="💬" title="LINE 聯絡">
                <a className="font-bold text-emerald-700 underline" href={organizerLine} target="_blank" rel="noreferrer">加入 LINE 聯絡主辦單位</a><br />
                也可以透過 LINE 詢問組隊、付款與大隊伍報名問題。
              </InfoCard>
              <InfoCard icon="🙌" title="加入志工團隊">
                <a className="font-bold text-emerald-700 underline" href={volunteerFormLink} target="_blank" rel="noreferrer">填寫志工報名表</a><br />
                歡迎一起加入波克萊志工團隊，協助推廣台灣與服務社區。
              </InfoCard>
            </div>
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
