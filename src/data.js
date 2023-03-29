// FILTROS
// Director
export function filtroInformacionDirector(films, nombreDirector) {
  const resultadoDirector = films.filter((y) => y.director === nombreDirector);
  return resultadoDirector;
}
// Productor
export function filtroInformacionProductor(films, nombreProductor) {
  const resultadoProductor = films.filter((y) => y.producer === nombreProductor);
  return resultadoProductor;
}
// Especie
export function filtroInformacionEspecie(films, tipoEspecie) {
  const resultadoEspecie = films.filter((y) => y.specie === tipoEspecie);
  return resultadoEspecie;
}

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
export const ordenInformacion = (order, films) => {
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
    const personaje = data[i].people;
    for (let j = 0; j < personaje.length; j++) {
      if (personaje[j].specie === especie) {
        calculoEspecie++;
      }
    }
  }
  const cantPersonajes = 171;
  const calculo = Math.round((calculoEspecie /= cantPersonajes) * 100);
  return calculo;
};