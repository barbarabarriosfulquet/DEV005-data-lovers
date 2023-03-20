import data from "./data/ghibli/ghibli.js";

// FILTROS
// Director
export function filtroInformacionDirector(films, nombreDirector) {
  const resultadoDirector = films.filter((y) => y.director === nombreDirector);
  return resultadoDirector;
};
// Productor
export function filtroInformacionProductor(films, nombreProductor) {
  const resultadoProductor = films.filter((y) => y.producer === nombreProductor);
  return resultadoProductor;
};
// Especie
export const listaPersonajes = [];
for (let i = 0; i < data.films.length; i++) {
  for (let j = 0; j < data.films[i].people.length; j++) {
    listaPersonajes.push(data.films[i].people[j]);
  }
}
export function filtroInformacionEspecie(listaPersonajes, tipoEspecie) {
  const resultadoEspecie = listaPersonajes.filter((y) => y.specie === tipoEspecie);
  return resultadoEspecie;
};

// ORDENAMIENTO
// Fecha de lanzamiento
export const fechaAscendente = (a, b) => {
  if (a.release_date > b.release_date) {
    return 1;
  } else {
    return -1;
  }
};
export const fechaDescendente = (a, b) => {
  if (a.release_date > b.release_date) {
    return -1;
  } else {
    return 1;
  }
};
export const ordenInformación = (order, films) => {
  if (order === "Ascendente") {
    const resultadoOrden = films.sort(fechaAscendente);
    return resultadoOrden;
  } else {
    const resultadoOrden = films.sort(fechaDescendente);
    return resultadoOrden;
  }
};

// CALCULO
export const calculoInformacion = (data, especie) => {
  let calculoEspecie = 0;
  for (let i = 0; i < data.length; i++) {
    let personaje = data[i].people;
    for (let j = 0; j < personaje.length; j++) {
      if (personaje[j].specie === especie) {
        calculoEspecie++;
      }
    }
  }
  return calculoEspecie;
};
