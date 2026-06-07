"use client";

import React, { useState } from "react";

const finalists = [
  {
    "id": 1,
    "titleZh": "台灣強棒",
    "titleEn": "台灣強棒",
    "conceptZh": "以台灣國旗的顏色呼應波士頓紅襪的顏色，代表台灣人融入波士頓文化的同時，仍保有自己社群的特色，台灣文化到哪裡都可以強大，就像這件T恤要表達的理念一樣。",
    "conceptEn": "The colors of the Taiwanese flag and the Boston Red Sox jersey symbolize Taiwanese people becoming part of Boston culture while still preserving the uniqueness of their own community. Wherever Taiwanese people go, they can be strong and confident, just like the spirit represented by the design.",
    "images": [
      {
        "labelZh": "T-shirt 平面圖",
        "labelEn": "T-shirt Flat View",
        "src": "/tshirt-finalists/01-shirt.png"
      },
      {
        "labelZh": "穿著示意圖",
        "labelEn": "Worn Mockup",
        "src": "/tshirt-finalists/01-wear.png"
      }
    ]
  },
  {
    "id": 2,
    "titleZh": "We are a team",
    "titleEn": "We are a team",
    "conceptZh": "台灣黑熊、獼猴、石虎、梅花鹿與藍腹鷴，和波士頓的龍蝦、天鵝、鴨子和火雞組成球隊，背景是台灣放在國花梅花，象徵球隊擁有堅韌的意志，比賽結束後不忘來一杯台灣珍奶。",
    "conceptEn": "This design expresses the shared identity of Team Taiwan. It uses a clean and memorable visual style to show connection, pride, and the strength of standing together.",
    "images": [
      {
        "labelZh": "T-shirt 平面圖",
        "labelEn": "T-shirt Flat View",
        "src": "/tshirt-finalists/03-shirt.png"
      },
      {
        "labelZh": "穿著示意圖",
        "labelEn": "Worn Mockup",
        "src": "/tshirt-finalists/03-wear.png"
      }
    ]
  },
  {
    "id": 3,
    "titleZh": "TAIWAN FAN NIGHT AT FENWAY",
    "titleEn": "TAIWAN FAN NIGHT AT FENWAY",
    "conceptZh": "反：台灣書法大字+Taiwan fan night at Fenway + Sep12/Boston 正：相同內容 圓形排版+小圖",
    "conceptEn": "This design celebrates the connection between Taiwan and Boston through a simple but meaningful T-shirt concept. It shows the spirit of coming together as one community.",
    "images": [
      {
        "labelZh": "T-shirt 平面圖",
        "labelEn": "T-shirt Flat View",
        "src": "/tshirt-finalists/05-shirt.png"
      },
      {
        "labelZh": "穿著示意圖",
        "labelEn": "Worn Mockup",
        "src": "/tshirt-finalists/05-wear.png"
      }
    ]
  },
  {
    "id": 4,
    "titleZh": "Boston Team Taiwan",
    "titleEn": "Boston Team Taiwan",
    "conceptZh": "I strove to combine elements of Taiwanese culture (especially food) with some baseball themes to create a cute, modern design!",
    "conceptEn": "This design focuses on unity, pride, and visibility. It represents the Taiwanese community gathering at Fenway Park and showing support for Taiwan in a positive and joyful way.",
    "images": [
      {
        "labelZh": "T-shirt 平面圖",
        "labelEn": "T-shirt Flat View",
        "src": "/tshirt-finalists/06-shirt.png"
      },
      {
        "labelZh": "穿著示意圖",
        "labelEn": "Worn Mockup",
        "src": "/tshirt-finalists/06-wear.png"
      }
    ]
  },
  {
    "id": 5,
    "titleZh": "Boston 27 | Taiwan Strong Together",
    "titleEn": "Boston 27 | Taiwan Strong Together",
    "conceptZh": "這件設計以黑色球衣感 T-shirt 為主體，搭配白色大字與金色細節，呈現出低調、俐落又有力量的 Team Taiwan 風格。正面以 BOSTON 作為主視覺，象徵台灣人在波士頓的凝聚與存在感；上方的 TAIWANESE 與下方的 STRONG TOGETHER，傳達「台灣人一起站出來、一起被看見」的精神。\n\n背面以大大的 TAIWAN 27 呈現球員背號感，不只是呼應棒球場上的團隊精神，也代表我們對未來的期待。27 象徵 2027，因為我們希望透過 2026 年 9/12 這場台灣社群的集結，讓 Red Sox 與更多人看見波士頓台灣人的力量，並進一步爭取 2027 年正式的 Red Sox Taiwan Day。\n\n如果有人問：「為什麼是 27？」\n我們就可以很自然地回答：\n因為我們不只是在參加一場球賽，我們是在一起爭取 2027 年真正屬於台灣人的 Taiwan Day。\n\n金色台灣圖案則點綴在正面與背面，讓整體設計在運動感中保有台灣識別與紀念意義。整件衣服不只是一件活動 T-shirt，也是一件代表 912 Team Taiwan 共同目標的紀念球衣。",
    "conceptEn": "This design represents Taiwanese people in Boston standing together. It reflects community, friendship, and the excitement of bringing Taiwan into Fenway Park.",
    "images": [
      {
        "labelZh": "T-shirt 平面圖",
        "labelEn": "T-shirt Flat View",
        "src": "/tshirt-finalists/08-shirt.png"
      },
      {
        "labelZh": "穿著示意圖",
        "labelEn": "Worn Mockup",
        "src": "/tshirt-finalists/08-wear.png"
      }
    ]
  },
  {
    "id": 6,
    "titleZh": "FROM TAIWAN TO FENWAY",
    "titleEn": "FROM TAIWAN TO FENWAY",
    "conceptZh": "Inspired by \"Together at Fenway,\" this design combines iconic Fenway Park imagery with the Taiwanese flag and bold TAIWAN lettering. The \"Team Taiwan\" sleeve detail symbolizes unity and shared pride among participants. The shirt celebrates the connection between Taiwan and Boston while showcasing the passion, community spirit, and pride of Taiwanese supporters.",
    "conceptEn": "This design emphasizes the strength of Team Taiwan. It is created to make the group feel connected, visible, and proud during the 9/12 event.",
    "images": [
      {
        "labelZh": "T-shirt 平面圖",
        "labelEn": "T-shirt Flat View",
        "src": "/tshirt-finalists/10-shirt.png"
      },
      {
        "labelZh": "穿著示意圖",
        "labelEn": "Worn Mockup",
        "src": "/tshirt-finalists/10-wear.png"
      }
    ]
  },
  {
    "id": 7,
    "titleZh": "912 Taiwan Fan Night | Together at Fenway",
    "titleEn": "912 Taiwan Fan Night | Together at Fenway",
    "conceptZh": "Taiwan Fans Night 不僅是一場棒球賽事，更是一場凝聚文化與社群的交流盛會。本設計以 Fenway Park 為靈感，透過棒球這項共同語言，串聯台灣與波士頓兩座城市。 正面以簡約線條勾勒 Fenway Park 的經典輪廓，象徵棒球文化的傳承；背面以醒目的 Taiwan 字樣展現台灣社群的自信、認同與凝聚力，傳達無論身在何處，都能以台灣為榮。 整體融合棒球文化、城市意象與台灣元素，並以紅、白、藍三色呼應 Taiwan Fans Night「One Community, One Team」的精神，展現台灣與波士頓之間的連結與友誼，共同寫下屬於這個夜晚的精彩篇章。 Taiwan Fans Night is more than a baseball game—it is a celebration of culture, identity, and community. Inspired by Fenway Park, this design uses baseball as a universal language to connect Taiwan and Boston. The front features clean line art of Fenway Park, representing the tradition and spirit of baseball, while the bold “Taiwan” graphic on the back symbolizes pride, unity, and the strong connection of the Taiwanese community abroad. By combining baseball culture, city landmarks, and Taiwanese elements through a red, white, and blue color palette, the design reflects the theme of “One Community, One Team,” celebrating the friendship and connection between Boston and Taiwan under the lights of Fenway Park.",
    "conceptEn": "This design shows the joy and unity of Taiwanese people coming together. It reflects the spirit of supporting Taiwan and building community in Boston.",
    "images": [
      {
        "labelZh": "T-shirt 平面圖",
        "labelEn": "T-shirt Flat View",
        "src": "/tshirt-finalists/11-shirt.png"
      },
      {
        "labelZh": "穿著示意圖",
        "labelEn": "Worn Mockup",
        "src": "/tshirt-finalists/11-wear.png"
      }
    ]
  },
  {
    "id": 8,
    "titleZh": "Fenway Meets Taiwan | One Community",
    "titleEn": "Fenway Meets Taiwan | One Community",
    "conceptZh": "這款設計以「城市中的台灣聲音」作為概念出發。深色衣身搭配大面積刷痕字體，讓正面的 BOSTON 看起來像是一個被快速寫下、帶有能量的城市標記，呈現出街頭感、行動感與年輕世代的態度。\n\n這件衣服不走傳統紀念衫路線，而是希望做出一種平常也能穿出門的設計感。刷痕字體帶有不規則的力量，象徵台灣人在異地生活、累積、連結，也正在用自己的方式讓更多人看見我們。\n\n背面的 TAIWAN 27 則像是一組球場上的代號。它保留了棒球球衣的視覺語言，但又不只是單純的背號。27 代表 2027，象徵 912 活動之後，大家希望繼續往前推動，讓波士頓有機會迎來正式的 Red Sox Taiwan Day。",
    "conceptEn": "This design represents the shared dream of making Taiwan visible at Fenway Park. It brings together creativity, pride, and the collective energy of the 9/12 event.",
    "images": [
      {
        "labelZh": "T-shirt 平面圖",
        "labelEn": "T-shirt Flat View",
        "src": "/tshirt-finalists/12-shirt.png"
      },
      {
        "labelZh": "穿著示意圖",
        "labelEn": "Worn Mockup",
        "src": "/tshirt-finalists/12-wear.png"
      }
    ]
  }
];

