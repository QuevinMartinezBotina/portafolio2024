// Mostrar el botón cuando se hace scroll hacia abajo
window.onscroll = function () {
  var btn = document.getElementById("btnTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Función para hacer scroll hasta arriba
function scrollToTop() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}

// skills
document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 50) {
        element.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

// experiencia

document.addEventListener("DOMContentLoaded", () => {
  const reveals = document.querySelectorAll(".reveal");

  const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 50) {
        element.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll();
});

// JavaScript for interactivity (optional for future expansions)

document.addEventListener("DOMContentLoaded", () => {
  // Example: Add smooth scroll to all anchor links within footer
  const anchorLinks = document.querySelectorAll(".footer a");

  anchorLinks.forEach(link => {
      link.addEventListener("click", (e) => {
          e.preventDefault();
          const targetId = link.getAttribute("href").substring(1);
          const targetElement = document.getElementById(targetId);
          window.scrollTo({
              top: targetElement.offsetTop - 50,
              behavior: "smooth"
          });
      });
  });
});


// dificulty projects
function filterProjects(dificultad) {
  const projects = document.querySelectorAll(".project");
  projects.forEach((project) => {
    if (
      project.getAttribute("data-dificultad") === dificultad ||
      dificultad === "todos"
    ) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
}

