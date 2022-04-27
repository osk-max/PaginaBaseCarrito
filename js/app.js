// Variables
const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#carrito tbody");
const btnVaciarCarrito = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");
console.log(listaCursos);

//Eventos
eventosAddListener();

function eventosAddListener() {
  listaCursos.addEventListener("click", agregarClase);
}

//Funciones
function agregarClase() {
  console.log("sssssss");
}
