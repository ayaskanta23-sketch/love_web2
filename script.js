const PASSWORD = "I LOVE YOU";

const memories = [
  { img: "photos/photo1.png", text: "Puja, this moment reminds me how safe I feel with you ❤️" },
  { img: "photos/photo2.png", text: "One of those simple happy days I never want to forget 😌" },
  { img: "photos/photo3.png", text: "Standing together — always 💕" }
];

let index = 0;
const music = document.getElementById("music");

function unlock() {
  if (document.getElementById("password").value === PASSWORD) {
    document.getElementById("lock").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "Wrong password 😢";
  }
}

function goStage2() {
  document.getElementById("stage1").classList.add("hidden");
  document.getElementById("stage2").classList.remove("hidden");
  music.play();
  showMemory();
  document.querySelector(".flip-card").classList.add("active");
}

function showMemory() {
  document.getElementById("photo").src = memories[index].img;
  document.getElementById("memory").innerText = memories[index].text;
}

function nextMemory() {
  index++;
  if (index >= memories.length) {
    document.getElementById("stage2").classList.add("hidden");
    document.getElementById("stage3").classList.remove("hidden");
  } else {
    showMemory();
  }
}

setInterval(() => {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 400);
