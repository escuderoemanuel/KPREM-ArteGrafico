/* ============== JS DEL FORMULARIO ============== */
let cuentas = [];
/* Elementos Forms */
let forms = document.querySelectorAll("form");

/* ============== FUNCTION DE REGISTRO ============== */
function formRegistro() {
  let nameInput = document.getElementById("nameInput");
  let lastnameInput = document.getElementById("lastnameInput");
  let emailInput = document.getElementById("emailInput");
  let passInput = document.getElementById("passInput");
  let celInput = document.getElementById("celInput");
  //Hacer un check para los términos
  let alertRegister = document.getElementById("alertRegister");

  /* BOTÓN "REGISTRARME" */
  let btnSubmit = document.getElementById("btnSubmit");

  /* BOTÓN "REGISTRARME": Fn que crea una nueva cuenta para el array cuentas[] */
  function crearCuenta() {
    cuentas.push(
      new Cuenta(
        nameInput.value,
        lastnameInput.value,
        emailInput.value,
        passInput.value,
        celInput.value
      )
    );
  }

  // Limpiar Forms:
  function limpiarForms() {
    forms.forEach((form) => {
      form.reset();
    });
  }

  /* BOTÓN "REGISTRARME": Fn que cambia de Tab al clickear btn "Registrarme" */
  function changeTab() {
    (option1.classList.value = "option"),
      (content1.classList.value = "content");
    (option2.classList.value = "option optionActive"),
      (content2.classList.value = "content contentActive");
  }

  /* BOTÓN "REGISTRARME": Fn que valida los inputs del form */
  function validation() {
    let nombre = /^[a-zA-ZÀ-ÿ\s]{1,40}$/; // Letras, espacios, acentos.
    let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    let password = /^.{4,12}$/; // 4 a 12 digitos.
    let telefono = /^\d{7,14}$/; // 7 a 14 numeros.
    let mensaje = [];
    let valor = false;

    if (nombre.test(nameInput.value) != true) {
      mensaje.push("🚫 Ingresa un Nombre válido");
      valor = true;
    }
    if (nombre.test(lastnameInput.value) != true) {
      mensaje.push("🚫 Ingresa un Apellido válido");
      valor = true;
    }
    if (email.test(emailInput.value) != true) {
      mensaje.push("🚫 Ingresa un Email válido");
      valor = true;
    }
    if (password.test(passInput.value) != true) {
      mensaje.push("🚫 Ingresa una contraseña válida");
      valor = true;
    }
    if (telefono.test(celInput.value) != true) {
      mensaje.push("🚫 Ingresa un número telefónico válido");
      valor = true;
    }
    if (valor) {
      alertRegister.innerHTML = mensaje.join("<br>");
    } else {
      alertRegister.innerHTML = "¡Registro exitoso! 👍 <br>Ya puede Ingresar";
      return (valor = true);
    }
  }

  /* BOTÓN "REGISTRARME": Evento que dispara las funciones del form de Registro */
  btnSubmit.addEventListener("click", (event) => {
    event.preventDefault();
    if (validation()) {
      crearCuenta();
      limpiarForms();
      setTimeout(changeTab, 2000);
    }
  });
}

formRegistro();
