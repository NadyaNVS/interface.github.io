let tg = window.Telegram.WebApp;
tg.expand();

const userName = document.getElementById("user-info");
userName.innerHTML = `Hello, ${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name} (@${tg.initDataUnsafe.user.username})!`;
