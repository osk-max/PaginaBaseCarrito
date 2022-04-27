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
function agregarClase(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const divPadre = e.target.parentElement.parentElement;
    informacionClase(divPadre);
  }
}

function informacionClase(clase) {
  console.log(clase);

  // Objeto con la informacion donde doy click
  const objDatosClase = {
    imagen: clase.querySelector("img").src,
    nombre: clase.querySelector("h4").textContent,
    precio: clase.querySelector(".precio span").textContent,
    id: clase.querySelector("a").getAttribute("data-id")
  };
  console.log(objDatosClase);
}
