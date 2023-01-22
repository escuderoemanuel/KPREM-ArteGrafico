//window.location.reload() //Recarga la página actual
let emailStorage = localStorage.getItem("emailStorage");
let userText = document.getElementById("userText");

/* ======= FORMULARIO INGRESO ======= */
function formEntrar() {
  const emailInputLogin = document.getElementById("emailInputLogin");
  const passInputLogin = document.getElementById("passInputLogin");
  const alertLogin = document.getElementById("alertLogin");

  /* BOTÓN "ENTRAR" */
  const btnSubmitLogin = document.getElementById("btnSubmitLogin");
  btnSubmitLogin.addEventListener("click", login); //Evento que dispara la función del form */

  /* BOTÓN "ENTRAR": Función Buscar Si Existe la Cuenta */
  function buscarCuenta(emailConsultado) {
    return cuentas.find((elemento) => {
      return elemento.email == emailConsultado;
    });
  }

  // Limpiar Forms:
  function limpiarForms() {
    forms.forEach((form) => {
      form.reset();
    });
  }

  /* BOTÓN "ENTRAR": Función que cierra el form si el ingreso es exitoso*/
  function cerrarFormAlIngresar() {
    tabContainer.classList.remove("active");
  }

  /* BOTÓN "ENTRAR": Función que busca en el array cuentas[], una cuenta asociada mediante el email ingresado*/
  function login(e) {
    e.preventDefault();
    let emailConsultado = emailInputLogin.value;
    let passConsultada = passInputLogin.value;
    cuenta = buscarCuenta(emailConsultado);
    if (cuenta !== undefined && passConsultada === cuenta.pass) {
      alertLogin.innerText = "✅ Ingreso Exitoso";
      localStorage.setItem("emailStorage", cuenta.email);
      userText.textContent = localStorage.getItem("emailStorage");
      setTimeout(cerrarFormAlIngresar, 1000);
      window.location.reload();
    } else {
      alertLogin.innerText = "🚫 Usuario No Registrado o Datos Incorrectos";
      limpiarForms();
    }
  }
}

// Consulta si hay dato en emailStorage y lo incrusta en el userText del DOM
emailStorage
  ? (userText.innerText = emailStorage) &&
    tabContainer.classList.remove("active")
  : (userText.innerText = "Registrarse/Entrar") &&
    tabContainer.classList.remove("active");

// Evento "click" para el botón userText, en caso de querer Registrarse/Entrar si no hay datos en el emailStorage o Desloguearse en caso de que sí lo haya
userText.addEventListener("click", (e) => {
  e.preventDefault();
  emailStorage
    ? Swal.fire({
        title: "Hey!",
        text: "¡Quieres salir de tu cuenta?",
        icon: "warning",
        showCancelButton: true,
        background: "rgba(255, 255, 255, 0.9)",
        confirmButtonColor: "rgba(0, 121, 255, 1)",
        cancelButtonColor: "rgba(255, 0, 0, 0.8)",
        confirmButtonText: "Sí, salir!",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("emailStorage"), window.location.reload();
        }
      })
    : (tabContainer.classList.add("active"), showForm());
});
