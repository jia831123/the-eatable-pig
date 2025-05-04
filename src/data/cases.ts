// 量子哲學案例糾纏矩陣
import FAKE_EVIL_PNG from "../../public/img/fake-evil.png";
import QUANTUM_PIG_PNG from "../../public/img/quantum-pig.png";
import KILLER_TRANSPORTER_PNG from "../../public/img/killer-transporter.png";
import INDIAN_CANNOT_KNOW_ICE_PNG from "../../public/img/indian-cannot-know-ice.png";
import VIRTUAL_AFFAIR_PNG from "../../public/img/virtual-affair.png";
import GAMBLERS_FALLACY_PNG from "../../public/img/gamblers-fallacy.png";
import AI_LABOR_PNG from "../../public/img/ai-labor.png";
import MEMORY_UPLOAD_PNG from "../../public/img/memory-upload.png";
import CLONE_RIGHTS_PNG from "../../public/img/clone-rights.png";
import MIND_UPLOAD_PNG from "../../public/img/mind-upload.png";
import PERCEPTION_REALITY_PNG from "../../public/img/perception-reality.png";
import KNOWLEDGE_LIMITS_PNG from "../../public/img/knowledge-limits.png";
import RAPE_THEN_KILL_PNG from "../../public/img/rape-then-kill.png";
import GOOD_OR_GOOD_PNG from "../../public/img/god-or-good.png";
import GIG_BROTHER from "../../public/img/big-brother.png";
import WHICH_SHIP_IS_REAL from "../../public/img/which-ship-is-real.png";
import COLOR_BLINDNESS_PNG from "../../public/img/color-blindness.png";
import ATM_LUCK_PNG from "../../public/img/atm-luck.png";
import NO_MEDAL_HERO_PNG from "../../public/img/no-medal-hero.png";
import ZERO_PARADOX_PNG from "../../public/img/zeno-paradox.png";
import TORTURE_OR_NOT_PNG from "../../public/img/torture-or-not.png";
import SOPHIA_RATIONALITY from "../../public/img/sophia-rationality.png";
import KENNETHS_HERESY from "../../public/img/kenneths-heresy.png";
import DEATH_OVER_ENTERNITY from "../../public/img/death-over-eternity.png";
import EPIPHENIA_THOUGHTS_PNG from "../../public/img/epiphenia-thoughts.png";
import LIFEBOAT_PNG from "../../public/img/lifeboat.png";
import BEETLE_PNG from "../../public/img/beetle.png";
import SQUARE_CIRCLE_PNG from "../../public/img/square_circle.png";
export const quantumCases = [
  {
    // 欺騙我們的魔鬼
    id: "fake-evil",
    title: "欺騙我們的魔鬼",
    themeImage: FAKE_EVIL_PNG,
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
    themeImage: QUANTUM_PIG_PNG,
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
    themeImage: KILLER_TRANSPORTER_PNG,
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
    themeImage: INDIAN_CANNOT_KNOW_ICE_PNG,
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
    themeImage: VIRTUAL_AFFAIR_PNG,
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
  {
    // 推論錯誤的賭度
    id: "gamblers-fallacy",
    title: "推論錯誤的賭度",
    themeImage: GAMBLERS_FALLACY_PNG,
    content: `<p>假設你正在玩擲硬幣的遊戲。這個遊戲公平，每次擲硬幣有50%的機會是正面，50%的機會是反面。</p>
    <p>但如果連續擲了五次都是正面，你會覺得下一次反面的機率是不是大了呢？</p>
    <blockquote><p>這就是<strong>賭徒謬誤</strong>：錯誤地推測，過去的結果會影響未來的隨機事件。</p></blockquote>
    <p>事實上，擲硬幣每次的結果都是獨立的，不受之前的結果影響。正面和反面的機會永遠是50%。</p>
    <p>但人們經常會認為，如果已經出現過幾次正面，那反面就「應該」要來了，這種推論反映了我們如何在無意識中將隨機事件視為有模式可循。</p>`,
    tags: [
      { label: "燒腦度", color: "bg-purple-400", progress: 0.7 },
      { label: "爭議程度", color: "bg-blue-400", progress: 0.5 },
      { label: "迷惑值", color: "bg-pink-400", progress: 0.65 },
    ],
    choices: [
      {
        title: "如果過去的事件對未來沒有影響，那我們如何做決策？",
        outcome:
          "這讓我們面對隨機與不確定性的真實。其實，隨機性並不必然意味着無法預測，很多時候，理解隨機的規律性反而能讓我們更理性地決策。",
      },
      {
        title: "為什麼即使知道賭徒謬誤，我們還會犯這樣的錯誤？",
        outcome:
          "這反映了我們的大腦在尋找模式和規律時的天然傾向。這是一種生物學上的偏誤，讓我們常常在不自覺中錯誤地解讀隨機事件。",
      },
      {
        title: "賭徒謬誤是否揭示了我們對運氣的誤解？",
        outcome:
          "是的。賭徒謬誤其實揭示了我們對「運氣」的非理性理解。認為過去的結果會影響未來的事件，其實是一種不合理的信任模式。",
      },
    ],
    relatedCases: [
      {
        id: "law-of-large-numbers",
        title: "大數法則",
        preview: "隨著樣本數量的增加，平均值會趨近於理論值。",
      },
      {
        id: "cognitive-bias",
        title: "認知偏誤",
        preview: "我們如何被自己大腦的錯誤推理影響決策？",
      },
    ],
    references: [
      "Benedict Carey, *How We Decide* (2009)",
      "Daniel Kahneman, *Thinking, Fast and Slow* (2011)",
      "Richard Thaler, *Misbehaving: The Making of Behavioral Economics* (2015)",
    ],
    probabilityWave: {
      collapseThreshold: 0.7,
      superpositionNodes: 12,
    },
  },
  {
    // 被迫先姦後殺的二等兵
    id: "rape-then-kill",
    title: "被迫先姦後殺的二等兵",
    themeImage: RAPE_THEN_KILL_PNG,
    content: `<p>一位<strong>年輕的二等兵</strong>，被敵軍俘虜，囚禁於戰區村莊中。</p>
    <p>敵軍軍官命令他：<strong>「強暴這個村婦，然後把她殺了，否則，我們就會派十人輪姦後，再折磨致死。」</strong></p>
    <p>他內心掙扎——若聽從命令，他將<strong>親手做出一件他完全無法接受的惡行</strong>；若拒絕，村婦將面臨更慘烈的命運。</p>
    <blockquote><p>這不是選擇善惡，而是選擇哪個惡比較不那麼糟。</p></blockquote>
    <p>你會怎麼選？他又該怎麼選？<strong>一個人是否有道德義務去作惡，為了避免更大的惡？</strong></p>`,
    tags: [
      { label: "燒腦度", color: "bg-purple-400", progress: 0.95 },
      { label: "爭議程度", color: "bg-blue-400", progress: 1.0 },
      { label: "迷惑值", color: "bg-pink-400", progress: 0.9 },
    ],
    choices: [
      {
        title: "若為了避免更大的悲劇，我是否被道德『強迫』去行惡？",
        outcome:
          "這是經典的『道德緊急命令』困境。某些倫理學派（如效益主義）會說：選擇傷害最小的那個。但康德主義者會反駁：以任何理由行惡都是不可接受的，因為人不能被當成手段。",
      },
      {
        title: "如果我的選擇只是不作惡，而讓更大惡發生，我真的無辜嗎？",
        outcome:
          "這打中了『行動罪 vs. 不作為罪』的核心。我們是否有責任阻止他人行惡？在那個時刻，不作為是否其實就是一種道德懦弱？",
      },
      {
        title: "在這樣的情況下，是否根本沒有『正確』的選擇？",
        outcome:
          "許多現實中的倫理情境其實無法二分對錯，只能選擇『較不壞』。這讓我們質疑，道德是否真的能提供一個普遍適用的指南？",
      },
    ],
    relatedCases: [
      {
        id: "trolley-problem",
        title: "電車難題",
        preview: "犧牲一人救五人，真的是對的選擇嗎？",
      },
      {
        id: "moral-responsibility",
        title: "不作為的罪",
        preview: "當你袖手旁觀，你真的沒有責任嗎？",
      },
    ],
    references: [
      "Philippa Foot, *The Problem of Abortion and the Doctrine of the Double Effect* (1967)",
      "Judith Jarvis Thomson, *The Trolley Problem* (1976)",
      "Immanuel Kant, *Groundwork of the Metaphysics of Morals* (1785)",
    ],
    probabilityWave: {
      collapseThreshold: 0.92,
      superpositionNodes: 16,
    },
  },
  {
    // 先有善，還是先有上帝？
    id: "god-or-good",
    title: "先有善，還是先有上帝？",
    themeImage: GOOD_OR_GOOD_PNG,
    content: `<p>某天你問一位虔誠教徒：「你為什麼相信殺人是錯的？」</p>
    <p>他說：「因為上帝說殺人是錯的。」</p>
    <p>但這句話背後，藏著一個<strong>哲學雷區</strong>——</p>
    <ul>
      <li>是因為上帝說它是善的，所以它才是善的？</li>
      <li>還是因為它本來就善，即使上帝沒說，它也善？</li>
    </ul>
    <blockquote><p>這被稱為<strong>尤西弗羅悖論（Euthyphro dilemma）</strong>，來自柏拉圖的對話錄。</p></blockquote>
    <p>如果善是上帝決定的，那祂說<strong>折磨嬰兒是善的</strong>，那就變成善？</p>
    <p>如果善獨立於上帝，那祂就不是善的源頭？那祂還是萬物的創造者嗎？</p>
    <p><strong>道德到底是神授的？還是獨立存在的永恆真理？</strong></p>`,
    tags: [
      { label: "燒腦度", color: "bg-purple-400", progress: 0.85 },
      { label: "爭議程度", color: "bg-blue-400", progress: 0.95 },
      { label: "迷惑值", color: "bg-pink-400", progress: 0.88 },
    ],
    choices: [
      {
        title: "如果上帝說什麼都是善，那善就變得任意、沒有原則？",
        outcome:
          "這將道德淪為神的命令清單，缺乏內在邏輯。許多學者因此主張：道德不能僅靠神的意志來定義。",
      },
      {
        title: "若善獨立存在，那上帝只是發現善，而非創造它？",
        outcome:
          "這會削弱上帝的絕對主權。某些神學家則試圖迴避這兩難，說：『上帝的本質就是善』，但這是否真的解決了悖論，仍有爭議。",
      },
      {
        title: "我們真的需要一位神，才能知道什麼是善嗎？",
        outcome:
          "許多無神論倫理學者認為，人類有能力透過理性、同理心與社會契約建立道德，而不需要宗教作為基礎。",
      },
    ],
    relatedCases: [
      {
        id: "atheist-ethics",
        title: "無神論者也能有道德嗎？",
        preview: "如果沒有神，人還會行善嗎？",
      },
      {
        id: "ai-morality",
        title: "AI 的道德指南針從哪來？",
        preview: "若道德不是神授，那該如何教給人工智慧？",
      },
    ],
    references: [
      "Plato, *Euthyphro* (~399 BC)",
      "Philip Quinn, *Divine Command Theory* (1978)",
      "Richard Dawkins, *The God Delusion* (2006)",
    ],
    probabilityWave: {
      collapseThreshold: 0.83,
      superpositionNodes: 13,
    },
  },
  {
    id: "big-brother-station",
    title: "老大哥的太空站",
    themeImage: GIG_BROTHER,
    content: `<p >為了拍攝第七十三集的電視影集《老大哥》，製作單位啟用了最新科技：「皮耶」——一部能準確預測人類行為的超級電腦。</p>
    <p >心理學家說明：「人腦是物理性的，只要我們掌握足夠的神經數據與環境變數，就能預測人類接下來的反應。皮耶會持續監控參賽者的腦部活動，並即時推演他們未來幾分鐘可能的行為與思考反應。」</p>
    <p >這不僅是節目娛樂，更是一場哲學實驗：如果我們能被完美預測，那麼——我們是否真的擁有自由意志？</p>`,
    tags: [
      { label: "燒腦度", color: "bg-purple-400", progress: 0.9 },
      { label: "爭議程度", color: "bg-blue-400", progress: 0.7 },
      { label: "迷惑值", color: "bg-pink-400", progress: 0.8 },
    ],
    choices: [
      {
        title: "如果我的一切行為都能被預測，那我還有選擇的自由嗎？",
        outcome:
          "這是決定論與自由意志的正面交鋒。若一切行為可被預測，那自由意志是否只是錯覺？",
      },
      {
        title: "我們的大腦是否等同於我們的『自我』？",
        outcome:
          "如果你就是你的腦，那麼當腦被完全讀懂時，你的所有思維也將透明無遺。是否還存在某種超越大腦的『我』？",
      },
      {
        title: "如果觀眾更在意『角色怎麼想』而非『怎麼做』，這代表什麼？",
        outcome:
          "或許我們對人性更關注的是動機與心理，而非行為本身。那是否表示內在自由仍有價值，即使行為可被預測？",
      },
    ],
    relatedCases: [
      {
        id: "free-will-simulator",
        title: "模擬中的自由意志",
        preview: "在全監控虛擬世界中，我們的選擇還是真實的嗎？",
      },
      {
        id: "upload-soul",
        title: "靈魂是否能上傳？",
        preview: "如果大腦活動可以被完全複製，『你』還會是你嗎？",
      },
    ],
    references: [
      "Laplace's Demon, Pierre-Simon Laplace (1814)",
      "Daniel Dennett, *Freedom Evolves* (2003)",
      "《The Pig That Wants to Be Eaten》 #9",
    ],
    probabilityWave: {
      collapseThreshold: 0.85,
      superpositionNodes: 10,
    },
  },
  {
    id: "which-ship-is-real",
    title: "哪一艘才是真的",
    themeImage: WHICH_SHIP_IS_REAL,
    content: `<p >想像有一艘船，這艘船的每個部件，逐步被替換成全新的材料。最終，這艘船不再有任何原始的部件，只剩下新的部分。</p>
    <p >然而，這艘船會繼續航行，仍然被稱為“原船”。但這樣的船還算不算是原來的船？</p>
    <p >另外，有一艘完全由相同材料製造的船，幾乎無差異。它也被稱為“原船”，那麼，哪一艘船才是真正的“原船”呢？</p>`,
    tags: [
      { label: "燒腦度", color: "bg-purple-400", progress: 0.7 },
      { label: "爭議程度", color: "bg-blue-400", progress: 0.8 },
      { label: "迷惑值", color: "bg-pink-400", progress: 0.6 },
    ],
    choices: [
      {
        title: "如果船的所有部件都被更換，那它還是原來的船嗎？",
        outcome:
          "這是傳統的「船隻悖論」。當所有部分都被替換後，船的身份是否依舊成立？",
      },
      {
        title: "如果有一艘船在物理上與原船相同，那麼它就是原船嗎？",
        outcome:
          "這提出了關於物理相似性與身份認同之間的張力。是相同的結構就代表相同的船嗎？",
      },
      {
        title: "船隻的身份是基於它的歷史還是基於它的構成材料？",
        outcome:
          "這涉及到歷史性身份與物質性身份的區別。歷史能改變我們對一物體的理解，還是物體的當下結構才最重要？",
      },
    ],
    relatedCases: [
      {
        id: "personal-identity",
        title: "個人身份的悖論",
        preview: "你是否還是那個你自己，當你身上的每一個細胞都在不斷更替時？",
      },
      {
        id: "teletransportation-paradox",
        title: "傳送悖論",
        preview: "如果將你完全複製到另一個地方，你還是原來的你嗎？",
      },
    ],
    references: [
      "Ship of Theseus paradox, Plutarch (c. 100 AD)",
      "John Locke's theory of personal identity",
      "《The Pig That Wants to Be Eaten》 #11",
    ],
    probabilityWave: {
      collapseThreshold: 0.75,
      superpositionNodes: 9,
    },
  },
  {
    id: "color-blindness",
    title: "研究紅色的色盲",
    themeImage: COLOR_BLINDNESS_PNG,
    content: `<p >瑪麗是世界上最偉大的神經科學家，她對顏色的運作了如指掌。<br>
    但她從小就患有色盲，無法看到紅色。她的實驗室中，所有顏色都被濾除，只存在黑、白與灰階。</p>
    <p >有一天，研究團隊治好了她的色盲，她第一次「親眼看見」紅色。</p>
    <p >問題來了：<strong >在這一刻，她是否學到了什麼『新知識』？</strong></p>`,
    tags: [
      { label: "燒腦度", color: "bg-purple-400", progress: 0.95 },
      { label: "爭議程度", color: "bg-blue-400", progress: 0.85 },
      { label: "迷惑值", color: "bg-pink-400", progress: 0.9 },
    ],
    choices: [
      {
        title: "瑪麗學到了新知識，說明有些知識無法靠語言或科學傳達？",
        outcome:
          "這是支持『質感論（Qualia）』的觀點：有些經驗是純主觀的，只能透過親身體驗。",
      },
      {
        title: "她什麼都沒學到，只是把已知理論對應到新的感官刺激。",
        outcome:
          "這是物理主義的立場：所有知識都可還原為物理描述，看到紅色只是刺激匹配，沒有新增知識。",
      },
      {
        title: "或許她學到的不是知識，而是一種新的存在方式？",
        outcome:
          "可能她沒有學到『事實』，而是獲得一種新的意識狀態——知識與經驗之間，存在第三種東西。",
      },
    ],
    relatedCases: [
      {
        id: "ai-emotion",
        title: "AI能感覺『痛』嗎？",
        preview: "如果AI模擬疼痛行為，我們能說它真的『痛』嗎？",
      },
      {
        id: "taste-of-coffee",
        title: "咖啡的味道能解釋嗎？",
        preview: "你可以把咖啡的味道講得很詳盡，但從未喝過的人能『懂』嗎？",
      },
    ],
    references: [
      "Frank Jackson, *Epiphenomenal Qualia* (1982)",
      "《The Pig That Wants to Be Eaten》 #13",
      "David Chalmers, *The Conscious Mind* (1996)",
    ],
    probabilityWave: {
      collapseThreshold: 0.88,
      superpositionNodes: 9,
    },
  },
  {
    id: "atm-luck",
    title: "鴻運當頭的理查",
    themeImage: ATM_LUCK_PNG,
    content: `<p>理查到 ATM 提款，機器卻意外吐出一萬英鎊，<strong>但帳上只扣了一百。</strong></p>
    <p>他觀察幾週，銀行毫無動靜，於是決定拿這筆「天上掉下來的財富」去買 BMW。</p>
    <p>雖然一度良心不安，他最後還是安慰自己：</p>
    <ul>
      <li>這不是我偷的，是機器自己給我的。</li>
      <li>銀行損失這種小錢又有保險，無傷大雅。</li>
      <li>如果銀行系統會犯錯，那責任不在我。</li>
    </ul>
    <p><strong>這樣的行為，到底算不算偷？</strong></p>`,
    tags: [
      { label: "燒腦度", color: "bg-purple-400", progress: 0.6 },
      { label: "爭議程度", color: "bg-blue-400", progress: 0.9 },
      { label: "迷惑值", color: "bg-pink-400", progress: 0.75 },
    ],
    choices: [
      {
        title: "這就是偷，只是沒人發現罷了。",
        outcome:
          "根據結果主義或道德常理，他『明知』那筆錢不是他的，還拿來花，就構成不當得利。",
      },
      {
        title: "這是銀行錯誤，不干理查的事。",
        outcome: "這是責任轉移論：你只是接受了『世界的饋贈』，錯在發錢的人。",
      },
      {
        title: "道德來自意圖，他沒惡意就不算壞人。",
        outcome:
          "義務論角度，若理查不是主動詐取，而是被動接受，有人會說他只是『運氣好』。",
      },
    ],
    relatedCases: [
      {
        id: "trolley-problem",
        title: "電車難題",
        preview: "明知會導致某種結果，你還能撇清自己的責任嗎？",
      },
      {
        id: "digital-pirate",
        title: "盜版行為的道德界線",
        preview: "下載沒付錢的資源，真的不算偷嗎？",
      },
    ],
    references: [
      "《The Pig That Wants to Be Eaten》#16",
      "Ethical theories on moral luck and responsibility",
    ],
    probabilityWave: {
      collapseThreshold: 0.78,
      superpositionNodes: 10,
    },
  },
  {
    id: "no-medal-hero",
    title: "不能得勳章的英雄",
    themeImage: NO_MEDAL_HERO_PNG,
    content: `<p>二等兵肯尼（Private Kenney）在戰場上為了救同袍，撲向一顆手榴彈，當場炸死，但因此救了數十人。</p>
  <p>他的家人原以為肯尼會獲得最高榮譽獎章——維多利亞十字勳章，卻被軍方拒絕：</p>
  <blockquote><p>「肯尼超出了他的職責。他的行動雖英勇，但不符合軍隊的行動準則。我們不獎勵這種未經授權的自我犧牲。」</p></blockquote>
  <p>軍方甚至補上一句更殘忍的邏輯：</p>
  <blockquote><p>「爆炸一定會波及肯尼，他遲早會死，所以這不算他『為了救人』而死。」</p></blockquote>
  <p><strong>如果你是肯尼的家人，你該如何為他辯護？</strong></p>`,
    tags: [
      { label: "燒腦度", color: "bg-purple-400", progress: 0.5 },
      { label: "爭議程度", color: "bg-blue-400", progress: 0.9 },
      { label: "迷惑值", color: "bg-pink-400", progress: 0.6 },
    ],
    choices: [
      {
        title: "制度應該比人命重要嗎？",
        outcome:
          "若制度變得不近人情，那還值得遵守嗎？這挑戰了『法理』與『情理』的界線。",
      },
      {
        title: "肯尼真的是『不必要的犧牲』嗎？",
        outcome: "他主動犧牲換來數十人存活，即使不是被命令的，這還不叫英雄？",
      },
      {
        title: "軍方是不是在逃避責任？",
        outcome: "不給勳章就不用背道德債？制度可能被拿來當作卸責的盾牌。",
      },
    ],
    relatedCases: [
      {
        id: "utilitarian-sacrifice",
        title: "功利主義與自我犧牲",
        preview: "如果犧牲一人能救十人，這樣的行為值得讚揚嗎？",
      },
      {
        id: "just-following-orders",
        title: "只服從命令就沒錯嗎？",
        preview: "軍隊倫理 vs. 個人道德判斷的永恆衝突。",
      },
    ],
    references: [
      "《The Pig That Wants to Be Eaten》 #16",
      "Michael Walzer《Just and Unjust Wars》",
      "軍隊倫理與功利主義批評",
    ],
    probabilityWave: {
      collapseThreshold: 0.65,
      superpositionNodes: 8,
    },
  },
  {
    id: "zeno-paradox",
    title: "烏龜贏了",
    themeImage: ZERO_PARADOX_PNG,
    content: `<p>阿基里斯是全希臘跑得最快的戰士，但他卻讓烏龜塔奎因（Tarquin）先起跑100碼。</p>
  <p>評論員芝諾宣布：「阿基里斯絕對追不上塔奎因。因為他每次抵達烏龜先前的位置時，烏龜又往前了一點。」</p>
  <p>「如此反覆無窮，阿基里斯永遠只能接近烏龜，而無法超越。」</p>
  <p>觀眾驚呼：「合理啊！這場比賽注定沒懸念了。」<br>但就在眾人下注的瞬間——阿基里斯超車成功，全場錯愕！</p>
  <p><strong>所以，數學與邏輯出錯了？還是我們的直覺錯了？</strong></p>`,
    tags: [
      {
        label: "燒腦度",
        color: "bg-purple-400",
        progress: 0.7,
        description: "無限可分 vs 現實物理的直覺抗辯",
      },
      {
        label: "爭議程度",
        color: "bg-blue-400",
        progress: 0.5,
        description: "數學邏輯不算錯，但只要理解無限總和，問題就解了",
      },
      {
        label: "迷惑值",
        color: "bg-pink-400",
        progress: 0.9,
        description: "「明明會被追上，但邏輯說追不上」的心理落差超強",
      },
    ],
    choices: [
      {
        title: "芝諾詭論到底哪裡怪？",
        outcome: "它假設無限個時間點無限延長，卻忽略了無限總和可以有限。",
      },
      {
        title: "現實真的符合數學嗎？",
        outcome:
          "數學模型會近似現實，但不是所有邏輯上的無限都能在物理世界實現。",
      },
      {
        title: "這讓你懷疑『常識』嗎？",
        outcome:
          "我們相信烏龜會被追上，卻又被理性推導說服；這衝突點才是哲學有趣之處。",
      },
    ],
    relatedCases: [
      {
        id: "simulation-infinity",
        title: "虛擬世界的無限問題",
        preview: "如果模擬世界無法處理無限，那它還能逼真嗎？",
      },
      {
        id: "quantum-continuity",
        title: "量子世界是連續還是不連續？",
        preview: "芝諾的問題也出現在物理裡：時間是無限可分的嗎？",
      },
    ],
    references: [
      "Zeno’s Paradoxes – Stanford Encyclopedia of Philosophy",
      "《The Pig That Wants to Be Eaten》#18",
    ],
    probabilityWave: {
      collapseThreshold: 0.6,
      superpositionNodes: 9,
    },
  },
  {
    id: "torture-or-not",
    title: "拷打還是不拷打",
    themeImage: TORTURE_OR_NOT_PNG,
    content: `<p>想像有一個恐怖分子知道即將發生的恐怖攻擊地點和時間，但他拒絕透露任何信息。在某些極端情況下，政府可能會考慮使用拷打手段來迫使他開口。這樣的行為是否可以接受？</p>
  <p>一方認為：「如果拷打能夠拯救無數無辜生命，那麼使用這種方法在某些情況下是合理的。」而另一方則認為：「不論情況如何，使用拷打違背了基本人權，無論多少生命處於危險之中。」</p>
  <p><strong>問題的關鍵是：如果我們認為拷打是錯誤的，那是否就意味著我們不能在任何情況下接受它？如果我們認為它是可以被接受的，那又該如何界定這些極端情況？</strong></p>`,
    tags: [
      {
        label: "燒腦度",
        color: "bg-purple-400",
        progress: 0.8,
        description: "道德兩難，權衡大局與基本人權",
      },
      {
        label: "爭議程度",
        color: "bg-blue-400",
        progress: 0.9,
        description: "拷打的倫理辯論在社會中永遠不會達成共識",
      },
      {
        label: "迷惑值",
        color: "bg-pink-400",
        progress: 0.6,
        description: "以結果為依據的倫理是否能適應每個情境？",
      },
    ],
    choices: [
      {
        title: "為了拯救更多人，是否可以使用拷打手段？",
        outcome: "如果結果是拯救無數無辜的生命，這樣的行為是否能被合理化？",
      },
      {
        title: "人權不容妥協，無論情況如何。",
        outcome:
          "這種觀點會強調基本人權的不可侵犯性，並拒絕在任何情境下使用拷打。",
      },
      {
        title: "拷打是否會帶來後果性的問題？",
        outcome:
          "如果接受拷打，會不會導致政府權力的濫用？對個人自由的侵害可能會不斷擴大。",
      },
    ],
    relatedCases: [
      {
        id: "ticking-bomb",
        title: "滴答炸彈困境",
        preview: "一個類似的哲學困境，是否應該在一名恐怖分子身上施用拷打？",
      },
      {
        id: "human-rights",
        title: "人權與國家安全",
        preview: "如何平衡基本人權和國家安全的需求？",
      },
    ],
    references: [
      "Torture and Moral Theory by Susan Neiman",
      "The ticking bomb scenario – Stanford Encyclopedia of Philosophy",
    ],
    probabilityWave: {
      collapseThreshold: 0.7,
      superpositionNodes: 10,
    },
  },
  {
    id: "sophia-rationality",
    title: "蘇菲亞的理性困境",
    themeImage: SOPHIA_RATIONALITY,
    content: `<p>蘇菲亞一直以來都將理性視為自己生活的指導原則，她認為每一個行為都應該經過理性的分析與評估。然而，當她的朋友提出一個理性論證，說服她引爆炸彈以殺死大量無辜的人，並且這個論證似乎沒有任何明顯的邏輯錯誤時，蘇菲亞開始陷入了深深的困惑。</p>
  <p>她知道，這樣的行為不符合她的道德標準，然而她也清楚地感受到，理性論證中的每一個步驟似乎都無可挑剔。這使得她開始懷疑，是否理性本身就足以支配我們的道德判斷，或者理性本身是否有某些盲點，無法正確引導我們的行為。</p>
  <p><strong>蘇菲亞應該遵循這個理性論證，做出她不想做的選擇，還是應該聽從直覺，拒絕這樣的理性結論，雖然這可能會被視為非理性行為？</strong></p>`,
    tags: [
      {
        label: "燒腦度",
        color: "bg-purple-400",
        progress: 0.8,
        description: "探索理性與道德、情感之間的衝突",
      },
      {
        label: "爭議程度",
        color: "bg-blue-400",
        progress: 0.9,
        description: "涉及對理性行為的道德檢視，挑戰理性主導的信念",
      },
      {
        label: "迷惑值",
        color: "bg-pink-400",
        progress: 0.7,
        description: "理性無法解釋所有道德問題，直覺在道德判斷中的作用",
      },
    ],
    choices: [
      {
        title: "若完全依賴理性進行選擇，會不會失去人類的道德感？",
        outcome:
          "蘇菲亞發現，即便從理性角度看，行為的結果仍無法接受。理性在某些情況下無法涵蓋道德的全貌。",
      },
      {
        title: "理性是否總能給出最正確的行為指引？",
        outcome:
          "理性可能提供一個明確的路徑，但若忽視情感與道德直覺，它可能走向錯誤的方向。",
      },
      {
        title: "應該選擇理性行為還是情感/直覺行為來決定對錯？",
        outcome:
          "理性與情感的平衡是道德決策中不可忽視的一環，單一依賴理性可能會導致道德上的矛盾與痛苦。",
      },
    ],
    relatedCases: [
      {
        id: "trolley-problem",
        title: "電車難題",
        preview:
          "在面對類似選擇時，如何平衡理性與道德直覺，作出最符合倫理的決策？",
      },
      {
        id: "moral-dilemmas",
        title: "道德困境中的理性與情感",
        preview: "深入探討理性行為與道德情感間的衝突，及其對行為決策的影響。",
      },
    ],
    references: [
      "Utilitarianism by John Stuart Mill",
      "Ethics: Inventing Right and Wrong by J.L. Mackie",
    ],
    probabilityWave: {
      collapseThreshold: 0.75,
      superpositionNodes: 12,
    },
  },
  {
    id: "kenneths-heresy",
    title: "被誤解的叛徒",
    themeImage: KENNETHS_HERESY,
    content: `<p>在與世隔絕的聖希爾違荥格登會所，威勒費爾德教派的成員過著禁閉式的生活。外界資訊完全被封鎖，他們唯一的「窗戶」，就是每日播放的肥皂劇，並深信那就是現實世界的真實寫照。</p>
  <p>有一天，年輕的肯尼斯決定離開會所去探索。他找到了心心念念的《加冕街》，卻震驚地發現那只是一處攝影棚。</p>
  <p>帶著對真相的激動，肯尼斯返回會所，試圖告訴其他人實情。但他的話卻被視為瘋言瘋語，反被教徒們視為叛徒驅逐出境。</p>
  <p>他所發現的真相，反而成了他被排斥的原因。他該如何證明世界不是他們以為的那樣？</p>`,
    tags: [
      {
        label: "燒腦度",
        color: "bg-purple-500",
        progress: 0.7,
        description: "挑戰人對『現實』的感知本質，牽涉哲學與認知心理的深層思考",
      },
      {
        label: "爭議程度",
        color: "bg-blue-500",
        progress: 0.6,
        description: "真理重要，還是秩序重要？信念動搖是否應該受到懲罰？",
      },
      {
        label: "迷惑值",
        color: "bg-pink-500",
        progress: 0.8,
        description: "如果你活在虛假的世界，寧願知道還是繼續被騙？",
      },
    ],
    choices: [
      {
        title: "誰才是真正瘋了的人？",
        outcome:
          "是目睹真相、與群體格格不入的肯尼斯，還是那些深信肥皂劇是真實的群眾？",
      },
      {
        title: "集體幻覺是否比個體真相更具存續力？",
        outcome: "當一個人與整個體系的信仰對立時，真相會因此失效嗎？",
      },
      {
        title: "我們自己的世界，又有多真？",
        outcome:
          "我們接受的『新聞、歷史、價值觀』是否也存在與肥皂劇類似的操控？",
      },
    ],
    relatedCases: [
      {
        id: "platos-cave",
        title: "柏拉圖的洞穴寓言",
        preview: "如果一切只是影子，而你看見了真光，該如何讓人相信你不是瘋子？",
      },
      {
        id: "truman-show",
        title: "《楚門的世界》真實版本",
        preview: "如果你被全世界圍觀卻渾然不知，你還會相信自由意志嗎？",
      },
    ],
    references: [
      "Plato - Allegory of the Cave",
      "《The Pig That Wants to Be Eaten》#20",
      "電影《The Truman Show》",
    ],
    probabilityWave: {
      collapseThreshold: 0.7,
      superpositionNodes: 12,
    },
  },
  {
    id: "death-over-eternity",
    title: "賴活不如好死",
    themeImage: DEATH_OVER_ENTERNITY,
    content: `<p>兩百年前，年輕的薇妲莉亞服下了長生不老的藥，幻想著無盡的冒險與愛情，卻萬萬沒料到這竟是漫長孤獨與麻木的開端。</p>
  <p>世代更替，她孤身旁觀摯愛逝去、世界變遷。她所執行的計畫終將過時、失敗，未竟的志業也被無窮的時間稀釋成無意義的重複。</p>
  <p>現在，她終於服下了解藥，走向終點。在火光中，她親手銷毀長生的藥方，微笑著重拾久違的終結與釋懷。</p>`,
    tags: [
      {
        label: "燒腦度",
        color: "bg-purple-500",
        progress: 0.6,
        description:
          "不偏重邏輯推理，而是逼問存在本質：活著的價值是因為終點的存在？",
      },
      {
        label: "爭議程度",
        color: "bg-blue-500",
        progress: 0.8,
        description:
          "毀掉長生藥方是自私的？還是對人類的慈悲？你願意擁抱死亡嗎？",
      },
      {
        label: "迷惑值",
        color: "bg-pink-500",
        progress: 0.7,
        description:
          "你真的想要永生嗎？還是只是害怕死亡？這之間的分界模糊不清。",
      },
    ],
    choices: [
      {
        title: "長生究竟是祝福還是詛咒？",
        outcome: "如果時間成為無止盡的拖延，那一切目標是否將失去急迫性與價值？",
      },
      {
        title: "薇妲莉亞有毀掉配方的道德權利嗎？",
        outcome: "她的選擇保護了他人，還是剝奪了別人自由選擇的權利？",
      },
      {
        title: "人類的活力是否來自『有限』？",
        outcome: "若無死神的鞭策，是否我們將不再奮鬥、不再愛人？",
      },
    ],
    relatedCases: [
      {
        id: "gilgamesh-epic",
        title: "吉爾伽美什史詩",
        preview: "英雄追尋永生的旅程，最終領悟死亡才是人類的宿命與價值。",
      },
      {
        id: "deaths-gift",
        title: "《死亡的饋贈》",
        preview: "如果可以選擇永遠不死，你會選嗎？或者你寧願有個句點？",
      },
    ],
    references: [
      "哲學故事集《The Pig That Wants to Be Eaten》第20則",
      "哲學家伯納德·威廉斯（Bernard Williams）對永生與無聊的批判",
      "尼采對永劫回歸的反思",
    ],
    probabilityWave: {
      collapseThreshold: 0.6,
      superpositionNodes: 10,
    },
  },
  {
    id: "epiphenia-free-will",
    title: "原來我們都在胡思亂想",
    themeImage: EPIPHENIA_THOUGHTS_PNG,
    content: `<p>在埃皮菲尼亞星球上，人們相信思想只不過是身體運作的副產品，並不會真正影響行動。德克，一名地球觀光客，對此深感不解，因為在他看來，我們所做的決定與行為都是被「想法」驅動的。</p>
  <p>然而，赫胥黎的回答令人震撼：想法只是身體行動後的一種副作用，並非原因。那種「我要點啤酒」的念頭，其實不過是腦內預設好的劇本中，剛好播放到那一行台詞。</p>
  <p>德克一時無言，彷彿連「我思故我在」都開始崩解了。</p>`,
    tags: [
      {
        label: "燒腦度",
        color: "bg-purple-500",
        progress: 0.9,
        description:
          "直接挑戰自由意志與行動決定論，是哲學界與神經科學的大魔王等級題目。",
      },
      {
        label: "爭議程度",
        color: "bg-blue-500",
        progress: 0.9,
        description:
          "否定思想的因果力，會顛覆道德、責任與選擇的基礎，極具爭議。",
      },
      {
        label: "迷惑值",
        color: "bg-pink-500",
        progress: 0.85,
        description:
          "你的每個想法，都只是『身體自動反應後的評論』？光是這點就足以讓你靜靜坐在角落沉思三小時。",
      },
    ],
    choices: [
      {
        title: "我們是否擁有真正的自由意志？",
        outcome:
          "如果所有行為都是神經生理機制的結果，那我們是否只是『被觀看的角色』？",
      },
      {
        title: "思想若無因果力，道德責任如何建立？",
        outcome: "如果你沒有選擇做壞事，只是『生理反應』——那你還該被懲罰嗎？",
      },
      {
        title: "赫胥黎的說法是否本身就是思想的結果？",
        outcome:
          "如果思想無法影響行動，那麼說出這個理論的行為本身，是否自我矛盾？",
      },
    ],
    relatedCases: [
      {
        id: "benjamin-libet-experiment",
        title: "本傑明·李貝特實驗",
        preview:
          "實驗發現人在『意識到要動手』前，大腦已經做出決定。自由意志可能只是幻覺？",
      },
      {
        id: "sam-harris-free-will",
        title: "薩姆·哈里斯《自由意志》",
        preview:
          "神經科學視角下的自由意志死亡判決書：我們其實無法選擇我們的選擇。",
      },
    ],
    references: [
      "《The Pig That Wants to Be Eaten》第21則",
      "神經科學家 Benjamin Libet 的自由意志研究",
      "哲學家 Daniel Dennett 對意識與決定論的討論",
    ],
    probabilityWave: {
      collapseThreshold: 0.95,
      superpositionNodes: 11,
    },
  },
  {
    id: "lifeboat-death",
    title: "你管別人怎麼死",
    themeImage: LIFEBOAT_PNG,
    content: `<p>在一艘已經安全的救生艇上，船員選擇不救一名求救的溺水者，只因為「救她會減少我們的舒適」與「這不是我們的錯」。</p>
    <p>他們的選擇既沒有殺人，也不是出自惡意，只是單純地選擇不行動，眼睜睜看著那名婦人在求救中死亡。</p>
    <p>這樣的道德冷漠與責任逃避，是錯的嗎？如果不救，是一種「讓她死」；而如果救，是「犧牲自己的餅乾與甜酒」——</p>
    <p>在這種情境下，「無為」是否與「作惡」一樣可惡？</p>`,
    tags: [
      {
        label: "燒腦度",
        color: "bg-purple-400",
        progress: 0.7,
        explanation:
          "此題挑戰我們對『不作為的責任』的理解，不如邏輯悖論般難解，但蘊含深刻的倫理判斷。",
      },
      {
        label: "爭議程度",
        color: "bg-blue-400",
        progress: 0.85,
        explanation: "牽涉『道德義務 vs 個人利益』的對撞，容易引發價值觀衝突。",
      },
      {
        label: "迷惑值",
        color: "bg-pink-400",
        progress: 0.75,
        explanation:
          "它讓人困惑於：如果我沒有害人，為什麼還有責任？逼迫我們質疑道德責任的邊界。",
      },
    ],
    choices: [
      {
        title: "沒有害人，就是無罪嗎？",
        outcome:
          "這是『不作為』倫理的核心：你沒親手殺人，但也沒阻止死亡。冷漠與加害之間的界線模糊。",
      },
      {
        title: "我們該負責所有能救的人嗎？",
        outcome:
          "道德義務有範圍嗎？如果我們對所有能救之人都有責任，那是否變成無盡的負擔？",
      },
      {
        title: "群體默許的自私是否合理？",
        outcome: "當群體默許一種選擇，是否代表它更合理？還是只是道德麻痺？",
      },
    ],
    relatedCases: [
      {
        id: "trolley-problem",
        title: "電車難題",
        preview: "改變軌道導致他人死亡是否更有責任？",
      },
      {
        id: "organ-theft",
        title: "器官搶奪理論",
        preview:
          "為了救五人而殺一人的醫生，和救一人而失五人的冷漠，哪一種更邪惡？",
      },
    ],
    references: [
      "Peter Singer’s work on moral obligation and effective altruism",
      "The bystander effect and diffusion of responsibility in social psychology",
    ],
    probabilityWave: {
      collapseThreshold: 0.72,
      superpositionNodes: 9,
    },
  },
  {
    id: "beetle-game",
    title: "甲蟲遊戲",
    themeImage: BEETLE_PNG,
    content: `<p>兩個孩子各自擁有一個神祕的盒子，互不查看，只將盒中物命名為「甲蟲」，卻從不描述、從不比對。他們就這樣愉快地玩著名為「甲蟲」的語言遊戲。</p>
    <p>旁人納悶：「這個詞有意義嗎？還是只是毫無根據的代號？」</p>
    <p>在這個遊戲裡，真正重要的不是盒子裡是什麼，而是「用詞」這件事本身。當每個人說「我有一隻甲蟲」，卻不能驗證對方說的是什麼，那麼「甲蟲」到底是什麼？</p>
    <p>若每個人都只能用自己無法比對的經驗來定義語言，那語言還能溝通嗎？</p>`,
    tags: [
      {
        label: "燒腦度",
        color: "bg-purple-500",
        progress: 0.95,
        explanation:
          "這是對語言本質與主觀經驗的挑戰，需理解維根斯坦對『語言即使用』的深層論證。",
      },
      {
        label: "爭議程度",
        color: "bg-blue-300",
        progress: 0.6,
        explanation: "雖然不是道德問題，但學界對私有語言是否成立仍有激辯。",
      },
      {
        label: "迷惑值",
        color: "bg-pink-500",
        progress: 0.9,
        explanation:
          "『如果我不能描述我的感覺給你聽，那我到底說了什麼？』這種語言與心靈的雙重模糊性極具迷惑性。",
      },
    ],
    choices: [
      {
        title: "語言是否需要可共享的基礎？",
        outcome:
          "若語言沒有共通的參照依據，那麼『意思』是否就變成無意義的獨白？",
      },
      {
        title: "主觀經驗能否被語言描述？",
        outcome:
          "我的『痛』和你的『痛』，我們說的是一樣的東西嗎？或者只是各自的『甲蟲』？",
      },
      {
        title: "私有語言是否可能存在？",
        outcome:
          "維根斯坦認為不可能：語言之所以有意義，是因為它能在公共規則下被使用與理解。",
      },
    ],
    relatedCases: [
      {
        id: "marys-room",
        title: "瑪莉的房間",
        preview:
          "她知道所有關於紅色的知識，但當她真的『看到紅色』，那是新知識嗎？",
      },
      {
        id: "brain-in-vat",
        title: "缸中之腦",
        preview: "如果我們的經驗都不能驗證，那語言、世界、真實還剩什麼？",
      },
    ],
    references: [
      "Ludwig Wittgenstein, Philosophical Investigations",
      "The Private Language Argument",
      "Saul Kripke’s interpretation of Wittgenstein (Kripkenstein)",
    ],
    probabilityWave: {
      collapseThreshold: 0.83,
      superpositionNodes: 10,
    },
  },
  // 上帝給我方形的圓
  {
    id: "square-circle",
    title: "上帝，給我方形的圓",
    themeImage: SQUARE_CIRCLE_PNG,
    content: `<p>哲學家挑戰上帝：「你若真萬能，請創造一個方形的圓。」上帝說：「要有方形的圓」，結果卻創造出一個方形。哲學家不服：「你只是把『圓』的定義改掉罷了。」</p>
    <p>這不只是語言的遊戲，而是對『萬能』本身的邏輯極限提出挑戰：如果一個東西的定義本身就是互相矛盾的，那麼就算是上帝，也不能『創造矛盾本身』，否則邏輯就崩壞了。</p>
    <p>這也引出了另一層反思——語言是否可以任意指稱？還是有邏輯的結構限制語言的界線？</p>`,
    tags: [
      {
        label: "燒腦度",
        color: "bg-purple-400",
        progress: 0.85,
        explanation: "表面幽默實則深刻，挑戰對語言、邏輯與神性權能的根本理解。",
      },
      {
        label: "爭議程度",
        color: "bg-blue-500",
        progress: 0.8,
        explanation:
          "涉及宗教信仰、神的全能性、語義界線，是哲學與信仰激辯的經典火藥桶。",
      },
      {
        label: "迷惑值",
        color: "bg-pink-400",
        progress: 0.75,
        explanation:
          "用字面與概念的錯位製造迷惘，逼你重新檢視『語言』與『邏輯』是否可以被任意操縱。",
      },
    ],
    choices: [
      {
        title: "語言的限制是邏輯的產物？",
        outcome:
          "『方形的圓』邏輯上自相矛盾，無論如何定義也無法同時成立。這不是能力的限制，而是語義結構的限制。",
      },
      {
        title: "全能是否應包含違反邏輯？",
        outcome:
          "若『萬能』包括邏輯不可能的事，那一切語言與理性都將崩潰，進而使『萬能』變得無定義。",
      },
      {
        title: "定義操縱能否解決問題？",
        outcome:
          "將『圓』重新定義成『方』可以避開問題，但那只是玩語言遊戲，逃避了真正的邏輯挑戰。",
      },
    ],
    relatedCases: [
      {
        id: "liars-paradox",
        title: "說謊者悖論",
        preview: "『我現在說的話是謊話。』那麼他說的到底是真是假？",
      },
      {
        id: "god-rock",
        title: "上帝舉不起的石頭",
        preview:
          "如果上帝創造一顆自己也舉不起的石頭，那祂就不是萬能的；但如果祂不能創造，那也不是萬能的。",
      },
    ],
    references: [
      "全能悖論（Omnipotence Paradox）",
      "Ludwig Wittgenstein, Tractatus Logico-Philosophicus",
      "George Carlin’s humorous critiques of linguistic contradictions",
    ],
    probabilityWave: {
      collapseThreshold: 0.7,
      superpositionNodes: 9,
    },
  },
];
