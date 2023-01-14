const emailStorage = localStorage.getItem("emailStorage");
const userText = document.getElementById("userText");

// Operador Termario: obtener el logIn del localStorage (Si hay alguno)
emailStorage
  ? ((userText.innerHTML = emailStorage),
    tabContainer.classList.remove("active"))
  : showForm();

/* ======= FORMULARIO INGRESO ======= */
function formEntrar() {
  const emailInputLogin = document.getElementById("emailInputLogin");
  const passInputLogin = document.getElementById("passInputLogin");
  const alertLogin = document.getElementById("alertLogin");
  const userText = document.getElementById("userText");
  userText.innerHTML = localStorage.getItem("emailStorage");

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
  function login(event) {
    event.preventDefault();
    let emailConsultado = emailInputLogin.value;
    let passConsultada = passInputLogin.value;
    cuenta = buscarCuenta(emailConsultado);
    if (cuenta !== undefined && passConsultada === cuenta.pass) {
      alertLogin.innerHTML = "✅ Ingreso Exitoso";
      localStorage.setItem("emailStorage", cuenta.email);
      userText.innerHTML = localStorage.getItem("emailStorage");
      setTimeout(cerrarFormAlIngresar, 2000);
    } else {
      alertLogin.innerHTML = "🚫 Usuario No Registrado o Datos Incorrectos";
      limpiarForms();
    }
  }
}
