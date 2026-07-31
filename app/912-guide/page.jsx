"use client";

import React, { useState } from "react";

const seatMapLink = "/seat-map";
const organizerEmail = "medianchen@gmail.com";

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
    <Section id="10" title={isZh ? "聯絡主辦單位" : "Contact the organizers"}>
      <div className="grid gap-5 md:grid-cols-2">
        <Card>
          <h3 className="text-xl font-black text-slate-950">
            {isZh ? "主辦單位 LINE" : "Organizer LINE"}
          </h3>
          <p className="mt-3">
            {isZh
              ? "若有個別問題、隊伍修正、電子票、活動合作或志工相關問題，可以透過主辦單位 LINE 聯絡。"
              : "For individual questions, team corrections, digital tickets, event collaboration, or volunteer-related questions, please contact the organizers through LINE."}
          </p>
          <div className="mt-5 max-w-[260px] rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
            <img
              src="/organizer-line-qr.jpg"
              alt="Organizer LINE QR Code"
              className="h-auto w-full rounded-xl"
            />
          </div>
        </Card>
        <Card>
          <h3 className="text-xl font-black text-slate-950">Email</h3>
          <p className="mt-3">
            {isZh ? "也可以透過 Email 聯絡主辦單位：" : "You can also contact the organizers by email:"}
          </p>
          <p className="mt-3 text-xl font-black text-emerald-800">
            <a href={`mailto:${organizerEmail}`} className="underline">
              {organizerEmail}
            </a>
          </p>
        </Card>
      </div>
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
              <li><strong>地點：</strong>Fenway Park</li>
            </ul>
          </Section>

          <Section id="02" title="9/12 重要活動時間表">
            <Card>
              <h3 className="text-xl font-black text-slate-950">8 月 22 日（星期六）｜電子票發放</h3>
              <p className="mt-3">預計於當天將所有 9/12 活動電子票發送完畢。由於票券數量較多，大家收到電子票的時間可能略有不同，請耐心等候。</p>
              <p className="mt-3">請大家事先下載並登入官方的 <strong>MLB Ballpark App</strong>，並確認購票時使用的 Email 已經加入 MLB 帳號並完成驗證。</p>
            </Card>
            <Card>
              <h3 className="text-xl font-black text-slate-950">活動衣服發放日期</h3>
              <p className="mt-3">衣服發放的詳細時間及地點將於近期另行公布。</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li><strong>8 月 28 日（星期五）</strong></li>
                <li><strong>8 月 29 日（星期六）</strong></li>
                <li><strong>8 月 30 日（星期日）</strong></li>
                <li><strong>9 月 10 日（星期四）</strong></li>
                <li><strong>9 月 11 日（星期五）</strong></li>
              </ul>
            </Card>
          </Section>

          <Section id="03" title="9 月 12 日活動當天流程">
            <div className="grid gap-4 md:grid-cols-2">
              <Card><h3 className="text-xl font-black">下午 3:00–3:30</h3><p className="mt-2">賽前集合及 <strong>Pregame Activity</strong></p></Card>
              <Card><h3 className="text-xl font-black">下午 3:30</h3><p className="mt-2">台灣社群大合照</p></Card>
              <Card><h3 className="text-xl font-black">大合照結束後</h3><p className="mt-2">準備進場</p></Card>
              <Card><h3 className="text-xl font-black">下午 4:15</h3><p className="mt-2">Kansas City Royals vs. Boston Red Sox 比賽正式開始</p></Card>
            </div>
            <p className="rounded-[1.25rem] bg-emerald-50 p-5 font-black text-emerald-900">📍 賽前集合地點：Lansdowne Street</p>
          </Section>

          <Section id="04" title="電子票領取方式">
            <p>電子票預計於 <strong>8 月 22 日</strong> 全部發送完畢。</p>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong>下載 MLB Ballpark App：</strong>請先在手機下載官方的 MLB Ballpark App。</li>
              <li><strong>註冊或登入 MLB 帳號：</strong>建議使用您購買 9/12 活動門票時所填寫的同一個 Email。</li>
              <li><strong>確認 Email 已完成驗證：</strong>請確認購票時使用的 Email 已經加入您的 MLB 帳號，並完成驗證。</li>
            </ol>
          </Section>

          <Section id="05" title="電子票常見問題">
            <Card><h3 className="text-xl font-black">我用同一個 Email 購買了很多張票，會怎麼收到？</h3><p className="mt-3">所有門票都會發送至您購票時使用的同一個 Email。收到門票後，您可以在 MLB Ballpark App 中將個別門票轉給親友，或將所有門票保留在自己的手機裡，活動當天與親友一起入場。</p></Card>
            <Card><h3 className="text-xl font-black">我不會使用 MLB Ballpark App，怎麼辦？</h3><p className="mt-3">不用擔心！在領取活動衣服時，現場志工也可以協助下載 App、登入帳號、確認 Email、查看電子票與轉票。</p></Card>
          </Section>

          <Section id="06" title="Light Up Taiwan 排字挑戰">
            <p>我們計畫利用現場的實際座位配置，以及黑色、白色兩種衣服，在觀眾席上排出大型文字。</p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card><p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">第 3 局</p><p className="mt-2 text-3xl font-black text-slate-950">TAIWAN</p></Card>
              <Card><p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">第 6 局</p><p className="mt-2 text-xl font-black text-slate-950">內容尚未確定，歡迎大家投稿排字設計！</p></Card>
            </div>
            <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="text-2xl font-black text-emerald-900">歡迎大家投稿排字設計</h3>
              <p className="mt-3">目前排字設計仍在規劃與測試階段，我們也仍然接受大家投稿排字方案！</p>
              <p className="mt-3">🔗 <strong>排字設計網址：</strong> <a href={seatMapLink} className="break-all font-black text-emerald-800 underline">https://www.taiwaneseatboston.com/seat-map</a></p>
              <p className="mt-4">完成設計後，歡迎將畫面匯出成圖片，再傳給主辦單位參考！</p>
            </div>
          </Section>

          <Section id="07" title="黑色及白色衣服說明">
            <div className="grid gap-4 md:grid-cols-2">
              <Card><h3 className="text-xl font-black">⚪ 白色衣服</h3><p className="mt-3">白色衣服是我們這次特別製作的 <strong>9/12 活動衣</strong>。我們將安排多個日期及地點供大家提前領取。</p></Card>
              <Card><h3 className="text-xl font-black text-slate-950">⚫ 黑色衣服</h3><p className="mt-3 text-slate-700">黑色衣服是大家進入球場時，由紅襪球團發送的 <strong>Red Sox × Bruins Jersey</strong>。活動當天每位參加者都會有一件白色 9/12 活動衣，以及一件黑色 Red Sox × Bruins Jersey。</p></Card>
            </div>
          </Section>

          <Section id="08" title="排字活動後續公告">
            <p>之後我們會再公布每個座位在不同局數應該穿白色還是黑色、兩次排字的詳細時間、現場更換衣服的方式，以及排字期間大家需要如何配合。</p>
            <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5">
              <p className="font-black text-amber-900">排字設計最重要的是：</p>
              <div className="mt-3 grid gap-2 md:grid-cols-4">
                <div className="rounded-xl bg-white p-3 font-black">👉 字體簡單</div>
                <div className="rounded-xl bg-white p-3 font-black">👉 線條清楚</div>
                <div className="rounded-xl bg-white p-3 font-black">👉 遠方可辨識</div>
                <div className="rounded-xl bg-white p-3 font-black">👉 現場容易執行</div>
              </div>
            </div>
          </Section>

          <Section id="09" title="重要提醒">
            <ol className="list-decimal space-y-3 pl-5">
              <li>請提早下載並登入 <strong>MLB Ballpark App</strong>，不要等到比賽當天才處理。</li>
              <li>電子票預計於 <strong>8 月 22 日</strong> 發送，大家收到票的時間可能略有不同。</li>
              <li>請勿只使用電子票截圖，入場時請直接開啟 MLB Ballpark App 中的電子票。</li>
              <li>活動衣服不提供郵寄，請依照後續公布的時間與地點親自領取。</li>
              <li>活動當天請提早抵達 Lansdowne Street 集合，以免錯過賽前活動及大合照。</li>
            </ol>
          </Section>

          <ContactSection isZh={true} />

          <div className="rounded-[2rem] bg-gradient-to-r from-emerald-900 to-sky-900 p-7 text-white shadow-xl md:p-10">
            <p className="text-2xl font-black leading-tight md:text-4xl">
              讓我們一起用台灣社群的力量點亮球場，讓更多人看見台灣！🇹🇼
            </p>
            <p className="mt-5 text-3xl font-black leading-tight text-amber-300 md:text-5xl">
              Light Up Taiwan.<br />
              Let Taiwan Be Seen.<br />
              Together We Shine.
            </p>
          </div>
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
          <div className="mt-5 space-y-2 text-2xl font-black text-amber-300 md:text-3xl">
            <p>Taiwanese in Boston, Strong Together</p>
            <p>波士頓台灣人，團結在一起！</p>
          </div>
          <LanguageToggle isZh={isZh} setIsZh={setIsZh} />
          <p className="mt-6 max-w-4xl text-lg leading-9 text-emerald-50">
            Thank you again for supporting the 9/12 event. More than <strong>1,325 friends</strong> have purchased tickets, and ticket sales closed early because of the strong response.
          </p>
          <div className="mt-6 rounded-[1.5rem] border border-white/20 bg-white/10 p-5">
            <p className="text-xl font-black">🎉 The Red Sox organization has noticed the strength of the Taiwanese community.</p>
            <p className="mt-4 text-3xl font-black text-amber-300 md:text-5xl">
              Light Up Taiwan, Let Taiwan Be Seen!
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-4">
          <Card><p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Date</p><p className="mt-2 text-xl font-black">Sep. 12, 2026</p><p className="text-sm text-slate-600">Saturday</p></Card>
          <Card><p className="text-xs font-black uppercase tracking-[0.22em] text-sky-700">Game Time</p><p className="mt-2 text-xl font-black">4:15 PM</p><p className="text-sm text-slate-600">Royals vs. Red Sox</p></Card>
          <Card><p className="text-xs font-black uppercase tracking-[0.22em] text-amber-700">Participants</p><p className="mt-2 text-3xl font-black">1,325</p><p className="text-sm text-slate-600">attendees</p></Card>
          <Card><p className="text-xs font-black uppercase tracking-[0.22em] text-slate-600">Location</p><p className="mt-2 text-xl font-black">Fenway Park</p><p className="text-sm text-slate-600">Meet at Lansdowne Street</p></Card>
        </div>

        <div className="mt-8 space-y-8">
          <Section id="01" title="Event information">
            <p>Ticket sales for the 9/12 event are now closed. Thank you for the incredible support. This event will bring together <strong>1,325 participants</strong>.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>Date:</strong> Saturday, September 12, 2026</li>
              <li><strong>Game time:</strong> 4:15 PM</li>
              <li><strong>Game:</strong> Kansas City Royals vs. Boston Red Sox</li>
              <li><strong>Location:</strong> Fenway Park</li>
            </ul>
          </Section>

          <Section id="02" title="Important schedule">
            <Card>
              <h3 className="text-xl font-black text-slate-950">Saturday, August 22｜Digital ticket delivery</h3>
              <p className="mt-3">All 9/12 digital tickets are expected to be sent by this date. Because of the large number of tickets, delivery times may vary.</p>
              <p className="mt-3">Please download and log in to the official <strong>MLB Ballpark App</strong> ahead of time, and make sure the email used for purchase is added to and verified in your MLB account.</p>
            </Card>
            <Card>
              <h3 className="text-xl font-black text-slate-950">Event shirt pickup dates</h3>
              <p className="mt-3">Detailed pickup times and locations will be announced soon.</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li><strong>Friday, August 28</strong></li>
                <li><strong>Saturday, August 29</strong></li>
                <li><strong>Sunday, August 30</strong></li>
                <li><strong>Thursday, September 10</strong></li>
                <li><strong>Friday, September 11</strong></li>
              </ul>
            </Card>
          </Section>

          <Section id="03" title="Event-day schedule">
            <div className="grid gap-4 md:grid-cols-2">
              <Card><h3 className="text-xl font-black">3:00–3:30 PM</h3><p className="mt-2">Gathering and pregame activity</p></Card>
              <Card><h3 className="text-xl font-black">3:30 PM</h3><p className="mt-2">Taiwanese community group photo</p></Card>
              <Card><h3 className="text-xl font-black">After the photo</h3><p className="mt-2">Prepare to enter the ballpark</p></Card>
              <Card><h3 className="text-xl font-black">4:15 PM</h3><p className="mt-2">Royals vs. Red Sox game begins</p></Card>
            </div>
            <p className="rounded-[1.25rem] bg-emerald-50 p-5 font-black text-emerald-900">📍 Pregame meeting location: Lansdowne Street</p>
          </Section>

          <Section id="04" title="How to receive digital tickets">
            <p>Digital tickets are expected to be sent by <strong>August 22</strong>.</p>
            <ol className="list-decimal space-y-3 pl-5">
              <li><strong>Download the MLB Ballpark App.</strong></li>
              <li><strong>Sign in or create an MLB account</strong> using the same email used to purchase tickets.</li>
              <li><strong>Verify your email</strong> in your MLB account.</li>
            </ol>
          </Section>

          <Section id="05" title="Digital ticket FAQ">
            <Card><h3 className="text-xl font-black">I bought multiple tickets with the same email. How will I receive them?</h3><p className="mt-3">All tickets will be sent to the email used for purchase. You can transfer individual tickets through the MLB Ballpark App or keep them on your own phone if your group enters together.</p></Card>
            <Card><h3 className="text-xl font-black">I do not know how to use the MLB Ballpark App. What should I do?</h3><p className="mt-3">Do not worry. Volunteers can help during shirt pickup with downloading the app, signing in, verifying email, viewing tickets, and transferring tickets.</p></Card>
          </Section>

          <Section id="06" title="Light Up Taiwan seating challenge">
            <p>We plan to use the actual seating layout and black/white shirts to create large words in the stands.</p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card><p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">3rd inning</p><p className="mt-2 text-3xl font-black text-slate-950">TAIWAN</p></Card>
              <Card><p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">6th inning</p><p className="mt-2 text-xl font-black text-slate-950">Still undecided. Design submissions are welcome!</p></Card>
            </div>
            <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="text-2xl font-black text-emerald-900">Submit your seating design idea</h3>
              <p className="mt-3">Use the actual Seat Map to design clear, simple lettering with black and white seats.</p>
              <p className="mt-3">🔗 <strong>Seat Map:</strong> <a href={seatMapLink} className="break-all font-black text-emerald-800 underline">https://www.taiwaneseatboston.com/seat-map</a></p>
            </div>
          </Section>

          <Section id="07" title="Black and white shirt explanation">
            <div className="grid gap-4 md:grid-cols-2">
              <Card><h3 className="text-xl font-black">⚪ White shirt</h3><p className="mt-3">The white shirt is the special 9/12 event shirt. Pickup dates and locations will be announced soon.</p></Card>
              <Card><h3 className="text-xl font-black text-slate-950">⚫ Black shirt</h3><p className="mt-3 text-slate-700">The black shirt is the Red Sox × Bruins Jersey distributed by the Red Sox when attendees enter the ballpark. Each attendee will have both the white event shirt and the black jersey.</p></Card>
            </div>
          </Section>

          <Section id="08" title="Future lettering announcements">
            <p>We will later announce which seats should wear white or black for each inning, the exact timing of both lettering moments, how to change shirts, and how attendees should participate during the live activity.</p>
            <div className="rounded-[1.5rem] border border-amber-200 bg-amber-50 p-5">
              <p className="font-black text-amber-900">The most important design goals are:</p>
              <div className="mt-3 grid gap-2 md:grid-cols-4">
                <div className="rounded-xl bg-white p-3 font-black">Simple letters</div>
                <div className="rounded-xl bg-white p-3 font-black">Clear lines</div>
                <div className="rounded-xl bg-white p-3 font-black">Readable from far away</div>
                <div className="rounded-xl bg-white p-3 font-black">Easy to execute live</div>
              </div>
            </div>
          </Section>

          <Section id="09" title="Important reminders">
            <ol className="list-decimal space-y-3 pl-5">
              <li>Please download and sign in to the <strong>MLB Ballpark App</strong> early.</li>
              <li>Digital tickets are expected to be sent on <strong>August 22</strong>.</li>
              <li>Please do not rely only on screenshots of tickets.</li>
              <li>Event shirts will not be mailed. Please pick them up in person at announced dates and locations.</li>
              <li>Please arrive early at Lansdowne Street on event day so you do not miss the pregame activities and group photo.</li>
            </ol>
          </Section>

          <ContactSection isZh={false} />

          <div className="rounded-[2rem] bg-gradient-to-r from-emerald-900 to-sky-900 p-7 text-white shadow-xl md:p-10">
            <p className="text-2xl font-black leading-tight md:text-4xl">
              Together, let us use the strength of the Taiwanese community to light up the ballpark and let more people see Taiwan.
            </p>
            <p className="mt-5 text-3xl font-black leading-tight text-amber-300 md:text-5xl">
              Light Up Taiwan.<br />
              Let Taiwan Be Seen.<br />
              Together We Shine.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function GuidePage() {
  const [isZh, setIsZh] = useState(true);
  return isZh ? <GuideZh isZh={isZh} setIsZh={setIsZh} /> : <GuideEn isZh={isZh} setIsZh={setIsZh} />;
}
