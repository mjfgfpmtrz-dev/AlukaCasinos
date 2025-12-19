const tg = window.Telegram?.WebApp;
if (tg) tg.ready();

const screens = {
  profile: document.getElementById('screen-profile'),
  crash: document.getElementById('screen-crash'),
  cases: document.getElementById('screen-cases')
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.add('hidden'));
  screens[name].classList.remove('hidden');

  document.querySelectorAll('.nav-item').forEach(i => i.classList.remove('active'));
  document.querySelector(`.nav-item[data-screen="${name}"]`).classList.add('active');
}

// NAV
document.querySelectorAll('.nav-item').forEach(item => {
  item.onclick = () => showScreen(item.dataset.screen);
});

// USER
if (tg?.initDataUnsafe?.user) {
  const u = tg.initDataUnsafe.user;
  document.getElementById('username').innerText =
    u.username ? '@' + u.username : u.first_name;
  if (u.photo_url) document.getElementById('avatar').src = u.photo_url;
}

// PLUS
document.querySelector('.plus').onclick = () => {
  tg ? tg.showAlert('Пополнение временно недоступно')
     : alert('Пополнение временно недоступно');
};

// старт
showScreen('profile');