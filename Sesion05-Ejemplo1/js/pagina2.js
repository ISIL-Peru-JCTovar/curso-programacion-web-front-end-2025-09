// Accesibilidad: permite abrir submenús con teclado
document.querySelectorAll('.menu > li > a').forEach(link => {
  link.addEventListener('mouseover', function(e) {
    const submenu = this.nextElementSibling;
    if (submenu && submenu.classList.contains('submenu')) {
      submenu.style.display = 'block';
      submenu.querySelector('a').focus();
      e.preventDefault();
    }
  });
  link.addEventListener('mouseout', function(e) {
    const submenu = this.nextElementSibling;
    if (submenu && submenu.classList.contains('submenu')) {
      submenu.style.display = 'none';
      e.preventDefault();
    }
  });
});

