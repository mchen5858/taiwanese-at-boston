"use client";

import React, { useState } from "react";

const addOnOrderLink = "https://www.zeffy.com/en-US/ticketing/912-t-shirt-912-t-shirt-add-on-preorder";

function InfoCard({ icon, title, price, image, imageAlt, zoomLabel, onImageClick, children, tone = "emerald" }) {
  const toneClass =
    tone === "amber"
      ? "border-amber-200 bg-gradient-to-br from-amber-50 via-white to-white"
      : tone === "sky"
      ? "border-sky-200 bg-gradient-to-br from-sky-50 via-white to-white"
      : "border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white";

  return (
    <div className={`group flex h-full flex-col overflow-hidden rounded-[2rem] border shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${toneClass}`}>
      {image ? (
        <button
          type="button"
          onClick={onImageClick}
          className="relative block w-full cursor-zoom-in overflow-hidden bg-white p-5"
        >
          <img
            src={image}
            alt={imageAlt || title}
            className="h-80 w-full object-contain transition duration-500 group-hover:scale-[1.04]"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-950/75 px-4 py-2 text-xs font-black text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
            {zoomLabel || "Click to enlarge"}
          </div>
        </button>
      ) : null}

      <div className="flex flex-1 flex-col p-7">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-black leading-tight text-slate-950">{title}</h3>
            <p className="mt-2 text-4xl font-black text-emerald-800">{price}</p>
          </div>
        </div>
        <div className="mt-5 flex-1 leading-8 text-slate-700">{children}</div>
      </div>
    </div>
  );
}

function SectionCard({ title, children }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-3xl font-black text-slate-950">{title}</h2>
      <div className="mt-5 space-y-4 leading-8 text-slate-700">{children}</div>
    </div>
  );
}

const menRows = [
  ["S", "28″", "18″", "36″"],
  ["M", "29″", "20″", "40″"],
  ["L", "30″", "22″", "44″"],
  ["XL", "31″", "24″", "48″"],
  ["2XL", "33″", "26″", "52″"],
];

const ladiesRows = [
  ["S", "25.5″", "17.25″", "34.5″", "13.25″"],
  ["M", "26″", "19.25″", "38.5″", "14″"],
  ["L", "27″", "21.25″", "42.5″", "14.75″"],
  ["XL", "28″", "23.25″", "46.5″", "15.75″"],
  ["2XL", "28.5″", "25.25″", "50.5″", "16.75″"],
];

const youthRows = [
  ["YXS", "2–4", "18″", "13.5″", "27″", "4.375″"],
  ["YS", "6–8", "20.5″", "15.5″", "31″", "5.375″"],
  ["YM", "10–12", "23″", "17″", "34″", "5.875″"],
  ["YL", "14–16", "25″", "18″", "36″", "6.5″"],
  ["YXL", "18–20", "27″", "20″", "40″", "7.5″"],
];

const toddlerRows = [
  ["2T", "15″", "11″", "22″"],
  ["3T", "16″", "12″", "24″"],
  ["4T", "17″", "13″", "26″"],
  ["5T", "18″", "14″", "28″"],
];

