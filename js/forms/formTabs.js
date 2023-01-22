/* ============== JS DEL TAB (PESTAÑAS) ============== */
function showForm() {
  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  const content1 = document.getElementById("content1");
  const content2 = document.getElementById("content2");
  const btnCloseTab = document.getElementById("btnCloseTab");
  const tabContainer = document.getElementById("tabContainer");

  let choose = 1;

  // Operador Ternario: cambiar de tab en el formulario
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

  /* ============== FUNCTION DEL TAB ============== */

  option1.addEventListener("click", () => {
    choose = 1;
    changeOption();
  });

  option2.addEventListener("click", () => {
    choose = 2;
    changeOption();
  });

  /* ============== CERRAR TAB CON BTN CLOSE ============== */
  btnCloseTab.addEventListener("click", function (e) {
    e.preventDefault();
    tabContainer.classList.remove("active");
    e.stopPropagation(); //Evita el burbujeo (propagación)
  });

  formRegistro();
  formEntrar();
}
