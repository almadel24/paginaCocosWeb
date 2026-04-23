document.addEventListener("DOMContentLoaded", () => {
  console.log("JS cargado correctamente 🌴");

  // Scroll suave en enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        destino.scrollIntoView({
          behavior: "smooth"
        });
      }
    });
  });

  // Animación al hacer scroll
  function revealOnScroll() {
    const reveals = document.querySelectorAll(".hover-card, .value-card, .subsection");
    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Ejecutar al cargar para mostrar elementos visibles

  // Confirmación al enviar formulario
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      alert("Gracias por tu mensaje 🌴. Te contactaremos pronto.");
      form.reset();
    });
  }
});
