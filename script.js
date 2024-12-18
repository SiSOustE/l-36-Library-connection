document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Предотвращаем отправку формы

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const messageDiv = document.getElementById('message');

  // Простейшая валидация
  if (username === 'admin' && password === 'password') {
    messageDiv.textContent = 'Успешный вход!';
    messageDiv.style.color = 'green';
  } else {
    messageDiv.textContent = 'Неверное имя пользователя или пароль.';
    messageDiv.style.color = 'red';
  }
});

/*
Теперь давайте настроим файл script.js, используя i18next для управления переводами.
*/

// Настройка i18next
i18next.init({
  lng: 'ru', // начальный язык
  resources: {
    ru: {
      translation: {
        title: "Авторизация",
        usernameLabel: "Имя пользователя:",
        passwordLabel: "Пароль:",
        submitButton: "Войти",
        toggleButton: "EN",
        successMessage: "Успешный вход!",
        errorMessage: "Неверное имя пользователя или пароль."
      }
    },
    en: {
      translation: {
        title: "Login",
        usernameLabel: "Username:",
        passwordLabel: "Password:",
        submitButton: "Login",
        toggleButton: "RU",
        successMessage: "Successful login!",
        errorMessage: "Incorrect username or password."
      }
    }
  }
}, function (err, t) {
  // Обновляем интерфейс после загрузки переводов
  updateLanguage();
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Предотвращаем отправку формы

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const messageDiv = document.getElementById('message');

  // Простейшая валидация
  if (username === 'admin' && password === 'password') {
    messageDiv.textContent = i18next.t('successMessage');
    messageDiv.style.color = 'green';
  } else {
    messageDiv.textContent = i18next.t('errorMessage');
    messageDiv.style.color = 'red';
  }
});

// Переключение языка
document.getElementById('language-toggle').addEventListener('click', function () {
  const newLang = i18next.language === 'ru' ? 'en' : 'ru';
  i18next.changeLanguage(newLang, () => {
    updateLanguage();
  });
});

function updateLanguage() {
  document.getElementById('form-title').textContent = i18next.t('title');
  document.getElementById('label-username').textContent = i18next.t('usernameLabel');
  document.getElementById('label-password').textContent = i18next.t('passwordLabel');
  document.querySelector('button[type="submit"]').textContent = i18next.t('submitButton');
  document.getElementById('language-toggle').textContent = i18next.t('toggleButton');
}
