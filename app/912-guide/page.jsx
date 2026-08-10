"use client";

import React, { useState } from "react";

const seatMapLink = "/seat-map";
const ticketGuideLink = "/912-guide/tickets";
const organizerEmail = "medianchen@gmail.com";
const mcphsCommunitySponsorLogo = "/MCPHS-Logo.jpg";

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function Section({ id, title, children, eyebrow }) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">
        {eyebrow || `Section ${id}`}
      </p>
      <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 md:text-3xl">
        {title}
      </h2>
      <div className="mt-5 space-y-5 text-base leading-8 text-slate-700">
        {children}
      </div>
    </section>
  );
}

function LanguageToggle({ isZh, setIsZh }) {
  return (
    <div className="mt-6 flex flex-wrap justify-end gap-2">
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
  );
}

function ContactSection({ isZh }) {
  return (
    <Section id="07" title={isZh ? "聯絡主辦單位" : "Contact the organizers"}>
      <div className="grid gap-5 md:grid-cols-[220px_1fr]">
        <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
          <img
            src="/organizer-line-qr.jpg"
            alt={isZh ? "主辦單位 LINE QR Code" : "Organizer LINE QR Code"}
            className="w-full rounded-[1rem] bg-white"
          />
        </div>
        <Card>
          <p className="text-xl font-black text-slate-950">
            {isZh ? "主辦單位 LINE / Email" : "Organizer LINE / Email"}
          </p>
          <p className="mt-3">
            {isZh
              ? "有任何電子票、座位、衣服領取或活動問題，都可以聯絡主辦單位。"
              : "For questions about tickets, seating, shirt pickup, or the event, please contact the organizers."}
          </p>
          <p className="mt-3 break-all font-black text-emerald-800">{organizerEmail}</p>
        </Card>
      </div>
    </Section>
  );
}

function SeatColorLookupZh() {
  return (
    <Section id="05" title="排字活動說明＋座位／衣服顏色查詢">
      <Card className="border-rose-200 bg-rose-50">
        <p className="text-xl font-black text-rose-900">輕鬆參與，開心一起玩！</p>
        <p className="mt-3">
          這次的排字其實是一個不小的挑戰。因為我們的座位區並不是完整、方正的長方形，而且每一區、每一排的座位數量都不完全相同，所以實際排字的難度會比想像中高很多，最後呈現出來的效果，我們也無法百分之百預測。
        </p>
        <p className="mt-3">
          但既然有這麼多朋友難得一起聚在 Fenway，我們還是很想和大家一起試試看！其實，<strong>9/12 活動最主要的目標已經達成了</strong>——我們已經讓紅襪球團看見台灣社群的熱情、團結與凝聚力。這次的排字活動並不是一定要完成的任務，而更像是一個大家一起參與的小遊戲、小挑戰。
        </p>
        <p className="mt-3">
          我們只是希望趁著這麼多人難得聚在一起，一起做一件有趣的事情，留下一個屬於大家、也屬於 9/12 的共同回憶。
        </p>
        <div className="mt-4 rounded-[1.25rem] border border-amber-200 bg-amber-50 p-4">
          <p className="font-black text-amber-950">
            所以真的不用有任何壓力，成功了當然很棒；就算最後沒有百分之百完美，也完全沒關係。
          </p>
          <p className="mt-2 text-xl font-black text-rose-700">
            最重要的是——大家一起參與、一起合作、一起玩得開心！ ❤️🇹🇼
          </p>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-700">第 1 組排字</p>
          <p className="mt-2 text-lg text-slate-700">3 局上結束後</p>
          <p className="mt-2 text-3xl font-black text-slate-950">TAIWAN</p>
        </Card>
        <Card>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-700">第 2 組排字</p>
          <p className="mt-2 text-lg text-slate-700">6 局上結束後</p>
          <p className="mt-2 text-3xl font-black text-slate-950">RED SOX</p>
        </Card>
      </div>

      <Card className="border-amber-200 bg-amber-50">
        <p className="text-xl font-black text-amber-900">請查詢自己的座位與衣服顏色</p>
        <p className="mt-3">
          我們已經把 <strong>第 3 局上結束後 TAIWAN</strong> 與 <strong>第 6 局上結束後 RED SOX</strong> 的排字參考放在 Seat Map 頁面。
          大家可以依照自己的 Section、Row、Seat 找到大概位置，確認自己在兩次排字時應該穿白色活動 T-shirt 或黑色 Bruins Jersey。
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={seatMapLink}
            className="inline-flex rounded-full bg-emerald-800 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            開啟座位／衣服顏色查詢
          </a>
          <a
            href={`${seatMapLink}#reference`}
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-emerald-900 ring-1 ring-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-50"
          >
            查看第 3 局與第 6 局排字參考
          </a>
        </div>
      </Card>
    </Section>
  );
}

