// Función para validar el correo electrónico
function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(String(email).toLowerCase());
}

// Función para cambiar los estilos del formulario
function changeFormStyles() {
  const formulario = document.getElementById('formulario');
  if (formulario.style.backgroundColor !== 'white') {
    formulario.style.backgroundColor = 'white';
  } else {
    formulario.style.backgroundColor = '#9dcee2';
  }
}

// Añade el evento de cambio de estilo al botón
document.getElementById('changeStyleButton').addEventListener('click', changeFormStyles);

// Añade el evento de envío del formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío real del formulario

  let isValid = true;

  // Validación del nombre
  const nombre = document.getElementById('nombre').value;
  if (nombre.trim() === '') {
    Toastify({
      text: "El nombre es obligatorio.",
      duration: 3000,
      gravity: "top", 
      position: "right",
      backgroundColor: "#FF0000",
    }).showToast();
    isValid = false;
  }

  // Validación del apellido
  const apellido = document.getElementById('apellido').value;
  if (apellido.trim() === '') {
    Toastify({
      text: "El apellido es obligatorio.",
      duration: 3000,
      gravity: "top", 
      position: "right",
      backgroundColor: "#FF0000",
    }).showToast();
    isValid = false;
  }

  // Validación del correo electrónico
  const email = document.getElementById('email').value;
  if (!validateEmail(email)) {
    Toastify({
      text: "Por favor, ingrese un correo electrónico válido.",
      duration: 3000,
      gravity: "top", 
      position: "right",
      backgroundColor: "#FF0000",
    }).showToast();
    isValid = false;
  }

  // Validación del teléfono
  const telefono = document.getElementById('telefono').value;
  const telefonoPattern = /^[0-9]{10}$/;
  if (!telefonoPattern.test(telefono)) {
    Toastify({
      text: "Por favor, ingrese un número de teléfono válido de 10 dígitos.",
      duration: 3000,
      gravity: "top", 
      position: "right",
      backgroundColor: "#FF0000",
    }).showToast();
    isValid = false;
  }

  // Validación del motivo
  const motivo = document.getElementById('motivo').value;
  if (motivo.trim().length < 10) {
    Toastify({
      text: "El motivo de consulta debe tener al menos 10 caracteres.",
      duration: 3000,
      gravity: "top", 
      position: "right",
      backgroundColor: "#FF0000",
    }).showToast();
    isValid = false;
  }

  // Si el formulario es válido, mostrar mensaje de éxito
  if (isValid) {
    Toastify({
      text: "El formulario fue enviado exitosamente.",
      duration: 3000,
      gravity: "top", 
      position: "right",
      backgroundColor: "#00FF00",
    }).showToast();
    
    // Resetear el formulario
    document.getElementById('formulario').reset();
  }
});

