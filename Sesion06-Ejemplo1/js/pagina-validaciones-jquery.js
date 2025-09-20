$('#botonEnviar').click(function(event) {
  event.preventDefault(); // Evitar el envío del formulario
  if (validacionFormulario()) {
      // Aquí puedes agregar el código para enviar el formulario si es necesario
      console.log('Formulario válido, proceder con el envío.');
  } else {
      console.log('Formulario inválido, no se envía.');
  }
});

function validacionFormulario() {

    var formularioOriginal = $('#formularioRegistro')[0];
    var formularioInterno = $(formularioOriginal).clone(true);

    // Obtener los valores de los campos
    const nombres = $('#nombres').val();
    const apellidos = $('#apellidos').val();
    const dni = $('#dni').val();
    const telefono = $('#telefono').val();
    const correo = $('#correo').val();

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
    const pais = $('#pais').val();
    if (!pais) {
        alert('Por favor, seleccione un país.');
        return false;
    }
    // Si todas las validaciones pasan, permitir el envío del formulario
    $.ajax( {
      url: formularioOriginal.action,
      type: 'POST',
      data: $(formularioOriginal).serialize(),
      async: false,
      success: function(data) {
        var dataObj = data;
        console.log('Respuesta del servidor:', data);
        alert('Formulario enviado correctamente: ' + dataObj.url);
      },
      error: function(error) {
        console.error('Error al enviar el formulario:', error);
      }
    });
    formularioOriginal.reset();
    return true;

  }