function FinalistImage({ image, item, votingNumber, lang, onOpen }) {
  const [failed, setFailed] = useState(false);
  const label = lang === "zh" ? image.labelZh : image.labelEn;
  const title = lang === "zh" ? item.titleZh : item.titleEn;

  return (
    <button
      type="button"
      onClick={() => {
        if (!failed) {
          onOpen({
            src: image.src,
            title: lang === "zh"
              ? `投票編號 ${votingNumber}｜${title}`
              : `Voting Number ${votingNumber}｜${title}`,
            label,
          });
        }
      }}
      className="group overflow-hidden rounded-[2rem] border border-white bg-white p-4 text-left shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
    >
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500">
          {label}
        </p>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 group-hover:bg-emerald-100 group-hover:text-emerald-800">
          {lang === "zh" ? "點圖放大" : "Click to enlarge"}
        </span>
      </div>

      {failed ? (
        <div className="flex h-[420px] w-full flex-col items-center justify-center rounded-[1.5rem] border border-dashed border-rose-300 bg-rose-50 p-8 text-center">
          <div className="mb-5 rounded-full bg-rose-600 px-6 py-3 text-xl font-black text-white shadow-md">
            {lang === "zh" ? `投票編號 ${votingNumber}` : `Voting #${votingNumber}`}
          </div>
          <p className="text-2xl font-black text-slate-950">
            {lang === "zh" ? "圖片路徑找不到" : "Image not found"}
          </p>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {lang === "zh"
              ? `請確認檔案放在 public/tshirt-finalists/，檔名為 ${votingNumber}-shirt.png 或 ${votingNumber}-wear.png。`
              : `Please make sure the file is in public/tshirt-finalists/ and named ${votingNumber}-shirt.png or ${votingNumber}-wear.png.`}
          </p>
        </div>
      ) : (
        <img
          src={image.src}
          onError={() => setFailed(true)}
          alt={lang === "zh"
            ? `投票編號 ${votingNumber}｜${title}｜${label}`
            : `Voting Number ${votingNumber}｜${title}｜${label}`}
          className="h-[420px] w-full rounded-[1.5rem] bg-slate-50 object-contain transition duration-300 group-hover:scale-[1.02]"
        />
      )}
    </button>
  );
}

