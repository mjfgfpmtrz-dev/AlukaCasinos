const tg = window.Telegram.WebApp;
tg.expand();

function openFree() {
  alert("🎁 Выпало: НИЧЕГО (как в настоящем казике)");
}

// fake timer
let seconds = 3*3600 + 42*60 + 56;
setInterval(() => {
  seconds--;
  let h = String(Math.floor(seconds / 3600)).padStart(2,'0');
  let m = String(Math.floor((seconds % 3600)/60)).padStart(2,'0');
  let s = String(seconds % 60).padStart(2,'0');
  document.getElementById("time").innerText = `${h}:${m}:${s}`;
}, 1000);