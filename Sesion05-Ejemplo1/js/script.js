//Javascript
function procesarInfo() {
  const loader = document.getElementById('loader');
  loader.style.display = 'inline-block';
  // Simula un proceso que tarda 2 segundos, como si simulara el envío de un formulario
  // al backend
  setTimeout(() => {
    loader.style.display = 'none';
    alert('Información enviada con éxito');
  }, 2000);
}
