import data from "./data/ghibli/ghibli.js";

//FILTROS

//Director
export const filtroDirector = (films, nombreDirector) => {
  const returnDirector = films.filter((y) => y.director === nombreDirector);
  return returnDirector;
};

//Productor
export const filtroProductor = (films, nombreProductor) => {
  const returnProductor = films.filter((y) => y.producer === nombreProductor);
  return returnProductor;
};

//Especie
export const arrayEspeciePersonajes = [];
for (let i = 0; i < data.films.length; i++) {
  for (let j = 0; j < data.films[i].people.length; j++) {
    arrayEspeciePersonajes.push(data.films[i].people[j]);
  }
}
export const filtroEspecie = (arrayEspeciePersonajes, especie) => {
  const returnEspecie = arrayEspeciePersonajes.filter((y) => y.specie === especie);
  return returnEspecie;
};

//Género
export const arrayGeneroPersonajes = [];
for (let i = 0; i < data.films.length; i++) {
  for (let j = 0; j < data.films[i].people.length; j++) {
    arrayGeneroPersonajes.push(data.films[i].people[j]);
  }
}
export const filtroGenero = (arrayGeneroPersonajes, genero) => {
  const returnGenero = arrayGeneroPersonajes.filter((y) => y.gender === genero);
  return returnGenero;
};

//ORDENAMIENTO

//Titulo
export const tituloAscendente = (a, b) => {
  if (a.title > b.title) {
    return 1;
  } else {
    return -1;
  }
};
export const tituloDescendente = (a, b) => {
  if (a.title > b.title) {
    return -1;
  } else {
    return 1;
  }
};
export const ordenamientoTitulo = (order, films) => {
  if (order === "ascendente") {
    const returnOrdenamientoTitulo = films.sort(tituloAscendente);
    return returnOrdenamientoTitulo;
  }
  else {
    const returnOrdenamientoTitulo = films.sort(tituloDescendente);
    return returnOrdenamientoTitulo;
  }
};