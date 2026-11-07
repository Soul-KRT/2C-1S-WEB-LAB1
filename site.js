const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const expanded = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!expanded));
    navigation.classList.toggle('is-open', !expanded);
  });
}

const form = document.querySelector('#feedback-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.querySelector('#form-status');
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const subject = encodeURIComponent(`Сообщение с сайта: ${values.get('topic')}`);
    const body = encodeURIComponent(
      `Имя: ${values.get('name')}\nEmail: ${values.get('email')}\n\n${values.get('message')}`
    );
    status.textContent = 'Данные проверены. Открываем почтовое приложение с подготовленным письмом.';
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  });
}
