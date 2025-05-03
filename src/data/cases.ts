// 量子哲學案例糾纏矩陣
export const quantumCases = [
  {
    // 欺騙我們的魔鬼
    id: "fake-evil",
    title: "欺騙我們的魔鬼",
    themeImage: "../../public/img/fake-evil.png",
    content: `<p >設想有一位<strong >全能的惡魔（或超級AI）</strong>，牠的唯一目的是<strong >讓你活在徹底的幻覺裡</strong>。<br>
      你以為你看見太陽、你有身體、你喝水會解渴，但這一切——都是牠設計好的騙局。</p>
      <ul > <li> <p >你觸摸桌子，感覺堅硬？</p> <blockquote data-start="250" data-end="268"> <p data-start="252" data-end="268" class="">錯，是惡魔直接操控你的感知神經。</p> </blockquote> </li> <li data-start="269" data-end="334" class=""> <p data-start="271" data-end="283" class="">你相信數學是永恆不變的？</p> <blockquote data-start="286" data-end="334"> <p data-start="288" data-end="334" class="">也錯，也可能是牠編的規則，現在讓你覺得「2+2=4」，明天搞不好就讓你覺得「2+2=鯊魚」。</p> </blockquote> </li> </ul>`,
    tags: [
      { label: "燒腦度", color: "bg-purple-400", progress: 0.8 },
      { label: "爭議程度", color: "bg-blue-400", progress: 0.6 },
      { label: "迷惑值", color: "bg-pink-400", progress: 0.7 },
    ],
    choices: [
      {
        title:
          "如果一切感官、記憶、邏輯都可能被欺騙，那我到底能確定什麼是真實？",
        outcome:
          "這正是笛卡兒的核心起點：「我可以懷疑一切，但我無法懷疑我正在懷疑。」於是他提出那句哲學名言：",
      },
      { title: "我們對「現實」的信任是怎麼建立的？", outcome: "..." },
      { title: "自我意識與「我」的存在", outcome: "..." },
    ],
    relatedCases: [
      {
        id: "ai-labor",
        title: "人工意識勞動權",
        preview: "AI是否應享有基本勞動保障...",
      },
      {
        id: "memory-upload",
        title: "記憶上傳倫理",
        preview: "數位化人類意識的所有權爭議...",
      },
    ],
    references: [
      "The first meditation from Meditations by René Descartes(1641)",
    ],
    probabilityWave: {
      collapseThreshold: 0.75,
      superpositionNodes: 12,
    },
  },
  {
    id: "quantum-pig",
    title: "自願被吃的豬",
    themeImage: "../../public/img/quantum-pig.png",
    content:
      "<p>想像有一隻經過基因編輯的豬，它的神經結構被設計得完全願意、甚至渴望被人類吃掉。牠會開口說話、請求你殺牠，甚至會表達「這是牠存在的目的」——你會吃牠嗎？</p>",
    tags: [
      { label: "燒腦度", color: "bg-purple-400", progress: 0.85 },
      { label: "爭議程度", color: "bg-blue-400", progress: 0.92 },
      { label: "迷惑值", color: "bg-pink-400", progress: 0.8 },
    ],
    choices: [
      {
        title: "如果豬真的自願被吃，我們是否還有道德責任不去殺牠？",
        outcome: "...",
      },
      {
        title:
          "牠的「自由意志」是自由的嗎？的「願望」是被人工設計出來的，那這個願望還能被視為真正的自由意志嗎？",
        outcome: "...",
      },
      {
        title:
          "動物被「人道化」後，還是動物嗎？這隻豬能說話、能表達、能有看似「自我認同」的意志，已經像個人類。那它跟一個語言障礙的小孩有什麼本質差別？",
        outcome: "...",
      },
    ],
    relatedCases: [
      {
        id: "ai-labor",
        title: "人工意識勞動權",
        preview: "AI是否應享有基本勞動保障...",
      },
      {
        id: "memory-upload",
        title: "記憶上傳倫理",
        preview: "數位化人類意識的所有權爭議...",
      },
    ],
    probabilityWave: {
      collapseThreshold: 0.75,
      superpositionNodes: 12,
    },
  },
  {
    // 會殺人的傳送裝置
    id: "killer-transporter",
    title: "會殺人的傳送裝置",
    themeImage: "../../public/img/killer-transporter.png",
    content: `<p>想像有一台名為<strong>「傳送機」</strong>的裝置，能在一瞬間將你從A點「複製—刪除—重建」到B點。</p>
    <p>聽起來像是魔法？但技術上它是這樣運作的：</p>
    <ul>
      <li>用極精密的掃描技術<strong>摧毀你原本的身體</strong>，</li>
      <li>將資料傳送到另一端，<strong>重新建構出一模一樣的你</strong>，包含記憶、習慣、體味、甚至指甲上的裂痕。</li>
    </ul>
    <p>你站在新地點，覺得一切如常。</p>
    <blockquote><p>但問題來了：那個「你」還是你嗎？</p></blockquote>
    <p>還是原本的你在傳送那一刻就已經被殺死，現在只是個完美複製品，自以為是真正的你？</p>`,
    tags: [
      { label: "燒腦度", color: "bg-purple-400", progress: 0.9 },
      { label: "爭議程度", color: "bg-blue-400", progress: 0.8 },
      { label: "迷惑值", color: "bg-pink-400", progress: 0.85 },
    ],
    choices: [
      {
        title: "如果這個過程每次都『殺掉』原本的我，那我根本沒活著抵達終點？",
        outcome:
          "這是一種「意識連續性」的懷疑論。看似平滑地延續，但如果本體已被摧毀，那不就像是你每次傳送都死了一次？",
      },
      {
        title: "如果複製的我是100%一樣的，那我應該要在意嗎？",
        outcome:
          "這是身份哲學的核心衝突：我們是靠『連續的意識』還是靠『資料組成』定義自我？你願意被複製嗎？",
      },
      {
        title: "那原本的我（在被摧毀那瞬間）感覺到了什麼？",
        outcome:
          "也許你感覺不到什麼，因為你死了。但這個『沉默的消失』是否就是我們最該懼怕的虛無？",
      },
    ],
    relatedCases: [
      {
        id: "clone-rights",
        title: "複製人身份權",
        preview: "如果一個人可以被複製，那哪個是『真的你』？",
      },
      {
        id: "mind-upload",
        title: "心智上傳悖論",
        preview: "上傳你的意識是否等同於你還活著？",
      },
    ],
    references: [
      "Derek Parfit, *Reasons and Persons* (1984)",
      "Star Trek Transporter Thought Experiment",
      "《我是哪一個我？》—— 思辨身份的連續性與複製倫理",
    ],
    probabilityWave: {
      collapseThreshold: 0.85,
      superpositionNodes: 20,
    },
  },
  {
    // 印度人不可語冰
    id: "indian-cannot-know-ice",
    title: "印度人不可語冰",
    themeImage: "../../public/img/indian-cannot-know-ice.png",
    content: `<p>想像有一位<strong>印度婦女</strong>，她從小生活在沙漠，終其一生都沒離開過那片乾涸的土地。</p>
    <p>某一天，她的表弟回來，告訴她在北方的世界裡，有一種叫<strong>「冰」</strong>的物質，當它在寒冷的環境下出現時，可以凍結水。</p>
    <p>但婦女聽了後，根本無法理解這個概念，因為在她的經驗中，水從未能夠凍結過，更遑論「冰」的存在。</p>
    <blockquote><p>她不相信「冰」的存在，這完全超出了她的知識範圍和生活經驗。</p></blockquote>
    <p>同樣地，她也不相信人們所說的噴火龍的故事，因為那樣的存在在她的世界觀中根本無法容納。</p>`,
    tags: [
      { label: "燒腦度", color: "bg-purple-400", progress: 0.7 },
      { label: "爭議程度", color: "bg-blue-400", progress: 0.6 },
      { label: "迷惑值", color: "bg-pink-400", progress: 0.75 },
    ],
    choices: [
      {
        title: "如果知識來自經驗，那我們如何認知一個完全不同的世界？",
        outcome:
          "這問題讓我們回到經驗主義與理性主義的辯證。經驗能帶來知識，但當經驗無法覆蓋某些事物時，我們的知識就變得狹窄且受限。",
      },
      {
        title: "知識是固守經驗的桎梏，還是有可能突破自我理解的框架？",
        outcome:
          "這挑戰了我們對現實的理解：當我們面對前所未見的事物時，是否會因為先入為主的經驗而無法接受新知？",
      },
      {
        title:
          "如果我們所見即是實，對一個無法理解冰的人來說，他還能理解『真相』嗎？",
        outcome:
          "這是一個困難的問題，因為真相不只是知識，還是認知的能力與範圍。當視野被限制，我們的真相也會變得狹隘，無法觸及完整的現實。",
      },
    ],
    relatedCases: [
      {
        id: "perception-reality",
        title: "感知與現實的邊界",
        preview: "如果我們的感知影響了我們的世界觀，真實到底是什麼？",
      },
      {
        id: "knowledge-limits",
        title: "知識的極限與無知的智慧",
        preview: "我們能否突破自我的知識限制，看到更廣闊的世界？",
      },
    ],
    references: [
      "David Hume, *An Enquiry Concerning Human Understanding* (1748)",
      "Immanuel Kant, *Critique of Pure Reason* (1781)",
      "J.L. Austin, *How to Do Things with Words* (1962)",
    ],
    probabilityWave: {
      collapseThreshold: 0.8,
      superpositionNodes: 10,
    },
  },
  // 新增更多量子態案例...
  {
    // 虛擬外遇
    id: "virtual-affair",
    title: "虛擬外遇",
    themeImage: "../../public/img/virtual-affair.png",
    content: `<p>你的伴侶最近迷上了一款新世代 VR 沉浸式遊戲，在遊戲中，他和一個虛擬角色展開了火熱又浪漫的戀情。</p>
    <p>他們一起旅行、親吻、調情、甚至發生了關係——當然，這一切都只是<strong>虛擬的</strong>。</p>
    <blockquote><p>但這些感覺、回憶和刺激，<strong>對他來說都是真實的</strong>。</p></blockquote>
    <p>你無意中發現了這一切，對方卻說：</p>
    <ul>
      <li>「我沒有真的做什麼，那只是個程式。」</li>
      <li>「我愛的還是你，這只是某種幻想投射。」</li>
    </ul>
    <p>你會覺得被背叛嗎？</p>
    <p>或者該說，<strong>當一切都是在虛擬中完成的，還能叫做『出軌』嗎？</strong></p>`,
    tags: [
      { label: "燒腦度", color: "bg-purple-400", progress: 0.6 },
      { label: "爭議程度", color: "bg-blue-400", progress: 0.9 },
      { label: "迷惑值", color: "bg-pink-400", progress: 0.85 },
    ],
    choices: [
      {
        title: "如果只是虛擬，那它和幻想或自慰有什麼不同？",
        outcome:
          "這引發了對『行為 vs. 思想』的討論。很多人認為意圖也具有道德重量。當你用虛擬手段完成真實出軌的劇情，是否已經越界？",
      },
      {
        title: "情感連結如果是真實的，即使對象是虛擬，算不算背叛？",
        outcome:
          "虛擬戀人雖不存在，但愛是真的。愛與肉體誰比較重要？若情感投入已超越現實，或許背叛早已發生。",
      },
      {
        title: "如果我禁止他這樣做，是否侵犯了對方的心理自由？",
        outcome:
          "當個人幻想進入了互動性虛擬環境，那還是純粹的『幻想』嗎？這涉及隱私權與情感倫理的界線。",
      },
    ],
    relatedCases: [
      {
        id: "experience-machine",
        title: "體驗機器悖論",
        preview: "如果你可以活在完美幻覺裡，你願意嗎？",
      },
      {
        id: "ai-lover",
        title: "AI戀人道德爭議",
        preview: "與人工智慧建立戀愛關係是否背叛人類伴侶？",
      },
    ],
    references: [
      "Robert Nozick, *The Experience Machine* (1974)",
      "Martha Nussbaum, *Love's Knowledge* (1990)",
      "Sherry Turkle, *Alone Together* (2011)",
    ],
    probabilityWave: {
      collapseThreshold: 0.7,
      superpositionNodes: 14,
    },
  },
];
