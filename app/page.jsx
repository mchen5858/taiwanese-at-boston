"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "首頁" },
    { id: "membership", label: "會員註冊" },
    { id: "tickets", label: "認票 / 買票" },
    { id: "contest", label: "衣服設計比賽" },
    { id: "sponsor", label: "贊助支持" },
  ];

  const ticketPackages = [
    { title: "一般參加", price: "$41", detail: "球賽門票，不含活動紀念衣" },
    { title: "台灣集結套票", price: "$51", detail: "球賽門票 + 台灣主題紀念 T-shirt" },
    { title: "認票支持", price: "$50 / 張", detail: "認領票券，支持更多台灣朋友一起參與" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-400 to-sky-400 font-black text-slate-950 shadow-lg">TA</div>
            <div>
              <div className="text-lg font-bold tracking-tight">Taiwanese at Boston</div>
              <div className="text-xs text-slate-300">912 Taiwan Gathering at Fenway</div>
            </div>
          </div>
          <nav className="hidden gap-2 md:flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm transition ${activeTab === tab.id ? "bg-white text-slate-950" : "text-slate-300 hover:bg-white/10 hover:text-white"}`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
          <button className="rounded-full bg-emerald-400 px-5 py-2 text-sm font-bold text-slate-950 shadow-lg hover:bg-emerald-300">立即加入</button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.22),transparent_35%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.18),transparent_35%)]" />
          <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
                <span className="text-base">★</span> 2026 / 9 / 12 Fenway 台灣集結
              </div>
              <h1 className="max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                讓 Fenway 看見
                <span className="block bg-gradient-to-r from-emerald-300 via-sky-300 to-white bg-clip-text text-transparent">波士頓台灣人的力量</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                這不只是一場球賽，而是台灣社群的集結。一起穿上台灣主題紀念衣、支持公益，並為 2027 Red Sox Taiwan Day 鋪路。
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-emerald-400 px-6 py-4 font-bold text-slate-950 shadow-xl hover:bg-emerald-300">加入會員 / 收到最新消息</button>
                <button className="rounded-2xl border border-white/20 px-6 py-4 font-bold text-white hover:bg-white/10">查看認票與贊助</button>
              </div>
              <div className="mt-8 grid max-w-2xl grid-cols-3 gap-3 text-center">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-2xl font-black">300+</div><div className="text-xs text-slate-400">目標參與人數</div></div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-2xl font-black">$3+</div><div className="text-xs text-slate-400">每票公益捐助</div></div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4"><div className="text-2xl font-black">2027</div><div className="text-xs text-slate-400">Taiwan Day 目標</div></div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7 }} className="rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] bg-slate-900 p-6">
                <div className="mb-5 flex items-center justify-between">
                  <h2 className="text-2xl font-black">912 活動資訊</h2>
                  <span className="rounded-full bg-emerald-400 px-3 py-1 text-xs font-bold text-slate-950">Open Soon</span>
                </div>
                <div className="space-y-4 text-slate-200">
                  <Info icon="📅" title="日期" text="Saturday, September 12, 2026" />
                  <Info icon="📍" title="地點" text="Fenway Park, Boston" />
                  <Info icon="🎟️" title="票券" text="$41 一般票 / $51 含紀念衣套票" />
                  <Info icon="🤝" title="公益" text="支持 Boys & Girls Clubs of Boston 等在地公益" />
                </div>
                <div className="mt-6 rounded-2xl bg-gradient-to-r from-emerald-400 to-sky-400 p-5 text-slate-950">
                  <div className="text-sm font-bold uppercase tracking-widest">Main Goal</div>
                  <div className="mt-2 text-2xl font-black">一起為 2027 Red Sox Taiwan Day 鋪路</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14">
          <div className="mb-8 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-black md:text-4xl">網站主要功能</h2>
              <p className="mt-3 max-w-2xl text-slate-300">先用簡單清楚的流程上線，之後再慢慢升級成完整會員平台。</p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <Feature icon="👥" title="會員註冊" text="收集姓名、Email、Line、是否願意當志工、T-shirt 尺寸，建立台灣社群名單。" />
            <Feature icon="🎟️" title="買票 / 認票" text="可以串接 Stripe、PayPal 或 Eventbrite，分成一般票、含衣服套票、認票支持。" />
            <Feature icon="👕" title="衣服設計比賽" text="開放投稿、展示作品、會員投票，最後選出 912 活動紀念衣設計。" />
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14">
          <div className="grid gap-5 md:grid-cols-3">
            {ticketPackages.map((item) => (
              <div key={item.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-xl">
                <div className="text-lg font-bold text-slate-200">{item.title}</div>
                <div className="mt-3 text-4xl font-black text-emerald-300">{item.price}</div>
                <p className="mt-4 text-sm leading-6 text-slate-300">{item.detail}</p>
                <button className="mt-6 w-full rounded-2xl bg-white px-4 py-3 font-bold text-slate-950 hover:bg-slate-200">選擇這個方案</button>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 md:p-10">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="mb-4 inline-flex rounded-full bg-sky-300/10 px-4 py-2 text-sm font-bold text-sky-200"><span className="mr-2">🏆</span> 衣服設計比賽</div>
                <h2 className="text-3xl font-black md:text-4xl">讓社群一起設計 912 紀念衣</h2>
                <p className="mt-4 leading-7 text-slate-300">參賽者可以上傳設計圖、填寫設計理念，會員可以投票。最高票作品可成為 912 Fenway 台灣集結官方紀念衣。</p>
              </div>
              <div className="rounded-3xl bg-slate-900 p-6">
                <div className="space-y-4">
                  <Step number="1" title="開放投稿" text="上傳設計圖、名稱、設計理念" />
                  <Step number="2" title="會員投票" text="每位會員可投 1 票，避免重複投票" />
                  <Step number="3" title="公布得獎" text="得獎作品成為活動紀念衣，並在網站與社群表揚" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-14">
          <div className="rounded-[2rem] bg-gradient-to-r from-emerald-400 to-sky-400 p-8 text-slate-950 md:p-12">
            <h2 className="text-3xl font-black md:text-5xl">準備好一起讓 Fenway 看見台灣了嗎？</h2>
            <p className="mt-4 max-w-2xl text-lg font-medium">加入 Taiwanese at Boston，收到 912 活動、票券、衣服投票、志工與贊助資訊。</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-slate-950 px-6 py-4 font-bold text-white">加入會員</button>
              <button className="rounded-2xl bg-white/80 px-6 py-4 font-bold text-slate-950">聯絡主辦單位</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-5 py-10 text-center text-sm text-slate-400">
        <div className="mb-2 font-bold text-white">Taiwanese at Boston</div>
        <div>Hosted by BTCC & BTCF · Built for community, charity, and Taiwan visibility.</div>
      </footer>
    </div>
  );
}

function Info({ icon, title, text }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
      <div className="mt-1 text-xl text-emerald-300">{icon}</div>
      <div>
        <div className="text-sm font-bold text-white">{title}</div>
        <div className="text-sm text-slate-300">{text}</div>
      </div>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-xl transition hover:-translate-y-1 hover:bg-white/10">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-300/15 text-2xl text-emerald-300">{icon}</div>
      <h3 className="text-xl font-black">{title}</h3>
      <p className="mt-3 leading-7 text-slate-300">{text}</p>
    </div>
  );
}

function Step({ number, title, text }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-slate-950">{number}</div>
      <div>
        <div className="font-bold text-white">{title}</div>
        <div className="text-sm text-slate-300">{text}</div>
      </div>
    </div>
  );
}
