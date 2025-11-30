document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const yearEl = document.getElementById('year');

  yearEl.textContent = new Date().getFullYear();

  function showError(field, message) {
    const el = document.querySelector(`.error[data-for="${field}"]`);
    if (el) el.textContent = message;
  }

  function clearErrors() {
    document.querySelectorAll('.error').forEach(e => e.textContent = '');
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    clearErrors();
    status.textContent = '';

    const data = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      phone: form.phone.value.trim(),
      message: form.message.value.trim()
    };

    let valid = true;
    if (!data.name) { showError('name', 'El nombre es obligatorio'); valid = false; }
    if (!data.email) { showError('email', 'El email es obligatorio'); valid = false; }
    else if (!validateEmail(data.email)) { showError('email', 'Introduce un email válido'); valid = false; }
    if (!data.message) { showError('message', 'El mensaje no puede estar vacío'); valid = false; }

    if (!valid) return;

    // Simular envío (aquí podrías usar fetch a una API real)
    status.textContent = 'Enviando...';
    setTimeout(() => {
      status.textContent = 'Gracias. Tu mensaje ha sido enviado. Te contactaremos pronto.';
      form.reset();
    }, 900);
  });
});
