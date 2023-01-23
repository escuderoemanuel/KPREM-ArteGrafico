let mainText = document.getElementById("mainText");
mainText.innerHTML = `
<p id="top">
En <em class="emBold">KPREM Arte Gráfico</em> nos dedicamos a la personalización de diferentes productos,
mediante
técnicas de estampación, como lo son la sublimación, serigrafía y
vinilo.
</p>
<p>
Te invitamos a conocer nuestra tienda y elegir el producto que
gustes, con el diseño que siempre quisiste!
</p>
`;

let main = document.getElementById("main");
let wtpFixed = document.createElement("a");
wtpFixed.innerHTML = `
<a href="https://wa.me/5492616410893" target="_blank">
  <img src="../../assets/icon/wtsp.png" class="wtpFixed" alt="Ícono de acceso al whatsapp de la tienda">
</a>
</div>
`;
main.append(wtpFixed);