export default function TshirtFinalistsPage() {
  const [lang, setLang] = useState("zh");
  const [lightbox, setLightbox] = useState(null);
  const isZh = lang === "zh";

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="fixed right-4 top-4 z-40 flex rounded-full border border-white/30 bg-white/90 p-1 shadow-lg backdrop-blur">
        <button
          type="button"
          onClick={() => setLang("zh")}
          className={`rounded-full px-4 py-2 text-sm font-black transition ${isZh ? "bg-emerald-700 text-white" : "text-slate-600 hover:bg-slate-100"}`}
        >
          中文
        </button>
        <button
          type="button"
          onClick={() => setLang("en")}
          className={`rounded-full px-4 py-2 text-sm font-black transition ${!isZh ? "bg-emerald-700 text-white" : "text-slate-600 hover:bg-slate-100"}`}
        >
          English
        </button>
      </div>

      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-700 via-sky-700 to-blue-800 px-4 py-20 text-white md:px-8 md:py-28">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <a
            href="/"
            className="mb-8 inline-flex rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
          >
            {isZh ? "← 回到 912 首頁" : "← Back to 912 Home"}
          </a>

          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-white/75">
            912 Taiwan Fans Night
          </p>
          <h1 className="mt-5 text-5xl font-black leading-tight md:text-7xl">
            {isZh ? "T-shirt 入圍作品" : "T-shirt Finalists"}
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/90 md:text-xl">
            {isZh
              ? "以下 8 件作品為本次 T-shirt 設計入圍作品。每件作品都有專屬投票編號，之後大家投票時，請依照作品上的投票編號進行選擇。"
              : "These 8 designs are the finalists for the 912 Taiwan Fans Night T-shirt design selection. Each design has its own voting number. Please use the number shown on each design when voting."}
          </p>
        </div>
      </section>

      <section className="px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 rounded-[2rem] border border-emerald-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-black text-slate-950">
              {isZh ? "關於入圍作品與投票方式" : "About the Finalists and Voting"}
            </h2>

            <div className="mt-5 space-y-5 leading-8 text-slate-700">
              {isZh ? (
                <>
                  <p>
                    本次 912 T-shirt 設計徵選，我們一共收到 <strong>超過 40 件作品</strong>。
                    真的非常感謝每一位設計者的用心參與與支持。
                  </p>

                  <p>
                    這次投稿中有許多作品都非常精彩，也充滿創意，所以在挑選入圍作品時，
                    對我們來說其實是一個不小的挑戰。由於美感與喜好本來就具有主觀性，
                    這次入圍作品的選擇，並不是單純以「哪一件最好看」來決定，
                    而是綜合考量實際製作與活動呈現上的需求。
                  </p>

                  <p>
                    也想提醒大家，這些主要評估方向，其實在一開始公布比賽辦法時就已經有說明。
                    這次評選時，我們也是依照當初公布的方向進行綜合考量，
                    包括作品是否符合活動主題、是否適合實際製作、是否使用到無法授權或不適合使用的圖像元素，
                    以及在活動當天是否能清楚、有力地呈現 <strong>TAIWAN</strong>。
                  </p>

                  <div className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5">
                    <p className="font-black text-slate-950">我們主要評估的方向包括：</p>

                    <ol className="mt-4 space-y-4">
                      <li>
                        <strong>第一，作品是否使用到無法製作或不適合使用的元素。</strong>
                        例如 Red Sox logo、其他受保護圖像，甚至只是紅襪的「B」logo，
                        都無法作為正式 T-shirt 設計使用，因此我們必須排除。
                      </li>

                      <li>
                        <strong>第二，是設計在實際印製 T-shirt 時的可行性。</strong>
                        有些作品真的很有創意，也很漂亮，但若設計過於複雜、接近全彩圖片，
                        或不適合大量印製，就比較難成為最後實際製作的版本。
                      </li>

                      <li>
                        <strong>第三，是活動當天大家穿在身上的整體效果。</strong>
                        我們希望這件 T-shirt 不只在圖片上好看，也能在 Fenway Park 的現場，
                        透過大家一起穿著時，呈現出清楚、有力量的視覺效果。
                      </li>

                      <li>
                        <strong>第四，也是最重要的，是是否能清楚、有力地呈現 TAIWAN。</strong>
                        這次活動的核心目標，是讓 <strong>TAIWAN</strong> 在 Fenway Park 被看見。
                        因此，我們特別重視設計是否能讓現場觀眾、球團、媒體與更多人一眼看見台灣。
                      </li>
                    </ol>
                  </div>

                  <p>
                    另外，如果同一位設計者投稿超過一件作品，我們原則上也只會選出其中一件入圍，
                    讓更多不同設計者的作品有機會被看見。
                  </p>

                  <p>
                    我們也想特別說明，沒有入圍並不代表作品不好。這次有很多作品都非常用心、有創意，
                    也讓我們很感動。只是這次 T-shirt 最終需要實際大量製作，
                    並讓上千人在 Fenway Park 一起穿上，因此評選時除了美感之外，
                    也必須考量印製可行性、圖像授權、球場遠距離視覺效果、活動主題，
                    以及是否能清楚呈現 <strong>TAIWAN</strong>。
                  </p>

                  <p>
                    有些作品真的很棒，但可能比較適合展示或收藏，不一定適合大量印製成活動 T-shirt；
                    也有些作品細節很多，但在球場現場的視覺辨識度可能較低。因此，
                    這次入圍選擇是根據活動需求，以及當初公布的評選方向，做出的綜合判斷，
                    不是對作品價值的否定。
                  </p>

                  <p>
                    每一件作品都代表設計者對台灣、波士頓，以及 912 台灣集結活動的支持與心意。
                    無論作品是否入圍，我們都非常感謝每一位投稿者願意把時間、創意與熱情投入這次活動。
                    你們的參與，讓 912 Taiwan Fans Night at Fenway 更有力量，
                    也讓「讓 TAIWAN 被看見」這件事更加真實。
                  </p>

                  <p>
                    接下來，入圍作品將透過 <strong>Google Form</strong> 開放社群投票。
                    為了讓投票結果更公平，投票將設定為 <strong>每人限投一次</strong>，
                    並需要使用 <strong>Gmail / Google 帳號登入</strong> 才能提交。
                  </p>

                  <p>
                    投票時，請依照每件作品上的 <strong>投票編號</strong> 進行選擇。
                    每個帳號只能提交一次投票，因此送出前請務必確認你選擇的作品編號正確。
                  </p>
                </>
              ) : (
                <>
                  <p>
                    This 912 T-shirt design selection received <strong>more than 40 submissions</strong>.
                    We sincerely thank every designer for their thoughtful participation and support.
                  </p>

                  <p>
                    Many of the submitted designs were excellent and full of creativity, which made choosing the finalists
                    a real challenge. Because visual preference is naturally subjective, the finalist selection was not based
                    simply on which design looked the best. We also had to consider practical production needs and how the design
                    would appear during the actual event.
                  </p>

                  <p>
                    We would also like to remind everyone that these evaluation directions were already included when the contest rules
                    were first announced. During the selection process, we followed those original guidelines and considered whether each
                    design aligned with the event theme, whether it was suitable for production, whether it used any image elements that could
                    not be licensed or were not appropriate to use, and whether it could clearly and powerfully present <strong>TAIWAN</strong>
                    on the day of the event.
                  </p>

                  <div className="rounded-[1.5rem] border border-slate-100 bg-slate-50 p-5">
                    <p className="font-black text-slate-950">Our main evaluation considerations included:</p>

                    <ol className="mt-4 space-y-4">
                      <li>
                        <strong>First, whether the design used elements that could not be produced or were not appropriate to use.</strong>
                        For example, the Red Sox logo, other protected imagery, or even the Red Sox “B” logo cannot be used for the official
                        T-shirt design, so those elements had to be excluded.
                      </li>

                      <li>
                        <strong>Second, whether the design was feasible for actual T-shirt production.</strong>
                        Some designs were very creative and beautiful, but if a design was too complex, close to a full-color image,
                        or not suitable for mass production, it would be difficult to use as the final printed version.
                      </li>

                      <li>
                        <strong>Third, the overall visual effect when everyone wears the T-shirt at the event.</strong>
                        We hope the T-shirt will not only look good as an image, but also create a clear and powerful visual effect
                        when worn together by the community at Fenway Park.
                      </li>

                      <li>
                        <strong>Fourth, and most importantly, whether the design can clearly and powerfully present TAIWAN.</strong>
                        The core goal of this event is to let <strong>TAIWAN</strong> be seen at Fenway Park.
                        Therefore, we placed special importance on whether the design can help spectators, the team, media,
                        and more people immediately see Taiwan.
                      </li>
                    </ol>
                  </div>

                  <p>
                    In addition, if the same designer submitted more than one design, we generally selected only one of their submissions
                    as a finalist, so that more designers would have the opportunity to be represented.
                  </p>

                  <p>
                    We also want to make it clear that not being selected as a finalist does not mean a design was not good.
                    Many submissions were thoughtful, creative, and truly moving. However, because the final T-shirt must be produced
                    in large quantities and worn by more than a thousand people at Fenway Park, we had to consider not only aesthetics,
                    but also production feasibility, image licensing, long-distance visibility in the stadium, event theme alignment,
                    and whether the design could clearly present <strong>TAIWAN</strong>.
                  </p>

                  <p>
                    Some designs were truly wonderful, but may be better suited for display or collection rather than mass production
                    as an event T-shirt. Others included many beautiful details, but may have lower visibility in a stadium setting.
                    Therefore, the finalist selection was a comprehensive decision based on event needs and the evaluation direction
                    announced from the beginning. It is not a judgment against the value of any design.
                  </p>

                  <p>
                    Every submission represents the designer’s support and care for Taiwan, Boston, and the 912 Taiwan gathering.
                    Whether or not a design was selected as a finalist, we are deeply grateful to every participant who contributed
                    their time, creativity, and passion to this event. Your participation makes 912 Taiwan Fans Night at Fenway stronger
                    and makes the goal of helping <strong>TAIWAN</strong> be seen even more real.
                  </p>

                  <p>
                    Next, the finalist designs will be open for community voting through a <strong>Google Form</strong>.
                    To keep the voting process fair, each person may vote <strong>only once</strong>, and a
                    <strong> Gmail / Google account login</strong> will be required to submit the form.
                  </p>

                  <p>
                    When voting, please select your choice based on the <strong>voting number</strong> shown on each design.
                    Each account can submit the form only once, so please make sure your selected design number is correct before submitting.
                  </p>
                </>
              )}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://forms.gle/iaqhpRvM77jqDfL96"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-8 py-4 text-lg font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-xl"
              >
                {isZh ? "前往 Google Form 投票" : "Vote via Google Form"}
              </a>
              <p className="text-sm font-semibold text-slate-500">
                {isZh ? "每人限投一次，需使用 Gmail / Google 帳號登入。" : "One vote per person. Gmail / Google account login required."}
              </p>
            </div>

            <div className="mt-8 rounded-[1.75rem] border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-2xl font-black text-slate-950">
                {isZh ? "評選方式" : "Selection Method"}
              </h3>
              <p className="mt-3 leading-8 text-slate-700">
                {isZh
                  ? "最後也提醒大家，這次 T-shirt 設計徵選的評選方式，是在活動一開始就已經公布的規則："
                  : "As a reminder, the selection method for this T-shirt design contest was announced at the beginning of the event:"}
              </p>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-700">
                    {isZh ? "社群人氣票選" : "Community Vote"}
                  </p>
                  <p className="mt-2 text-4xl font-black text-slate-950">40%</p>
                </div>

                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-sky-700">
                    {isZh ? "主辦單位評選" : "Organizer Evaluation"}
                  </p>
                  <p className="mt-2 text-4xl font-black text-slate-950">60%</p>
                </div>
              </div>

              <p className="mt-5 leading-8 text-slate-700">
                {isZh
                  ? "Google Form 的社群投票結果，將會是最終評選的重要依據之一，但不是唯一標準。主辦單位也會依照一開始公布的評選方式，綜合考量設計品質、主題契合度、球場效果、社群代表性，以及實際製作可行性，選出最適合成為本次 912 Taiwan Fans Night T-shirt 的最終設計。"
                  : "The Google Form community vote will be an important part of the final selection, but it will not be the only factor. Following the selection method announced from the beginning, the organizers will also consider design quality, theme alignment, stadium impact, community representation, and practical production feasibility to choose the final design for the 912 Taiwan Fans Night T-shirt."}
              </p>
            </div>
          </div>

          <div className="space-y-12">
            {finalists.map((item) => {
              const votingNumber = String(item.id).padStart(2, "0");
              const title = isZh ? item.titleZh : item.titleEn;
              const concept = isZh ? item.conceptZh : item.conceptEn;

              return (
                <article
                  key={item.id}
                  className="overflow-hidden rounded-[2.5rem] border border-sky-100 bg-white shadow-xl"
                >
                  <div className="border-b border-slate-100 p-6 md:p-8">
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="text-sm font-bold uppercase tracking-[0.22em] text-emerald-700">
                          Finalist #{votingNumber}
                        </p>
                        <h3 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
                          {title}
                        </h3>
                      </div>

                      <div className="shrink-0 rounded-[2rem] bg-emerald-700 px-7 py-5 text-center text-white shadow-xl ring-4 ring-emerald-100">
                        <p className="text-xs font-black uppercase tracking-[0.24em] text-white/80">
                          {isZh ? "投票編號" : "Voting Number"}
                        </p>
                        <p className="mt-1 text-5xl font-black leading-none md:text-6xl">
                          {votingNumber}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 rounded-[1.5rem] border border-amber-100 bg-amber-50 p-5">
                      <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-800">
                        {isZh ? "設計理念" : "Design Concept"}
                      </p>
                      <p className="mt-3 whitespace-pre-line leading-8 text-slate-700">
                        {concept}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-6 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-6 md:grid-cols-2 md:p-8">
                    {item.images.map((image) => (
                      <FinalistImage
                        key={image.labelZh}
                        image={image}
                        item={item}
                        votingNumber={votingNumber}
                        lang={lang}
                        onOpen={setLightbox}
                      />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-12 rounded-[2rem] bg-gradient-to-br from-emerald-700 to-sky-700 p-8 text-center text-white shadow-xl md:p-10">
            <h2 className="text-3xl font-black">TEAM TAIWAN, Strong Together</h2>
            <p className="mx-auto mt-4 max-w-3xl leading-8 text-white/90">
              {isZh
                ? "請記住你喜歡作品的投票編號。正式投票時，將以編號作為投票選項。"
                : "Please remember the voting number of your favorite design. The official vote will use these numbers as the voting options."}
            </p>
            <a
              href="/"
              className="mt-8 inline-flex rounded-full bg-white px-7 py-3 text-sm font-black text-emerald-800 shadow-md transition hover:bg-emerald-50"
            >
              {isZh ? "回到 912 活動首頁" : "Back to 912 Home"}
            </a>
          </div>
        </div>
      </section>

      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-6xl rounded-[2rem] bg-white p-4 shadow-2xl md:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/70 text-2xl font-black text-white transition hover:bg-black"
              aria-label="Close image preview"
            >
              ×
            </button>

            <div className="mb-4 pr-14">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-emerald-700">
                {lightbox.label}
              </p>
              <h3 className="mt-1 text-2xl font-black text-slate-950">
                {lightbox.title}
              </h3>
            </div>

            <img
              src={lightbox.src}
              alt={`${lightbox.title}｜${lightbox.label}`}
              className="max-h-[78vh] w-full rounded-[1.5rem] object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
