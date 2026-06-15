"use client";

import React, { useEffect, useMemo, useState } from "react";

const hostLogo = "/btcc-btcf-logo.jpg";
const eventLogo = "/912-fenway-logo.png";
const jerseyImage = "/red-sox-bruins-jersey.jpg";
const zeffyQrCode = "/zeffy-qr-code.png";

const officialLineGroup = "https://line.me/ti/g/uyAcZJRn75";
const googleFormLink = "https://forms.gle/27V7wtAEBxRbboL79";
const zeffyPaymentLink = "https://www.zeffy.com/en-US/ticketing/912-taiwan-fan-night-at-fenway--912-3";
const goFundMeLink = "https://giving.gofundme.com/campaign/805027/landing";
const organizerLine = "https://line.me/ti/p/xbvkW3pO20";
const volunteerFormLink = "https://forms.gle/1KrTH1ETd9quXNMJ6";
const tshirtSubmissionFormLink = "https://forms.gle/g7EmFkHFmpt1t1RA7";
const tshirtResultsLink = "/tshirt-results";

const coHosts = [
  "波克萊台灣商會",
  "新英格蘭地區臺灣同學聯合會",
  "波士頓臺灣影展",
  "波士頓台灣人生技協會",
  "波士頓台灣媽媽親子會",
  "新英格蘭大波士頓台灣商會",
  "波士頓台灣世衛協進會",
];

const teamExamples = ["台灣No.1隊", "Fenway佔領隊", "珍奶續命隊", "Team Taiwan GO隊", "波士頓台味隊"];

const teamLeaderboard = [
  { name: "波士頓台灣媽媽親子會", tickets: "165+" },
  { name: "我朋友說想湊個50人的隊", tickets: "145+" },
  { name: "波克萊台灣商會", tickets: "140+" },
  { name: "Boston FASCA", tickets: "45+" },
  { name: "BTBC 波士頓台灣龍舟隊", tickets: "30+" },
  { name: "我們也來組一隊", tickets: "25+" },
  { name: "波士頓台灣人生技協會 (BTBA)", tickets: "25+" },
  { name: "Taiwan Film Festival of Boston", tickets: "20+" },
  { name: "Andover 貢茶", tickets: "15+" },
  { name: "波士頓台灣世衞協進會", tickets: "15+" },
  { name: "當偶們同在一起", tickets: "15+" },
  { name: "羅德島台灣同好會", tickets: "14+" },
  { name: "Tâioân Siothéng", tickets: "13+" },
  { name: "The Boba Tea Party", tickets: "12+" },
  { name: "Formosa Strong", tickets: "10+" },
  { name: "NCCU, TCCNE & BTEAA", tickets: "10+" },
  { name: "Red Sox Fernando Day", tickets: "10+" },
  { name: "Tide One Pioneers (TOP) 台灣拓荒者船隊", tickets: "10+" },
  { name: "加入就有朋友隊", tickets: "10+" },
  { name: "就是愛台灣啦", tickets: "10+" },
  { name: "TECO-BOSTON", tickets: "10+" },
  { name: "Woo告台", tickets: "持續增加中" },
  { name: "Lala Mountain", tickets: "持續增加中" },
  { name: "Need好台", tickets: "持續增加中" },
  { name: "Taiwanzonian-bos", tickets: "持續增加中" },
  { name: "Taiwan熊讚", tickets: "持續增加中" },
  { name: "從南到北 襪ㄧ下！", tickets: "持續增加中" },
  { name: "襪哩咧", tickets: "持續增加中" },
  { name: "0800092000", tickets: "持續增加中" },
  { name: "Ellie 與她的夥伴們", tickets: "持續增加中" },
  { name: "Taiwan 55688", tickets: "持續增加中" },
  { name: "Taiwanese-ish 台灣味 🇹🇼", tickets: "持續增加中" },
  { name: "拚明年總統來開球", tickets: "持續增加中" },
  { name: "波士頓北一女校友會", tickets: "持續增加中" },
  { name: "臺灣留學生聯合加油團", tickets: "持續增加中" },
  { name: "花栗鼠吃雞排", tickets: "持續增加中" },
  { name: "茅起來打", tickets: "持續增加中" },
  { name: "Alexida", tickets: "持續增加中" },
  { name: "MOCHI", tickets: "持續增加中" },
  { name: "Taiwan Bon Bon", tickets: "持續增加中" },
  { name: "Taiwan 襪Up！", tickets: "持續增加中" },
  { name: "灣a紅襪", tickets: "持續增加中" },
  { name: "襪賽！Taiwan", tickets: "持續增加中" },
  { name: "金余", tickets: "持續增加中" },
  { name: "North Shore TAIWANESE", tickets: "持續增加中" },
  { name: "NTUB05BOS", tickets: "持續增加中" },
  { name: "Shield", tickets: "持續增加中" },
  { name: "台灣留學生聯合加油團", tickets: "持續增加中" },
  { name: "大直隊", tickets: "持續增加中" },
  { name: "從New Hampshire來的台灣人隊", tickets: "持續增加中" },
  { name: "投我們就（隊）", tickets: "持續增加中" },
  { name: "波城老華僑隊", tickets: "持續增加中" },
  { name: "襪係臺灣郎", tickets: "持續增加中" },
  { name: "飛天少女豬", tickets: "持續增加中" },
  { name: "AmiLumiGoGoGo", tickets: "持續增加中" },
  { name: "Snoopy 12", tickets: "持續增加中" },
  { name: "台灣霹靂火鳳凰", tickets: "持續增加中" },
  { name: "羅德島灰姑娘", tickets: "持續增加中" },
  { name: "芬威要有TaiwanDay才隊", tickets: "持續增加中" },
  { name: "Team KHH", tickets: "新隊伍" },
  { name: "好棒 - Good Bat", tickets: "新隊伍" },
];

