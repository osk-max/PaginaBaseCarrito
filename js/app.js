// Variables
const btnVaciarCarrito = document.querySelector("#vaciar-carrito");
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#carrito tbody");
const listaCursos = document.querySelector("#lista-cursos");

//Eventos
eventosAddListener();

function eventosAddListener() {
  listaCursos.addEventListener("click", agregarClase);
}

//Funciones
function agregarClase(e) {}
