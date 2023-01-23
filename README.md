<h1> KPREM Arte Gráfico </h1>

<h4> Sobre el Proyecto </h4>

<li> Project Name: Proyecto Curso Javascript CoderHouse </li>
<li> Alumno: Escudero Emanuel </li>
<li> Comisión: 34115 </li>
<li> Profesor: Javier Verón </li>
<li> Rubro/Tema: Tienda online / E-commerce. </li>
<li> GitHub Repositorio: https://github.com/escuderoemanuel/javascriptCoder </li>
<li> GitHub Pages: https://escuderoemanuel.github.io/javascriptCoder/ </li>


<h4> Descripción General del Desarrollo de la App Web. </h4>

<li> Tecnologías Utilizadas: HTML, CSS, JavaScript, SASS, GIT, GITHUB, SEO, NPM. </li>

<h4> Funcionalidad. </h4>

<li> Ventana modal con formulario: Puede registrarse (almacena su cuenta en el localStorage), iniciar sesión si ya ha creado su cuenta o cerrar la ventana. </li>
<li> Diseño responsivo mobile first. </li>

<h4> Formulario de Registro: </h4>
    <li> Valida campos en el formulario. </li>
    <li> El btn lanza las funciones de validación correspondiente y alerta de error o de registro exitoso. </li>
    <li> Si la validación de campos es correcta, lanza la función (constructor) que crea un nuevo objeto "cuenta" en el arrays "cuentas". </li>
    <li> Una vez registrado, el usuario puede iniciar sesión en la pestaña de "Entrar". </li>

</h4> Formulario de Entrar (Inicio de Sesión): </h4>
    <li> Si hay un email en el localStorage, se loggea con el mismo y se muestra en el header. Si no.... </li>
    <li> Al ingresar el correo, busca en el array "cuentas" que el email ingresado, sea de una "cuenta" registrada anteriormente. </li>
    <li> Verifica que la contraseña ingresada corresponda a dicha cuenta. </li>
    <li> El btn, lanza alerta de error o inicio exitoso correspondiente. </li>
    <li> Si el inicio es exitoso, la ventana modal desaparece automáticamente dando acceso a la app web. </li>
    <li> Si ya está loggeado, puede desloggearse mediante un click en su email, lo cual de ser confirmado, elimina el item del localStorage y recarga la página. </li>

<h4> Carrito: </h4>
    <li>  main renderiza los productos que hay en stock en el JSON y los appendea al html. </li>
    <li>  puede agregar un producto y visualizar la cantidad en el ícono del carrito. </li>
    <li>  abrir el carrito se visualizan los productos agregados, precio, cantidad y total. </li>
    <li>  puede disminuir la cantidad hasta 1 o eliminar el item mediante el ícono trash. </li>
    <li>  puede aumentar la cantidad como máximo hasta la cantidad disponible en el stock. </li>
    <li>  puede vaciar el carrito mediante el ícono correspondiente. </li>
    <li>  puede terminar la compra mediante el ícono correspondiente, lo cual también vacía el carrito. </li>

<h4> Body: </h4>
    <li> Todo el contenido es cargado mediante manipulación del DOM con Javascript (Header, Main, Footer). </li>

<h4> Herramientas utilizadas: </h4>
    <li> Funciones declaras, funciones anónimas, funciones flecha. </li>
    <li> Objetos, Class, Propiedades, Métodos, Constructor. </li>
    <li> Arrays, Arrays de Objetos, Métodos de Arrays. </li>
    <li> Variables let y const. </li>
    <li> Ciclos for, forEach. </li>
    <li> Condicionales if, if else. </li>
    <li> Operador ternario. </li>
    <li> Eventos. </li>
    <li> Promesas (async, await, fetch). </li>
    <li> Implementación de Librerías de alerta (https://sweetalert2.github.io/) y animaciones (https://animate.style/). </li>
    <li> Manipulación del DOM (querySelector, getElementById, getElementsByClassName, Eventos, etc). </li>
    <li> Local Storage. </li>
    <li> Manejo de JSON (get - set). </li>