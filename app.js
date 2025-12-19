const tg = window.Telegram.WebApp;
tg.ready();

// User data
if (tg.initDataUnsafe.user) {
  const user = tg.initDataUnsafe.user;

  document.getElementById('username').innerText =
    user.username ? '@' + user.username : user.first_name;

  document.getElementById('avatar').src =
    user.photo_url || '';
}

// Заглушка пополнения
document.querySelector('.plus').onclick = () => {
  tg.showAlert('Пополнение временно недоступно');
};