function SeatColorLookupEn() {
  return (
    <Section id="05" title="Lettering activity overview + seat / shirt color lookup">
      <Card className="border-rose-200 bg-rose-50">
        <p className="text-xl font-black text-rose-900">Relax, join in, and have fun!</p>
        <p className="mt-3">
          This lettering activity is honestly a real challenge. Our seating area is not a perfect rectangle, and the number of seats in each section and each row is not exactly the same, so the actual execution is much harder than it may look.
        </p>
        <p className="mt-3">
          Still, since so many of us will be gathering at Fenway, we really want to give it a try together. The main goal of the 9/12 event has already been achieved — the Red Sox have already seen the passion, unity, and strength of the Taiwanese community. This lettering activity is more like a fun community challenge we can do together.
        </p>
        <p className="mt-3 font-black text-slate-900">
          It would be great if it works beautifully, but it is completely okay if it is not 100% perfect. The most important thing is to participate, cooperate, and have fun together! ❤️🇹🇼
        </p>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-emerald-700">Lettering set 1</p>
          <p className="mt-2 text-lg text-slate-700">After the top of the 3rd inning</p>
          <p className="mt-2 text-3xl font-black text-slate-950">TAIWAN</p>
        </Card>
        <Card>
          <p className="text-sm font-black uppercase tracking-[0.22em] text-sky-700">Lettering set 2</p>
          <p className="mt-2 text-lg text-slate-700">After the top of the 6th inning</p>
          <p className="mt-2 text-3xl font-black text-slate-950">RED SOX</p>
        </Card>
      </div>

      <Card className="border-amber-200 bg-amber-50">
        <p className="text-xl font-black text-amber-900">Check your seat and shirt color</p>
        <p className="mt-3">
          The Seat Map page includes the official reference for <strong>TAIWAN after the top of the 3rd inning</strong> and <strong>RED SOX after the top of the 6th inning</strong>.
          Use your Section, Row, and Seat to find your approximate location and check whether to wear the white event T-shirt or the black Bruins Jersey for each lettering moment.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={seatMapLink}
            className="inline-flex rounded-full bg-emerald-800 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700"
          >
            Open seat / shirt color lookup
          </a>
          <a
            href={`${seatMapLink}#reference`}
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-emerald-900 ring-1 ring-emerald-200 transition hover:-translate-y-0.5 hover:bg-emerald-50"
          >
            View 3rd & 6th inning reference
          </a>
        </div>
      </Card>
    </Section>
  );
}

