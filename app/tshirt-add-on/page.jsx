"use client";

import React, { useState } from "react";

const addOnOrderLink = "https://www.zeffy.com/en-US/ticketing/912-t-shirt-912-t-shirt-add-on-preorder";

const whiteImage = "/tshirt-add-on/white-official-version.png";
const blackImage = "/tshirt-add-on/black-original-version.png";

const menRows = [
  ["S", "28″", "18″"],
  ["M", "29″", "20″"],
  ["L", "30″", "22″"],
  ["XL", "31″", "24″"],
  ["2XL", "33″", "26″"],
];

const ladiesRows = [
  ["S", "25.5″", "17.25″"],
  ["M", "26″", "19.25″"],
  ["L", "27″", "21.25″"],
  ["XL", "28″", "23.25″"],
  ["2XL", "28.5″", "25.25″"],
];

const youthRows = [
  ["YXS", "2–4", "18″", "13.5″"],
  ["YS", "6–8", "20.5″", "15.5″"],
  ["YM", "10–12", "23″", "17″"],
  ["YL", "14–16", "25″", "18″"],
  ["YXL", "18–20", "27″", "20″"],
];

function InfoCard({ title, children }) {
  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
      <h3 className="text-2xl font-black text-slate-950 md:text-3xl">{title}</h3>
      <div className="mt-5 space-y-4 text-base leading-8 text-slate-700">{children}</div>
    </div>
  );
}

