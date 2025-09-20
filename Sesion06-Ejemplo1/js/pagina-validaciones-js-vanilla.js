document.getElementById('botonEnviar').addEventListener('click', function(event) {
    event.preventDefault(); // Evitar el envío del formulario
    if (validacionFormulario()) {
        // Aquí puedes agregar el código para enviar el formulario si es necesario
        console.log('Formulario válido, proceder con el envío.');
    } else {
        console.log('Formulario inválido, no se envía.');
    }
});

function validacionFormulario() {

    var formularioOriginal = document.getElementById('formularioRegistro');
    var formularioInterno = new FormData(document.getElementById('formularioRegistro'));

    // Obtener los valores de los campos
    const nombres = document.getElementById('nombres').value.trim();
    const apellidos = document.getElementById('apellidos').value.trim();
    const dni = document.getElementById('dni').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();

    // Validar que los campos no estén vacíos
    if (!nombres || !apellidos || !dni || !telefono || !correo) {
        alert('Todos los campos son obligatorios.');
        return false;
    }
    // Validar que el DNI tenga exactamente 8 dígitos
    const dniRegex = /^\d{8}$/;
    if (!dniRegex.test(dni)) {
        alert('El DNI debe tener exactamente 8 dígitos.');
        return false;
    }
    // Validar que el teléfono tenga un formato válido (solo dígitos, puede incluir + y espacios)
    const telefonoRegex = /^[\d+\s]+$/;
    if (!telefonoRegex.test(telefono)) {
        alert('El teléfono debe contener solo dígitos, espacios o el símbolo +.');
        return false;
    }
    // Validar que el correo tenga un formato válido
    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
        alert('El correo no tiene un formato válido.');
        return false;
    }
    // Validar si se ha seleccionado una opción de país
    const pais = document.getElementById('pais').value;
    if (!pais) {
        alert('Por favor, seleccione un país.');
        return false;
    }
    // Si todas las validaciones pasan, permitir el envío del formulario
    //Forma 1: Clonando el formulario y enviándolo
    //formularioInterno.FormData.submit();
    //Forma 2: Usando fetch para enviar el formulario
    fetch(formularioOriginal.action, {
      method: 'POST',
      body: formularioOriginal
    })
    .then(response => response.text())
    .then(data => {
      var dataObj = JSON.parse(data);
      console.log('Respuesta del servidor:', data);
      alert('Formulario enviado correctamente: ' + dataObj.url);
    })
    .catch(error => {
      console.error('Error al enviar el formulario:', error);
    });
    formularioOriginal.reset(); // Limpiar el formulario después del envío
    return true;
  }