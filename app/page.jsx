"use client";

import React, { useEffect, useMemo, useState } from "react";

const hostLogo = "/btcc-btcf-logo.jpg";
const eventLogo = "/912-fenway-logo.png";
const officialLineGroup = "https://line.me/ti/g/uyAcZJRn75";
const googleFormLink = "https://forms.gle/27V7wtAEBxRbboL79";
const teamRegistrationFormLink = "https://www.zeffy.com/en-US/ticketing/912-taiwan-fan-night-at-fenway--912";
const zeffyPaymentLink = "https://www.zeffy.com/en-US/ticketing/912-taiwan-fan-night-at-fenway--912";
const organizerLine = "https://line.me/ti/p/xbvkW3pO20";
const volunteerFormLink = "https://forms.gle/1KrTH1ETd9quXNMJ6";

const jerseyImage = "/red-sox-bruins-jersey.jpg";

const navItems = [
  { id: "home", label: "首頁" },
  { id: "tickets", label: "票價優惠" },
  { id: "teams", label: "組隊方式" },
  { id: "leaderboard", label: "集氣榜" },
  { id: "payment", label: "付款方式" },
  { id: "raffle", label: "抽獎活動" },
  { id: "shirt-design", label: "衣服設計" },
  { id: "faq", label: "注意事項" },
  { id: "contact", label: "聯絡我們" },
];

const teamExamples = [
  "台灣No.1隊",
  "Fenway佔領隊",
  "台灣應援最強隊",
  "珍奶續命隊",
  "鹽酥雞補給隊",
  "時差還沒調整隊",
  "先買票再說隊",
  "看到台灣就嗨隊",
  "紅襪看我隊",
  "今天也要喊台灣隊",
  "Team Taiwan GO隊",
  "波士頓台味隊",
  "夜市搬來隊",
  "小籠包補血隊",
  "珍珠加爆隊",
  "我只是來看台灣隊",
];

