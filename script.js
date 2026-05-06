document.addEventListener("DOMContentLoaded", () => {
  console.log("JS cargado correctamente 🌴. ¡Listo para la frescura!");

  // Menú Móvil
  const menuBtn = document.getElementById('menu-btn');
  // const closeBtn = document.getElementById('close-menu'); // Ya no es necesario para el menú dropdown
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  const toggleMenu = () => {
    // Animación de escala y opacidad
    mobileMenu.classList.toggle('scale-0');
    mobileMenu.classList.toggle('scale-100');
    mobileMenu.classList.toggle('opacity-0');
    mobileMenu.classList.toggle('opacity-100');
    // Animación del overlay
    mobileOverlay.classList.toggle('opacity-0');
    mobileOverlay.classList.toggle('opacity-100');
    mobileOverlay.classList.toggle('pointer-events-none');
    document.body.classList.toggle('overflow-hidden'); // Evita scroll al estar abierto
  };

  menuBtn?.addEventListener('click', toggleMenu);
  mobileOverlay?.addEventListener('click', toggleMenu);
  mobileLinks.forEach(link => link.addEventListener('click', toggleMenu));

  // Animación al hacer scroll con IntersectionObserver (Más eficiente)
  const observerOptions = {
    threshold: 0.05
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".glass-card").forEach(el => observer.observe(el));

  // Confirmación al enviar formulario
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      const btn = form.querySelector("button");
      const originalText = btn.innerText;
      
      btn.innerText = "¡Enviado con éxito! 🥥";
      btn.style.backgroundColor = "#52B788"; // Verde más ligero para éxito
      form.reset();
      
      setTimeout(() => {
        btn.innerText = originalText;
        btn.style.backgroundColor = "";
      }, 3000);
    });
  }
});
