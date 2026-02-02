// ===== ELEMENTS =====
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const page1 = document.querySelector(".page1");
const page2 = document.querySelector(".page2");

// ===== MUSIC =====
const bgMusic = document.getElementById("bgMusic");

// ===== STORE ORIGINAL NO POSITION =====
let baseLeft = null;
let baseTop = null;

// ===== NO BUTTON TEXTS =====
const noTexts = [
  "Are you sure? 😏",
  "Are you sure? 😏",
  "Pakka? 🤨",
  "Soch le ache se 🥺",
  "Really?? 😳",
  "yr soch lo eek baar",
  "yr please na",
  "maan jao na pookie wookie",
  "yr dekho mai jhoru ka gulam ban ke rahene ke liye bhi tayar hu",
  "yr dekho mat try kro no dabane ka infinty buttons hai ye",
  " bola tha na mat kro",
  "thak gaye na ab aap",
  "ruko pani pi lo",
  "yes tap krdo",
  "bola na yes tap kri",
  "Mat kar aisa 😭",
  "Last chance 😶",
  "No allowed nahi hai 😈",
  "Yes hi destiny hai 💘",
  "Bas kar yaar 😂",
  "Ab to YES hi bacha 😌",
  "Thak gaya hoga 🤣",
  "Pakka? 🤨",
  "Soch le 🥺",
  "Really? 😳",
  "Dil toot raha 💔",
  "Mat kar aisa 😭",
  "Bas kar yaar 😂",
  "YES hi destiny 💘",
  "Ab ruk ja 😌"
];

let noCount = 0;

// ===== FLEXIBLE NO BUTTON MOVE =====
function moveNoButton() {
  if (baseLeft === null || baseTop === null) {
    baseLeft = noBtn.offsetLeft;
    baseTop = noBtn.offsetTop;
  }

  const range = 25; // movement range (px)

  const dx = Math.random() * range * 2 - range;
  const dy = Math.random() * range * 2 - range;

  noBtn.style.left = baseLeft + dx + "px";
  noBtn.style.top = baseTop + dy + "px";
  noBtn.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;

  noBtn.textContent = noTexts[noCount % noTexts.length];
  noCount++;
}

// ===== EVENTS FOR NO BUTTON =====
noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

// ===== YES BUTTON CLICK =====
yesBtn.addEventListener("click", () => {
  // switch pages
  page1.classList.remove("active");
  page2.classList.add("active");

  // play music
  bgMusic.volume = 0.6;
  bgMusic.play();

  // start celebration
  startCelebration();
});

// ===== CELEBRATION EFFECTS =====
function startCelebration() {
  const hearts = [
    "❤️‍🔥","❤️‍🩹","💗","💕","🩷",
    "💖","💘","💞","🤍","🫶🏻"
  ];

  const texts = ["LOVE 💕", "YAY 💖", "FOREVER 💘", "CUTIE 🫶🏻"];

  // falling hearts
  setInterval(() => {
    const h = document.createElement("div");
    h.className = "heart";
    h.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    h.style.left = Math.random() * 100 + "vw";
    h.style.animationDuration = (2 + Math.random() * 3) + "s";
    document.body.appendChild(h);

    setTimeout(() => h.remove(), 5000);
  }, 120);

  // floating text
  setInterval(() => {
    const t = document.createElement("div");
    t.textContent = texts[Math.floor(Math.random() * texts.length)];
    t.style.position = "fixed";
    t.style.left = Math.random() * 80 + "vw";
    t.style.bottom = "0";
    t.style.fontSize = "14px";
    t.style.color = "white";
    t.style.opacity = "0.8";
    t.style.animation = "floatUp 4s linear forwards";
    document.body.appendChild(t);

    setTimeout(() => t.remove(), 4000);
  }, 700);
}