const teamLeaderboard = [
  { rank: 1, name: "波克萊台灣商會", tickets: "130", note: "目前領先" },
  { rank: 2, name: "波士頓台灣媽媽親子會", tickets: "30+", note: "持續增加中" },
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
    q: "電子票會寄到哪裡？",
    a: "電子票將於活動前發送，並以購票者在 Zeffy 上填寫的 Email 為主要發送依據。請購票時務必確認 Email 填寫正確。",
  },
  {
    q: "付款後可以退款嗎？",
    a: "付款完成後原則上不接受退款。若臨時無法參加，可自行轉讓給親友，並通知主辦單位更新參加者資料。",
  },
  {
    q: "Red Sox × Bruins Jersey 可以選尺寸嗎？",
    a: "此為 Red Sox 當天現場限量贈品，於 Fenway Park 領取，先到先領，尺寸發完為止。主辦單位無法保證指定尺寸。",
  },
  {
    q: "隊伍取名有規定嗎？",
    a: "隊名請使用適當、尊重、友善的名稱，避免不雅、歧視、政治攻擊、商標侵權或容易造成誤解的內容。主辦單位保留隊名審核與調整之權利。",
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
  useEffect(() => {
    document.title = "912台灣集結";
  }, []);

  const [openMenu, setOpenMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const stats = useMemo(
    () => [
      { label: "比賽日期", value: "9/12 Sat" },
      { label: "比賽時間", value: "4:15 PM" },
      { label: "對戰組合", value: "Royals vs Red Sox" },
      { label: "座位區域", value: "Bleacher 42" },
    ],
    []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
          <button onClick={() => scrollToSection("home")} className="text-left">
            <p className="text-lg font-black tracking-wide text-emerald-700 md:text-xl">🇹🇼⚾ 912 台灣集結</p>
            <p className="text-sm text-slate-500">Taiwan Fan Night at Fenway</p>
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
            <Button onClick={() => window.open(zeffyPaymentLink, "_blank")}>立即組隊</Button>
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
              <div className="mb-5 inline-flex items-center rounded-full border border-emerald-200 bg-white px-6 py-3 text-base md:text-lg font-bold text-emerald-800 shadow-sm">
                票價公布｜Team Taiwan 組隊正式開始
              </div>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl lg:text-7xl leading-[1.15] md:leading-[1.18] lg:leading-[1.18]">
                <span className="block">912 Taiwan Fan Night at Fenway</span>
                <span className="mt-4 block text-emerald-700 md:mt-5">912 台灣集結</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                9/12，我們要一起走進 Fenway Park，讓 Red Sox 看見波士頓台灣人的凝聚力，為 2027 Red Sox Taiwan Day 鋪路，也用行動支持波士頓在地公益。
                <br /><br />
                On September 12, we will come together at Fenway Park to show the strength and unity of the Taiwanese community in Boston. Together, we are paving the way for Red Sox Taiwan Day 2027 while supporting local charities in Boston through our collective action.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button onClick={() => scrollToSection("tickets")}>查看組隊優惠</Button>
                <Button onClick={() => window.open(officialLineGroup, "_blank")}>加入官方 LINE 群</Button>
                <Button onClick={() => window.open(googleFormLink, "_blank")} variant="outline">沒有 LINE？用 Google Form 加入</Button>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
                {stats.map((s, i) => {
                const bgStyles = [
                  "bg-gradient-to-br from-emerald-100 to-white border-emerald-200",
                  "bg-gradient-to-br from-sky-100 to-white border-sky-200",
                  "bg-gradient-to-br from-amber-100 to-white border-amber-200",
                  "bg-gradient-to-br from-rose-100 to-white border-rose-200",
                ];
                return (
                  <div key={s.label} className={`rounded-2xl p-4 shadow-sm border ${bgStyles[i % bgStyles.length]}`}>
                    <p className="text-2xl font-black text-slate-950">{s.value}</p>
                    <p className="mt-1 text-xs font-medium text-slate-500">{s.label}</p>
                  </div>
                );
              })}
              </div>
            </div>

            <div>
              <Card className="border-emerald-100 bg-white/95 p-7 shadow-xl md:p-8">
                <div className="mb-6 flex justify-center rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-4 shadow-sm">
                  <img src={eventLogo} alt="912 Fenway 台灣集結 Logo" className="h-auto w-full max-w-[360px] object-contain" />
                </div>
                <div className="mb-6 flex justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                  <img src={hostLogo} alt="BTCC & BTCF Logo" className="h-auto w-full max-w-[220px] object-contain" />
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
                      <p className="text-sm text-slate-600 leading-relaxed">
                        波克萊台灣商會基金會（BTCF） 主辦<br />
                        波克萊台灣商會（BTCC） 協辦
                      </p>
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
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Tickets</p>
              <div className="text-6xl font-black tracking-tight text-emerald-700 md:text-8xl lg:text-9xl">TEAM TAIWAN</div>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-5xl">5/31 前組隊優惠</h2>
              <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">無論是否組隊，只要在 5/31 前透過 Zeffy 購票付款，每張票都是 $47。3 人以上可自行組隊並使用相同 Team Name 參加創意隊名比賽。</p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-emerald-200 p-8 shadow-lg">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-emerald-700">5/31 前完成 Zeffy 購票</p>
                    <h3 className="mt-1 text-3xl font-black text-slate-950">組隊優惠票</h3>
                  </div>
                  <div className="rounded-[2rem] bg-emerald-700 px-8 py-6 text-center text-white shadow-lg ring-4 ring-emerald-100">
                    <p className="text-7xl font-black leading-none md:text-8xl">$47</p>
                    <p className="mt-2 text-sm font-semibold uppercase tracking-wide">per ticket</p>
                  </div>
                </div>
                <ul className="space-y-4 text-slate-700">
                  {[
                    "完全無任何其他費用或手續費",
                    "可獲得限量 Red Sox × Bruins co-branding Baseball Jersey 一件",
                    "每張票 BTCF 將捐出 $3 給 Boys & Girls Clubs of Boston",
                    "每人一件台灣主題 T-shirt",
                    "同隊的人將會坐在一起",
                    "可參加最佳創意隊名比賽",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-7 rounded-2xl bg-amber-50 p-4 text-sm leading-7 text-amber-900">
                  想享有 5/31 前 $47 優惠，請每位參加者於 5/31 前自行完成 Zeffy 購票付款。沒有要組隊、或未滿 3 人也可以直接購票，同樣享有每張票 $47 的價格。若要組隊，請填寫相同 Team Name。
                </div>
                <div className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                  依據紅襪官網，目前 Fenway Park 912 當天 Bleacher 42 區票價約為 <strong>$64 ~ $88</strong> 一張，而且每張票還需要再加上 <strong>$8.75 per-ticket fee</strong>。相較之下，無論是 <strong>$47 組隊優惠</strong> 或是 <strong>$41 專屬團體購票</strong>，都是主辦單位幫我們 TEAM TAIWAN 與紅襪爭取到的很好優惠！
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-sm leading-7 text-emerald-900">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">📍</div>
                    <p className="text-base font-black text-emerald-950">座位安排 Seating</p>
                    <p className="mt-2">Seats will be arranged by group/team when possible.</p>
                    <p className="mt-2">座位將盡量依隊伍或同行者安排。</p>
                  </div>
                  <div className="rounded-2xl border border-sky-200 bg-sky-50 p-5 text-sm leading-7 text-sky-900">
                    <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">🎟️</div>
                    <p className="text-base font-black text-sky-950">電子票 E-Tickets</p>
                    <p className="mt-2">Tickets will be distributed electronically closer to the event, based on the email address entered by each purchaser on Zeffy.</p>
                    <p className="mt-2">電子票將於活動前發送，並以購票者在 Zeffy 上填寫的 Email 為主要發送依據。</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8">
                <p className="text-sm font-bold text-slate-500">6/1 後正式開賣</p>
                <h3 className="mt-1 text-3xl font-black text-slate-950">專屬團體購票連結</h3>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  6/1 之後，大家可以透過 Red Sox 提供給波克萊基金會專屬的 Taiwan Fans Night 優惠購票連結購票。
                </p>
                <div className="mt-6 rounded-3xl bg-slate-50 p-6">
                  <p className="text-sm font-semibold text-slate-500">票價</p>
                  <p className="mt-1 text-4xl font-black text-slate-950">$41 + 約 8–9% 手續費</p>
                </div>
                <p className="mt-6 text-sm leading-7 text-slate-600">
                  無論是 6/1 前或是 6/1 後購票者，我們全都會坐在 Bleacher 42 同一區、得到主辦單位發的台灣主題 T-shirt，並參加 912 台灣集結活動大抽獎！
                </p>
                <p className="mt-4 rounded-2xl bg-slate-50 p-4 text-sm leading-7 text-slate-700">
                  依據紅襪官網，目前 Fenway Park 912 當天 Bleacher 42 區票價約為 <strong>$64 ~ $88</strong> 一張，而且每張票還需要再加上 <strong>$8.75 per-ticket fee</strong>。相較之下，無論是 <strong>$47 組隊優惠</strong> 或是 <strong>$41 專屬團體購票</strong>，都是主辦單位幫我們 TEAM TAIWAN 與紅襪爭取到的很好優惠！
                </p>
              </Card>
            </div>

            <Card className="mt-8 overflow-hidden border-slate-200 bg-white shadow-lg">
              <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                <div className="bg-gradient-to-br from-emerald-700 to-sky-700 p-8 text-white md:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">Red Sox Giveaway</p>
                  <h3 className="mt-3 text-3xl font-black">當天紅襪現場贈品</h3>
                  <p className="mt-4 leading-7 text-white/90">
                    5/31 前完成組隊購票者，可獲得 Red Sox 提供的限量 Red Sox × Bruins co-branding Baseball Jersey。此為 9/12 當天在 Fenway Park 現場領取的贈品。
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
              eyebrow="TEAM TAIWAN"
              title="TEAM TAIWAN 組隊方式"
              description="不管是否組隊，每位參加者都可以自行至 Zeffy 購票付款，5/31 前每張票都是 $47。3 人以上即可自行組隊並命名；隊長只需要取隊名、邀請朋友，並提醒隊員填寫完全相同的 Team Name。"
            />
            <div className="grid gap-6 md:grid-cols-3">
              <InfoCard icon="👥" title="1. 隊長先決定隊伍名稱">
                3 人以上即可成立隊伍。隊名可以自由創意命名，中英文皆可。僑團、公司、學校社團或組織，也可以直接使用單位名稱作為隊名。
              </InfoCard>
              <InfoCard icon="📣" title="2. 分享隊名給隊員">
                隊長把隊伍名稱分享給隊員。請所有隊員購票時填寫 <strong>完全相同的隊名</strong>，以利後續統計、座位安排與比賽資格確認。
              </InfoCard>
              <InfoCard icon="🎟️" title="3. 每位參加者自行購票付款">
                每位參加者自行至 Zeffy 購票付款。隊長不需要代收款，也不需要幫大家統一購票。沒有要組隊或未滿 3 人也可以直接購票，同樣享有 5/31 前每張票 $47 的價格。
              </InfoCard>
            </div>

            <Card id="team-form-coming-soon" className="mt-8 border-emerald-200 bg-emerald-50 p-6 md:p-8">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Zeffy Team Name</p>
                  <h3 className="mt-2 text-2xl font-black text-slate-950">購票時請填寫 Team Name</h3>
                  <p className="mt-4 leading-7 text-slate-700">
                    每位參加者在 Zeffy 表單中的 <strong>Team Name</strong> 欄位，填上相同隊名。隊名必須完全一致，才方便主辦單位統計人數、安排座位與確認創意隊名比賽資格。
                  </p>
                  <p className="mt-3 leading-7 text-slate-700">
                    僑團、公司、學校社團或組織可以直接使用單位名稱作為隊名，例如 <strong>波士頓台灣人生技協會 BTBA</strong>。這樣大家在 TEAM TAIWAN 集氣榜上，也可以清楚看到各僑團、單位與組織的集結力量。
                  </p>
                  <div className="mt-4 rounded-2xl bg-white p-4 text-sm leading-7 text-slate-700">
                    <p><strong>✅ 正確：</strong>Boston Taiwan Power</p>
                    <p><strong>❌ 不建議：</strong>Boston Taiwan / Taiwan Power / boston taiwan power</p>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    沒有要組隊，或未滿 3 人的朋友，也可以直接透過 Zeffy 購票，同樣享有 5/31 前每張票 $47 的價格。未滿 3 人仍可填寫隊名，但不列入創意隊名比賽資格。
                  </p>
                </div>
                <a href={zeffyPaymentLink} className="rounded-full bg-emerald-700 px-6 py-3 text-center font-bold text-white transition hover:bg-emerald-800">
                  立即前往 Zeffy 購票
                </a>
              </div>
            </Card>

            <div className="mt-10 rounded-[2rem] bg-gradient-to-br from-emerald-700 to-sky-700 p-8 text-white shadow-lg">
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">Team Name Ideas</p>
                  <h3 className="mt-3 text-3xl font-black">可個人購票，也可以 3 人以上組隊</h3>
                  <p className="mt-4 text-sm leading-7 text-white/85">
                    歡迎大家發揮創意，邀請親友一起加入 9/12 Fenway 台灣集結！沒有要組隊的人，也可以直接購票參加。3 人以上的隊伍將自動參加「最佳創意隊名獎」評選。主辦單位將依照隊名創意、活動精神與整體趣味性進行評選，並保有最終決定權。
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/85">
                    隊名請使用適當、尊重、友善的名稱，避免不雅、歧視、政治攻擊、商標侵權或容易造成誤解的內容。
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
              title="TEAM TAIWAN 集氣榜"
              description="感謝各隊熱情響應！集氣榜將依照各隊目前認票／報名票數持續更新。"
            />
            <Card className="overflow-hidden border-emerald-200 bg-white shadow-lg">
              <div className="bg-gradient-to-br from-emerald-700 to-sky-700 p-8 text-white md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">Current Teams</p>
                <h3 className="mt-3 text-3xl font-black">讓 Red Sox 看見 Team Taiwan 的力量</h3>
                <p className="mt-4 max-w-3xl leading-7 text-white/90">
                  每一隊的加入，都是為 912 台灣集結與 2027 Red Sox Taiwan Day 集氣。歡迎更多家庭、朋友、僑團、公司、組織、校友會、社團與商家一起加入！各單位也可以直接使用單位名稱作為隊名，讓大家在集氣榜上看見你們的力量。
                </p>
              </div>
              <div className="p-6 md:p-8">
                <div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-6 md:p-10">
                  <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 md:relative md:min-h-[520px] md:block">
                    {teamLeaderboard.map((team, index) => {
                      const bubbleStyles = [
                        "h-72 w-72 bg-emerald-700 text-white ring-8 ring-emerald-100 md:absolute md:left-1/2 md:top-4 md:h-80 md:w-80 md:-translate-x-1/2",
                        "h-56 w-56 bg-sky-600 text-white ring-8 ring-sky-100 md:absolute md:left-16 md:bottom-8 md:h-64 md:w-64",
                        "h-48 w-48 bg-emerald-500 text-white ring-8 ring-emerald-100 md:absolute md:right-20 md:bottom-20 md:h-56 md:w-56",
                      ];
                      const textStyles = ["text-3xl md:text-4xl", "text-2xl md:text-3xl", "text-xl md:text-2xl"];
                      return (
                        <div
                          key={team.name}
                          className={`flex shrink-0 flex-col items-center justify-center rounded-full p-6 text-center shadow-xl transition hover:-translate-y-1 hover:shadow-2xl ${bubbleStyles[index]}`}
                          title={`${team.name}｜${team.tickets} 張票`}
                        >
                          <div className={`font-black leading-tight ${textStyles[index]}`}>{team.name}</div>
                          <div className="mt-3 rounded-full bg-white/20 px-4 py-2 text-lg font-black md:text-xl">{team.tickets} 張票</div>
                          <div className="mt-2 text-xs font-semibold opacity-90 md:text-sm">{team.note}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-center">
                  <h4 className="text-2xl font-black text-slate-950">你的隊伍也可以一起集氣！</h4>
                  <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
                    3 人以上就可以組隊，自取隊名並加入 TEAM TAIWAN 集氣榜。5/31 前透過 Zeffy 購票，每張票都是 $47。隊名請使用適當、尊重、友善的名稱；主辦單位保留隊名審核與調整之權利。
                  </p>
                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <a href={zeffyPaymentLink} target="_blank" rel="noreferrer" className="rounded-full bg-emerald-700 px-6 py-3 text-center font-bold text-white transition hover:bg-emerald-800">
                      立即組隊
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
              description="新付款方式：每位參加者自行至 Zeffy 購票付款。隊長不需要代收款，也不需要幫大家統一購票。沒有要組隊或未滿 3 人也可以直接購票，5/31 前同樣享有每張票 $47。"
            />
            <div className="grid gap-6 lg:grid-cols-3">
              <Card className="relative overflow-hidden border-emerald-300 bg-gradient-to-br from-emerald-700 to-sky-700 p-7 text-white shadow-xl ring-4 ring-emerald-100 transition hover:-translate-y-1 hover:shadow-2xl lg:col-span-2">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10" />
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl shadow-sm">🎟️</div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">Main Payment Method</p>
                <h3 className="mt-2 text-3xl font-black">Zeffy 購票付款</h3>
                <p className="mt-4 leading-7 text-white/95">
                  每位參加者自行透過 Zeffy 購票付款。沒有要組隊或未滿 3 人也可以直接購票，5/31 前同樣享有每張票 $47。若有組隊，購票時請務必填寫 <strong>Team Name</strong>，同一隊請填寫完全相同的隊名。
                </p>
                <div className="mt-5 rounded-3xl bg-white p-5 text-emerald-900 shadow-sm">
                  <p className="text-sm font-bold text-emerald-700">填寫格式提醒</p>
                  <p className="mt-1 text-lg font-black">有組隊：請填完全相同隊名</p>
                  <p className="mt-2 text-sm leading-6 text-emerald-800">沒有組隊：Team Name 可填 Individual 或留空（依 Zeffy 表單設定）</p>
                </div>
                <a href={zeffyPaymentLink} className="mt-6 inline-flex rounded-full bg-white px-6 py-3 font-bold text-emerald-800 transition hover:bg-emerald-50">
                  立即前往 Zeffy 購票
                </a>
              </Card>

              <Card className="relative overflow-hidden border-amber-200 bg-white p-7 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-3xl text-amber-700 shadow-sm">⚠️</div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-700">Reminder</p>
                <h3 className="mt-2 text-3xl font-black text-slate-950">隊長不用代收款</h3>
                <div className="mt-5 rounded-3xl bg-amber-50 p-5 text-amber-950">
                  <p className="font-bold">隊長任務很簡單：</p>
                  <p className="mt-2 leading-7">取隊名、邀請朋友、提醒隊員自行購票，並在 Zeffy 填寫相同 Team Name。</p>
                </div>
              </Card>
            </div>

            <Card className="mt-8 p-8">
              <h3 className="text-2xl font-black text-slate-950">組隊與付款提醒</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {[
                  ["隊長", "取隊名、邀請朋友、提醒隊員填相同 Team Name"],
                  ["隊員", "自行至 Zeffy 購票付款；若有組隊，請填寫相同隊名"],
                  ["主辦單位", "依照 Zeffy 表單資料統計人數、安排座位、確認比賽資格"],
                ].map(([label, text]) => (
                  <div key={label} className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-lg font-black text-slate-950">{label}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 rounded-2xl bg-emerald-50 p-5 text-sm leading-7 text-emerald-900">
                若有組隊，請務必填寫完全一致的隊名，以利後續統計、座位安排與創意隊名比賽資格確認。沒有要組隊或未滿 3 人，也可以直接透過 Zeffy 購票。
              </div>
            </Card>
          </div>
        </section>

        <section id="raffle" className="bg-white px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Raffle"
              title="抽獎活動"
              description="抽獎分成兩個活動：5/2–5/31 加入「912台灣集結」官方 LINE 群抽獎活動，以及 912 台灣集結活動大抽獎（所有購票參加者皆可參加）。"
            />
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="border-emerald-200 bg-emerald-50/70 p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">🎁</div>
                <h3 className="text-2xl font-black text-slate-950">5/2–5/31｜加入官方 LINE 群抽獎活動</h3>
                <p className="mt-4 leading-7 text-slate-700">
                  只要在 5/31 前加入 912 台灣集結官方 LINE 群，或填寫 912 台灣集結 Google Form，就有機會參加早鳥抽獎，並收到最新活動資訊。
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a href={officialLineGroup} target="_blank" rel="noreferrer" className="rounded-full bg-emerald-700 px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-emerald-800">
                    加入官方 LINE 群
                  </a>
                  <a href={googleFormLink} target="_blank" rel="noreferrer" className="rounded-full border border-emerald-200 bg-white px-5 py-3 text-center text-sm font-bold text-emerald-800 transition hover:bg-emerald-50">
                    沒有 LINE？用 Google Form 加入
                  </a>
                </div>
                <div className="mt-6 space-y-3 text-slate-700">
                  <p className="rounded-2xl bg-white p-4 font-semibold">🎟 912 球票（很多張）</p>
                  <p className="rounded-2xl bg-white p-4 font-semibold">👕 鄭宗哲簽名台灣主題 T-shirt（不只一件唷）</p>
                </div>
              </Card>

              <Card className="p-8">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-3xl shadow-sm">🏆</div>
                <h3 className="text-2xl font-black text-slate-950">912 台灣集結活動大抽獎</h3>
                <p className="mt-4 leading-7 text-slate-700">
                  所有購票參加 912 Taiwan Fan Night at Fenway 的朋友，都可以參加活動抽獎。
                </p>
                <div className="mt-6 rounded-2xl bg-sky-50 p-5 font-semibold text-sky-900">
                  ⚾ 鄭宗哲簽名球（不只一顆喔！）
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
                        沒有 LINE？用 Google Form 加入
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
                <h2 className="mt-3 text-3xl font-black md:text-5xl">可個人購票，也可以 3 人以上組隊！</h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-300">
                  5/31 前透過 Zeffy 購票，每張票都是 $47。若要組隊，請隊員在 Zeffy 填寫相同 Team Name。讓我們一起穿上台灣、支持台灣，也用行動回饋波士頓社區。
                </p>
                <p className="mt-3 max-w-2xl leading-7 text-slate-300">
                  🙌 我們也歡迎您一起加入波克萊志工團隊。
                </p>
                <a href={volunteerFormLink} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full border border-emerald-300 px-6 py-3 font-bold text-emerald-200 transition hover:bg-emerald-950">
                  加入志工團隊
                </a>
              </div>
              <Button onClick={() => window.open(zeffyPaym