function GuideZh({ isZh, setIsZh }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-sky-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
        <div className="rounded-[2.25rem] bg-gradient-to-r from-emerald-900 via-emerald-800 to-sky-900 p-7 text-white shadow-2xl md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-100">
            9/12 Taiwan Fan Night at Fenway
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            9/12 台灣集結完整懶人包
          </h1>
          <div className="mt-5 space-y-2 text-2xl font-black text-amber-300 md:text-3xl">
            <p>Taiwanese in Boston, Strong Together</p>
            <p>波士頓台灣人，團結在一起！</p>
          </div>
          <LanguageToggle isZh={isZh} setIsZh={setIsZh} />
          <p className="mt-6 max-w-4xl text-lg leading-9 text-emerald-50">
            大家好！再次感謝大家對 9/12 活動的支持！這次共有 <strong>1,325 位朋友</strong>
            購票參加，而且在距離活動還有一個半月時，我們就已經提前結束售票。
          </p>
          <div className="mt-6 rounded-[1.5rem] border border-white/20 bg-white/10 p-5">
            <p className="text-xl font-black">🎉 紅襪官方已經注意到台灣社群所展現出的力量！</p>
            <p className="mt-4 text-3xl font-black text-amber-300 md:text-5xl">
              Light Up Taiwan, Let Taiwan Be Seen!
            </p>
            <p className="mt-2 text-2xl font-black">點亮台灣，讓台灣被看見！</p>
          </div>
        </div>

        <Card className="mt-8 overflow-hidden border-rose-200 bg-white p-0 shadow-xl ring-4 ring-rose-50">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="bg-gradient-to-br from-rose-50 via-white to-emerald-50 p-6 md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-700">
                Community Sponsor
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 md:text-4xl">
                感謝 MCPHS 支持 912 Taiwan Fan Night
              </h2>
              <p className="mt-4 text-base font-bold leading-8 text-slate-700 md:text-lg">
                Massachusetts College of Pharmacy and Health Sciences（MCPHS）是我們的 Community Sponsor。感謝 MCPHS 支持波士頓台灣社群，一起讓台灣在 Fenway 被看見。
              </p>
            </div>
            <div className="flex items-center justify-center bg-white p-6 md:p-8">
              <img
                src={mcphsCommunitySponsorLogo}
                alt="Massachusetts College of Pharmacy and Health Sciences logo"
                className="h-auto w-full max-w-2xl object-contain"
              />
            </div>
          </div>
        </Card>


        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <Card><p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Date</p><p className="mt-2 text-xl font-black">2026 / 9 / 12</p><p className="text-sm text-slate-600">星期六</p></Card>
          <Card><p className="text-xs font-black uppercase tracking-[0.22em] text-sky-700">Game Time</p><p className="mt-2 text-xl font-black">4:15 PM</p><p className="text-sm text-slate-600">Royals vs. Red Sox</p></Card>
          <Card><p className="text-xs font-black uppercase tracking-[0.22em] text-amber-700">Participants</p><p className="mt-2 text-3xl font-black">1,325</p><p className="text-sm text-slate-600">位朋友參加</p></Card>
          <Card><p className="text-xs font-black uppercase tracking-[0.22em] text-slate-600">Location</p><p className="mt-2 text-xl font-black">Fenway Park</p><p className="text-sm text-slate-600">Lansdowne Street 集合</p></Card>
        </div>

        <div className="mt-8 space-y-8">
          <Section id="01" title="活動資訊">
            <p>9/12 活動售票目前已經結束。非常感謝大家的熱烈支持，本次活動共有 <strong>1,325 位朋友參加！</strong></p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>日期：</strong>2026 年 9 月 12 日（星期六）</li>
              <li><strong>比賽時間：</strong>下午 4:15</li>
              <li><strong>賽事：</strong>Kansas City Royals vs. Boston Red Sox</li>
              <li><strong>地點：</strong>Fenway Park，Lansdowne Street 集合</li>
            </ul>
          </Section>

          <Section id="02" title="活動當天流程">
            <div className="grid gap-4 md:grid-cols-3">
              <Card><p className="text-2xl font-black">3:00–3:30 PM</p><p className="mt-2">賽前活動與集合</p></Card>
              <Card><p className="text-2xl font-black">3:30 PM</p><p className="mt-2">大合照</p></Card>
              <Card><p className="text-2xl font-black">4:15 PM</p><p className="mt-2">比賽開始</p></Card>
            </div>
            <p>集合地點為 <strong>Lansdowne Street</strong>。建議大家提早抵達，避免錯過賽前活動與大合照。</p>
          </Section>

          <Section id="03" title="活動衣服發放">
            <p>活動衣服發放時間與地點如下，請大家依照方便的場次前往領取。</p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 bg-white">
                <div className="mb-4 overflow-hidden rounded-[1.1rem] border border-slate-200 bg-slate-50">
                  <img
                    src="/912-fenway-2026-white-event-tshirt.png"
                    alt="白色 9/12 活動 T-shirt"
                    className="h-56 w-full object-contain bg-white"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
                <h3 className="text-xl font-black text-slate-950">⚪ 白色 9/12 活動 T-shirt</h3>
                <p className="mt-3">
                  白色衣服是我們這次特別製作的 <strong>9/12 活動 T-shirt</strong>，請依照下方公布的發放時間與地點提前領取。
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>可本人領取，也可以請朋友代領。</li>
                  <li>活動衣服不提供郵寄。</li>
                  <li>建議大家活動當天先穿著白色活動 T-shirt 到 Fenway。</li>
                </ul>
              </Card>

              <Card className="border-slate-200 bg-white">
                <div className="mb-4 overflow-hidden rounded-[1.1rem] border border-slate-200 bg-slate-50">
                  <img
                    src="/912-fenway-2026-black-redsox-bruins-jersey.jpg"
                    alt="黑色 Red Sox × Bruins Jersey"
                    className="h-56 w-full object-contain bg-white"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                </div>
                <h3 className="text-xl font-black text-slate-950">⚫ 黑色 Red Sox × Bruins Jersey</h3>
                <p className="mt-3">
                  黑色衣服是 <strong>Red Sox × Bruins Jersey</strong>，這件會由紅襪球團在活動當天於 Fenway Park 現場發送。
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>黑色 Jersey 不需要提前領取。</li>
                  <li>請活動當天進入球場後，依照球場現場發放方式領取。</li>
                  <li>排字時會依照座位安排，在白色活動 T-shirt 與黑色 Jersey 之間配合切換。</li>
                </ul>
              </Card>
            </div>
            <div className="space-y-3">
              <div className="rounded-[1.25rem] border border-emerald-200 bg-emerald-50 p-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xl font-black text-slate-950">8 月 28 日（星期五）</p>
                    <p className="mt-1 font-black text-slate-800">波士頓華僑文教服務中心，Newton</p>
                  </div>
                  <p className="rounded-full bg-white px-4 py-2 text-lg font-black text-emerald-900 ring-1 ring-emerald-200">
                    10:30 AM – 4:30 PM
                  </p>
                </div>
              </div>

              <div className="rounded-[1.25rem] border border-sky-200 bg-sky-50 p-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xl font-black text-slate-950">8 月 29 日（星期六）</p>
                    <p className="mt-1 font-black text-slate-800">University Park Common，Cambridge</p>
                  </div>
                  <p className="rounded-full bg-white px-4 py-2 text-lg font-black text-sky-900 ring-1 ring-sky-200">
                    10:30 AM – 4:30 PM
                  </p>
                </div>
              </div>

              <div className="rounded-[1.25rem] border border-indigo-200 bg-indigo-50 p-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xl font-black text-slate-950">8 月 30 日（星期日）</p>
                    <p className="mt-1 font-black text-slate-800">Northeastern Crossing，Boston</p>
                  </div>
                  <p className="rounded-full bg-white px-4 py-2 text-lg font-black text-indigo-900 ring-1 ring-indigo-200">
                    10:30 AM – 4:30 PM
                  </p>
                </div>
              </div>

              <div className="rounded-[1.25rem] border border-amber-200 bg-amber-50 p-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xl font-black text-slate-950">9 月 9 日（星期三）</p>
                    <p className="mt-1 font-black text-slate-800">Tai Chi Acupuncture & Wellness Center，Danvers</p>
                  </div>
                  <p className="rounded-full bg-white px-4 py-2 text-lg font-black text-amber-900 ring-1 ring-amber-200">
                    4:00 PM – 7:00 PM
                  </p>
                </div>
              </div>

              <div className="rounded-[1.25rem] border border-rose-200 bg-rose-50 p-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xl font-black text-slate-950">9 月 10 日（星期四）</p>
                    <p className="mt-1 font-black text-slate-800">Somerville</p>
                    <p className="mt-2 inline-flex rounded-full bg-white px-3 py-1 text-sm font-black text-rose-700 ring-1 ring-rose-200">
                      地點確認中，會在 Davis Square 附近
                    </p>
                  </div>
                  <p className="rounded-full bg-white px-4 py-2 text-lg font-black text-rose-900 ring-1 ring-rose-200">
                    3:00 PM – 6:30 PM
                  </p>
                </div>
              </div>

              <div className="rounded-[1.25rem] border border-emerald-200 bg-emerald-50 p-4">
                <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="text-xl font-black text-slate-950">9 月 11 日（星期五）</p>
                    <p className="mt-1 font-black text-slate-800">波士頓華僑文教服務中心，Newton</p>
                  </div>
                  <p className="rounded-full bg-white px-4 py-2 text-lg font-black text-emerald-900 ring-1 ring-emerald-200">
                    10:30 AM – 4:30 PM
                  </p>
                </div>
              </div>
            </div>
            <Card className="border-amber-200 bg-amber-50">
              <p className="font-black text-amber-900">提醒</p>
              <p className="mt-2">白色活動 T-shirt 請提前領取；黑色 Red Sox × Bruins Jersey 則是活動當天進入 Fenway 後由球場現場發放。</p>
            </Card>
          </Section>

          <Section id="04" title="電子票領取方式">
            <p>電子票預計於 <strong>8 月 22 日</strong> 全部發送完畢。</p>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong>下載 MLB Ballpark App：</strong>請下載 <strong>MLB Ballpark App</strong>，不是一般的 MLB App。</li>
              <li><strong>註冊或登入 MLB 帳號：</strong>Email 請務必與 <strong>購買 912 活動票券時填寫的 Email</strong> 相同。若 Email 不相同，請務必聯絡主辦單位（波克萊基金會）協助更改 Email，避免後續無法順利收到或接受電子票。</li>
              <li><strong>收到轉票 Email：</strong>收到 Red Sox ticket email 後，請點選 <strong>Access Tickets</strong>。</li>
              <li><strong>查看或轉票：</strong>您可以在 MLB Ballpark App 中查看電子票，也可以將個別門票轉給家人朋友。</li>
            </ol>
            <a
              href={ticketGuideLink}
              className="inline-flex rounded-full bg-emerald-800 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              查看電子票 Step-by-step 教學
            </a>
          </Section>
          <SeatColorLookupZh />

          <Section id="06" title="重要提醒">
            <ol className="list-decimal space-y-3 pl-5">
              <li>請提早下載並登入 <strong>MLB Ballpark App</strong>，不要等到比賽當天才處理。</li>
              <li>電子票預計於 <strong>8 月 22 日</strong> 發送，大家收到票的時間可能略有不同。</li>
              <li>請勿只使用電子票截圖，入場時請直接開啟 MLB Ballpark App 中的電子票。</li>
              <li>活動衣服不提供郵寄，請依照公布的時間與地點親自領取，或請朋友代領。</li>
              <li>活動當天請提早抵達 Lansdowne Street 集合，以免錯過賽前活動及大合照。</li>
            </ol>
          </Section>

          <ContactSection isZh={true} />
        </div>
      </section>
    </main>
  );
}

