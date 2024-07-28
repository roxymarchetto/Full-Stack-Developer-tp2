document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita que se envíe el formulario automáticamente

  // Obtener los valores de los campos
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const fechaNacimiento = document.getElementById('fechaNacimiento').value;
  const pais = document.getElementById('pais').value;

  // Validar los campos
  if (nombre === '') {
      alert('Por favor, ingrese su nombre.');
      return;
  }

  if (apellido === '') {
      alert('Por favor, ingrese su apellido.');
      return;
  }

  if (email === '') {
      alert('Por favor, ingrese su correo electrónico.');
      return;
  }

  if (!validateEmail(email)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
  }

  if (fechaNacimiento === '') {
      alert('Por favor, ingrese su fecha de nacimiento.');
      return;
  }

  if (pais === '') {
      alert('Por favor, ingrese su país.');
      return;
  }

  // Si todo es válido, enviar el formulario
  alert('Formulario enviado correctamente.');
  
  // Resetear el formulario
  document.getElementById('formulario').reset();
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(String(email).toLowerCase());
  
  function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(String(email).toLowerCase());
}}

function changeFormStyles() {
  const formulario = document.getElementById('formulario');
  if (formulario.style.backgroundColor !== 'white'){
      formulario.style.backgroundColor = 'white';
  } else {
      formulario.style.backgroundColor = '#9dcee2';
  }
}

document.getElementById('changeStyleButton').addEventListener('click', changeFormStyles);
document.getElementById('formulario').addEventListener('submit', function(event) {
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
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
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

  if (isValid) {
    // Mostrar mensaje de éxito
    Toastify({
      text: "El formulario fue enviado exitosamente.",
      duration: 3000,
      gravity: "top", 
      position: "right",
      backgroundColor: "#00FF00",
    }).showToast();
  } else {
    event.preventDefault(); // Previene el envío del formulario si no es válido
  }
});