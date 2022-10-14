/* VARIABLES */
let openRemeGnr = document.getElementById("remeGnr");
let overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");
let btnClose = document.getElementById("icoClose");

/* ABRIR POPUP */
openRemeGnr.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.add("active");
  popup.classList.add("active");
});

/* CERRAR POPUP */
btnClose.addEventListener("click", function (e) {
  e.preventDefault();
  overlay.classList.remove("active");
  popup.classList.remove("active");
  e.stopPropagation(); //Evita el burbujeo
});
