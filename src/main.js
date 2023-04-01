/* global Set */
import data from "./data/ghibli/ghibli.js";
import { filtroInformacionDirector, filtroInformacionProductor, filtroInformacionEspecie, ordenInformacion, calculoInformacion } from './data.js';

// SELECCION SECCION
const botonHistoria = document.getElementById("botonHistoria");
const seccionHistoria = document.getElementById("historia");
botonHistoria.addEventListener("click", function () {
  document.getElementById("header").style.display = "none";
  seccionHistoria.style.display = "block";
});
const botonPersonajes = document.getElementById("botonPersonajes");
const seccionPersonajes = document.getElementById("personajes");
botonPersonajes.addEventListener("click", function () {
  document.getElementById("header").style.display = "none";
  seccionPersonajes.style.display = "block";
});
const botonFilmografia = document.getElementById("botonFilmografia");
const seccionFilmografia = document.getElementById("filmografia");
botonFilmografia.addEventListener("click", function () {
  document.getElementById("header").style.display = "none";
  seccionFilmografia.style.display = "block";
});

// VOLVER AL HOME
const volver = document.getElementById("botonVolver");
function volverInicio() {
  window.location.reload();
}
volver.addEventListener("click", volverInicio);

const volver2 = document.getElementById("botonVolver2");
function volverInicio2() {
  window.location.reload();
}
volver2.addEventListener("click", volverInicio2);

const volver3 = document.getElementById("botonVolver3");
function volverInicio3() {
  window.location.reload();
}
volver3.addEventListener("click", volverInicio3);

// FILMOGRAFIA
const matrizFilmografia = document.querySelector("#grillaFilmografia");
const films = data.films;
for (let i = 0; i < films.length; i++) {
  const listaFilmografia = `  
  <div class="peliculas">
    <a href="#">
      <img src="${films[i].poster}" alt="" class="posterPelicula">
    </a>
    <div class="datosPeliculas">
      <h3 class="tituloPelicula">${films[i].title}</h3>
      <time class="fechaPelicula">(${films[i].release_date})</time>
      <p class="descripcionPelicula">${films[i].description}</p>
    </div>
  </div>`;
  matrizFilmografia.insertAdjacentHTML("beforeend", listaFilmografia);
}
export function nuevaListaFilmografia(films) {
  matrizFilmografia.innerHTML = "";
  for (let i = 0; i < films.length; i++) {
    const listadoFilmografia = `  
    <div class="peliculas">
      <a href="#">
        <img src="${films[i].poster}" alt="" class="posterPelicula">
      </a>
      <div class="datosPeliculas">
        <h3 class="tituloPelicula">${films[i].title}</h3>
        <time class="fechaPelicula">(${films[i].release_date})</time>
        <p class="descripcionPelicula">${films[i].description}</p>
      </div>
    </div>`;
    matrizFilmografia.insertAdjacentHTML("beforeend", listadoFilmografia);
  }
}

// FILMOGRAFIA - Directores
const directores = document.querySelector("#filtroDirector");
const a = new Set([]);
data.films.forEach(x => {
  a.add(x.director);
});

// FILMOGRAFIA - Directores - Limpiar
const limpiarDirector = [...a];
for (let i = 0; i < limpiarDirector.length; i++) {
  const listaFilmografia = `
  <option value="${limpiarDirector[i]}">${limpiarDirector[i]}</option>`;
  directores.insertAdjacentHTML("beforeend", listaFilmografia);
}
directores.addEventListener('change', (e) => {
  const directorSeleccionado = filtroInformacionDirector(films, e.target.value);
  nuevaListaFilmografia(directorSeleccionado);
})

// FILMOGRAFIA - Productores
const productores = document.querySelector("#filtroProductor");
const b = new Set([]);
data.films.forEach(x => {
  b.add(x.producer);
});

