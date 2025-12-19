const tg = window.Telegram?.WebApp;

if (tg) {
  tg.expand();

  const user = tg.initDataUnsafe?.user;
  if (user) {
    document.getElementById("username").innerText =
      user.username ? "@" + user.username : user.first_name;

    if (user.photo_url) {
      document.getElementById("avatar").src = user.photo_url;
    }
  }
}

function openScreen(name) {
  document.querySelectorAll(".screen").forEach(s => s.classList.remove("active"));
  document.getElementById("screen-" + name).classList.add("active");
}