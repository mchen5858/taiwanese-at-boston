"use client";

import React from "react";

const seatMapLink = "/seat-map";

function Card({ children, className = "" }) {
  return (
    <div className={`rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

function Section({ id, title, children }) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">
        Section {id}
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

export default function GuidePage() {
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
              <p className="mt-3">領取活動衣服時，如果有 MLB Ballpark App、電子票或轉票方面的問題，現場志工也可以協助大家處理。</p>
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
            <Card>
              <h3 className="text-xl font-black text-slate-950">電子票發送後</h3>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>直接在 MLB Ballpark App 的 <strong>Tickets／Wallet</strong> 中看到門票；或</li>
                <li>先收到 MLB 寄出的 Email，請您點擊 <strong>Accept Tickets</strong> 或 <strong>Access Tickets</strong>。</li>
              </ol>
              <p className="mt-3">也請記得檢查收件匣、垃圾郵件匣、Promotions／促銷內容匣。</p>
            </Card>
          </Section>

          <Section id="05" title="電子票常見問題">
            <Card><h3 className="text-xl font-black">我用同一個 Email 購買了很多張票，會怎麼收到？</h3><p className="mt-3">所有門票都會發送至您購票時使用的同一個 Email。收到門票後，您可以在 MLB Ballpark App 中將個別門票轉給親友，或將所有門票保留在自己的手機裡，活動當天與親友一起入場。</p></Card>
            <Card><h3 className="text-xl font-black">我不會使用 MLB Ballpark App，怎麼辦？</h3><p className="mt-3">不用擔心！您可以透過 LINE QR Code 或 Email 與主辦單位聯絡。在領取活動衣服時，現場志工也可以協助下載 App、登入帳號、確認 Email、查看電子票與轉票。</p></Card>
            <Card><h3 className="text-xl font-black">我沒有收到電子票，怎麼辦？</h3><ol className="mt-3 list-decimal space-y-2 pl-5"><li>是否登入正確的 MLB 帳號。</li><li>是否已經檢查垃圾郵件匣。</li><li>購票使用的 Email 是否已經完成驗證。</li><li>App 的 Tickets／Wallet 中是否已經出現門票。</li></ol></Card>
            <Card><h3 className="text-xl font-black">購票 Email 和 Ballpark App 登入 Email 不一樣，怎麼辦？</h3><p className="mt-3">您可以將購票時使用的 Email 加入您的 MLB 帳號，並完成驗證。如果不知道如何操作，請透過 LINE QR Code 或 Email 與主辦單位聯絡，或在領取活動衣服時請現場志工協助。</p></Card>
          </Section>

          <Section id="06" title="Light Up Taiwan 排字挑戰">
            <p>我們計畫利用現場的實際座位配置，以及黑色、白色兩種衣服，在觀眾席上排出大型文字。</p>
            <div className="grid gap-4 md:grid-cols-2">
              <Card><p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">第 3 局</p><p className="mt-2 text-3xl font-black text-slate-950">TAIWAN</p></Card>
              <Card><p className="text-xs font-black uppercase tracking-[0.22em] text-slate-500">第 6 局</p><p className="mt-2 text-3xl font-black text-slate-950">TW ❤️ RED SOX</p></Card>
            </div>
            <div className="rounded-[1.5rem] border border-emerald-200 bg-emerald-50 p-5">
              <h3 className="text-2xl font-black text-emerald-900">歡迎大家投稿排字設計</h3>
              <p className="mt-3">目前排字設計仍在規劃與測試階段，我們也仍然接受大家投稿排字方案！</p>
              <p className="mt-3">🔗 <strong>排字設計網址：</strong> <a href={seatMapLink} className="break-all font-black text-emerald-800 underline">https://www.taiwaneseatboston.com/seat-map</a></p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>TAIWAN</li>
                <li>TW ❤️ RED SOX</li>
                <li>其他簡單、清楚且適合現場呈現的創意文字</li>
              </ul>
              <p className="mt-4">完成設計後，歡迎將畫面匯出成圖片，再傳給主辦單位參考！</p>
            </div>
          </Section>

          <Section id="07" title="黑色及白色衣服說明">
            <div className="grid gap-4 md:grid-cols-2">
              <Card><h3 className="text-xl font-black">⚪ 白色衣服</h3><p className="mt-3">白色衣服是我們這次特別製作的 <strong>9/12 活動衣</strong>。我們將安排多個日期及地點供大家提前領取，也希望大家在活動當天，可以直接穿著白色活動衣前往 Fenway Park。</p></Card>
              <Card className="border-slate-200 bg-white text-slate-900"><h3 className="text-xl font-black text-slate-950">⚫ 黑色衣服</h3><p className="mt-3 text-slate-700">黑色衣服是大家進入球場時，由紅襪球團發送的 <strong>Red Sox × Bruins Jersey</strong>。活動當天每位參加者都會有一件白色 9/12 活動衣，以及一件黑色 Red Sox × Bruins Jersey。</p></Card>
            </div>
          </Section>

          <Section id="08" title="排字活動後續公告">
            <p>之後我們會再公布：</p>
            <div className="grid gap-3 md:grid-cols-2">
              <div className="rounded-2xl bg-slate-50 p-4 font-bold">📍 每個座位在不同局數應該穿白色還是黑色</div>
              <div className="rounded-2xl bg-slate-50 p-4 font-bold">⏰ 兩次排字的詳細時間與準備方式</div>
              <div className="rounded-2xl bg-slate-50 p-4 font-bold">👕 現場更換衣服的方式</div>
              <div className="rounded-2xl bg-slate-50 p-4 font-bold">📣 排字期間大家需要如何配合</div>
            </div>
            <p>老實說，這真的是一個非常困難的挑戰。因為我們的座位區並不是一個完整的長方形，而且每一區、每一排的座位數也不完全相同，所以最後呈現出來的效果會如何，目前我們也無法完全確定。</p>
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
              <li>如果同行者不會同時抵達，請事先將個別門票轉給對方。</li>
              <li>請在活動前先確認所有門票都已經出現在 Tickets／Wallet 中。</li>
              <li>不會操作或沒有收到票都不用擔心，領取活動衣服時，現場志工可以協助處理。</li>
              <li>活動衣服不提供郵寄，請依照後續公布的時間與地點親自領取。</li>
              <li>活動當天請提早抵達 Lansdowne Street 集合，以免錯過賽前活動及大合照。</li>
              <li>請大家持續注意後續公告，包括衣服發放地點、排字座位安排及活動當天詳細流程。</li>
            </ol>
          </Section>

          <Section id="10" title="聯絡主辦單位">
            <div className="grid gap-5 md:grid-cols-2">
              <Card>
                <h3 className="text-xl font-black text-slate-950">主辦單位 LINE</h3>
                <p className="mt-3">
                  若有個別問題、隊伍修正、電子票、活動合作或志工相關問題，可以透過主辦單位 LINE 聯絡。
                </p>
                <div className="mt-5 max-w-[260px] rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                  <img
                    src="/organizer-line-qr.jpg"
                    alt="主辦單位 LINE QR Code"
                    className="h-auto w-full rounded-xl"
                  />
                </div>
              </Card>
              <Card>
                <h3 className="text-xl font-black text-slate-950">Email</h3>
                <p className="mt-3">
                  也可以透過 Email 聯絡主辦單位：
                </p>
                <p className="mt-3 text-xl font-black text-emerald-800">
                  <a href="mailto:medianchen@gmail.com" className="underline">
                    medianchen@gmail.com
                  </a>
                </p>
              </Card>
            </div>
          </Section>

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
