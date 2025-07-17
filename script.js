// ========== MATRIX BACKGROUND ========== //
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0";
  ctx.font = `${fontSize}px monospace`;

  drops.forEach((y, i) => {
    const text = letters[Math.floor(Math.random() * letters.length)];
    const x = i * fontSize;
    ctx.fillText(text, x, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  });
}
setInterval(drawMatrix, 33);

// ========== TYPEWRITER EFFECT ========== //
const typewriterText = document.getElementById("typewriterText");
const message = "DEVICE HACKED";
let i = 0;

function typeWriter() {
  if (i < message.length) {
    typewriterText.textContent += message.charAt(i);
    i++;
    setTimeout(typeWriter, 150);
  }
}
typeWriter();

// ========== FAKE SYSTEM LOGS ========== //
const logArea = document.getElementById("logArea");
const fakeLogs = [
  "Initializing access protocol...",
  "Bypassing firewall...",
  "Extracting device metadata...",
  "Accessing camera stream...",
  "Injecting malware signature...",
  "Retrieving stored passwords...",
  "Transmitting files to external server...",
  "Remote shell connected...",
  "Encrypting local storage...",
  "Spying microphone input...",
  "Device hijacked. Control acquired.",
];

let logIndex = 0;
function showNextLog() {
  if (logIndex < fakeLogs.length) {
    const line = document.createElement("div");
    line.textContent = fakeLogs[logIndex++];
    logArea.appendChild(line);
    logArea.scrollTop = logArea.scrollHeight;
    setTimeout(showNextLog, 700);
  }
}
setTimeout(showNextLog, 1000);

// ========== REVEAL AWARENESS MESSAGE ========== //
setTimeout(() => {
  const reveal = document.getElementById("revealMessage");
  if (reveal) {
    reveal.classList.remove("hidden");
    reveal.scrollIntoView({ behavior: "smooth" });
  }
}, 12000);

// ========== SHARE BUTTON FUNCTION ========== //
function shareAwareness() {
  const url = window.location.href;
  const message = `😈 I just got hacked by this site... or did I?\nTest if your friends are smart enough to survive this prank:\n\n${url}`;
  navigator.clipboard.writeText(message)
    .then(() => alert("📋 Link copied! Send it to others and prank them too!"))
    .catch(() => alert("❌ Unable to copy the link. Try manually!"));
}
window.shareAwareness = shareAwareness;