function SizeTable({ number, title, note, headers, rows }) {
  return (
    <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-lg">
      <div className="flex flex-col gap-4 border-b border-slate-100 bg-white p-5 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-700 text-2xl font-black text-white shadow-md">
            {number}
          </div>
          <h3 className="text-2xl font-black text-slate-950 md:text-3xl">{title}</h3>
        </div>
        {note ? <p className="rounded-full bg-amber-50 px-4 py-2 text-sm font-black text-amber-800">{note}</p> : null}
      </div>

      <div className="w-full">
        <table className="w-full table-fixed text-left text-xs md:text-sm">
          <thead className="bg-emerald-800 text-white">
            <tr>
              {headers.map((header) => (
                <th
                  key={header}
                  className="whitespace-normal break-words px-2 py-3 align-middle font-black leading-tight md:px-3 md:py-4"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row[0]} className="border-b border-slate-100 odd:bg-white even:bg-slate-50">
                {row.map((cell, index) => (
                  <td
                    key={index}
                    className={`whitespace-normal break-words px-2 py-4 align-middle md:px-3 ${
                      index === 0 ? "text-base font-black text-slate-950 md:text-lg" : "font-semibold text-slate-700"
                    }`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function NoteItem({ number, children }) {
  return (
    <div className="flex gap-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-sm font-black text-white">
        {number}
      </div>
      <p className="leading-8 text-slate-700">{children}</p>
    </div>
  );
}

export default function TshirtAddOnPage() {
  const [lang, setLang] = useState("zh");
  const [lightbox, setLightbox] = useState(null);
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
            {isZh ? "912 T-shirt 加購專區" : "912 T-shirt Add-on Preorder"}
          </p>

          <h1 className="max-w-5xl text-4xl font-black leading-tight md:text-6xl">
            {isZh ? "912 T-shirt 限時加購" : "912 T-shirt Add-on Preorder"}
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-white/85 md:text-xl">
            {isZh
              ? "因為有不少朋友詢問是否可以加購 912 活動 T-shirt，我們現在開放限時加購預購。所有加購的 T-shirt 都會與原本第一件贈送的活動 T-shirt 一起發送。"
              : "Many friends have asked whether additional 912 event T-shirts can be purchased, so we are opening a limited-time add-on preorder. All add-on T-shirts will be distributed together with the first complimentary event T-shirt."}
          </p>

          <div className="mt-7 inline-flex rounded-2xl bg-white/10 px-5 py-3 text-base font-black text-white ring-1 ring-white/20 backdrop-blur">
            {isZh ? "加購截止日期：7/1" : "Add-on preorder deadline: 7/1"}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          <InfoCard
            icon="🤍"
            title={isZh ? "白色官方製作版本" : "White Official Production Version"}
            price="$10 / 件"
            image="/tshirt-add-on/white-official-version.png"
            imageAlt={isZh ? "白色官方製作版本 T-shirt" : "White official production version T-shirt"}
            zoomLabel={isZh ? "點圖放大" : "Click to enlarge"}
            onImageClick={() =>
              setLightbox({
                src: "/tshirt-add-on/white-official-version.png",
                title: isZh ? "白色官方製作版本" : "White Official Production Version",
              })
            }
            tone="emerald"
          >
            {isZh ? (
              <>
                <p>可選 Men / Unisex、Ladies、Youth 尺寸。</p>
                <p>此款為本次活動主要大量製作款。</p>
              </>
            ) : (
              <>
                <p>Available in Men / Unisex, Ladies, and Youth sizes.</p>
                <p>This is the main production version for the event.</p>
              </>
            )}
          </InfoCard>

          <InfoCard
            icon="🖤"
            title={isZh ? "黑色投稿原創版本" : "Black Original Submitted Version"}
            price="$20 / 件"
            image="/tshirt-add-on/black-original-version.png"
            imageAlt={isZh ? "黑色投稿原創版本 T-shirt" : "Black original submitted version T-shirt"}
            zoomLabel={isZh ? "點圖放大" : "Click to enlarge"}
            onImageClick={() =>
              setLightbox({
                src: "/tshirt-add-on/black-original-version.png",
                title: isZh ? "黑色投稿原創版本" : "Black Original Submitted Version",
              })
            }
            tone="sky"
          >
            {isZh ? (
              <>
                <p>僅提供 Men / Unisex 與 Ladies 尺寸。</p>
                <p>不提供 Youth 尺寸。</p>
              </>
            ) : (
              <>
                <p>Available only in Men / Unisex and Ladies sizes.</p>
                <p>Youth sizes are not available for this version.</p>
              </>
            )}
          </InfoCard>

          <InfoCard
            icon="🧒"
            title={isZh ? "Toddler 幼兒版" : "Toddler Version"}
            price="$20 / 件"
            image="/tshirt-add-on/toddler-white-version.png"
            imageAlt={isZh ? "Toddler 幼兒版 T-shirt" : "Toddler version T-shirt"}
            zoomLabel={isZh ? "點圖放大" : "Click to enlarge"}
            onImageClick={() =>
              setLightbox({
                src: "/tshirt-add-on/toddler-white-version.png",
                title: isZh ? "Toddler 幼兒版" : "Toddler Version",
              })
            }
            tone="amber"
          >
            {isZh ? (
              <>
                <p>提供 Toddler 尺寸。</p>
                <p>屬於額外小量加購／特殊款式。</p>
              </>
            ) : (
              <>
                <p>Available in Toddler sizes.</p>
                <p>This is a small-batch add-on / special version.</p>
              </>
            )}
          </InfoCard>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <SectionCard title={isZh ? "價格說明" : "Price Explanation"}>
            {isZh ? (
              <>
                <p>白色官方製作版本是本次活動主要大量製作款，因此可以提供較低的加購價格。</p>
                <p>黑色投稿原創版本與 Toddler 幼兒版屬於額外小量加購／特殊款式，單件製作、印刷設定、處理與分發成本較高，因此價格為 $20 / 件。</p>
                <p>若扣除實際成本後仍有少量剩餘款項，將視為對 912 Taiwan Fans Night 活動的支持，用於活動相關支出。</p>
              </>
            ) : (
              <>
                <p>The white official production version is the main large-batch event T-shirt, which allows us to offer a lower add-on price.</p>
                <p>The black original submitted version and Toddler version are small-batch add-ons / special versions. Single-item production, print setup, handling, and distribution costs are higher, so the price is $20 each.</p>
                <p>If any small remaining amount is left after actual costs, it will be considered support for 912 Taiwan Fans Night and used for event-related expenses.</p>
              </>
            )}
          </SectionCard>

          <SectionCard title={isZh ? "最低製作數量說明" : "Minimum Production Quantity"}>
            {isZh ? (
              <>
                <p>黑色投稿原創版本與 Toddler 幼兒版需各自達到至少 18 件才會進行製作。</p>
                <p>若黑色投稿原創版本或 Toddler 幼兒版未達 18 件，該款式將不進行製作，已付款項將全額退費。</p>
              </>
            ) : (
              <>
                <p>The black original submitted version and Toddler version must each reach at least 18 orders to proceed with production.</p>
                <p>If either the black original submitted version or the Toddler version does not reach 18 orders, that style will not be produced and payments for that style will be fully refunded.</p>
              </>
            )}
          </SectionCard>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <SectionCard title={isZh ? "成品差異提醒" : "Product Variation Notice"}>
            {isZh ? (
              <>
                <p>所有圖片與樣品圖僅供參考，實際成品可能因衣服品牌、尺寸、版型、布料批次、印刷方式與螢幕顯示不同，而在顏色、材質、印刷大小、位置或整體效果上略有差異。</p>
                <p>不同款式與尺寸的 T-shirt 版型與手感也可能不完全相同。</p>
              </>
            ) : (
              <>
                <p>All images and mockups are for reference only. The final product may vary slightly in color, material, print size, placement, or overall appearance due to shirt brand, size, fit, fabric batch, printing method, and screen display differences.</p>
                <p>Different T-shirt styles and sizes may also vary in fit and feel.</p>
              </>
            )}
          </SectionCard>

          <SectionCard title={isZh ? "客製預購與退換說明" : "Custom Preorder and Refund Policy"}>
            {isZh ? (
              <>
                <p>本次加購為客製預購商品，付款完成後即視為訂購成功。</p>
                <p>除非主辦方印製錯誤或寄發錯誤，付款後恕不接受取消、退費、換款或更換尺寸。</p>
                <p>付款即表示您已了解並同意以上說明。</p>
              </>
            ) : (
              <>
                <p>This add-on purchase is a custom preorder item. Once payment is completed, the order is considered confirmed.</p>
                <p>Unless there is a printing error or fulfillment error by the organizer, cancellations, refunds, style changes, or size changes will not be accepted after payment.</p>
                <p>By completing payment, you acknowledge and agree to the terms above.</p>
              </>
            )}
          </SectionCard>
        </div>


        <div className="mt-10 rounded-[2rem] border border-emerald-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-3xl font-black text-slate-950">
            {isZh ? "款式與尺寸整理" : "Style and Size Summary"}
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
            <table className="w-full table-fixed text-left text-xs md:text-sm">
              <thead className="bg-emerald-800 text-white">
                <tr>
                  <th className="px-3 py-4 font-black">{isZh ? "款式" : "Style"}</th>
                  <th className="px-3 py-4 font-black">{isZh ? "價格" : "Price"}</th>
                  <th className="px-3 py-4 font-black">{isZh ? "可選尺寸" : "Available Sizes"}</th>
                </tr>
              </thead>
              <tbody>
                {[
                  [isZh ? "白色官方製作版本" : "White Official Production Version", "$10", isZh ? "Men / Unisex、Ladies、Youth" : "Men / Unisex, Ladies, Youth"],
                  [isZh ? "黑色投稿原創版本" : "Black Original Submitted Version", "$20", isZh ? "Men / Unisex、Ladies；不提供 Youth" : "Men / Unisex, Ladies; no Youth sizes"],
                  [isZh ? "Toddler 幼兒版" : "Toddler Version", "$20", isZh ? "Toddler 尺寸" : "Toddler sizes"],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-slate-100 odd:bg-white even:bg-slate-50">
                    {row.map((cell, index) => (
                      <td key={index} className="px-3 py-4 align-middle font-semibold leading-7 text-slate-700">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-emerald-200 bg-emerald-50/60 p-6 shadow-sm md:p-8">
          <h2 className="text-3xl font-black text-slate-950">
            {isZh ? "Size Chart｜尺寸表" : "Size Chart"}
          </h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-700">
            {isZh
              ? "請在加購前先確認尺寸。建議以自己現有的 T-shirt 平量後對照，會最準確。Youth 的年齡欄位僅供參考，實際仍應以身形與平量尺寸為準。"
              : "Please review the size chart before ordering add-on T-shirts. For the most accurate fit, compare these measurements with a T-shirt you already own. Youth age ranges are only a general reference; body size and flat measurements should be used for the final decision."}
          </p>

          <div className="mt-8 grid gap-8">
            <SizeTable
              number="1"
              title={isZh ? "Men / Unisex｜男版 / 中性版" : "Men / Unisex"}
              note={isZh ? "Adult XS not available 成人 XS 無提供" : "Adult XS not available"}
              headers={isZh ? ["Size", "Body Length 衣長", "Flat Chest Width 平放胸寬", "Chest Around 約胸圍"] : ["Size", "Body Length", "Flat Chest Width", "Chest Around"]}
              rows={menRows}
            />

            <SizeTable
              number="2"
              title={isZh ? "Ladies｜女版" : "Ladies"}
              note={isZh ? "Adult XS not available 成人 XS 無提供" : "Adult XS not available"}
              headers={isZh ? ["Size", "Body Length 衣長", "Flat Chest Width 平放胸寬", "Chest Around 約胸圍", "Sleeve Length 袖長"] : ["Size", "Body Length", "Flat Chest Width", "Chest Around", "Sleeve Length"]}
              rows={ladiesRows}
            />

            <SizeTable
              number="3"
              title={isZh ? "Youth｜兒童版" : "Youth"}
              headers={isZh ? ["Size", "Approx. Age / Body Size 參考年齡／體型", "Body Length 衣長", "Flat Chest Width 平放胸寬", "Chest Around 約胸圍", "Sleeve Length 袖長"] : ["Size", "Approx. Age / Body Size", "Body Length", "Flat Chest Width", "Chest Around", "Sleeve Length"]}
              rows={youthRows}
            />

            <SizeTable
              number="4"
              title={isZh ? "Toddler｜幼兒版" : "Toddler"}
              headers={isZh ? ["Toddler Size", "衣長 Body Length", "平放胸寬 Chest Width", "約胸圍 Chest Around"] : ["Toddler Size", "Body Length", "Chest Width", "Chest Around"]}
              rows={toddlerRows}
            />
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-emerald-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-emerald-700 text-2xl font-black text-emerald-700">
              !
            </div>
            <h2 className="text-3xl font-black text-slate-950">
              {isZh ? "Size Notes｜尺寸提醒" : "Size Notes"}
            </h2>
          </div>

          <div className="mt-7 grid gap-5">
            <NoteItem number="1">
              {isZh ? "Measurements are approximate and may vary slightly.｜尺寸為約略量，可能會有些誤差。" : "Measurements are approximate and may vary slightly."}
            </NoteItem>
            <NoteItem number="2">
              {isZh ? "Men / Unisex style has a standard straight fit.｜男版 / 中性版版型較標準、較直筒。" : "Men / Unisex style has a standard straight fit."}
            </NoteItem>
            <NoteItem number="3">
              {isZh ? "Ladies style has a more fitted cut and is generally shorter than Men / Unisex.｜女版版型較合身，通常也比男版 / 中性版稍短。" : "Ladies style has a more fitted cut and is generally shorter than Men / Unisex."}
            </NoteItem>
            <NoteItem number="4">
              {isZh ? "If you usually wear Adult XS, Youth XL or Adult S may be the closest options.｜平常穿成人 XS 的朋友，可考慮 Youth XL 或 Adult S。" : "If you usually wear Adult XS, Youth XL or Adult S may be the closest options."}
            </NoteItem>
            <NoteItem number="5">
              {isZh ? "Youth sizes are generally shorter and narrower than adult sizes.｜兒童版通常比成人版更短，也更窄。" : "Youth sizes are generally shorter and narrower than adult sizes."}
            </NoteItem>
            <NoteItem number="6">
              {isZh ? "If you are between sizes or prefer a looser fit, we recommend sizing up.｜若介於兩個尺寸之間，或喜歡寬鬆穿著，建議選大一號。" : "If you are between sizes or prefer a looser fit, we recommend sizing up."}
            </NoteItem>
            <NoteItem number="7">
              {isZh ? "For the most accurate fit, please compare these measurements with a T-shirt you already own.｜建議以自己現有的 T-shirt 平量後對照，會最準確。" : "For the most accurate fit, please compare these measurements with a T-shirt you already own."}
            </NoteItem>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] bg-gradient-to-br from-emerald-900 to-sky-900 p-7 text-white shadow-lg md:p-9">
          <h2 className="text-3xl font-black text-white">
            {isZh ? "準備加購 912 T-shirt 了嗎？" : "Ready to Add On a 912 T-shirt?"}
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/85">
            {isZh
              ? "請確認款式、尺寸、最低製作數量與退換說明後，於 7/1 前完成加購預購。"
              : "Please review the style, size, minimum quantity, and refund policy before completing your add-on preorder by 7/1."}
          </p>

          <div className="mt-8">
            {addOnOrderLink ? (
              <a
                href={addOnOrderLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center rounded-full bg-amber-300 px-8 py-4 text-base font-black text-emerald-950 shadow-md transition hover:-translate-y-0.5 hover:bg-amber-200"
              >
                {isZh ? "前往加購預購表單" : "Go to Add-on Preorder Form"}
              </a>
            ) : (
              <div className="inline-flex justify-center rounded-full bg-amber-300 px-8 py-4 text-base font-black text-emerald-950 shadow-md">
                {isZh ? "加購表單連結即將開放" : "Order form link coming soon"}
              </div>
            )}

            <div className="mt-5">
              <a href="/" className="text-sm font-black text-white/80 underline-offset-4 transition hover:text-white hover:underline">
                {isZh ? "回到 912 活動首頁" : "Back to 912 Home"}
              </a>
            </div>
          </div>
        </div>
      </section>
      {lightbox ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
              <h2 className="text-xl font-black text-slate-950">{lightbox.title}</h2>
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-700 transition hover:bg-slate-200"
              >
                {isZh ? "關閉" : "Close"}
              </button>
            </div>
            <div className="max-h-[78vh] overflow-auto p-4">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="mx-auto max-h-[74vh] w-full object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}

    </main>
  );
}