const content = {
  zh: {
    langLabel: "English",
    title: "912台灣集結",
    nav: [
      ["home", "首頁"],
      ["tickets", "票價優惠"],
      ["teams", "組隊方式"],
      ["leaderboard", "集氣榜"],
      ["shirt-design", "衣服設計"],
      ["raffle", "抽獎活動"],
      ["faq", "注意事項"],
      ["support", "支持與聯絡"],
    ],
    headerBuy: "立即前往 Zeffy 購票",
    hero: {
      badge: "票價公布｜TEAM TAIWAN 組隊正式開始",
      title1: "912 Taiwan Fan Night at Fenway",
      title2: "912 台灣集結",
      description:
        "Taiwan Fan Night at Fenway 不只是一場看棒球的活動。\n\n這是一場由波士頓台灣人與支持台灣的朋友們共同發起的社群集結行動。\n\n9/12，我們要一起走進 Fenway Park，在這座美國最具歷史代表性的球場之一，讓 Red Sox 看見波士頓台灣人的凝聚力，為 2027 Red Sox Taiwan Day 鋪路，也用行動支持波士頓在地公益。\n\n多年來，美國許多職業球隊都曾舉辦過 Taiwan Day，但即使波士頓擁有越來越多台灣家庭、學生與專業人士，Fenway Park 至今仍未舉辦過正式的 Red Sox Taiwan Day。\n\n因此，我們發起了這次 Taiwan Fan Night at Fenway。\n\n我們希望透過實際的參與與行動，讓紅襪看見：波士頓的台灣社群不是零散的個人，而是一個有規模、有熱情、有文化、有凝聚力，也願意一起行動的 community。\n\n每一張票、每一位到場的人，都是一份支持；每一個穿上 Taiwan 主題衣服、帶著家人朋友走進球場的人，都是在幫台灣被看見。\n\n這次活動由波克萊台灣商會基金會發起。原本只是一個小小的想法，卻在短時間內迅速獲得許多台灣家庭、學生、專業人士、僑團與社群的支持，慢慢形成一股屬於波士頓台灣人的集結力量。\n\n這不只是一次棒球活動。它更代表著社群、文化、友誼、認同與團結。\n\n我們希望，這場活動不只是在 2026 年 9 月 12 日當天留下美好回憶，更能成為未來正式 Red Sox Taiwan Day 的起點。今天我們一起坐滿一區，明天就更有機會讓 Fenway Park 正式為台灣亮起來。\n\n更重要的是，我們希望讓在波士頓長大的下一代台灣孩子們看見：台灣人的文化與身份，是值得被驕傲看見的；而當我們願意一起站出來，就可以創造改變。\n\n9/12，讓我們一起走進 Fenway。讓台灣在波士頓被看見。讓這一天，成為 Red Sox Taiwan Day 的開始。\n\nTaiwanese in Boston, Strong Together.",
      buttons: {
        deals: "查看組隊優惠",
        line: "加入官方 LINE 群",
        donate: "💙 支持活動 GoFundMe",
        buy: "立即前往購票",
        form: "沒有 LINE？用 Google Form 加入",
      },
      stats: [
        ["比賽日期", "9/12/26"],
        ["比賽時間", "4:15 PM"],
        ["對戰組合", "Royals vs Red Sox"],
        ["座位區域", "Bleacher 41, 42, & 43"],
      ],
      missionTitle: "讓 Fenway 看見台灣",
      missionEyebrow: "活動目的",
      missionText:
        "本活動由波克萊台灣商會基金會（BTCF）主辦。每售出一張票，BTCF 將代表參與本次活動的台灣社群，額外捐出 $3 給 Boys & Girls Clubs of Boston。$3 捐款並非從大家購買球票的費用中扣除；大家所付的票價，將全數用於支付給 Red Sox 的團體票費用，BTCF 不從本活動中營利。",
      organizedBy: "主辦 Organized by",
      coHosts: "共同協辦 Co-Hosts",
      date: "日期",
      location: "地點",
    },
    mission: {
      eyebrow: "Mission",
      title: "做公益，也讓台灣被看見",
      description:
        "本活動的主要目的，是凝聚波士頓台灣社群力量，支持在地公益，並為 2027 Red Sox Taiwan Day 鋪路。",
      cards: [
        {
          icon: "🏛️",
          title: "BTCF 主辦",
          body: "本活動由波克萊台灣商會基金會（BTCF）主辦。大家所付的票價將全數用於支付給 Red Sox 的團體票費用，BTCF 不從本活動中營利。",
        },
        {
          icon: "❤️",
          title: "每張票捐 $3",
          body: "每售出一張票，BTCF 將代表參與本次活動的台灣社群，額外捐出 $3 給 Boys & Girls Clubs of Boston。這 $3 並不是從購票費用中扣除，而是由 BTCF 另外捐出。",
        },
        {
          icon: "👕",
          title: "台灣主題紀念 T-shirt",
          body: "所有參與者將獲得一件台灣主題紀念 T-shirt，將公開徵稿及公開票選，由 BTCF 與贊助單位提供。",
        },
      ],
    },
    tickets: {
      eyebrow: "Tickets",
      title: "912 Taiwan Fans Night 購票更新",
      description:
        "感謝大家對 912 Taiwan Fans Night at Fenway 的熱烈支持！6/1 起新釋出的票券為 $50 / ticket，仍包含 Red Sox × Bruins Limited-Edition Jersey。後續購票的朋友也可以繼續填寫隊名，加入原本的隊伍，我們會盡量協助安排在相近座位。",
      under3Title: "個人、兩人同行也可以直接購買！",
      under3Text:
        "個人、兩人同行，或還沒有隊伍的朋友，一樣可以直接透過 Zeffy 購票。購票時也可以填寫隊名，加入原本的隊伍或自行組隊。",
      dealTitle: "目前新釋出票券",
      dealSubtitle: "6/1 起新票價｜$50 / ticket｜Includes Limited-Edition Jersey",
      benefits: [
        "$50 / ticket",
        "Includes Red Sox × Bruins Limited-Edition Jersey",
        "這批票券與先前販售的票種相同，仍然包含限量 Jersey",
        "後續購票者仍可填寫隊名，加入原本隊伍",
        "主辦單位會盡量協助安排在相近座位",
        "每人一件台灣主題 T-shirt，並可參加活動抽獎",
      ],
      dealNote:
        "原本活動規劃中，5/31 前購買的票券為 $47，包含 Red Sox × Bruins 限量聯名 Jersey；6/1 之後則預計改販售一般團體優惠票。不過，在收到紅襪提供的一般團體優惠票連結後，我們發現一般團體票雖然票面價格為 $41，但加上官方售票手續費後，每張票實際價格為 $48.16。因此，經過與紅襪銷售部門討論後，我們決定不販售一般團體優惠票，而是繼續提供包含限量 Jersey 的票券。",
      seatingTitle: "🎟 座位提醒 Seating Notice",
      seating: [
        "填寫相同 Team Name 的朋友，主辦單位會盡量安排坐在一起或附近。所有參與者都會安排在 Fenway Park — Bleacher 41, 42, & 43 區，一起為台灣應援。",
      ],
      valueText:
        "如果您只是想單純看一場球賽，市場上也許有機會找到更便宜的票。但如果您想和上百位台灣人一起坐在同一區、一起穿上台灣、一起讓 Red Sox 看見台灣，這份價值是其他票無法取代的。",
      valuePunch: "這不只是買一張球票，而是一起完成一件讓 Fenway 看見台灣的事。",
      eTitle: "電子票 E-Tickets",
      eText1:
        "所有參與者都必須先下載 MLB Ballpark App。請確認您購票時使用的 Email，與註冊／登入 MLB Ballpark App 的 Email 是同一個，因為電子票將會發送到您的 MLB Ballpark App 帳號中。",
      eText2: "電子票可以轉讓給其他人；如果活動當天無法參加，可以透過 MLB Ballpark App 將票轉送給朋友或家人。",
      giveawayTitle: "當天紅襪現場贈品",
      giveawayText:
        "6/1 起的 $50 票券仍包含 Red Sox × Bruins Limited-Edition Jersey。此為 9/12 當天在 Fenway Park 現場領取的贈品。",
      giveawayNote: "先到先領，尺寸發完為止；數量與尺寸依 Red Sox 現場提供為準。",
    },
    teams: {
      eyebrow: "TEAM TAIWAN",
      title: "TEAM TAIWAN 組隊方式",
      description:
        "不管是否組隊，每位參加者都可以自行至 Zeffy 購票付款，目前票價為 $50，並包含 Red Sox × Bruins Limited-Edition Jersey。3 人以上即可自行組隊並命名；隊長只需要取隊名、邀請朋友，並提醒隊員填寫完全相同的 Team Name。",
      steps: [
        ["👥", "1. 隊長先決定隊伍名稱", "3 人以上即可成立隊伍。隊名可以自由創意命名，中英文皆可。僑團、公司、學校社團或組織，也可以直接使用單位名稱作為隊名。"],
        ["📣", "2. 分享隊名給隊員", "隊長把隊伍名稱分享給隊員。請所有隊員購票時填寫完全相同的隊名，以利後續統計、座位安排與比賽資格確認。"],
        ["🎟️", "3. 自行購票，或由代表統一購票", "參加者可以自行至 Zeffy 購票付款，也可以由隊長或一位代表幫多人一起購票。隊長不一定需要代收款或統一購票。重點是：同一隊的朋友購票時，請填寫完全相同的 Team Name，這樣主辦單位才方便統計與安排座位。沒有要組隊或未滿 3 人也可以直接購票。"],
        ["📝", "給隊長的小提醒", "人數較多的隊伍，建議隊長可以自行建立一份名單，讓隊員回覆是否已完成報名與購票，方便隊長掌握自己隊伍的人數。"],
      ],
      teamNameTitle: "購票時請填寫 Team Name",
      teamNameText1:
        "每位參加者在 Zeffy 表單中的 Team Name 欄位，填上相同隊名。隊名必須完全一致，才方便主辦單位統計人數、安排座位與確認創意隊名比賽資格。",
      teamNameText2:
        "僑團、公司、學校社團或組織可以直接使用單位名稱作為隊名，例如波士頓台灣人生技協會 BTBA。這樣大家在 TEAM TAIWAN 集氣榜上，也可以清楚看到各僑團、單位與組織的集結力量。",
      teamNameText3:
        "沒有要組隊，或未滿 3 人的朋友，也可以直接透過 Zeffy 購票，同樣可以直接購票並填寫隊名。未滿 3 人仍可填寫隊名，但不列入創意隊名比賽資格。",
      friendTeamEyebrow: "新隊伍",
      friendTeamTitle: "🤝 加入就有朋友隊",
      friendTeamIntro:
        "因為收到很多朋友的建議，這次主辦單位特別幫大家建立了一個新隊伍：加入就有朋友隊。",
      friendTeamText:
        "如果你是一個人、兩個人想來參加 912，還沒有固定隊伍，或是想趁這次活動認識更多新朋友，都非常歡迎加入這一隊！912 不只是一起進 Fenway 看球，也是一個認識新朋友、連結台灣社群的好機會。",
      friendTeamTransfer:
        "如果你已經報名其他隊伍，但想轉到「加入就有朋友隊」，也可以直接傳訊息給主辦單位，我們會協助大家轉隊。",
      friendTeamGift:
        "凡是加入「加入就有朋友隊」的朋友，活動當天主辦單位也會準備一份特別小禮物送給大家！",
      friendTeamPunch:
        "一個人來也沒關係。兩個人來也很歡迎。加入就有朋友，912 一起坐、一起加油！🇹🇼⚾",
      exampleTitle: "可個人購票，也可以 3 人以上組隊",
      exampleText:
        "歡迎大家發揮創意，邀請親友一起加入 9/12 Fenway 台灣集結！沒有要組隊的人，也可以直接購票參加。3 人以上的隊伍將自動參加「最佳創意隊名獎」評選。主辦單位將依照隊名創意、活動精神與整體趣味性進行評選，並保有最終決定權。得獎隊伍也會有獎品喔！",
      nameReminder: "隊名請使用適當、尊重、友善的名稱，避免不雅、歧視、政治攻擊、商標侵權或容易造成誤解的內容。",
      examplesLabel: "創意隊名 Examples",
    },
    leaderboard: {
      eyebrow: "Leaderboard",
      title: "TEAM TAIWAN 集氣榜",
      description: "感謝各隊熱情響應！集氣榜將依照各隊目前認票／報名票數持續更新。",
      headerTitle: "讓 Red Sox 看見 Team Taiwan 的力量",
      headerText:
        "每一隊的加入，都是為 912 台灣集結與 2027 Red Sox Taiwan Day 集氣。歡迎更多家庭、朋友、僑團、公司、組織、校友會、社團與商家一起加入！各單位也可以直接使用單位名稱作為隊名，讓大家在集氣榜上看見你們的力量。",
      ticketsLabel: "張票",
      leading: "目前領先",
      growing: "持續增加中",
      joinTitle: "你的隊伍也可以一起集氣！",
      joinText:
        "3 人以上就可以組隊，自取隊名並加入 TEAM TAIWAN 集氣榜。目前透過 Zeffy 購票，每張票為 $50，並包含限量 Jersey。隊名請使用適當、尊重、友善的名稱；主辦單位保留隊名審核與調整之權利。",
      joinButton: "立即組隊",
    },
    payment: {
      eyebrow: "Payment",
      title: "付款方式",
      description:
        "新付款方式：每位參加者自行至 Zeffy 購票付款。隊長不需要代收款，也不需要幫大家統一購票。沒有要組隊或未滿 3 人也可以直接購票，目前可直接購買 $50 Jersey 票券。",
      main: "Main Payment Method",
      zeffyTitle: "Zeffy 購票付款",
      zeffyText:
        "每位參加者自行透過 Zeffy 購票付款。沒有要組隊或未滿 3 人也可以直接購票，目前可直接購買 $50 Jersey 票券。若有組隊，購票時請務必填寫 Team Name，同一隊請填寫完全相同的隊名。",
      scan: "掃描 QR Code 或點擊下方按鈕完成 Zeffy 購票。",
      goTitle: "GoFundMe 支持活動",
      goText:
        "如果你想支持 912 Taiwan Fan Night at Fenway 的活動籌備、宣傳、T-shirt 製作與相關社群活動開銷，歡迎透過 GoFundMe 贊助。",
      goButton: "前往 GoFundMe 贊助",
      reminderTitle: "隊長不用代收款",
      reminderLead: "隊長任務很簡單：",
      reminderText: "取隊名、邀請朋友、提醒隊員自行購票，並在 Zeffy 填寫相同 Team Name。",
      listTitle: "📝 建議隊長另外建立一份名單",
      listText:
        "如果隊伍人數較多，建議隊長自行建立名單，讓隊員回覆是否已完成報名與購票，方便掌握自己隊伍目前的人數。",
    },
    raffle: {
      eyebrow: "Raffle",
      title: "抽獎活動",
      description:
        "抽獎分成兩個活動：5/2–5/31 加入「912台灣集結」官方 LINE 群抽獎活動，以及 912 台灣集結活動大抽獎（所有購票參加者皆可參加）。",
      lineTitle: "5/2–5/31｜加入官方 LINE 群抽獎活動",
      lineText: "只要在 5/31 前加入 912 台灣集結官方 LINE 群，或填寫 912 台灣集結 Google Form，就有機會參加抽獎，並收到最新活動資訊。",
      prizes: ["🎟 912 球票（很多張）", "👕 鄭宗哲簽名 Taiwanese @ Boston 主題 T-shirt（不只一件唷）"],
      eventTitle: "912 台灣集結活動大抽獎",
      eventText: "所有購票參加 912 Taiwan Fan Night at Fenway 的朋友，都可以參加活動大抽獎。",
      eventPrize: "⚾ 鄭宗哲簽名球（不只一顆喔！）及鄭宗哲簽名 Taiwanese @ Boston 主題 T-shirt（不只一件唷）",
    },
    shirt: {
      eyebrow: "T-shirt Design Contest",
      title: "912 台灣集結紀念 T-shirt 設計大賽",
      description: "一起做出屬於波士頓台灣人的球衣。這不只是設計比賽，而是一次由社群共同參與的創作與集結。",
      heroTitle: "912 Taiwan Fans Night T-Shirt Design Contest",
      intro:
        "今年 9/12，我們希望邀請數百位台灣人與台灣之友，一起走進 Fenway Park。這不只是一場棒球賽，更是波士頓台灣社群的一次大型集結。這件紀念 T-shirt 將由社群一起參與創作，成為屬於波士頓台灣人的共同記憶。",
      deadlineLabel: "投稿截止",
      deadline: "2026 年 5 月 31 日午夜",
      finalistLabel: "入圍公布",
      finalist: "2026 年 6 月 6 日",
      voteLabel: "社群人氣票選",
      vote: "2026 年 6 月 6 日 – 6 月 12 日",
      winnerLabel: "得獎公布",
      winner: "2026 年 6 月 14 日",
      cards: [
        ["🎯", "設計主題", "Taiwan、Boston、Baseball、Fenway、Taiwanese Community、台灣文化、台灣精神、912 Taiwan Fans Night。"],
        ["⚾", "設計方向", "以「棒球文化 × 台灣認同 × 波士頓社群」為方向。建議適合球場穿搭、遠距離辨識度高、拍照效果佳。"],
        ["👥", "參賽資格", "不限年齡、國籍與居住地。歡迎設計師、學生、插畫創作者、棒球愛好者與台灣文化支持者參加。"],
        ["📁", "投稿規格", "可提交正面、背面或完整正反面設計，並附 50–150 字設計理念。接受 PNG、JPG、PDF。"],
      ],
      mockupTitle: "T-shirt Mockup 下載",
      mockupText:
        "主辦單位提供 Front / Back Mockup，方便大家直接套用設計投稿。Mockup 僅供投稿示意使用，實際衣服顏色、印刷位置與尺寸可能依製作需求調整。",
      submitButton: "前往投稿表單",
      rulesTitle: "比賽規則與提醒",
      rules: [
        "作品需為原創，不能侵犯他人版權、商標權或其他智慧財產權。",
        "請避免使用 Red Sox 官方 Logo、MLB 官方 Logo 或其他未授權商標。",
        "設計需適合實際印刷與量產，主辦單位保留調整印刷位置、顏色與細節的權利。",
        "主辦單位保留最終採用、修改與製作之權利。",
      ],
      mockupDownloadTitle: "T-shirt Mockup 下載",
      mockupDownloadText: "主辦單位提供 Front / Back Mockup，方便大家直接套用設計投稿。Mockup 僅供投稿示意使用，實際衣服顏色、印刷位置與尺寸可能依製作需求調整。",
      frontMockup: "下載 Front Mockup",
      backMockup: "下載 Back Mockup",
      submissionTitle: "立即投稿參加設計大賽",
      submissionText: "請透過官方 Google Form 投稿，提交您的 T-shirt 設計作品、設計理念與相關資料。",
      submitNow: "立即投稿",
      prizeTitle: "官方首獎",
      prizeAmount: "$1,000",
      prizeSponsor: "由波克萊基金會與北美最帥氣 Tony 哥（許志遠）贊助",
      prizeItems: ["9/12 球票一張", "鄭宗哲簽名球"],
      popularityTitle: "社群人氣獎",
      popularityPrize: "9/12 球票一張",
      finalistTitle: "入圍作品",
      finalistText: "官方網站與社群平台展示",
      timelineTitle: "重要時程",
      timeline: [
        ["投稿截止", "2026 年 5 月 31 日午夜"],
        ["入圍公布", "2026 年 6 月 6 日"],
        ["社群人氣票選", "2026 年 6 月 6 日 – 6 月 12 日"],
        ["得獎公布", "2026 年 6 月 14 日"]
      ],
      judgingTitle: "評選方式",
      judging: ["社群人氣票選：40%", "主辦單位評選：60%"],
      judgingText: "主辦單位將綜合考量設計品質、主題契合度、球場效果、社群代表性與實際製作可行性。",
      licenseText: "主辦單位保留對作品進行最終選擇、修改、調整、合併、重製、公開展示、印刷製作與實際製作之權利，並得依印刷、成本、版型或活動需求進行適度調整。參賽者理解實際成品可能與投稿設計略有不同，主辦單位保有本活動最終解釋權。",
      bannerTitle: "一起做出屬於波士頓台灣人的球衣",
      bannerText: "我們希望 9/12 當天，大家穿上的不只是一件衣服，而是一份屬於波士頓台灣社群的共同記憶。",
      hashtags: "#912台灣集結 #TaiwanFansNight #TaiwanAtFenway #BostonTaiwanese #TaiwaneseCommunity #FenwayTaiwanNight #台灣人在波士頓 #讓Fenway看見台灣",
    },
    faq: {
      eyebrow: "FAQ",
      title: "注意事項與常見問題",
      description: "重要規則與常見問題整理。",
      groups: [
        {
          category: "📍 活動與座位安排",
          items: [
            ["🎟 座位提醒 Seating Notice", "填寫相同 Team Name 的朋友，主辦單位會盡量安排坐在一起或附近。所有參與者都會安排在 Fenway Park — Bleacher 41, 42, & 43 區，一起為台灣應援。"],
            ["座位可以自己選嗎？", "本活動為團體購票，座位將由主辦單位統一安排，無法自行選位。"],
            ["我跟朋友分開買票，可以坐一起嗎？", "可以。請在購票時填寫相同的 Team Name，主辦單位會依照 Team Name 盡量安排在附近的位置。"],
          ],
        },
        {
          category: "🎟️ 票務相關",
          items: [
            ["電子票要怎麼收到？可以轉讓嗎？", "所有參與者都必須先下載 MLB Ballpark App。請確認您購票時使用的 Email，與註冊／登入 MLB Ballpark App 的 Email 是同一個，因為電子票將會發送到您的 MLB Ballpark App 帳號中。電子票可以轉讓給其他人；如果活動當天無法參加，可以透過 MLB Ballpark App 將票轉送給朋友或家人。"],
            ["可以退款嗎？", "票券售出後原則上恕不退款。如因特殊情況需要處理，請儘早聯繫主辦單位。"],
            ["會提供收據嗎？", "Zeffy 會自動將付款收據寄至購票者填寫的 Email。"],
          ],
        },
        {
          category: "👕 T-shirt 與 Jersey",
          items: [
            ["這是 Red Sox 官方 Taiwan Day 嗎？", "不是。這次是由波克萊台灣商會基金會 BTCF 主辦的社群集結活動，目標是讓 Fenway 看見波士頓台灣社群的凝聚力，並為未來爭取正式 Red Sox Taiwan Day 鋪路。"],
            ["會有台灣主題球衣嗎？", "因為這不是官方 Taiwan Day，紅襪不會提供台灣主題球衣。每位參加者將獲得一件由 BTCF 出資贈送的台灣主題紀念 T-shirt。"],
            ["T-shirt 設計是誰做的？", "T-shirt 設計將採公開徵稿與社群投票方式進行。相關徵稿與投票資訊將很快公布。"],
            ["什麼時候可以拿到 T-shirt？", "我們規劃在比賽前約一週左右發放 T-shirt，讓大家可以直接穿著台灣主題衣服走進 Fenway。"],
            ["T-shirt 尺寸可以更改嗎？", "T-shirt 尺寸提交後原則上無法更改，請購票時確認尺寸後再送出。"],
            ["Red Sox × Bruins 聯名球衣一定拿得到嗎？", "聯名球衣由紅襪現場發放，基本上一定拿得到，但尺寸有限，先到先領，尺寸不保證。建議想領取球衣的參加者當天提早抵達。"],
          ],
        },
        {
          category: "👥 組隊相關",
          items: [
            ["如何組隊？", "3 人以上即可自行組隊並命名。隊長先決定隊伍名稱，並請所有隊員自行至 Zeffy 購票付款。購票時，大家在 Team Name 欄位填寫完全相同的隊名即可。"],
            ["隊長需要幫大家收錢或統一買票嗎？", "不需要。每位參加者都可以自行在 Zeffy 購票付款。隊長只需要負責取隊名、邀請朋友，並提醒大家填寫相同 Team Name。"],
            ["隊長如何掌握自己隊伍人數？", "人數較多的隊伍，建議隊長可以自行建立一份名單，讓隊員回覆是否已完成報名與購票，方便隊長統計與掌握自己隊伍的人數。最後實際人數仍會以 Zeffy 購票資料與 Team Name 統計為準。"],
            ["什麼是創意隊名比賽？", "3 人以上的隊伍將自動參加最佳創意隊名獎評選。主辦單位將依照隊名創意、活動精神與整體趣味性進行評選，並保有最終決定權。得獎隊伍也會有獎品喔！"],
            ["如果隊名拼錯或大小寫不一樣怎麼辦？", "請盡量填寫完全一致的隊名。若不小心填錯，請儘早聯繫主辦單位協助修正。"],
          ],
        },
        {
          category: "🎤 活動內容",
          items: [
            ["當天會有官方台灣主題活動嗎？", "因為本活動不是官方 Taiwan Day，所以不會有完整的官方台灣主題活動。但主辦單位會努力爭取讓台灣代表在開場前於場內被介紹，也希望有機會在大螢幕上呈現台灣社群想說的話。"],
            ["會有開球嘉賓嗎？", "如果參與人數達到一定規模，我們會進一步向紅襪提出指定代表開球的可能性。一般來說，指定開球通常需要約 750 張票以上的規模，因此需要大家一起努力。"],
            ["鄭宗哲會出賽嗎？", "球員是否出賽不是主辦單位能控制的。場上的比賽交給他，場下的應援交給我們一起努力！"],
          ],
        },
        {
          category: "🏟️ 當天參與",
          items: [
            ["一定要加入 LINE 嗎？", "不強制，但強烈建議加入。重要通知將優先透過 LINE 與 Email 公布。"],
            ["可以帶國旗或應援物進場嗎？", "可以攜帶台灣相關應援物，但仍需遵守 Fenway Park 的安檢與場館規範。"],
            ["可以帶小孩嗎？", "歡迎家人與小朋友一起參加。兒童是否需要票券，請依 Fenway Park / Red Sox 官方規定為準。"],
            ["如果下雨怎麼辦？", "比賽是否延賽或異動，將依 Red Sox / Fenway Park 官方公告為準。若有重要異動，主辦單位也會透過 Email 與 LINE 通知大家。"],
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "聯絡我們",
      description: "如果有任何問題，歡迎透過 LINE、Google Form 或主辦單位聯絡方式與我們聯繫。",
      cards: [
        ["官方 LINE 群", "加入 912 台灣集結官方 LINE 群，接收最新活動公告、抽獎資訊、組隊更新與當天注意事項。", "加入 LINE 群", officialLineGroup],
        ["Google Form", "沒有 LINE 的朋友，也可以填寫 Google Form，讓主辦單位透過 Email 聯絡並提供後續通知。", "填寫 Google Form", googleFormLink],
        ["主辦單位 LINE", "若有個別問題、隊伍修正、活動合作或志工相關問題，可以透過主辦單位 LINE 聯絡。", "聯絡主辦單位", organizerLine],
        ["志工報名", "歡迎願意協助活動宣傳、現場集合、T-shirt 發放、社群動員與活動支援的朋友加入志工行列。", "志工報名", volunteerFormLink],
      ],
      organizerTitle: "主辦單位",
      organizer: "波克萊台灣商會基金會（BTCF）｜波克萊台灣商會（BTCC）",
    },
    footer: {
      tagline: "Taiwanese in Boston, Strong Together.",
      organizedBy: "主辦單位",
      links: "快速連結",
      line: "官方 LINE 群",
      gofundme: "GoFundMe 贊助",
      tickets: "Zeffy 購票",
      contact: "聯絡主辦單位",
      copyright: "© 2026 Taiwan Fan Night at Fenway",
    },
    btcfdonate: {
      eyebrow: "Support BTCF",
      title: "支持波克萊台灣商會基金會",
      description: "如果您支持我們推廣台灣、服務社區與舉辦更多公益活動，歡迎以以下方式捐款支持 BTCF。",
      goTitle: "GoFundMe 支持 912 活動",
      goText: "支持活動籌備、宣傳、T-shirt 製作與相關社群活動開銷。",
      zeffyTitle: "Zeffy 活動購票",
      zeffyText: "若您要參加活動，請透過 Zeffy 完成購票付款。",
      directTitle: "直接捐款給 BTCF",
      directText: "若您希望直接支持波克萊台灣商會基金會，也可以使用 Zelle、銀行轉帳/ACH 或支票捐款。",
      zelleTitle: "Zelle 捐款",
      zelleText: "備註可寫：Donation / BTCF Support",
      zelleHandle: "btcf-boston",
      achTitle: "銀行轉帳",
      accountLabel: "ACCOUNT NUMBER",
      accountNumber: "466026497066",
      routingLabel: "ROUTING NUMBER",
      routingNumber: "011000138",
      checkTitle: "支票捐款",
      checkPayableLabel: "支票抬頭請寫",
      checkPayable: "Brookline Taiwanese Chamber Foundation",
      checkMailLabel: "支票請寄至",
      checkAddress: "7 Bow St., Suite 1\nNorth Reading, MA 01864",
      receiptNote: "如需 501(c)(3) 捐款收據，請在捐款時留下姓名、Email、捐款方式與金額，方便主辦單位後續開立紀錄。",
    },
  },

  en: {
    langLabel: "中文",
    title: "912 Taiwan Fan Night at Fenway",
    nav: [
      ["home", "Home"],
      ["tickets", "Tickets"],
      ["teams", "Teams"],
      ["leaderboard", "Leaderboard"],
      ["shirt-design", "T-shirt Design"],
      ["raffle", "Raffle"],
      ["faq", "FAQ"],
      ["support", "Support / Contact"],
    ],
    headerBuy: "Buy Tickets on Zeffy",
    hero: {
      badge: "Ticket Details Announced｜TEAM TAIWAN Team Registration Open",
      title1: "912 Taiwan Fan Night at Fenway",
      title2: "912 Taiwan Rally",
      description:
        "Taiwan Fan Night at Fenway is more than a baseball outing.\n\nIt is a community rally created by Taiwanese people in Boston and friends who support Taiwan.\n\nOn September 12, we will walk into Fenway Park together — one of the most historic ballparks in America — to show the Red Sox the strength and unity of the Taiwanese community in Boston, to help pave the way for Red Sox Taiwan Day 2027, and to support local public-interest causes in Boston through collective action.\n\nOver the years, many professional sports teams across the United States have hosted Taiwan Day events. Yet even as Boston has become home to more and more Taiwanese families, students, and professionals, Fenway Park has still never hosted an official Red Sox Taiwan Day.\n\nThat is why we created Taiwan Fan Night at Fenway.\n\nThrough real participation and action, we want the Red Sox to see that the Taiwanese community in Boston is not just a collection of scattered individuals. It is a community with scale, passion, culture, unity, and the willingness to act together.\n\nEvery ticket and every person who shows up is a form of support. Every person who wears a Taiwan-themed shirt and walks into the ballpark with family and friends is helping Taiwan be seen.\n\nThis event was initiated by the Brookline Taiwanese Chamber Foundation. What began as a small idea quickly gained support from Taiwanese families, students, professionals, community organizations, and local networks, gradually becoming a rallying force for Taiwanese in Boston.\n\nThis is not just a baseball event. It represents community, culture, friendship, identity, and unity.\n\nWe hope this event will not only create beautiful memories on September 12, 2026, but also become the starting point for a future official Red Sox Taiwan Day. If we can fill a section together today, we have a better chance of seeing Fenway Park officially light up for Taiwan tomorrow.\n\nMost importantly, we hope the next generation of Taiwanese children growing up in Boston can see that Taiwanese culture and identity are worth being seen with pride — and that when we are willing to stand together, we can create change.\n\nOn September 12, let’s walk into Fenway together. Let Taiwan be seen in Boston. Let this day become the beginning of Red Sox Taiwan Day.\n\nTaiwanese in Boston, Strong Together.",
      buttons: {
        deals: "View Ticket Deals",
        line: "Join Official LINE Group",
        donate: "💙 Support on GoFundMe",
        buy: "Buy Tickets",
        form: "No LINE? Join by Google Form",
      },
      stats: [
        ["Game Date", "9/12/26"],
        ["Game Time", "4:15 PM"],
        ["Matchup", "Royals vs Red Sox"],
        ["Seating Area", "Bleacher 41, 42, & 43"],
      ],
      missionTitle: "Let Fenway See Taiwan",
      missionEyebrow: "Mission",
      missionText:
        "This event is organized by the Brookline Taiwanese Chamber Foundation (BTCF). For every ticket sold, BTCF will donate an additional $3 on behalf of the participating Taiwanese community to Boys & Girls Clubs of Boston. The $3 donation is not deducted from ticket payments; ticket payments are used entirely to cover the group ticket cost paid to the Red Sox, and BTCF does not profit from this event.",
      organizedBy: "Organized by",
      coHosts: "Co-Hosts",
      date: "Date",
      location: "Location",
    },
    mission: {
      eyebrow: "Mission",
      title: "Support Local Good. Let Taiwan Be Seen.",
      description:
        "The purpose of this event is to unite the Taiwanese community in Boston, support local public-interest causes, and help pave the way for Red Sox Taiwan Day 2027.",
      cards: [
        {
          icon: "🏛️",
          title: "Organized by BTCF",
          body: "This event is organized by the Brookline Taiwanese Chamber Foundation (BTCF). Ticket payments are used entirely to cover the group ticket cost paid to the Red Sox, and BTCF does not profit from this event.",
        },
        {
          icon: "❤️",
          title: "$3 Donated Per Ticket",
          body: "For every ticket sold, BTCF will donate an additional $3 on behalf of the participating Taiwanese community to Boys & Girls Clubs of Boston. This $3 is not deducted from ticket payments; it is donated separately by BTCF.",
        },
        {
          icon: "👕",
          title: "Taiwan-Themed Commemorative T-shirt",
          body: "All participants will receive a Taiwan-themed commemorative T-shirt. The design will be selected through open submissions and community voting, and the shirts will be provided by BTCF and sponsors.",
        },
      ],
    },
    tickets: {
      eyebrow: "Tickets",
      title: "912 Taiwan Fans Night Ticket Update",
      description:
        "Thank you for the strong support for 912 Taiwan Fans Night at Fenway. Starting 6/1, the newly released tickets are $50 per ticket and still include the Red Sox × Bruins Limited-Edition Jersey. Participants may continue to enter a Team Name and join an existing team; we will do our best to seat teammates near one another.",
      under3Title: "Individuals and Pairs Can Still Buy Directly",
      under3Text:
        "Individuals, pairs, or people without a team can also buy directly through Zeffy. You may still enter a Team Name to join an existing team or create your own group.",
      dealTitle: "Current Ticket Release",
      dealSubtitle: "6/1 起新票價｜$50 / ticket｜Includes Limited-Edition Jersey",
      benefits: [
        "$50 per ticket",
        "Includes one Red Sox × Bruins Limited-Edition Jersey",
        "Same ticket type as the previous jersey tickets",
        "Participants may continue to enter a Team Name",
        "We will do our best to seat teammates near one another",
        "Includes one Taiwan-themed T-shirt and event raffle eligibility",
      ],
      dealNote:
        "Our original plan was to offer $47 tickets with the Red Sox × Bruins jersey before 5/31, then switch to traditional group tickets after 6/1. However, after receiving the Red Sox group ticket link, we found that the $41 traditional group ticket becomes $48.16 per ticket after official ticketing fees. After discussing with the Red Sox sales team, we decided not to sell the traditional group tickets and instead continue offering tickets that include the limited-edition jersey.",
      seatingTitle: "🎟 Seating Notice",
      seating: [
        "Participants who enter the same Team Name will be seated together or near one another as much as possible. All participants will be seated in Fenway Park — Bleacher 41, 42, and 43 — to cheer for Taiwan together.",
      ],
      valueText:
        "If you only want to watch a baseball game, you may be able to find other tickets elsewhere. But if you want to sit together with hundreds of Taiwanese fans, wear Taiwan together, and help the Red Sox see Taiwan, that shared meaning cannot be replaced by any ordinary ticket.",
      valuePunch: "This is not just buying a ticket. It is joining a collective effort to let Fenway see Taiwan.",
      eTitle: "E-Tickets",
      eText1:
        "All participants must download the MLB Ballpark App. Please make sure the email used to purchase tickets is the same email used to register or log in to the MLB Ballpark App, because e-tickets will be delivered to that account.",
      eText2: "E-tickets can be transferred to others. If you cannot attend on the event day, you may transfer your ticket to a friend or family member through the MLB Ballpark App.",
      giveawayTitle: "Red Sox Game-Day Giveaway",
      giveawayText:
        "Starting 6/1, the current $50 ticket still includes the Red Sox × Bruins Limited-Edition Jersey provided by the Red Sox. This giveaway is picked up at Fenway Park on 9/12.",
      giveawayNote: "Available while supplies last. Sizes are first come, first served, and availability depends on what the Red Sox provides at the ballpark.",
    },
    teams: {
      eyebrow: "TEAM TAIWAN",
      title: "How to Form a TEAM TAIWAN Group",
      description:
        "Whether or not you are joining a team, each participant can purchase directly through Zeffy. The current ticket price is $50 and includes the Red Sox × Bruins Limited-Edition Jersey. Groups of 3 or more may create a team name; the team leader only needs to choose the name, invite friends, and remind everyone to enter the exact same Team Name.",
      steps: [
        ["👥", "1. Team Leader Chooses a Team Name", "Groups of 3 or more may form a team. Team names can be creative and can be in Chinese, English, or both. Community groups, companies, student associations, and organizations may use their official organization name."],
        ["📣", "2. Share the Team Name with Members", "The team leader shares the team name with all members. Everyone should enter the exact same Team Name when purchasing so the organizer can track team size, seating, and contest eligibility."],
        ["🎟️", "3. Each Participant Purchases Their Own Ticket", "Each participant purchases directly through Zeffy. Team leaders do not need to collect money or buy tickets for everyone. Individuals or groups under 3 can also buy directly and still purchase the current $50 jersey ticket."],
        ["📝", "Reminder for Team Leaders", "For larger teams, we recommend that team leaders keep their own list and ask members to confirm whether they have registered and purchased tickets, so the team leader can track the current team size."],
      ],
      teamNameTitle: "Enter Your Team Name When Buying Tickets",
      teamNameText1:
        "Each participant should enter the same team name in the Team Name field on Zeffy. The team name must match exactly so the organizer can count the team, coordinate seating, and confirm creative team name contest eligibility.",
      teamNameText2:
        "Community groups, companies, student associations, or organizations can use their organization name as the team name, such as Boston Taiwanese Biotechnology Association (BTBA). This helps the community see the collective strength of each group on the TEAM TAIWAN Leaderboard.",
      teamNameText3:
        "Individuals or groups under 3 can also buy directly through Zeffy and still purchase the current $50 jersey ticket. Groups under 3 may enter a team name, but will not be eligible for the creative team name contest.",
      friendTeamEyebrow: "New Team",
      friendTeamTitle: "🤝 Join and Make Friends Team",
      friendTeamIntro:
        "After receiving suggestions from many friends, the organizer has created a new team for everyone: Join and Make Friends Team.",
      friendTeamText:
        "If you are coming alone, coming as a pair, do not have a fixed team yet, or would like to meet more new friends through this event, you are very welcome to join this team. 912 is not only about watching a game together at Fenway; it is also a great opportunity to meet new friends and connect with the Taiwanese community.",
      friendTeamTransfer:
        "If you have already registered under another team but would like to switch to the Join and Make Friends Team, please message the organizer directly and we will help with the team change.",
      friendTeamGift:
        "Everyone who joins the Join and Make Friends Team will also receive a special small gift from the organizer on event day.",
      friendTeamPunch:
        "Coming alone is totally fine. Coming as a pair is very welcome. Join and make friends — on 9/12, let’s sit together and cheer together! 🇹🇼⚾",
      exampleTitle: "Buy Individually or Form a Team of 3+",
      exampleText:
        "Everyone is welcome to invite friends and family to join the 9/12 Fenway Taiwan rally. People who do not want to form a team can still buy tickets directly. Teams of 3 or more will automatically enter the Best Creative Team Name contest. The organizer will evaluate creativity, event spirit, and overall fun, and reserves final decision-making authority. Winning teams will receive prizes.",
      nameReminder: "Please use an appropriate, respectful, and friendly team name. Avoid offensive, discriminatory, politically attacking, trademark-infringing, or misleading names.",
      examplesLabel: "Creative Team Name Examples",
    },
    leaderboard: {
      eyebrow: "Leaderboard",
      title: "TEAM TAIWAN Leaderboard",
      description: "Thank you to every team for joining! The leaderboard will continue to be updated based on current ticket commitments and registrations.",
      headerTitle: "Let the Red Sox See the Strength of Team Taiwan",
      headerText:
        "Every team that joins helps build momentum for 912 Taiwan Fan Night and Red Sox Taiwan Day 2027. We welcome more families, friends, community groups, companies, organizations, alumni groups, clubs, and local businesses to join. Groups may use their organization name as the team name so the community can see your support on the leaderboard.",
      ticketsLabel: "tickets",
      leading: "Currently Leading",
      growing: "Still Growing",
      joinTitle: "Your Team Can Join the Rally Too!",
      joinText:
        "Groups of 3 or more can create a team name and join the TEAM TAIWAN Leaderboard. Current tickets purchased through Zeffy are $50 each and include the limited jersey. Please use an appropriate, respectful, and friendly team name; the organizer reserves the right to review or adjust team names.",
      joinButton: "Create / Join a Team",
    },
    payment: {
      eyebrow: "Payment",
      title: "Payment",
      description:
        "Each participant purchases tickets directly through Zeffy. Team leaders do not need to collect money or buy tickets for everyone. Individuals or groups under 3 can also purchase directly; before 5/31, each ticket is still $50.",
      main: "Main Payment Method",
      zeffyTitle: "Purchase on Zeffy",
      zeffyText:
        "Each participant purchases directly through Zeffy. Individuals or groups under 3 can also buy directly and still purchase the current $50 jersey ticket. If joining a team, please enter the same Team Name as your teammates.",
      scan: "Scan the QR code or click the button below to complete your Zeffy ticket purchase.",
      goTitle: "Support the Event on GoFundMe",
      goText:
        "If you would like to support the planning, promotion, T-shirt production, and related community expenses for 912 Taiwan Fan Night at Fenway, please consider donating through GoFundMe.",
      goButton: "Support on GoFundMe",
      reminderTitle: "Team Leaders Do Not Need to Collect Money",
      reminderLead: "The team leader’s role is simple:",
      reminderText: "Choose a team name, invite friends, remind members to buy their own tickets, and make sure everyone enters the same Team Name on Zeffy.",
      listTitle: "📝 We Recommend Team Leaders Keep a Simple List",
      listText:
        "For larger teams, we recommend that team leaders keep their own list and ask members to confirm whether they have registered and purchased tickets, so the team leader can track the current team size.",
    },
    raffle: {
      eyebrow: "Raffle",
      title: "Raffle",
      description:
        "There are two raffle activities: the official LINE group raffle from 5/2–5/31, and the 912 Taiwan Fan Night event raffle for all ticketed participants.",
      lineTitle: "5/2–5/31｜Official LINE Group Raffle",
      lineText: "Join the official 912 Taiwan Fan Night LINE group or complete the Google Form before 5/31 to enter the raffle and receive event updates.",
      prizes: ["🎟 912 event tickets — multiple winners", "👕 Tsung-Che Cheng signed Taiwanese @ Boston themed T-shirts — more than one"],
      eventTitle: "912 Taiwan Fan Night Event Raffle",
      eventText: "All ticketed participants of 912 Taiwan Fan Night at Fenway are eligible for the event raffle.",
      eventPrize: "⚾ Tsung-Che Cheng signed baseballs — more than one!",
    },
    shirt: {
      eyebrow: "T-shirt Design Contest",
      title: "912 Taiwan Fan Night T-shirt Design Contest",
      description: "Let’s create a shirt that belongs to the Taiwanese community in Boston. This is more than a design contest; it is a community creation and rally.",
      heroTitle: "912 Taiwan Fans Night T-Shirt Design Contest",
      intro:
        "On 9/12, we hope to bring hundreds of Taiwanese people and friends of Taiwan into Fenway Park together. This is not just a baseball game; it is a major gathering of the Taiwanese community in Boston. This commemorative T-shirt will be created through community participation and will become a shared memory for Taiwanese in Boston.",
      deadlineLabel: "Submission Deadline",
      deadline: "May 31 midnight, 2026",
      finalistLabel: "Finalists Announced",
      finalist: "June 6, 2026",
      voteLabel: "Community Popular Vote",
      vote: "June 6 – June 12, 2026",
      winnerLabel: "Winner Announced",
      winner: "June 14, 2026",
      cards: [
        ["🎯", "Design Theme", "Taiwan, Boston, Baseball, Fenway, Taiwanese Community, Taiwanese culture, Taiwanese spirit, and 912 Taiwan Fans Night."],
        ["⚾", "Design Direction", "The design should connect baseball culture, Taiwanese identity, and the Boston community. We recommend a design that works well for ballpark wear, is recognizable from a distance, and looks great in photos."],
        ["👥", "Eligibility", "Open to all ages, nationalities, and locations. Designers, students, illustrators, baseball fans, and supporters of Taiwanese culture are all welcome to participate."],
        ["📁", "Submission Requirements", "You may submit a front design, back design, or complete front-and-back design. Please include a 50–150 word design statement. PNG, JPG, and PDF are accepted."],
      ],
      mockupTitle: "Download T-shirt Mockup",
      mockupText:
        "The organizer provides front and back mockups so designers can apply their artwork directly. Mockups are for submission reference only; final shirt color, print position, and sizing may be adjusted for production needs.",
      submitButton: "Submit Your Design",
      rulesTitle: "Contest Rules and Reminders",
      rules: [
        "Designs must be original and must not infringe on copyrights, trademarks, or other intellectual property rights.",
        "Please avoid using the official Red Sox logo, MLB logo, or any unauthorized trademark.",
        "Designs must be suitable for actual printing and mass production. The organizer reserves the right to adjust print placement, color, and production details.",
        "The organizer reserves the final right to select, modify, and produce the winning design.",
      ],
      mockupDownloadTitle: "T-shirt Mockup Download",
      mockupDownloadText: "The organizer provides front and back mockups so designers can apply their artwork directly. Mockups are for submission reference only; final shirt color, print position, and sizing may be adjusted for production needs.",
      frontMockup: "Download Front Mockup",
      backMockup: "Download Back Mockup",
      submissionTitle: "Submit Your Design Now",
      submissionText: "Please submit your T-shirt design, design statement, and related information through the official Google Form.",
      submitNow: "Submit Now",
      prizeTitle: "Official Grand Prize",
      prizeAmount: "$1,000",
      prizeSponsor: "Sponsored by BTCF and Tony Hsu",
      prizeItems: ["One 9/12 event ticket", "A Tsung-Che Cheng signed baseball"],
      popularityTitle: "Community Popularity Award",
      popularityPrize: "One 9/12 event ticket",
      finalistTitle: "Finalist Works",
      finalistText: "Displayed on the official website and social media platforms",
      timelineTitle: "Important Timeline",
      timeline: [
        ["Submission Deadline", "May 31 midnight, 2026"],
        ["Finalists Announced", "June 6, 2026"],
        ["Community Voting", "June 6 – June 12, 2026"],
        ["Winners Announced", "June 14, 2026"]
      ],
      judgingTitle: "Judging Method",
      judging: ["Community Popularity Vote: 40%", "Organizer Evaluation: 60%"],
      judgingText: "The organizer will evaluate design quality, theme fit, ballpark impact, community representation, and production feasibility.",
      licenseText: "The organizer reserves the right to make the final selection, modify, adjust, merge, reproduce, publicly display, print, and produce the selected work. Adjustments may be made based on printing, cost, sizing, production, or event needs. Participants understand that final production may differ slightly from submitted designs, and the organizer retains final interpretation rights for this event.",
      bannerTitle: "Let’s Create a Shirt That Belongs to the Taiwanese Community in Boston",
      bannerText: "On 9/12, we hope everyone wears not just a shirt, but a shared memory of the Taiwanese community in Boston.",
      hashtags: "#912TaiwanNight #TaiwanFansNight #TaiwanAtFenway #BostonTaiwanese #TaiwaneseCommunity #FenwayTaiwanNight",
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently Asked Questions",
      description: "Important event rules and frequently asked questions.",
      groups: [
        {
          category: "📍 Event & Seating",
          items: [
            ["🎟 Seating Notice", "Participants who enter the same Team Name will be seated together or near one another as much as possible. All participants will be seated in Fenway Park — Bleacher 41, 42, and 43 — to cheer for Taiwan together."],
            ["Can I choose my own seat?", "No. This is a group ticket event. Seats will be assigned by the organizer and cannot be individually selected."],
            ["If my friends and I buy separately, can we sit together?", "Yes. Please enter the same Team Name when purchasing. The organizer will do its best to seat participants with the same Team Name near each other."],
          ],
        },
        {
          category: "🎟️ Tickets",
          items: [
            ["How will I receive my e-ticket? Can it be transferred?", "All participants must download the MLB Ballpark App. Please make sure the email used to purchase tickets is the same email used to register or log in to the MLB Ballpark App, because e-tickets will be delivered to that account. E-tickets can be transferred to others through the MLB Ballpark App."],
            ["Are tickets refundable?", "Tickets are generally non-refundable after purchase. If you have a special situation, please contact the organizer as early as possible."],
            ["Will I receive a receipt?", "Zeffy automatically sends a payment receipt to the email used during purchase."],
          ],
        },
        {
          category: "👕 T-shirt & Jersey",
          items: [
            ["Is this an official Red Sox Taiwan Day?", "No. This is a community-organized event hosted by BTCF. The purpose is to show Fenway the strength and unity of the Taiwanese community in Boston and help pave the way for a future official Red Sox Taiwan Day."],
            ["Will there be a Taiwan-themed jersey?", "Because this is not an official Taiwan Day, the Red Sox will not provide a Taiwan-themed jersey. Each participant will receive a Taiwan-themed commemorative T-shirt provided by BTCF."],
            ["Who designs the T-shirt?", "The T-shirt design will be selected through open submissions and community voting. Contest and voting details will be announced by the organizer."],
            ["When will I receive the T-shirt?", "The organizer plans to distribute T-shirts about one week before the game so everyone can wear the Taiwan-themed shirt into Fenway."],
            ["Can I change my T-shirt size?", "T-shirt sizes generally cannot be changed after submission. Please confirm your size before submitting your purchase information."],
            ["Is the Red Sox × Bruins jersey guaranteed?", "The Red Sox × Bruins co-branded jersey is distributed by the Red Sox at the ballpark. Sizes are limited and first come, first served. Size availability is not guaranteed, so participants who want the jersey should arrive early."],
          ],
        },
        {
          category: "👥 Teams",
          items: [
            ["How do I form a team?", "Groups of 3 or more can create a team name. The team leader chooses the name and asks all members to purchase through Zeffy and enter the exact same Team Name."],
            ["Does the team leader need to collect money or buy tickets for everyone?", "No. Each participant can purchase their own ticket through Zeffy. The team leader only needs to choose the team name, invite friends, and remind everyone to enter the same Team Name."],
            ["How can team leaders track their team size?", "For larger teams, we recommend that team leaders keep their own list and ask members to confirm whether they have registered and purchased tickets. The official count will be based on Zeffy purchase data and Team Name information."],
            ["What is the Creative Team Name Contest?", "Teams of 3 or more automatically enter the Best Creative Team Name contest. The organizer will evaluate creativity, event spirit, and overall fun, and reserves final decision-making authority. Winning teams will receive prizes."],
            ["What if the team name is misspelled or has inconsistent capitalization?", "Please try to enter the team name exactly the same way. If there is a mistake, contact the organizer as soon as possible so we can help correct it."],
          ],
        },
        {
          category: "🎤 Event Program",
          items: [
            ["Will there be official Taiwan-themed activities at the game?", "Because this is not an official Taiwan Day, there will not be a full official Taiwan-themed program. However, the organizer will try to request recognition for Taiwan representatives before the game and hopes to display a Taiwanese community message on the scoreboard."],
            ["Will there be a ceremonial first pitch?", "If the event reaches a certain scale, the organizer will ask the Red Sox about the possibility of designating a ceremonial first pitch representative. In general, this may require a much larger ticket commitment, so community participation matters."],
            ["Will Tsung-Che Cheng play?", "Player lineup decisions are not controlled by the organizer. The game is up to the team; the cheering is up to us."],
          ],
        },
        {
          category: "🏟️ Game Day",
          items: [
            ["Do I have to join LINE?", "It is not required, but strongly recommended. Important updates will be shared through LINE and email."],
            ["Can I bring Taiwan flags or cheering items?", "Yes, Taiwan-related cheering items are welcome, but participants must follow Fenway Park security and venue rules."],
            ["Can I bring children?", "Families and children are welcome. Whether children need tickets depends on Fenway Park / Red Sox official policies."],
            ["What happens if it rains?", "Any postponement or game changes will follow Red Sox / Fenway Park official announcements. The organizer will also share major updates through email and LINE."],
          ],
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact Us",
      description: "If you have questions, please contact us through LINE, Google Form, or organizer contact links.",
      cards: [
        ["Official LINE Group", "Join the official 912 Taiwan Fan Night LINE group for event announcements, raffle updates, team updates, and game-day reminders.", "Join LINE Group", officialLineGroup],
        ["Google Form", "Participants without LINE may complete the Google Form so the organizer can contact them by email and provide future updates.", "Fill Out Google Form", googleFormLink],
        ["Organizer LINE", "For individual questions, team name corrections, event collaboration, or volunteer-related questions, you may contact the organizer through LINE.", "Contact Organizer", organizerLine],
        ["Volunteer Sign-Up", "We welcome volunteers to help with promotion, gathering logistics, T-shirt distribution, community outreach, and event support.", "Volunteer Sign-Up", volunteerFormLink],
      ],
      organizerTitle: "Organizer",
      organizer: "Brookline Taiwanese Chamber Foundation (BTCF)｜Brookline Taiwanese Chamber of Commerce (BTCC)",
    },
    footer: {
      tagline: "Taiwanese in Boston, Strong Together.",
      organizedBy: "Organized by",
      links: "Quick Links",
      line: "Official LINE Group",
      gofundme: "Support on GoFundMe",
      tickets: "Buy Tickets on Zeffy",
      contact: "Contact Organizer",
      copyright: "© 2026 Taiwan Fan Night at Fenway",
    },
    btcfdonate: {
      eyebrow: "Support BTCF",
      title: "Support Brookline Taiwanese Chamber Foundation",
      description: "If you support our mission of promoting Taiwan, serving the community, and organizing future public-interest events, please consider supporting BTCF through the following methods.",
      goTitle: "Support 912 on GoFundMe",
      goText: "Support event planning, promotion, T-shirt production, and related community expenses.",
      zeffyTitle: "Zeffy Ticket Purchase",
      zeffyText: "If you are attending the event, please complete your ticket purchase through Zeffy.",
      directTitle: "Donate Directly to BTCF",
      directText: "If you would like to support Brookline Taiwanese Chamber Foundation directly, you may donate by Zelle, bank transfer/ACH, or check.",
      zelleTitle: "Zelle Donation",
      zelleText: "Memo suggestion: Donation / BTCF Support",
      zelleHandle: "btcf-boston",
      achTitle: "Bank Transfer",
      accountLabel: "ACCOUNT NUMBER",
      accountNumber: "466026497066",
      routingLabel: "ROUTING NUMBER",
      routingNumber: "011000138",
      checkTitle: "Check Donation",
      checkPayableLabel: "Please make checks payable to",
      checkPayable: "Brookline Taiwanese Chamber Foundation",
      checkMailLabel: "Please mail checks to",
      checkAddress: "7 Bow St., Suite 1\nNorth Reading, MA 01864",
      receiptNote: "If you need a 501(c)(3) donation receipt, please include your name, email, donation method, and amount so the organizer can keep proper records.",
    },
  },
};

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Button({ children, onClick, variant = "solid" }) {
  const base = "rounded-full px-6 py-3 font-bold transition active:scale-95";
  const styles =
    variant === "outline"
      ? "border border-emerald-200 bg-white text-emerald-800 hover:bg-emerald-50"
      : variant === "purchase"
      ? "bg-sky-600 text-white shadow-md ring-2 ring-sky-100 hover:bg-sky-700"
      : "bg-emerald-700 text-white hover:bg-emerald-800";
  return <button onClick={onClick} className={`${base} ${styles}`}>{children}</button>;
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-sm ${className}`}>{children}</div>;
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">{eyebrow}</p>}
      <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-600 md:text-lg">{description}</p>}
    </div>
  );
}

function InfoCard({ icon, title, children }) {
  return (
    <Card className="h-full transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-2xl text-emerald-700">{icon}</div>
      <h3 className="mb-2 text-xl font-bold text-slate-950">{title}</h3>
      <div className="text-sm leading-7 text-slate-600">{children}</div>
    </Card>
  );
}

function BubbleLeaderboard({ t }) {
  const bubbleColors = [
    "bg-emerald-600 text-white ring-emerald-100",
    "bg-rose-300 text-slate-900 ring-rose-100",
    "bg-sky-600 text-white ring-sky-100",
    "bg-blue-200 text-slate-900 ring-blue-100",
    "bg-orange-500 text-white ring-orange-100",
    "bg-teal-200 text-slate-900 ring-teal-100",
    "bg-pink-500 text-white ring-pink-100",
    "bg-red-200 text-slate-900 ring-red-100",
    "bg-lime-500 text-white ring-lime-100",
    "bg-violet-200 text-slate-900 ring-violet-100",
    "bg-purple-600 text-white ring-purple-100",
    "bg-amber-200 text-slate-900 ring-amber-100",
    "bg-cyan-500 text-white ring-cyan-100",
    "bg-indigo-200 text-slate-900 ring-indigo-100",
    "bg-fuchsia-500 text-white ring-fuchsia-100",
    "bg-yellow-200 text-slate-900 ring-yellow-100",
    "bg-green-600 text-white ring-green-100",
    "bg-orange-200 text-slate-900 ring-orange-100",
    "bg-pink-300 text-slate-900 ring-pink-100",
    "bg-sky-300 text-slate-900 ring-sky-100",
    "bg-teal-600 text-white ring-teal-100",
    "bg-rose-200 text-slate-900 ring-rose-100",
    "bg-indigo-500 text-white ring-indigo-100",
    "bg-emerald-200 text-slate-900 ring-emerald-100",
  ];

  const desktopOffsets = [0, 10, 4, 14, 6, 16, 2, 12, 8, 18, 4, 10];
  const mobileOffsets = [0, 7, 3, 9, 1, 6];
  const desktopRowShifts = [-18, 22, -30, 14, -12, 28, -24, 10];
  const mobileRowShifts = [-8, 6, -10, 8, -6, 4];
  const desktopTargets = [1040, 1090, 980, 1070, 1000, 1085, 1010];
  const mobileTargets = [360, 390, 340, 380, 355, 395];

  const getTicketNumber = (tickets) => {
    const match = String(tickets).match(/\d+/);
    return match ? parseInt(match[0], 10) : 0;
  };

  const getBubbleSize = (tickets, isMobile = false) => {
    const count = getTicketNumber(tickets);

    if (isMobile) {
      if (count >= 160) return 176;
      if (count >= 140) return 164;
      if (count >= 100) return 152;
      if (count >= 40) return 140;
      if (count >= 30) return 132;
      if (count >= 25) return 126;
      if (count >= 20) return 122;
      if (count >= 15) return 116;
      if (count >= 10) return 110;
      return 100;
    }

    if (count >= 160) return 320;
    if (count >= 140) return 285;
    if (count >= 100) return 260;
    if (count >= 40) return 220;
    if (count >= 30) return 200;
    if (count >= 25) return 190;
    if (count >= 20) return 180;
    if (count >= 15) return 165;
    if (count >= 10) return 150;
    return 122;
  };

  const getBubbleStyle = (tickets, isMobile = false) => {
    const size = getBubbleSize(tickets, isMobile);
    return {
      width: `${size}px`,
      height: `${size}px`,
      minWidth: `${size}px`,
      minHeight: `${size}px`,
    };
  };

  const getNameTextClass = (tickets, isMobile = false) => {
    const count = getTicketNumber(tickets);
    if (isMobile) return count >= 100 ? "text-base" : count >= 40 ? "text-sm" : "text-xs";
    if (count >= 160) return "text-2xl";
    if (count >= 140) return "text-xl";
    if (count >= 40) return "text-lg";
    if (count >= 20) return "text-base";
    return "text-sm";
  };

  const featuredTeams = teamLeaderboard.slice(0, 3);
  const remainingTeams = teamLeaderboard.slice(3);

  const mixedRemainingTeams = [
    ...remainingTeams.filter((_, index) => index % 4 === 0),
    ...remainingTeams.filter((_, index) => index % 4 === 2),
    ...remainingTeams.filter((_, index) => index % 4 === 1),
    ...remainingTeams.filter((_, index) => index % 4 === 3),
  ];

  const packRows = (teams, isMobile = false) => {
    const gap = isMobile ? 8 : 10;
    const minRowCount = isMobile ? 3 : 5;
    const targets = isMobile ? mobileTargets : desktopTargets;
    const rows = [];
    let current = [];
    let width = 0;

    teams.forEach((team) => {
      const bubbleWidth = getBubbleSize(team.tickets, isMobile);
      const target = targets[rows.length % targets.length];
      const projected = current.length === 0 ? bubbleWidth : width + gap + bubbleWidth;

      if (current.length >= minRowCount && projected > target) {
        rows.push(current);
        current = [team];
        width = bubbleWidth;
      } else {
        current.push(team);
        width = projected;
      }
    });

    if (current.length) rows.push(current);
    return rows;
  };

  const renderBubble = (team, index, isMobile = false, extraClass = "") => {
    const count = getTicketNumber(team.tickets);
    const isGrowing = Number.isNaN(parseInt(team.tickets, 10)) && team.tickets === t.leaderboard.growing;

    return (
      <div
        key={`${team.name}-${index}-${isMobile ? "m" : "d"}`}
        className={`flex shrink-0 flex-col items-center justify-center rounded-full p-4 text-center shadow-xl ${isMobile ? "ring-4" : "ring-8"} transition duration-300 hover:z-30 hover:scale-[1.03] ${bubbleColors[index % bubbleColors.length]} ${extraClass}`}
        style={getBubbleStyle(team.tickets, isMobile)}
      >
        <div className={`max-w-[84%] px-2 text-center font-black leading-[1.12] [overflow-wrap:anywhere] ${getNameTextClass(team.tickets, isMobile)}`}>
          {team.name}
        </div>
        {count >= 10 && (
          <div className={`mt-2 whitespace-nowrap rounded-full bg-white/55 px-3 py-1 font-black text-slate-800 ${isMobile ? "text-xs" : "text-sm"}`}>
            {team.tickets} {t.leaderboard.ticketsLabel}
          </div>
        )}
        {Number.isNaN(parseInt(team.tickets, 10)) && team.tickets !== t.leaderboard.growing && (
          <div className={`mt-2 whitespace-nowrap rounded-full bg-white/55 px-3 py-1 font-black text-slate-700 ${isMobile ? "text-[10px]" : "text-[11px]"}`}>
            {team.tickets}
          </div>
        )}
        {(team.name === featuredTeams[0]?.name || isGrowing) && (
          <div className={`mt-2 font-semibold text-slate-700 ${isMobile ? "text-[10px]" : "text-[11px]"}`}>
            {team.name === featuredTeams[0]?.name ? t.leaderboard.leading : t.leaderboard.growing}
          </div>
        )}
      </div>
    );
  };

  const desktopRows = packRows(mixedRemainingTeams, false);
  const mobileRows = packRows(mixedRemainingTeams, true);

  return (
    <>
      <div className="mx-auto hidden max-w-[1220px] px-4 py-6 md:block">
        <div className="flex items-start justify-center gap-4 lg:gap-5">
          <div className="pt-14 lg:pt-16">{renderBubble(featuredTeams[1], 1)}</div>
          <div className="pt-0">{renderBubble(featuredTeams[0], 0)}</div>
          <div className="pt-14 lg:pt-16">{renderBubble(featuredTeams[2], 2)}</div>
        </div>

        <div className="mt-2 flex flex-col items-center">
          {desktopRows.map((rowTeams, rowIndex) => {
            const baseIndex = desktopRows.slice(0, rowIndex).reduce((sum, row) => sum + row.length, 0);
            return (
              <div
                key={`desktop-row-${rowIndex}`}
                className={`flex items-start justify-center gap-[6px] ${rowIndex > 0 ? "-mt-1" : ""}`}
                style={{ transform: `translateX(${desktopRowShifts[rowIndex % desktopRowShifts.length]}px)` }}
              >
                {rowTeams.map((team, localIdx) => {
                  const idx = baseIndex + localIdx;
                  return (
                    <div
                      key={team.name}
                      className="relative"
                      style={{ marginTop: `${desktopOffsets[idx % desktopOffsets.length]}px` }}
                    >
                      {renderBubble(team, idx + 3)}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>

      <div className="px-2 py-3 md:hidden">
        <div className="flex flex-wrap items-center justify-center gap-x-1 gap-y-1">
          <div className="flex basis-full justify-center">{renderBubble(featuredTeams[0], 0, true)}</div>
          <div className="flex basis-[48%] justify-end pt-1">{renderBubble(featuredTeams[1], 1, true)}</div>
          <div className="flex basis-[48%] justify-start pt-3">{renderBubble(featuredTeams[2], 2, true)}</div>
        </div>

        <div className="mt-2 flex flex-col items-center">
          {mobileRows.map((rowTeams, rowIndex) => {
            const baseIndex = mobileRows.slice(0, rowIndex).reduce((sum, row) => sum + row.length, 0);
            return (
              <div
                key={`mobile-row-${rowIndex}`}
                className={`flex items-start justify-center gap-[5px] ${rowIndex > 0 ? "-mt-1" : ""}`}
                style={{ transform: `translateX(${mobileRowShifts[rowIndex % mobileRowShifts.length]}px)` }}
              >
                {rowTeams.map((team, localIdx) => {
                  const idx = baseIndex + localIdx;
                  return (
                    <div
                      key={team.name}
                      className="relative"
                      style={{ marginTop: `${mobileOffsets[idx % mobileOffsets.length]}px` }}
                    >
                      {renderBubble(team, idx + 3, true)}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default function TaiwanFanNightWebsite() {
  const [lang, setLang] = useState("zh");
  const [openMenu, setOpenMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState("0-0");
  const t = content[lang];

  useEffect(() => {
    document.title = t.title;
  }, [t.title]);

  const navItems = useMemo(() => t.nav.map(([id, label]) => ({ id, label })), [t.nav]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-emerald-50/40 to-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 md:px-8">
          <button onClick={() => scrollToSection("home")} className="shrink-0 text-left">
            <p className="whitespace-nowrap text-xl font-black tracking-wide text-emerald-700 md:text-2xl">
              🇹🇼⚾ 912
            </p>
            <p className="whitespace-nowrap text-xs font-semibold text-slate-500">
              Taiwan Fan Night
            </p>
          </button>

          <nav className="hidden flex-1 items-center justify-center gap-1 overflow-x-auto lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="whitespace-nowrap rounded-full px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-800"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-2 md:flex">
            <button
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm transition hover:bg-slate-50"
            >
              {t.langLabel}
            </button>
            <Button onClick={() => window.open(zeffyPaymentLink, "_blank")} variant="purchase">{t.headerBuy}</Button>
          </div>

          <button className="text-2xl lg:hidden" onClick={() => setOpenMenu(!openMenu)} aria-label="Open menu">
            {openMenu ? "✕" : "☰"}
          </button>
        </div>

        {openMenu && (
          <div className="border-t border-slate-200 bg-white px-4 py-3 lg:hidden">
            <button
              onClick={() => setLang(lang === "zh" ? "en" : "zh")}
              className="mb-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-left text-sm font-bold text-slate-700 hover:bg-slate-50"
            >
              {t.langLabel}
            </button>
            <Button onClick={() => window.open(zeffyPaymentLink, "_blank")} variant="purchase">{t.headerBuy}</Button>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setOpenMenu(false); scrollToSection(item.id); }}
                  className="rounded-xl px-3 py-3 text-left text-sm font-semibold text-slate-700 hover:bg-emerald-50"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden px-4 py-16 md:px-8 md:py-24">
          <div className="absolute left-1/2 top-8 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h1 className="max-w-4xl text-4xl font-black leading-[1.15] tracking-tight text-slate-950 md:text-6xl md:leading-[1.18] lg:text-7xl">
                <span className="block">{t.hero.title1}</span>
                <span className="mt-4 flex items-center gap-4 text-emerald-700 md:mt-5">{t.hero.title2} <span className="text-5xl md:text-6xl lg:text-7xl">⚾</span></span>
              </h1>
              <div className="mt-6 max-w-3xl space-y-5 text-lg leading-8 text-slate-600 md:text-xl">
                {t.hero.description.split("\n\n").map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button onClick={() => scrollToSection("tickets")}>{t.hero.buttons.deals}</Button>
                <Button onClick={() => window.open(officialLineGroup, "_blank")}>{t.hero.buttons.line}</Button>
                <button onClick={() => window.open(goFundMeLink, "_blank")} className="rounded-full bg-amber-400 px-6 py-3 font-bold text-slate-950 shadow-md ring-2 ring-amber-100 transition hover:bg-amber-500 active:scale-95">{t.hero.buttons.donate}</button>
                <Button onClick={() => window.open(zeffyPaymentLink, "_blank")} variant="purchase">{t.hero.buttons.buy}</Button>
                <Button onClick={() => window.open(googleFormLink, "_blank")} variant="outline">{t.hero.buttons.form}</Button>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
                {t.hero.stats.map(([label, value], i) => {
                  const bgStyles = ["bg-gradient-to-br from-emerald-100 to-white border-emerald-200", "bg-gradient-to-br from-sky-100 to-white border-sky-200", "bg-gradient-to-br from-amber-100 to-white border-amber-200", "bg-gradient-to-br from-rose-100 to-white border-rose-200"];
                  return <div key={label} className={`rounded-2xl border p-4 shadow-sm ${bgStyles[i % bgStyles.length]}`}><p className="text-2xl font-black text-slate-950">{value}</p><p className="mt-1 text-xs font-medium text-slate-500">{label}</p></div>;
                })}
              </div>
            </div>
            <Card className="border-emerald-100 bg-white/95 p-7 shadow-xl md:p-8">
              <div className="mb-6 flex justify-center rounded-3xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-4 shadow-sm"><img src={eventLogo} alt="912 Fenway 台灣集結 Logo" className="h-auto w-full max-w-[360px] object-contain" /></div>
              <div className="mb-6 flex justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm"><img src={hostLogo} alt="BTCC & BTCF Logo" className="h-auto w-full max-w-[220px] object-contain" /></div>
              <div className="mb-6 rounded-3xl bg-gradient-to-br from-emerald-700 to-sky-700 p-7 text-white">
                <p className="text-sm font-semibold opacity-90">{t.hero.missionEyebrow}</p>
                <h3 className="mt-2 text-3xl font-black">{t.hero.missionTitle}</h3>
                <p className="mt-4 text-sm leading-7 text-white/90">{t.hero.missionText}</p>
              </div>
              <div className="grid gap-4">
                <div className="flex gap-4"><span className="text-xl">🏛️</span><div><p className="font-bold">{t.hero.organizedBy}</p><p className="text-sm leading-relaxed text-slate-600">波克萊台灣商會基金會（BTCF）<br />波克萊台灣商會（BTCC）</p><p className="mt-3 font-bold">{t.hero.coHosts}</p><p className="text-sm leading-relaxed text-slate-600">{coHosts.join(" × ")}</p></div></div>
                <div className="flex gap-4"><span className="text-xl">📅</span><div><p className="font-bold">{t.hero.date}</p><p className="text-sm text-slate-600">2026 年 9 月 12 日｜4:15 PM</p></div></div>
                <div className="flex gap-4"><span className="text-xl">📍</span><div><p className="font-bold">{t.hero.location}</p><p className="text-sm text-slate-600">Fenway Park｜Bleacher 41, 42, & 43</p></div></div>
              </div>
            </Card>
          </div>
        </section>
<section id="mission" className="bg-white px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow={t.mission.eyebrow} title={t.mission.title} description={t.mission.description} />
            <div className="grid gap-6 lg:grid-cols-3">
              {t.mission.cards.map((card) => <InfoCard key={card.title} icon={card.icon} title={card.title}>{card.body}</InfoCard>)}
            </div>
          </div>
        </section>

        <section id="tickets" className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow={t.tickets.eyebrow} title={t.tickets.title} description={t.tickets.description} />
            <div className="mx-auto mb-10 max-w-3xl rounded-3xl border border-emerald-200 bg-emerald-50 p-5 text-center shadow-sm"><p className="text-xl font-black text-emerald-900">{t.tickets.under3Title}</p><p className="mt-2 text-sm leading-7 text-emerald-800">{t.tickets.under3Text}</p></div>
            <div className="mx-auto max-w-4xl">
              <Card className="border-emerald-200 p-8 shadow-lg">
                <div className="mb-6 flex items-center justify-between gap-4"><div><p className="text-sm font-bold text-emerald-700">{t.tickets.dealSubtitle}</p><h3 className="mt-1 text-3xl font-black text-slate-950">{t.tickets.dealTitle}</h3></div><div className="rounded-[2.25rem] bg-emerald-700 px-10 py-8 text-center text-white shadow-xl ring-4 ring-emerald-100 md:px-12 md:py-10"><p className="text-[5.5rem] font-black leading-none md:text-[9.5rem] lg:text-[11rem]">$50</p><p className="mt-3 text-xl font-semibold uppercase tracking-[0.18em] md:text-2xl lg:text-3xl">per ticket</p></div></div>
                <ul className="space-y-4 text-slate-700">{t.tickets.benefits.map((item) => <li key={item} className="flex gap-3"><span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-800">✓</span><span>{item}</span></li>)}</ul>
                <div className="mt-6 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm font-semibold leading-7 text-emerald-900">
                  {lang === "zh"
                    ? "原本 6/1 後預計改販售一般團體優惠票；因加上官方手續費後實際為 $48.16，我們改為繼續提供 $50 含限量 Jersey 的票券。"
                    : "The original plan was to switch to traditional group tickets after 6/1. Since official fees brought that ticket to $48.16, we are continuing with a $50 ticket that includes the limited-edition jersey."}
                </div>
                <div className="mt-7 rounded-2xl bg-amber-50 p-5 text-sm leading-7 text-amber-900">
                  <p className="mb-2 text-base font-black text-amber-950">{lang === "zh" ? "票價規劃更新" : "Ticket Plan Update"}</p>
                  <p>{t.tickets.dealNote}</p>
                </div>
                <div className="mt-4 rounded-3xl border border-amber-200 bg-amber-50 p-6 text-sm leading-7 text-amber-950 shadow-sm">
                  <p className="text-xl font-black text-slate-950">{t.tickets.seatingTitle}</p>
                  {t.tickets.seating.map((p) => <p key={p} className="mt-3">{p}</p>)}
                </div>
              </Card>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-start">
              <div className="rounded-3xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-6 text-sm leading-7 text-slate-700 shadow-sm md:p-8">
                <p className="text-2xl font-black text-slate-950">{lang === "zh" ? "為什麼這張票值得？" : "Why This Ticket Is Worth It"}</p>
                <p className="mt-4">{t.tickets.valueText}</p>
                <p className="mt-5 rounded-2xl bg-emerald-700 p-4 text-base font-black leading-7 text-white">{t.tickets.valuePunch}</p>
              </div>
              <div className="rounded-3xl border border-sky-200 bg-sky-50 p-6 text-sm leading-7 text-sky-900 shadow-sm md:p-8">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">🎟️</div>
                <p className="text-2xl font-black text-sky-950">{t.tickets.eTitle}</p>
                <p className="mt-3">{t.tickets.eText1}</p>
                <p className="mt-3">{t.tickets.eText2}</p>
              </div>
            </div>
            <Card className="mt-8 overflow-hidden border border-emerald-200 bg-white p-0 shadow-xl">
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
                <div className="bg-gradient-to-br from-white via-emerald-50/70 to-sky-50/80 p-8 md:p-10">
                  <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-700 shadow-sm">
                    <span className="text-base">🎁</span>
                    <span>{lang === "zh" ? "官方現場贈品" : "Official Game-Day Giveaway"}</span>
                  </div>
                  <h3 className="mt-5 text-4xl font-black leading-tight text-slate-950 md:text-5xl lg:text-6xl">Red Sox × Bruins Limited-Edition Jersey</h3>
                  <p className="mt-3 text-lg font-bold text-emerald-700">{t.tickets.giveawayTitle}</p>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-700">{t.tickets.giveawayText}</p>
                  <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-7 text-amber-950 shadow-sm">
                    <p className="font-bold text-amber-900">{lang === "zh" ? "領取提醒" : "Pickup Note"}</p>
                    <p className="mt-1">{t.tickets.giveawayNote}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center bg-gradient-to-br from-emerald-100/70 via-white to-sky-100/70 p-4 md:p-5">
                  <div className="w-full max-w-[640px] rounded-[2rem] border border-white/80 bg-white p-3 shadow-2xl ring-1 ring-slate-100">
                    <img src={jerseyImage} alt="Red Sox × Bruins co-branding Baseball Jersey" className="h-auto w-full rounded-[1.5rem] object-cover scale-[1.06]" />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="teams" className="bg-white px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow={t.teams.eyebrow} title={t.teams.title} description={t.teams.description} />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{t.teams.steps.map(([icon, title, body]) => <InfoCard key={title} icon={icon} title={title}>{body}</InfoCard>)}</div>
            <Card className="mt-8 border-emerald-200 bg-emerald-50 p-6 md:p-8"><div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Zeffy Team Name</p><h3 className="mt-2 text-2xl font-black text-slate-950">{t.teams.teamNameTitle}</h3><p className="mt-4 leading-7 text-slate-700">{t.teams.teamNameText1}</p><p className="mt-3 leading-7 text-slate-700">{t.teams.teamNameText2}</p><p className="mt-3 text-sm leading-7 text-slate-600">{t.teams.teamNameText3}</p></div><a href={zeffyPaymentLink} target="_blank" rel="noreferrer" className="rounded-full bg-sky-600 px-6 py-3 text-center font-bold text-white shadow-md ring-2 ring-sky-100 transition hover:bg-sky-700">{t.headerBuy}</a></div></Card>
            <div className="mt-10 rounded-[2rem] bg-gradient-to-br from-emerald-700 to-sky-700 p-8 text-white shadow-lg"><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">Team Name Ideas</p><h3 className="mt-3 text-3xl font-black">{t.teams.exampleTitle}</h3><p className="mt-4 text-sm leading-7 text-white/85">{t.teams.exampleText}</p><p className="mt-3 text-sm leading-7 text-white/85">{t.teams.nameReminder}</p></div><div><p className="mb-4 text-sm font-bold uppercase tracking-wide text-white/80">{t.teams.examplesLabel}</p><div className="flex flex-wrap gap-3">{teamExamples.map((name) => <span key={name} className="rounded-full bg-white/15 px-4 py-2 text-sm font-semibold backdrop-blur">{name}</span>)}</div></div></div></div>
            <Card className="mt-8 overflow-hidden border-sky-200 bg-gradient-to-br from-sky-50 via-white to-emerald-50 p-0 shadow-lg"><div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr] lg:items-stretch"><div className="flex flex-col justify-center bg-gradient-to-br from-sky-600 to-teal-600 p-8 text-white md:p-10"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/80">{t.teams.friendTeamEyebrow}</p><h3 className="mt-3 text-3xl font-black leading-tight">{t.teams.friendTeamTitle}</h3><p className="mt-5 rounded-2xl bg-white/15 p-4 text-base font-bold leading-7 text-white">{t.teams.friendTeamPunch}</p></div><div className="p-6 md:p-8"><p className="text-lg font-black leading-7 text-slate-950">{t.teams.friendTeamIntro}</p><p className="mt-4 leading-7 text-slate-700">{t.teams.friendTeamText}</p><div className="mt-5 grid gap-4 md:grid-cols-2"><div className="rounded-2xl bg-white p-4 text-sm leading-7 text-slate-700 shadow-sm ring-1 ring-sky-100">{t.teams.friendTeamTransfer}</div><div className="rounded-2xl bg-white p-4 text-sm font-bold leading-7 text-sky-900 shadow-sm ring-1 ring-sky-100">{t.teams.friendTeamGift}</div></div></div></div></Card>
          </div>
        </section>

        <section id="leaderboard" className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow={t.leaderboard.eyebrow} title={t.leaderboard.title} description={t.leaderboard.description} />
            <Card className="overflow-hidden border-emerald-200 bg-white p-0 shadow-lg">
              <div className="bg-gradient-to-br from-emerald-700 to-sky-700 p-8 text-center text-white md:p-10"><p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">Current Teams</p><h3 className="mt-3 text-3xl font-black">{t.leaderboard.headerTitle}</h3><p className="mx-auto mt-4 max-w-3xl leading-7 text-white/90">{t.leaderboard.headerText}</p><div className="mt-7 flex w-full justify-center"><div className="inline-flex rounded-full border border-white/15 bg-white/12 px-8 py-4 shadow-lg backdrop-blur-sm"><span className="text-3xl font-black tracking-wide text-white md:text-5xl">{lang === "zh" ? "千人大隊集結" : "1,000-Person Team Taiwan Rally"}</span></div></div><div className="mt-8 flex w-full justify-center"><div className="inline-flex items-center justify-center rounded-full bg-amber-300 px-8 py-4 text-center text-xl font-black text-emerald-950 shadow-xl ring-4 ring-white/20 md:text-2xl">{lang === "zh" ? `目前 TEAM TAIWAN 總共有 ${teamLeaderboard.length} 隊` : `TEAM TAIWAN currently has ${teamLeaderboard.length} teams`}</div></div></div>
              <div className="p-6 md:p-8"><div className="rounded-[2rem] border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-6 md:p-10"><BubbleLeaderboard t={t} /></div><div className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-center"><h4 className="text-2xl font-black text-slate-950">{t.leaderboard.joinTitle}</h4><p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">{t.leaderboard.joinText}</p><div className="mt-6 flex justify-center"><a href={zeffyPaymentLink} target="_blank" rel="noreferrer" className="rounded-full bg-emerald-700 px-6 py-3 text-center font-bold text-white transition hover:bg-emerald-800">{t.leaderboard.joinButton}</a></div></div></div>
            </Card>
          </div>
        </section>

        
        
        
<section id="shirt-design" className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow={t.shirt.eyebrow} title={t.shirt.title} description={t.shirt.description} />

            <a
              id="tshirt-results"
              href={tshirtResultsLink}
              className="mb-10 block overflow-hidden rounded-[2.5rem] border border-rose-300 bg-gradient-to-r from-rose-200 via-amber-200 to-emerald-200 p-1 shadow-2xl transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(244,63,94,0.2)]"
            >
              <div className="rounded-[2.25rem] bg-white/70 p-7 backdrop-blur-sm md:p-10">
                <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.32em] text-rose-700">
                      {lang === "zh" ? "NEW｜得獎公布" : "NEW｜Winners Announced"}
                    </p>
                    <h2 className="mt-3 text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                      {lang === "zh" ? "T-shirt 比賽結果公布" : "T-shirt Contest Results"}
                    </h2>
                    <p className="mt-4 max-w-3xl text-base font-semibold leading-8 text-slate-700 md:text-lg">
                      {lang === "zh"
                        ? "查看官方首獎、社群人氣獎，以及原投稿版本與官方製作版本說明。"
                        : "View the Grand Prize, Community Favorite Award, and the official production version details."}
                    </p>
                  </div>
                  <div className="shrink-0 rounded-full bg-rose-700 px-8 py-4 text-lg font-black text-white shadow-xl transition hover:bg-rose-800 md:text-xl">
                    {lang === "zh" ? "查看得獎公布 →" : "View Results →"}
                  </div>
                </div>
              </div>
            </a>

            <a
              href="/tshirt-finalists"
              className="mb-10 block overflow-hidden rounded-[2.5rem] border border-amber-300 bg-gradient-to-r from-amber-300 via-yellow-200 to-emerald-200 p-1 shadow-2xl transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,118,110,0.25)]"
            >
              <div className="rounded-[2.25rem] bg-white/55 p-7 backdrop-blur-sm md:p-10">
                <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.32em] text-emerald-900">
                      {lang === "zh" ? "NEW｜作品公布" : "NEW｜Finalists"}
                    </p>
                    <h2 className="mt-3 text-4xl font-black leading-tight text-slate-950 md:text-6xl">
                      {lang === "zh" ? "入圍作品公布" : "T-shirt Finalists"}
                    </h2>
                    <p className="mt-4 max-w-3xl text-base font-semibold leading-8 text-slate-700 md:text-lg">
                      {lang === "zh"
                        ? "查看 912 Team Taiwan T-shirt 入圍作品，支持你最喜歡的設計。"
                        : "View the 912 Team Taiwan T-shirt finalist designs and support your favorite."}
                    </p>
                  </div>
                  <div className="shrink-0 rounded-full bg-emerald-800 px-8 py-4 text-lg font-black text-white shadow-xl transition hover:bg-emerald-900 md:text-xl">
                    {lang === "zh" ? "前往入圍作品 →" : "View Finalists →"}
                  </div>
                </div>
              </div>
            </a>


            <Card className="overflow-hidden border-emerald-200 bg-white p-0 shadow-lg">
              <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
                <div className="bg-gradient-to-br from-emerald-700 to-sky-700 p-8 text-white md:p-10">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/75">Official Contest</p>
                  <h3 className="mt-3 text-4xl font-black">{t.shirt.heroTitle}</h3>
                  <p className="mt-5 leading-7 text-white/90">{t.shirt.intro}</p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    {[[t.shirt.deadlineLabel, t.shirt.deadline], [t.shirt.finalistLabel, t.shirt.finalist], [t.shirt.voteLabel, t.shirt.vote], [t.shirt.winnerLabel, t.shirt.winner]].map(([label, value]) => (
                      <div key={label} className="rounded-2xl bg-white/15 p-4">
                        <p className="text-sm font-bold text-white/75">{label}</p>
                        <p className="mt-1 text-2xl font-black">{value}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="grid gap-5 md:grid-cols-2">
                    {t.shirt.cards.map(([icon, title, body]) => <InfoCard key={title} icon={icon} title={title}>{body}</InfoCard>)}
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-8">
              
            </div>

            <Card className="mt-8 overflow-hidden border-slate-200 bg-white p-0 shadow-xl">
              <div className="grid gap-0 lg:grid-cols-[1.25fr_0.85fr]">
                <div className="bg-gradient-to-br from-emerald-700 to-sky-700 p-10 text-center text-white">
                  <p className="text-lg font-black">🥇 {t.shirt.prizeTitle}</p>
                  <p className="mt-5 text-7xl font-black md:text-8xl">{t.shirt.prizeAmount}</p>
                  <p className="mt-5 text-lg font-bold">{t.shirt.prizeSponsor}</p>
                  <div className="mx-auto mt-7 max-w-md rounded-2xl bg-white/15 p-5 text-left font-semibold leading-8">
                    {t.shirt.prizeItems.map((item) => <p key={item}>・ {item}</p>)}
                  </div>
                </div>
                <div className="grid gap-4 bg-slate-50 p-7">
                  <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <h4 className="text-2xl font-black text-rose-700">💗 {t.shirt.popularityTitle}</h4>
                    <p className="mt-4 leading-7 text-slate-700">・ {t.shirt.popularityPrize}</p>
                  </div>
                  <div className="rounded-3xl bg-white p-6 shadow-sm">
                    <h4 className="text-2xl font-black text-slate-950">✨ {t.shirt.finalistTitle}</h4>
                    <p className="mt-4 leading-7 text-slate-700">{t.shirt.finalistText}</p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <Card className="p-7 shadow-lg">
<h3 className="text-2xl font-black text-slate-950">{t.shirt.timelineTitle}</h3>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                  {t.shirt.timeline.map(([label, date]) => (
                    <p key={label}><strong>{label}：</strong>{date}</p>
                  ))}
                </div>
              </Card>
              <Card className="p-7 shadow-lg">
                <h3 className="text-2xl font-black text-slate-950">{t.shirt.judgingTitle}</h3>
                <div className="mt-5 space-y-4 text-sm leading-7 text-slate-700">
                  {t.shirt.judging.map((item) => <p key={item}><strong>{item}</strong></p>)}
                  <p>{t.shirt.judgingText}</p>
                </div>
              </Card>
            </div>

            <Card className="mt-8 border-emerald-100 bg-white p-7 shadow-lg">
              <h3 className="text-2xl font-black text-slate-950">{t.shirt.rulesTitle}</h3>
              <div className="mt-5 grid gap-6 lg:grid-cols-2">
                <ul className="space-y-3 text-sm leading-7 text-slate-700">
                  {t.shirt.rules.map((rule) => <li key={rule} className="flex gap-3"><span>•</span><span>{rule}</span></li>)}
                </ul>
                <div className="rounded-3xl bg-emerald-50 p-6 text-sm leading-7 text-emerald-950">
                  {t.shirt.licenseText}
                </div>
              </div>
            </Card>

            <div className="mt-10 rounded-[2rem] bg-gradient-to-br from-emerald-700 to-sky-700 p-8 text-center text-white shadow-xl md:p-10">
              <h3 className="text-3xl font-black">{t.shirt.bannerTitle}</h3>
              <p className="mx-auto mt-5 max-w-3xl leading-7 text-white/95">{t.shirt.bannerText}</p>
              <p className="mt-6 text-sm font-bold leading-7 text-white/90">{t.shirt.hashtags}</p>
            </div>
          </div>
        </section>


        <section id="raffle" className="px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow={t.raffle.eyebrow} title={t.raffle.title} description={t.raffle.description} />

            <Card className="mb-8 border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-8 shadow-lg md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-emerald-700">
                {lang === "zh" ? "抽獎結果已公布" : "Raffle Results Announced"}
              </p>
              <h3 className="mt-3 text-3xl font-black text-slate-950 md:text-4xl">
                {lang === "zh" ? "5/2–5/31｜官方 LINE 群抽獎結果" : "5/2–5/31｜Official LINE Group Raffle Results"}
              </h3>
              <p className="mt-4 leading-8 text-slate-700">
                {lang === "zh"
                  ? "以下得獎號碼皆由 1–427 中隨機抽出，且沒有重複。"
                  : "The winning numbers below were randomly selected from 1–427 with no duplicates."}
              </p>

              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                <div className="rounded-[2rem] border border-rose-100 bg-white p-6 shadow-sm">
                  <p className="text-2xl font-black text-slate-950">🎟️ 912 球票得獎人</p>
                  <p className="mt-1 text-sm font-bold text-slate-500">三位</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {["74", "124", "334"].map((num) => (
                      <span key={num} className="rounded-full bg-rose-100 px-5 py-3 text-2xl font-black text-rose-900">{num}</span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm">
                  <p className="text-2xl font-black text-slate-950">👕 鄭宗哲簽名 Taiwanese @ Boston 主題 T-shirt</p>
                  <p className="mt-1 text-sm font-bold text-slate-500">三位</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {["230", "288", "245"].map((num) => (
                      <span key={num} className="rounded-full bg-emerald-100 px-5 py-3 text-2xl font-black text-emerald-900">{num}</span>
                    ))}
                  </div>
                </div>

                <div className="rounded-[2rem] border border-sky-100 bg-white p-6 shadow-sm">
                  <p className="text-2xl font-black text-slate-950">⚾ 鄭宗哲簽名球得獎人</p>
                  <p className="mt-1 text-sm font-bold text-slate-500">一位</p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {["182"].map((num) => (
                      <span key={num} className="rounded-full bg-sky-100 px-5 py-3 text-2xl font-black text-sky-900">{num}</span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-3xl shadow-sm">🏆</div>
              <h3 className="text-2xl font-black text-slate-950">{t.raffle.eventTitle}</h3>
              <p className="mt-4 leading-7 text-slate-700">
                {lang === "zh"
                  ? "912 台灣集結活動大抽獎將在 912 前一週舉行。所有購票參加 912 Taiwan Fan Night at Fenway 的朋友，都可以參加抽獎。"
                  : "The 912 Taiwan Rally Grand Raffle will be held one week before 9/12. Everyone who purchases a ticket for 912 Taiwan Fan Night at Fenway is eligible to participate."}
              </p>
              <div className="mt-6 rounded-2xl bg-sky-50 p-5 font-semibold text-sky-900">
                {lang === "zh"
                  ? "⚾ 鄭宗哲簽名球（不只一顆喔！）及鄭宗哲簽名 Taiwanese @ Boston 主題 T-shirt（不只一件唷）"
                  : "⚾ Cheng Tsung-Che signed baseballs — more than one — and signed Taiwanese @ Boston themed T-shirts — more than one!"}
              </div>
            </Card>
          </div>
        </section>

        <section id="faq" className="bg-white px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-5xl">
            <SectionTitle eyebrow={t.faq.eyebrow} title={t.faq.title} description={t.faq.description} />
            <div className="space-y-8">
              {t.faq.groups.map((group, groupIndex) => (
                <div key={group.category}>
                  <h3 className="mb-4 text-2xl font-black text-slate-950">{group.category}</h3>
                  <div className="space-y-3">
                    {group.items.map(([q, a], itemIndex) => {
                      const key = `${groupIndex}-${itemIndex}`;
                      const isOpen = openFaq === key;
                      return (
                        <div key={q} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                          <button onClick={() => setOpenFaq(isOpen ? "" : key)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-bold text-slate-950">
                            <span>{q}</span>
                            <span>{isOpen ? "−" : "+"}</span>
                          </button>
                          {isOpen && <div className="border-t border-slate-100 px-5 py-4 text-sm leading-7 text-slate-600">{a}</div>}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        
        <section id="support" className="bg-white px-4 py-16 md:px-8 md:py-24">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow={t.btcfdonate.eyebrow} title={t.btcfdonate.title} description={t.btcfdonate.description} />

            <div className="grid gap-6 lg:grid-cols-4">
              <Card className="border-sky-200 bg-gradient-to-br from-sky-700 to-emerald-700 p-8 text-white shadow-2xl ring-4 ring-sky-100">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl">💙</div>
                <h3 className="text-3xl font-black">{t.btcfdonate.goTitle}</h3>
                <p className="mt-6 text-sm font-semibold leading-7 text-white/90">{t.btcfdonate.goText}</p>
                <a
                  href={goFundMeLink}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-black text-sky-800 shadow-md transition hover:bg-sky-50"
                >
                  {t.btcfdonate.goButton}
                </a>
              </Card>

              <Card className="border-emerald-200 bg-gradient-to-br from-emerald-700 to-sky-700 p-8 text-white shadow-2xl ring-4 ring-emerald-100">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 text-3xl">💳</div>
                <h3 className="text-3xl font-black">{t.btcfdonate.zelleTitle}</h3>
                <p className="mt-6 text-sm font-bold text-white/90">Zelle</p>
                <div className="mt-3 rounded-3xl bg-white px-5 py-4 text-3xl font-black text-emerald-950">
                  {t.btcfdonate.zelleHandle}
                </div>
                <p className="mt-6 text-sm font-semibold leading-7 text-white">{t.btcfdonate.zelleText}</p>
              </Card>

              <Card className="p-8 shadow-lg">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-3xl shadow-sm">🏦</div>
                <h3 className="text-3xl font-black text-slate-950">{t.btcfdonate.achTitle}</h3>
                <div className="mt-6 space-y-4">
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{t.btcfdonate.accountLabel}</p>
                    <p className="mt-2 text-2xl font-black text-slate-950">{t.btcfdonate.accountNumber}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-5">
                    <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{t.btcfdonate.routingLabel}</p>
                    <p className="mt-2 text-2xl font-black text-slate-950">{t.btcfdonate.routingNumber}</p>
                  </div>
                </div>
              </Card>

              <Card className="p-8 shadow-lg">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-3xl shadow-sm">🧾</div>
                <h3 className="text-3xl font-black text-slate-950">{t.btcfdonate.checkTitle}</h3>
                <div className="mt-6 rounded-3xl bg-amber-50 p-5 text-slate-900">
                  <p className="text-sm font-bold">{t.btcfdonate.checkPayableLabel}</p>
                  <p className="mt-2 font-black leading-7">{t.btcfdonate.checkPayable}</p>
                  <p className="mt-6 text-sm font-bold">{t.btcfdonate.checkMailLabel}</p>
                  <p className="mt-2 whitespace-pre-line font-black leading-7">{t.btcfdonate.checkAddress}</p>
                </div>
              </Card>
            </div>

            <div className="mx-auto mt-8 max-w-4xl rounded-3xl border border-amber-200 bg-amber-50 p-6 text-center text-sm font-semibold leading-7 text-amber-950">
              {t.btcfdonate.receiptNote}
            </div>
          </div>
        
<div id="contact" className="mt-12">
          <div className="mx-auto max-w-7xl">
            <SectionTitle eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.description} />
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {t.contact.cards.map(([title, body, button, link]) => (
                <Card key={title} className="h-full">
                  <h3 className="text-xl font-black text-slate-950">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{body}</p>
                  <a href={link} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-full bg-emerald-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-emerald-800">{button}</a>
                </Card>
              ))}
            </div>
            <Card className="mt-8 border-emerald-200 bg-emerald-50 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">{t.contact.organizerTitle}</p>
              <h3 className="mt-2 text-2xl font-black text-slate-950">{t.contact.organizer}</h3>
            </Card>
          </div>
        </div>

</section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-950 px-4 py-12 text-white md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.1fr_1fr_1fr] md:items-start">
          <div>
            <div className="inline-flex rounded-3xl bg-white p-4 shadow-lg">
              <img src={hostLogo} alt="BTCC & BTCF Logo" className="h-auto w-44 object-contain" />
            </div>
            <p className="mt-5 text-2xl font-black tracking-tight">
              912 Taiwan Fan Night at Fenway
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {t.footer.tagline}
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              {t.footer.organizedBy}
            </p>
            <div className="mt-5 space-y-3 text-sm leading-7 text-slate-300">
              <p>Brookline Taiwanese Chamber Foundation (BTCF)</p>
              <p>Brookline Taiwanese Chamber of Commerce (BTCC)</p>
              <p>波克萊台灣商會基金會 ｜ 波克萊台灣商會</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
              {t.footer.links}
            </p>
            <div className="mt-5 grid gap-3 text-sm font-semibold">
              <a href={officialLineGroup} target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-white">
                {t.footer.line}
              </a>
              <a href={goFundMeLink} target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-white">
                {t.footer.gofundme}
              </a>
              <a href={zeffyPaymentLink} target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-white">
                {t.footer.tickets}
              </a>
              <a href={organizerLine} target="_blank" rel="noreferrer" className="text-slate-300 transition hover:text-white">
                {t.footer.contact}
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>{t.footer.copyright}</p>
          <p>{t.footer.tagline}</p>
        </div>
      </footer>
    </div>
  );
}
