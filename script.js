document.addEventListener("DOMContentLoaded", function() {
  // Настройка i18next
  i18next.init({
      lng: 'ru',
      resources: {
          ru: {
              translation: {
                  title: "Регистрация",
                  usernameLabel: "Имя пользователя:",
                  passwordLabel: "Пароль:",
                  submitButton: "Зарегистрироваться",
                  toggleButton: "EN",
                  successMessage: "Регистрация успешна!",
                  errorMessage: "Пожалуйста, согласитесь с условиями."
              }
          },
          en: {
              translation: {
                  title: "Registration",
                  usernameLabel: "Username:",
                  passwordLabel: "Password:",
                  submitButton: "Register",
                  toggleButton: "RU",
                  successMessage: "Registration successful!",
                  errorMessage: "Please agree to the terms."
              }
          }
      }
  }, function(err, t) {
      updateLanguage();
  });

  // Переключение языка
  document.getElementById('language-toggle').addEventListener('click', function() {
      const newLang = i18next.language === 'ru' ? 'en' : 'ru';
      i18next.changeLanguage(newLang, () => {
          updateLanguage();
      });
  });

  // Функция обновления языка
  function updateLanguage() {
      const titleElement = document.getElementById('form-title');
      if (titleElement) {
          titleElement.textContent = i18next.t('title');
      }
      
      const usernameLabel = document.querySelector('label[for="username"]');
      if (usernameLabel) {
          usernameLabel.textContent = i18next.t('usernameLabel');
      }
      
      const passwordLabel = document.querySelector('label[for="password"]');
      if (passwordLabel) {
          passwordLabel.textContent = i18next.t('passwordLabel');
      }
      
      const submitButton = document.querySelector('button[type="submit"]');
      if (submitButton) {
          submitButton.textContent = i18next.t('submitButton');
      }
      
      const toggleButton = document.getElementById('language-toggle');
      if (toggleButton) {
          toggleButton.textContent = i18next.t('toggleButton');
      }
  }
  
  // Обработка отправки формы
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем отправку формы
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const agreeTerms = document.getElementById('agreeTerms').checked;
      const messageDiv = document.getElementById('message');

      if (!agreeTerms) {
          messageDiv.textContent = i18next.t('errorMessage');
          messageDiv.style.color = 'red';
          return;
      }
      
      messageDiv.textContent = i18next.t('successMessage');
      messageDiv.style.color = 'green';
  });
});