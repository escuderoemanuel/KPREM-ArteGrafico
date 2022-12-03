/* ======= FORMULARIO INGRESO ======= */

let emailInputLogin = document.getElementById("emailInputLogin");
let passInputLogin = document.getElementById("passInputLogin");
let alertLogin = document.getElementById("alertLogin");


/* BOTÓN "ENTRAR" */
let btnSubmitLogin = document.getElementById("btnSubmitLogin");

/* BOTÓN "ENTRAR": Evento que dispara la función del form */
btnSubmitLogin.addEventListener("click", login);

/* BOTÓN "ENTRAR": Función que cierra el form si el ingreso es exitoso*/
function cerrarFormAlIngresar() {
  tabContainer.classList.remove("active");
}

/* BOTÓN "ENTRAR": Función que busca en el array cuentas[], una cuenta asociada mediante el email ingresado (Nota: Agregar comprobación de contraseña*/
function login(event) {
  event.preventDefault();
  let emailConsultado = emailInputLogin.value;
  let passConsultada = passInputLogin.value;
  cuenta = buscarCuenta(emailConsultado);
  if (cuenta != undefined && passConsultada == cuenta.pass) {
    alertLogin.innerHTML = "✅ Ingreso Exitoso";
    setTimeout(cerrarFormAlIngresar, 2000);
    userText.innerHTML = cuenta.email;
  } else {
    alertLogin.innerHTML = "🚫 Usuario No Registrado o Datos Incorrectos";
    limpiarForms();
  }
}

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