// FILMOGRAFIA - Productores - Limpiar
const limpiarProductor = [...b];
for (let i = 0; i < limpiarProductor.length; i++) {
  const listaFilmografia = `
  <option value="${limpiarProductor[i]}">${limpiarProductor[i]}</option>`;
  productores.insertAdjacentHTML("beforeend", listaFilmografia);
}
productores.addEventListener('change', (e) => {
  const productorSeleccionado = filtroInformacionProductor(films, e.target.value);
  nuevaListaFilmografia(productorSeleccionado);
})

// FILMOGRAFIA - Ordenamiento
const orden = document.getElementById("filtroOrden");
orden.addEventListener('change', (e) => {
  const ordenSeleccionado = ordenInformacion(e.target.value, films);
  nuevaListaFilmografia(ordenSeleccionado);
})

// PERSONAJES
export const listaPersonajes = [];
for (let i = 0; i < data.films.length; i++) {
  for (let j = 0; j < data.films[i].people.length; j++) {
    listaPersonajes.push(data.films[i].people[j]);
  }
}
const matrizPersonajes = document.querySelector("#grillaPersonajes");
for (let i = 0; i < listaPersonajes.length; i++) {
  const listaFilmografia = `
  <div class="personaje">
    <a href="#">
      <img src="${listaPersonajes[i].img}" alt="" class="posterPersonaje">
    </a>
    <div class="datosPersonaje">
      <h3 class="nombrePersonaje">${listaPersonajes[i].name.toUpperCase()}</h3>
      <ul class="infoPersonaje">
        <li><b>Género:</b> ${listaPersonajes[i].gender === 'Male' ? 'Masculino' : 'Femenino'}</li>
        <li><b>Edad:</b> ${listaPersonajes[i].age}</li>
        <li><b>Especie:</b> ${listaPersonajes[i].specie}</li>
      </ul>
    </div>
  </div>`;
  matrizPersonajes.insertAdjacentHTML("beforeend", listaFilmografia);
}

function personajes(listaPersonajes) {
  matrizPersonajes.innerHTML = "";
  for (let i = 0; i < listaPersonajes.length; i++) {
    const listadoFilmografia = `
    <div class="personaje">
      <a href="#">
        <img src="${listaPersonajes[i].img}" alt="" class="posterPersonaje">
      </a>
      <div class="datosPersonaje">
        <h3 class="nombrePersonaje">${listaPersonajes[i].name.toUpperCase()}</h3>
        <ul class="infoPersonaje">
          <li><b>Género:</b> ${listaPersonajes[i].gender === 'Male' ? 'Masculino' : 'Femenino'}</li>
          <li><b>Edad:</b> ${listaPersonajes[i].age}</li>
          <li><b>Especie:</b> ${listaPersonajes[i].specie}</li>
        </ul>
      </div>
    </div>`;
    matrizPersonajes.insertAdjacentHTML("beforeend", listadoFilmografia);
  }
}
const especiePersonajes = document.querySelector("#filtroEspecie");
const c = new Set([]);
listaPersonajes.forEach(x => {
  c.add(x.specie);
});

// PERSONAJES - Limpiar personajes
const limpiarPersonajes = [...c];
for (let i = 0; i < limpiarPersonajes.length; i++) {
  const listaFilmografia = `
  <option value="${limpiarPersonajes[i]}">${limpiarPersonajes[i]}</option>`;
  especiePersonajes.insertAdjacentHTML("beforeend", listaFilmografia);
}

// PERSONAJES - Calculo
especiePersonajes.addEventListener('change', (e) => {
  const especieSeleccionada = filtroInformacionEspecie(listaPersonajes, e.target.value);
  const cantidadEspecie = calculoInformacion(data.films, e.target.value);
  const mensajeCantidadEspecie = `<div class="calculoEspecies"><label>El porcentaje de personajes de ésta especie es: %${cantidadEspecie}</label></div>`;
  const resultadoCantidadEspecie = document.getElementById("numeroEspecies");
  resultadoCantidadEspecie.innerHTML = mensajeCantidadEspecie;
  personajes(especieSeleccionada);
  matrizPersonajes.classList.add("filtrado");
})