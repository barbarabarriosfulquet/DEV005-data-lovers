import data from './data/ghibli/ghibli.js';
import { filtroDirector, filtroProductor, filtroEspecie, filtroGenero } from "./data.js";

// SELECCION SECCION
const botonHistoria = document.getElementById("botonHistoria");
const historia = document.getElementById("historia");
botonHistoria.addEventListener("click", function() {
  document.getElementById("header").style.display = "none";
  historia.style.display = "block";
});

const botonPersonajes = document.getElementById("botonPersonajes");
const seccionPersonajes = document.getElementById("personajes");
botonPersonajes.addEventListener("click", function() {
  document.getElementById("header").style.display = "none";
  seccionPersonajes.style.display = "block";
});

const botonFilmografia = document.getElementById("botonFilmografia");
const seccionFilmografia = document.getElementById("filmografia");
botonFilmografia.addEventListener("click", function() {
  document.getElementById("header").style.display = "none";
  seccionFilmografia.style.display = "block";
});