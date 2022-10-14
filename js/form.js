//==============
/* JS DEL TAB */
//==============
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");
const btnCloseTab = document.getElementById("btnCloseTab");
const tabContainer = document.getElementById("tabContainer");

let choose = 1;

const changeOption = () => {
  choose == 1
    ? ((option1.classList.value = "option optionActive"),
      (content1.classList.value = "content contentActive"))
    : ((option1.classList.value = "option"),
      (content1.classList.value = "content"));

  choose == 2
    ? ((option2.classList.value = "option optionActive"),
      (content2.classList.value = "content contentActive"))
    : ((option2.classList.value = "option"),
      (content2.classList.value = "content"));
};

/* FUNCTION DEL TAB */

option1.addEventListener("click", () => {
  choose = 1;
  changeOption();
});

option2.addEventListener("click", () => {
  choose = 2;
  changeOption();
});

/* CERRAR TAB CON BTN CLOSE */
btnCloseTab.addEventListener("click", function (e) {
  e.preventDefault();
  tabContainer.classList.remove("active");
  e.stopPropagation(); //Evita el burbujeo (propagación)
});

//============================
/* JS DEL FORMULARIO */
//============================

class Cuenta {
  constructor(name, lastname, email, pass, cel, termsConditions) {
    this.name = name;
    this.lastname = lastname;
    this.email = email;
    this.pass = pass;
    this.cel = cel;
    this.termsConditions = true;
  }
}

/* Elementos Formulario de Registro */
let cuentas = [];
let cuenta = undefined; // Para cuando consulte una cuenta

let nameInput = document.getElementById("nameInput");
let lastnameInput = document.getElementById("lastnameInput");
let emailInput = document.getElementById("emailInput");
let passInput = document.getElementById("passInput");
let celInput = document.getElementById("celInput");
let termsConditions = document.getElementById("termsConditions");
let alertRegister = document.getElementById("alertRegister");

/* Elementos Formulario de Ingreso */
let emailInputLogin = document.getElementById("emailInputLogin");
let passInputLogin = document.getElementById("passInputLogin");
let alertLogin = document.getElementById("alertLogin");

/* Elementos Forms */
let forms = document.querySelectorAll("form");

/* BOTÓN "REGISTRARME" */
let btnSubmit = document.getElementById("btnSubmit");

/* BOTÓN "REGISTRARME": Crea una nueva cuenta para el array cuantas[] */
function crearCuenta() {
  cuentas.push(
    new Cuenta(
      nameInput.value,
      lastnameInput.value,
      emailInput.value,
      passInput.value,
      celInput.value,
      termsConditions.value
    )
  );
}

/* BOTÓN "REGISTRARME": Valida los inputs del form (Nota: Mejorar con function genérica y expresiones regulares)*/
function validation() {
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  let mensaje = [];
  let valor = false;
  if (nameInput.value.length <= 2 || nameInput.value == null) {
    mensaje.push("🚨 Ingresa un Nombre válido");
    valor = true;
  }
  if (lastnameInput.value.length <= 2 || lastnameInput.value == null) {
    mensaje.push("🚨 Ingresa un Apellido válido");
    valor = true;
  }
  if (emailRegex.test(emailInput.value) != true) {
    mensaje.push("🚨 Ingresa un Email válido");
    valor = true;
  }
  if (passInput.value.length <= 6 || passInput.value == null) {
    mensaje.push("🚨 Ingresa una contraseña válida");
    valor = true;
  }
  if (celInput.value.length < 9 || celInput.value == null) {
    mensaje.push("🚨 Ingresa un número telefónico válido");
    valor = true;
  }
  if (valor) {
    alertRegister.innerHTML = mensaje.join("<br>");
  } else {
    alertRegister.innerHTML = "¡Registro exitoso! 👍 <br>Ya puede Ingresar";
    return (valor = true);
  }
}

/* BOTÓN "REGISTRARME": Evento que dispara las funciones del form */
btnSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  if (validation()) {
    crearCuenta();
    limpiarForms();
  }
});

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
    alertLogin.innerHTML = "Ingreso Exitoso <br>Ya puede cerrar la ventana";
    cerrarFormAlIngresar();
  } else {
    alertLogin.innerHTML = "Usuario No Registrado o Datos Incorrectos";
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
