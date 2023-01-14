// Insertando Forms en el DOM
const tabContainer = document.getElementById("tabContainer");

tabContainer.innerHTML = `
<div class="tab">
        <div class="headerTab">
          <a href="#" class="btn btnCloseTab" id="btnCloseTab">
            <i class="fa-solid fa-xmark icoClose" id="icoCloseTab"></i>
          </a>
          <ul class="options">
            <li class="option optionActive" id="option1">Registrarse</li>
            <li class="option " id="option2">Ingresar</li>
          </ul>
        </div>

        <div class="contents">

          <!-- FORMULARIO REGISTRARSE -->
          <div class="content contentActive" id="content1">
            <form class="form" id="form">

              <!-- NAME -->
              <div class="divForm name">
                <label for="nameInput" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="nameInput" placeholder="Ingresa tu Nombre" required />
              </div>

              <!-- LASTNAME -->
              <div class="divForm lastname">
                <label for="lastnameInput" class="form-label">Apellido</label>
                <input type="text" class="form-control" id="lastnameInput" placeholder="Ingresa tu Apellido" required />
              </div>

              <!-- EMAIL -->
              <div class="divForm email">
                <label for="emailInput" class="form-label">Email</label>
                <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp"
                  placeholder="usuario@email.com" required />
              </div>

              <!-- PASSWORD -->
              <div class="divForm password">
                <label for="passInput" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="passInput" placeholder="Elije tu Contraseña" required />
              </div>

              <!-- CEL -->
              <div class="divForm cel">
                <label for="celInput" class="form-label">Celular</label>
                <input type="text" class="form-control" id="celInput" aria-describedby="emailHelp"
                  placeholder="542613456789" required />
              </div>

              <!-- TERMS -->
              <div class="divForm terms">
                <p> Al registrarme acepto los <br>
                  <a href="pages/terms.html" target="_blank" class="termsConditions" rel="noopener noreferrer">
                    <em>Términos y Condiciones</em>
                  </a>
                </p>
                </label>
              </div>

              <!-- SUBMIT -->
              <div class="divForm submit">
                <button type="submit" class="btnSubmit" id="btnSubmit">Registrarme</button>
              </div>

              <!-- ALERTS -->
              <div class="divForm alert">
                <p class="alertRegister" id="alertRegister"></p>
              </div>
            </form>
          </div>



          <!-- FORMULARIO LOGIN-->
          <div class="content" id="content2">
            <form class="form">

              <!-- EMAIL -->
              <div class="divForm emailLogin">
                <label for="emailInput" class="form-label">Email</label>
                <input type="email" class="form-control" id="emailInputLogin" aria-describedby="emailHelp"
                  placeholder="usuario@email.com" required />
              </div>

              <!-- PASSWORD -->
              <div class="divForm passwordLogin">
                <label for="passInput" class="form-label">Contraseña</label>
                <input type="password" class="form-control" id="passInputLogin" placeholder="Ingresa tu Contraseña"
                  required />
              </div>

              <!-- SUBMIT -->
              <div class="divForm submitLogin">
                <button type="submit" class="btnSubmitLogin" id="btnSubmitLogin">Entrar</button>
              </div>

              <!-- ALERTS -->
              <div>
                <p id="alertLogin" class="alertLogin"></p>
              </div>
            </form>
          </div>

        </div>
      </div>
`;
