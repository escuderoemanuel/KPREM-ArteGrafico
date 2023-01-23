Project Name: Proyecto Curso Javascript CoderHouse
Alumno: Escudero Emanuel
Comisión: 34115
Profesor: Javier Verón
Rubro/Tema: Tienda online / E-commerce.
GitHub Repositorio: https://github.com/escuderoemanuel/javascriptCoder
GitHub Pages: https://escuderoemanuel.github.io/javascriptCoder/


=================================================
Descripción General del Desarrollo de la App Web:
=================================================

• Tecnologías Utilizadas: HTML, CSS, JavaScript, SASS, GIT, GITHUB, SEO, NPM

FUNCIONALIDAD:

• Ventana modal con formulario: Puede registrarse (almacena su cuenta en el localStorage), iniciar sesión si ya ha creado su cuenta o cerrar la ventana.
• Diseño responsivo mobile first

• Formulario de Registro:
    - Valida campos en el formulario
    - El btn lanza las funciones de validación correspondiente y alerta de error o de registro exitoso
    - Si la validación de campos es correcta, lanza la función (constructor) que crea un nuevo objeto "cuenta" en el arrays "cuentas"
    - Una vez registrado, el usuario puede iniciar sesión en la pestaña de "Entrar"

• Formulario de Entrar (Inicio de Sesión):
    - Si hay un email en el localStorage, se loggea con el mismo y se muestra en el header. Si no...
    - Al ingresar el correo, busca en el array "cuentas" que el email ingresado, sea de una "cuenta" registrada anteriormente
    - Verifica que la contraseña ingresada corresponda a dicha cuenta
    - El btn, lanza alerta de error o inicio exitoso correspondiente
    - Si el inicio es exitoso, la ventana modal desaparece automáticamente dando acceso a la app web
    - Si ya está loggeado, puede desloggearse mediante un click en su email, lo cual de ser confirmado, elimina el item del localStorage y recarga la página

• Carrito:
    - El main renderiza los productos que hay en stock en el JSON y los appendea al html
    - Se puede agregar un producto y visualizar la cantidad en el ícono del carrito
    - Al abrir el carrito se visualizan los productos agregados, precio, cantidad y total
    - Se puede disminuir la cantidad hasta 1 o eliminar el item mediante el ícono trash
    - Se puede aumentar la cantidad como máximo hasta la cantidad disponible en el stock
    - Se puede vaciar el carrito mediante el ícono correspondiente
    - Se puede terminar la compra mediante el ícono correspondiente, lo cual también vacía el carrito

• Body
    - Todo el contenido es cargado mediante manipulación del DOM con Javascript (Header, Main, Footer)

• Herramientas utilizadas:
    - Funciones declaras, funciones anónimas, funciones flecha
    - Objetos, Class, Propiedades, Métodos, Constructor
    - Arrays, Arrays de Objetos, Métodos de Arrays
    - Variables let y const
    - Ciclos for, forEach
    - Condicionales if, if else
    - Operador ternario
    - Eventos
    - Promesas (async, await, fetch)
    - Implementación de Librerías de alerta (SweetAlert2) y animaciones (AOS Animation, Animate)
    - Manipulación del DOM (querySelector, getElementById, getElementsByClassName, Eventos, etc)
    - Local Storage
    - Manejo de JSON (get - set)