function ProductCard({ image, imageAlt, icon, title, price, children, onImageClick }) {
  return (
    <div className="group overflow-hidden rounded-[2.25rem] border border-emerald-100 bg-white shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <button
        type="button"
        onClick={onImageClick}
        className="relative flex h-80 w-full items-center justify-center bg-gradient-to-br from-white via-slate-50 to-emerald-50 p-7"
        aria-label={`View ${imageAlt}`}
      >
        <img src={image} alt={imageAlt} className="max-h-full max-w-full object-contain transition duration-300 group-hover:scale-[1.03]" />
        <div className="absolute bottom-4 rounded-full bg-slate-950/75 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white opacity-0 transition group-hover:opacity-100">
          點圖放大
        </div>
      </button>

      <div className="p-7 md:p-8">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-50 text-3xl shadow-sm ring-1 ring-emerald-100">
            {icon}
          </div>
          <div>
            <h3 className="text-2xl font-black leading-tight text-slate-950">{title}</h3>
            <p className="mt-2 text-4xl font-black text-emerald-800">{price}</p>
          </div>
        </div>
        <div className="mt-6 space-y-3 text-base leading-8 text-slate-700">{children}</div>
      </div>
    </div>
  );
}

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

      <table className="w-full table-fixed text-left text-xs md:text-sm">
        <thead className="bg-emerald-800 text-white">
          <tr>
            {headers.map((header) => (
              <th key={header} className="whitespace-normal break-words px-2 py-3 align-middle font-black leading-tight md:px-3 md:py-4">
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
                  key={`${row[0]}-${index}`}
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
  const [isZh, setIsZh] = useState(true);
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (image, title) => setLightbox({ image, title });
  const closeLightbox = () => setLightbox(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-emerald-50 via-white to-sky-50 text-slate-900">
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-800 to-sky-800 px-5 py-16 text-white md:px-8 md:py-24">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <button
            onClick={() => setIsZh(!isZh)}
            className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-black text-white backdrop-blur transition hover:bg-white/20"
          >
            {isZh ? "English" : "中文"}
          </button>

          <p className="mt-10 text-sm font-black uppercase tracking-[0.35em] text-amber-200">
            912 T-shirt Add-on
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
            {isZh ? "912 T-shirt 加購預購開放中" : "912 T-shirt Add-on Preorder Is Open"}
          </h1>
          <p className="mt-6 max-w-3xl text-lg font-semibold leading-9 text-white/90 md:text-xl">
            {isZh
              ? "目前仍可加購白色官方版與黑色投稿原創版。所有加購 T-shirt 將會與原本每位購票者的第一件活動 T-shirt 一起發放。"
              : "Add-on preorder is open for the white official version and black original version. All add-on T-shirts will be distributed together with each ticket holder’s first complimentary event T-shirt."}
          </p>
          <div className="mt-8 inline-flex rounded-2xl bg-amber-300 px-5 py-3 text-base font-black text-emerald-950 shadow-lg">
            {isZh ? "加購開放中" : "Add-ons Open"}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <ProductCard
            image={whiteImage}
            imageAlt="White official production version"
            icon="⚪"
            title={isZh ? "白色官方製作版本" : "White Official Production Version"}
            price="$10 / 件"
            onImageClick={() => openLightbox(whiteImage, isZh ? "白色官方製作版本" : "White Official Production Version")}
          >
            <p>{isZh ? "提供 Men/Unisex、Ladies、Youth 尺寸。" : "Available in Men/Unisex, Ladies, and Youth sizes."}</p>
            <p>{isZh ? "這是本次活動主要大量製作款，因此加購價格較低。" : "This is the main large-batch event T-shirt, so the add-on price is lower."}</p>
          </ProductCard>

          <ProductCard
            image={blackImage}
            imageAlt="Black original submitted version"
            icon="⚫"
            title={isZh ? "黑色投稿原創版本" : "Black Original Submitted Version"}
            price="$20 / 件"
            onImageClick={() => openLightbox(blackImage, isZh ? "黑色投稿原創版本" : "Black Original Submitted Version")}
          >
            <p>{isZh ? "提供 Men/Unisex 與 Ladies 尺寸，不提供 Youth 尺寸。" : "Available in Men/Unisex and Ladies sizes. Youth size is not available."}</p>
            <p>{isZh ? "屬於額外小量加購／特殊款式。" : "This is a small-batch add-on / special version."}</p>
          </ProductCard>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <InfoCard title={isZh ? "價格說明" : "Price Explanation"}>
            {isZh ? (
              <>
                <p>白色官方製作版本是本次活動主要大量製作款，因此可以提供較低的加購價格。</p>
                <p>黑色投稿原創版本屬於額外小量加購／特殊款式，單件製作、印刷設定、處理與分發成本較高，因此價格為 $20 / 件。</p>
                <p>若扣除實際成本後仍有少量剩餘款項，將視為對 912 Taiwan Fans Night 活動的支持，用於活動相關支出。</p>
              </>
            ) : (
              <>
                <p>The white official production version is the main large-batch event T-shirt, which allows us to offer a lower add-on price.</p>
                <p>The black original submitted version is a small-batch add-on / special version. Single-item production, print setup, handling, and distribution costs are higher, so the price is $20 each.</p>
                <p>If any small remaining amount is left after actual costs, it will be considered support for 912 Taiwan Fans Night and used for event-related expenses.</p>
              </>
            )}
          </InfoCard>

          <InfoCard title={isZh ? "最低製作數量說明" : "Minimum Production Quantity"}>
            {isZh ? (
              <>
                <p>黑色投稿原創版本需達到至少 18 件才會進行製作。</p>
                <p>若黑色投稿原創版本未達 18 件，該款式將不進行製作，已付款項將全額退費。</p>
              </>
            ) : (
              <>
                <p>The black original submitted version must reach at least 18 orders to proceed with production.</p>
                <p>If the black original submitted version does not reach 18 orders, that style will not be produced and payments for that style will be fully refunded.</p>
              </>
            )}
          </InfoCard>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <InfoCard title={isZh ? "成品差異提醒" : "Product Variation Notice"}>
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
          </InfoCard>

          <InfoCard title={isZh ? "客製預購與退換說明" : "Custom Preorder and Refund Policy"}>
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
          </InfoCard>
        </div>

        <div className="mt-10 rounded-[2rem] border border-amber-200 bg-amber-50 p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-3xl shadow-sm">
              📏
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-amber-700">
                {isZh ? "實際尺寸提醒" : "Actual Fit Notice"}
              </p>
              <h2 className="mt-2 text-2xl font-black leading-tight text-slate-950 md:text-3xl">
                {isZh ? "實際衣服可能會比 size chart 略小" : "Actual Shirts May Run Smaller Than the Size Chart"}
              </h2>
              <div className="mt-4 space-y-3 leading-8 text-slate-700">
                <p>
                  {isZh
                    ? "實際衣服的衣長與 Flat Chest 平放胸寬可能會比 size chart 小約 1 吋左右；黑色款可能小 1–2 吋；Youth 尺寸可能小約 0.5 吋。"
                    : "Actual body length and flat chest width may be about 1 inch smaller than the size chart; black shirts may be 1–2 inches smaller; Youth sizes may be about 0.5 inch smaller."}
                </p>
                <p className="font-black text-amber-900">
                  {isZh
                    ? "如果尺寸選擇非常剛好，建議往上一號。"
                    : "If your selected size is very close, we recommend sizing up."}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-emerald-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-3xl font-black text-slate-950">
            {isZh ? "款式與尺寸整理" : "Style and Size Summary"}
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-slate-700">
            {isZh
              ? "請在加購前先確認尺寸表。若介於兩個尺寸之間，或喜歡寬鬆穿著，建議選大一號。"
              : "Please review the size chart before ordering add-on T-shirts. If you are between sizes or prefer a looser fit, we recommend sizing up."}
          </p>

          <div className="mt-8 grid gap-8">
            <SizeTable
              number="1"
              title={isZh ? "Men / Unisex｜男版 / 中性版" : "Men / Unisex"}
              note={isZh ? "Adult XS not available 成人 XS 無提供" : "Adult XS not available"}
              headers={isZh ? ["Size", "Body Length 衣長", "Flat Chest Width 平放胸寬"] : ["Size", "Body Length", "Flat Chest Width"]}
              rows={menRows}
            />

            <SizeTable
              number="2"
              title={isZh ? "Ladies｜女版" : "Ladies"}
              note={isZh ? "Adult XS not available 成人 XS 無提供" : "Adult XS not available"}
              headers={isZh ? ["Size", "Body Length 衣長", "Flat Chest Width 平放胸寬"] : ["Size", "Body Length", "Flat Chest Width"]}
              rows={ladiesRows}
            />

            <SizeTable
              number="3"
              title={isZh ? "Youth｜兒童版" : "Youth"}
              headers={isZh ? ["Size", "Approx. Age / Body Size 參考年齡／體型", "Body Length 衣長", "Flat Chest Width 平放胸寬"] : ["Size", "Approx. Age / Body Size", "Body Length", "Flat Chest Width"]}
              rows={youthRows}
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
            <NoteItem number="1">{isZh ? "尺寸為約略量，可能會有些誤差。" : "Measurements are approximate and may vary slightly."}</NoteItem>
            <NoteItem number="2">{isZh ? "Men / Unisex 版型較標準、較直筒。" : "Men / Unisex style has a standard straight fit."}</NoteItem>
            <NoteItem number="3">{isZh ? "Ladies 版型較合身，通常也比 Men / Unisex 稍短。" : "Ladies style has a more fitted cut and is generally shorter than Men / Unisex."}</NoteItem>
            <NoteItem number="4">{isZh ? "平常穿成人 XS 的朋友，可考慮 Youth XL 或 Adult S。" : "If you usually wear Adult XS, Youth XL or Adult S may be the closest options."}</NoteItem>
            <NoteItem number="5">{isZh ? "Youth 尺寸通常比成人尺寸更短，也更窄。" : "Youth sizes are generally shorter and narrower than adult sizes."}</NoteItem>
            <NoteItem number="6">{isZh ? "若介於兩個尺寸之間，或喜歡寬鬆穿著，建議選大一號。" : "If you are between sizes or prefer a looser fit, we recommend sizing up."}</NoteItem>
            <NoteItem number="7">{isZh ? "建議以自己現有的 T-shirt 平量後對照，會最準確。" : "For the most accurate fit, please compare these measurements with a T-shirt you already own."}</NoteItem>
            <NoteItem number="8">
              {isZh
                ? "實際衣服的衣長與 Flat Chest 平放胸寬可能會比 size chart 小約 1 吋左右；黑色款可能小 1–2 吋；Youth 尺寸可能小約 0.5 吋。若尺寸選擇非常剛好，建議往上一號。"
                : "Actual body length and flat chest width may be about 1 inch smaller than the size chart; black shirts may be 1–2 inches smaller; Youth sizes may be about 0.5 inch smaller. If your size is very close, we recommend sizing up."}
            </NoteItem>
          </div>
        </div>

        <div className="mt-12 rounded-[2rem] bg-gradient-to-br from-emerald-900 to-sky-900 p-7 text-white shadow-lg md:p-9">
          <h2 className="text-3xl font-black">{isZh ? "準備加購？" : "Ready to Order Add-ons?"}</h2>
          <p className="mt-4 max-w-3xl leading-8 text-white/85">
            {isZh
              ? "請確認款式與尺寸後再送出加購。付款完成後即視為訂購成功。"
              : "Please confirm your style and size before ordering. Once payment is completed, the order is considered confirmed."}
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={addOnOrderLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-amber-300 px-7 py-4 text-center text-base font-black text-emerald-950 shadow-lg transition hover:bg-amber-200"
            >
              {isZh ? "前往加購預購" : "Go to Add-on Preorder"}
            </a>
            <a
              href="/"
              className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center text-base font-black text-white backdrop-blur transition hover:bg-white/20"
            >
              {isZh ? "回到首頁" : "Back to Home"}
            </a>
          </div>
        </div>
      </section>

      {lightbox ? (
        <button
          type="button"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur"
          aria-label="Close image preview"
        >
          <div className="relative max-h-[92vh] w-full max-w-5xl rounded-[2rem] bg-white p-4 shadow-2xl">
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="px-2 text-lg font-black text-slate-950">{lightbox.title}</p>
              <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-black text-slate-700">Close ✕</span>
            </div>
            <img src={lightbox.image} alt={lightbox.title} className="max-h-[78vh] w-full rounded-[1.5rem] object-contain" />
          </div>
        </button>
      ) : null}
    </main>
  );
}
