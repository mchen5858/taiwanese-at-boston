"use client";

import React from "react";

function Section({ number, title, children }) {
  return (
    <section className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Step {number}</p>
      <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 md:text-3xl">{title}</h2>
      <div className="mt-5 space-y-5 text-base leading-8 text-slate-700">{children}</div>
    </section>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 ${className}`}>{children}</div>;
}

function Screenshot({ src, alt, caption, wide = false }) {
  return (
    <figure className={`mx-auto overflow-hidden rounded-[1.25rem] border border-slate-200 bg-white p-3 shadow-sm ${wide ? "max-w-md" : "max-w-[220px]"}`}>
      <img src={src} alt={alt} className="h-auto w-full rounded-[0.9rem]" />
      <figcaption className="mt-3 text-center text-xs font-bold leading-5 text-slate-600">
        {caption}
      </figcaption>
    </figure>
  );
}

function ScreenshotGrid({ children }) {
  return <div className="grid items-start gap-5 md:grid-cols-2">{children}</div>;
}

export default function TicketGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-sky-50 text-slate-900">
      <section className="mx-auto max-w-5xl px-5 py-8 md:px-8 md:py-12">
        <div className="rounded-[2.25rem] bg-gradient-to-r from-emerald-900 via-emerald-800 to-sky-900 p-7 text-white shadow-2xl md:p-10">
          <div className="flex flex-wrap justify-end gap-2">
            <a href="/" className="rounded-full bg-white/15 px-5 py-2.5 text-sm font-black text-white ring-1 ring-white/20 transition hover:bg-white/20">回到 912 首頁</a>
            <a href="/912-guide" className="rounded-full bg-amber-300 px-5 py-2.5 text-sm font-black text-slate-950 transition hover:bg-amber-200">回到懶人包</a>
          </div>
          <p className="mt-6 text-xs font-black uppercase tracking-[0.3em] text-emerald-100">9/12 Red Sox Digital Ticket Guide</p>
          <h1 className="mt-4 text-4xl font-black leading-tight tracking-tight md:text-6xl">⚾ 9/12 Red Sox 電子票使用教學</h1>
          <p className="mt-4 text-2xl font-black text-amber-300 md:text-3xl">MLB Ballpark App 下載、收票、轉票完整說明</p>
          <p className="mt-6 max-w-4xl text-lg leading-9 text-emerald-50">為了順利收到並使用 9/12 Red Sox 電子票，請大家先完成以下步驟。建議大家提早完成，不要等到比賽當天才處理。</p>
        </div>

        <div className="mt-8 rounded-[1.5rem] border border-red-200 bg-red-50 p-5 shadow-sm">
          <p className="text-xl font-black text-red-800">⚠️ 重要提醒</p>
          <p className="mt-3 text-lg font-bold leading-8 text-slate-800">請下載 <strong>MLB Ballpark App</strong>，不是 <strong>MLB App</strong>。我們的電子票需要在 MLB Ballpark App 裡查看與使用。</p>
        </div>

        <div className="mt-8 space-y-8">
          <Section number="01" title="請先下載正確的 App">
            <p className="text-lg font-bold text-slate-800">
              請注意：電子票要使用的是 <strong>MLB Ballpark App</strong>，不是一般的 <strong>MLB App</strong>。
            </p>

            <div className="grid gap-5 md:grid-cols-2">
              <Card className="border-emerald-300 bg-emerald-50">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">✅</div>
                  <div>
                    <p className="text-2xl font-black text-emerald-900">請下載這個</p>
                    <p className="mt-2 text-xl font-black text-slate-950">MLB Ballpark App</p>
                    <p className="mt-2 text-sm font-bold text-slate-600">綠色 Ballpark 圖示，App 名稱是 MLB Ballpark。</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Screenshot
                    src="/ticket-guide/correct-mlb-ballpark-app.jpg"
                    alt="MLB Ballpark App screenshot"
                    caption="正確：MLB Ballpark App"
                  />
                </div>
              </Card>

              <Card className="border-red-300 bg-red-50">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">❌</div>
                  <div>
                    <p className="text-2xl font-black text-red-800">不要下載這個</p>
                    <p className="mt-2 text-xl font-black text-slate-950">MLB App</p>
                    <p className="mt-2 text-sm font-bold text-slate-600">藍色 MLB 圖示，這不是電子票使用的 App。</p>
                  </div>
                </div>
                <div className="mt-4">
                  <Screenshot
                    src="/ticket-guide/wrong-mlb-app.jpg"
                    alt="MLB App screenshot"
                    caption="錯誤：MLB App"
                  />
                </div>
              </Card>
            </div>
          </Section>

          <Section number="02" title="打開 MLB Ballpark App，點 Get Started">
            <p>
              下載完成後，請先打開 <strong>MLB Ballpark App</strong>。第一次進入 App 時，畫面下方會出現 <strong>Get Started</strong>，請先點這個按鈕。
            </p>

            <Screenshot
              src="/ticket-guide/ballpark-get-started.jpg"
              alt="MLB Ballpark Get Started screen"
              caption="打開 MLB Ballpark App 後，請點 Get Started"
            />
</Section>

          <Section number="03" title="建立 MLB 帳號 / Create an Account">
            <ol className="list-decimal space-y-2 pl-5">
              <li>點完 <strong>Get Started</strong> 後，如果還沒有帳號，請選擇 <strong>Create an Account</strong></li>
              <li>填寫 First Name、Last Name、Email Address、Password、Confirm Password、Birthdate</li>
              <li>完成後即可建立 MLB 帳號</li>
            </ol>

            <Screenshot
              src="/ticket-guide/create-account.jpg"
              alt="Create an Account screen"
              caption="填寫資料建立 MLB 帳號"
            />

            <Card className="border-amber-200 bg-amber-50">
              <p className="text-xl font-black text-amber-900">建議</p>
              <p className="mt-3">
                Email 請務必與 <strong>購買 912 活動票券時填寫的 Email</strong> 相同。若 Email 不相同，請務必聯絡主辦單位（波克萊基金會）協助更改 Email，避免後續無法順利收到或接受電子票。
              </p>
            </Card>
          </Section>

          <Section number="03" title="收到電子票後要做什麼？">
            <p>當我們把票寄出後，您會收到一封來自 <strong>redsox.com Tickets</strong> 的 Email。信件標題可能會類似：</p>

            <Screenshot
              src="/ticket-guide/forwarded-email-top.jpg"
              alt="Forwarded ticket email"
              caption="收到 redsox.com Tickets 寄來的電子票 Email"
            />

            <ul className="list-disc space-y-2 pl-5">
              <li><strong>You have just been forwarded a Red Sox ticket for 2026-09-12</strong></li>
              <li>或其他類似的轉票通知信</li>
            </ul>
            <p>信中會顯示 Royals @ Red Sox、Sat, Sep 12、Fenway Park，以及您的 SEC / ROW / SEAT。</p>
          </Section>

          <Section number="04" title="收到 Email 後，請務必點選 Access Tickets">
            <p>這一步很重要，<strong>不要只收到 Email 就以為完成了</strong>。請打開 Email，找到 <strong>Access Tickets</strong> 並點下去。如果系統要求登入，請使用您剛剛註冊的 MLB 帳號登入。</p>

            <Screenshot
              src="/ticket-guide/access-tickets-email.jpg"
              alt="Access Tickets email button"
              caption="在 Email 裡點 Access Tickets"
            />

          </Section>

          <Section number="05" title="回到 MLB Ballpark App 確認票券">
            <p>完成 Access Tickets 之後，請打開 <strong>MLB Ballpark App</strong>，點下方 <strong>Tickets</strong>。如果設定成功，您會看到 Royals @ Red Sox、Fenway Park 與自己的 SEC / ROW / SEAT。</p>

            <ScreenshotGrid>
              <Screenshot
                src="/ticket-guide/ticket-wallet-card.jpg"
                alt="Ticket wallet card"
                caption="Tickets / Wallet 會出現 Royals @ Red Sox"
              />
              <Screenshot
                src="/ticket-guide/ticket-wallet-list.jpg"
                alt="Ticket list with section row seat"
                caption="可看到 SEC / ROW / SEAT，點 Open 打開票券"
              />
            </ScreenshotGrid>

            <Card className="border-emerald-200 bg-emerald-50"><p className="font-black text-emerald-900">只要能在 MLB Ballpark App → Tickets 裡看到票券，就代表您已經成功收到電子票。</p></Card>
          </Section>

          
          <Section number="06" title="打開票券與 Barcode 顯示">
            <p>
              點選票券旁邊的 <strong>Open</strong> 之後，就會看到該張票的詳細畫面，包括 SEC、ROW、SEAT。
            </p>
            <Screenshot
              src="/ticket-guide/open-ticket-barcode.jpg"
              alt="Opened ticket barcode screen"
              caption="打開票券後會看到 SEC / ROW / SEAT 與 Barcode"
              wide
            />
            <p>
              如果票券上顯示 <strong>Barcode Unavailable</strong> 或 <strong>Barcode will display at a later time</strong>，通常不用擔心。這代表票已經在帳戶裡，只是條碼尚未開放顯示，接近比賽日時通常就會出現。
            </p>
          </Section>

<Section number="06" title="跟家人朋友一起去，可以不用分票">
            <p>如果大家會 <strong>一起到場、一起進場</strong>，最簡單的方式是由一個人持有所有電子票，入場時依序出示每一張票即可。</p>
            <ul className="list-disc space-y-2 pl-5">
              <li><strong>一起進場：</strong>可以由一人保管所有票</li>
              <li><strong>分開到場：</strong>建議把票轉給各自的人</li>
            </ul>
          </Section>

          <Section number="07" title="如何把電子票轉給家人或朋友？">
            <div className="space-y-4">
              <Card><h3 className="text-xl font-black">Step 1｜打開 MLB Ballpark App</h3><p className="mt-2">點選下方 <strong>Tickets</strong>，進入該場比賽票券頁面。</p></Card>
              <Card><h3 className="text-xl font-black">Step 2｜點選 Forward Tickets</h3><p className="mt-2">在票券頁面中點選 <strong>Forward Tickets</strong>，會看到您持有的所有票券與 SEC / ROW / SEAT。</p></Card>
              <Card><h3 className="text-xl font-black">Step 3｜勾選要轉出的票</h3><p className="mt-2">勾選要轉給家人或朋友的票，選好後按 <strong>Forward Tickets</strong>。</p></Card>
              <Card><h3 className="text-xl font-black">Step 4｜選擇 Via Email</h3><p className="mt-2">系統可能會出現 Select from Contacts、Via Email、Share Link。建議使用 <strong>Via Email</strong>。</p></Card>
              <Card><h3 className="text-xl font-black">Step 5｜輸入對方 Email</h3><p className="mt-2">輸入對方 Email 後送出。畫面若顯示 <strong>Waiting for [對方 Email] to accept</strong>，代表票已送出，但對方還沒完成接受。</p></Card>
            </div>
          </Section>

          <Section number="08" title="收到票的人要怎麼做？">
            <ol className="list-decimal space-y-2 pl-5">
              <li>打開 redsox.com Tickets 的 Email</li>
              <li>點選 <strong>Access Tickets</strong></li>
              <li>使用自己的 MLB 帳號登入</li>
              <li>到 <strong>MLB Ballpark App → Tickets</strong> 確認票券是否出現</li>
            </ol>
            <Card className="border-sky-200 bg-sky-50"><p><strong>These ticket(s) have automatically been accepted into your account.</strong> 表示票已自動加入對方帳戶，但仍建議打開 MLB Ballpark App 確認一次。</p></Card>
          </Section>

          <Section number="09" title="怎麼知道轉票成功？">
            <p>當對方接受票後，畫面會從 <strong>Waiting for [對方 Email] to accept</strong> 變成 <strong>Forward accepted by [對方 Email]</strong>。您也可能收到 <strong>Your ticket forward for 2026-09-12 has been accepted</strong> 的確認信。</p>
          </Section>

          <Section number="10" title="如果票已經在 App 裡，還需要轉票嗎？">
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="border-emerald-200 bg-emerald-50"><h3 className="text-xl font-black text-emerald-900">不需要轉票</h3><p className="mt-3">大家會一起到球場、一起排隊進場，由一個人統一保管票券。</p></Card>
              <Card className="border-amber-200 bg-amber-50"><h3 className="text-xl font-black text-amber-900">建議轉票</h3><p className="mt-3">大家會分開到球場、有人可能晚到，或每個人想自己保管自己的票。</p></Card>
            </div>
          </Section>
        </div>
      </section>
    </main>
  );
}