function GuideEn({ isZh, setIsZh }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-sky-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
        <div className="rounded-[2.25rem] bg-gradient-to-r from-emerald-900 via-emerald-800 to-sky-900 p-7 text-white shadow-2xl md:p-10">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-emerald-100">
            9/12 Taiwan Fan Night at Fenway
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">
            9/12 Taiwan Fan Night Complete Guide
          </h1>
          <LanguageToggle isZh={isZh} setIsZh={setIsZh} />
          <p className="mt-6 max-w-4xl text-lg leading-9 text-emerald-50">
            Thank you for supporting the 9/12 event. More than <strong>1,325 friends</strong> will join us at Fenway.
          </p>
        </div>

        <Card className="mt-8 overflow-hidden border-rose-200 bg-white p-0 shadow-xl ring-4 ring-rose-50">
          <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="bg-gradient-to-br from-rose-50 via-white to-emerald-50 p-6 md:p-8">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-rose-700">
                Community Sponsor
              </p>
              <h2 className="mt-3 text-2xl font-black tracking-tight text-slate-950 md:text-4xl">
                Thank you, MCPHS, for supporting 912 Taiwan Fan Night
              </h2>
              <p className="mt-4 text-base font-bold leading-8 text-slate-700 md:text-lg">
                Massachusetts College of Pharmacy and Health Sciences (MCPHS) is our Community Sponsor. Thank you for supporting the Taiwanese community in Boston and helping Taiwan be seen at Fenway.
              </p>
            </div>
            <div className="flex items-center justify-center bg-white p-6 md:p-8">
              <img
                src={mcphsCommunitySponsorLogo}
                alt="Massachusetts College of Pharmacy and Health Sciences logo"
                className="h-auto w-full max-w-2xl object-contain"
              />
            </div>
          </div>
        </Card>


        <div className="mt-8 space-y-8">
          <Section id="01" title="Event information">
            <p>Ticket sales for the 9/12 event are now closed. Thank you for the incredible support.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>Date:</strong> Saturday, September 12, 2026</li>
              <li><strong>Game time:</strong> 4:15 PM</li>
              <li><strong>Game:</strong> Kansas City Royals vs. Boston Red Sox</li>
              <li><strong>Location:</strong> Fenway Park, meet at Lansdowne Street</li>
            </ul>
          </Section>

          <Section id="02" title="Event-day schedule">
            <div className="grid gap-4 md:grid-cols-3">
              <Card><p className="text-2xl font-black">3:00–3:30 PM</p><p className="mt-2">Pregame gathering</p></Card>
              <Card><p className="text-2xl font-black">3:30 PM</p><p className="mt-2">Group photo</p></Card>
              <Card><p className="text-2xl font-black">4:15 PM</p><p className="mt-2">First pitch</p></Card>
            </div>
          </Section>

          <Section id="03" title="Event shirt pickup">
            <p>Event shirt pickup times and locations are listed below.</p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-slate-200 bg-white">
                <h3 className="text-xl font-black text-slate-950">⚪ White 9/12 event T-shirt</h3>
                <p className="mt-3">
                  The white shirt is the special <strong>9/12 event T-shirt</strong>. Please pick it up in advance at one of the listed pickup sessions.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>You may pick it up yourself, or ask a friend to pick it up for you.</li>
                  <li>Event shirts will not be mailed.</li>
                  <li>We recommend wearing the white event T-shirt when you arrive at Fenway.</li>
                </ul>
              </Card>

              <Card className="border-slate-200 bg-white">
                <h3 className="text-xl font-black text-slate-950">⚫ Black Red Sox × Bruins Jersey</h3>
                <p className="mt-3">
                  The black shirt is the <strong>Red Sox × Bruins Jersey</strong>. It will be distributed by the Red Sox at Fenway Park on game day.
                </p>
                <ul className="mt-3 list-disc space-y-2 pl-5">
                  <li>You do not need to pick up the black Jersey in advance.</li>
                  <li>Please follow the ballpark distribution process after entering Fenway.</li>
                  <li>During the lettering challenge, participants may switch between the white event T-shirt and the black Jersey based on seat assignments.</li>
                </ul>
              </Card>
            </div>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>Friday, August 28, 10:30 AM – 4:30 PM</strong>｜Boston Overseas Community Affairs Council Center, Newton</li>
              <li><strong>Saturday, August 29, 10:30 AM – 4:30 PM</strong>｜University Park Common, Cambridge</li>
              <li><strong>Sunday, August 30, 10:30 AM – 4:30 PM</strong>｜Northeastern Crossing, Boston</li>
              <li><strong>Wednesday, September 9, 4:00 PM – 7:00 PM</strong>｜Tai Chi Acupuncture & Wellness Center, Danvers</li>
              <li><strong>Thursday, September 10, 3:00 PM – 6:30 PM</strong>｜Somerville, location being confirmed near Davis Square</li>
              <li><strong>Friday, September 11, 10:30 AM – 4:30 PM</strong>｜Boston Overseas Community Affairs Council Center, Newton</li>
            </ul>
          </Section>

          <Section id="04" title="Digital ticket instructions">
            <p>Digital tickets are expected to be sent by <strong>August 22</strong>.</p>
            <ol className="list-decimal space-y-3 pl-5">
              <li>Download the <strong>MLB Ballpark App</strong>, not the general MLB App.</li>
              <li>Your MLB account email must match the email used when purchasing 912 tickets. If it is different, please contact the organizers for help updating it.</li>
              <li>Open the Red Sox ticket email and tap <strong>Access Tickets</strong>.</li>
              <li>Use the MLB Ballpark App to view or forward tickets.</li>
            </ol>
            <a
              href={ticketGuideLink}
              className="inline-flex rounded-full bg-emerald-800 px-5 py-3 text-sm font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-emerald-700"
            >
              View step-by-step ticket guide
            </a>
          </Section>
          <SeatColorLookupEn />

          <Section id="06" title="Important reminders">
            <ol className="list-decimal space-y-3 pl-5">
              <li>Please download and log into the MLB Ballpark App before game day.</li>
              <li>Do not use only a screenshot of your ticket. Open the ticket directly in the app at the gate.</li>
              <li>Event shirts are not mailed. Please pick them up at one of the listed sessions, or ask a friend to pick up for you.</li>
              <li>Please arrive early at Lansdowne Street so you do not miss the pregame gathering and group photo.</li>
            </ol>
          </Section>

          <ContactSection isZh={false} />
        </div>
      </section>
    </main>
  );
}

export default function GuidePage() {
  const [isZh, setIsZh] = useState(true);
  return isZh ? <GuideZh isZh={isZh} setIsZh={setIsZh} /> : <GuideEn isZh={isZh} setIsZh={setIsZh} />;
}
