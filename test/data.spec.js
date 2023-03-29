import { filtroInformacionDirector, filtroInformacionProductor, ordenInformacion, fechaAscendente, fechaDescendente, calculoInformacion } from '../src/data.js';

const baseDatos = [{ title: "Castle in the Sky", director: "Hayao Miyazaki", producer: "Isao Takahata", release_date: "1986" },
  { title: "My Neighbor Totoro", director: "Hayao Miyazaki", producer: "Hayao Miyazaki", release_date: "1988" }]

describe('Test filtroInformacionDirector', () => {
  it('filtroInformacionDirector es una función', () => {
    expect(typeof filtroInformacionDirector).toBe('function');
  });
  it('filtra información por Director', () => {
    const peliculas = [{ title: "Castle in the Sky", director: "Hayao Miyazaki", producer: "Isao Takahata", release_date: "1986" }, { title: "My Neighbor Totoro", director: "Hayao Miyazaki", producer: "Hayao Miyazaki", release_date: "1988" }];
    expect(filtroInformacionDirector(baseDatos, 'Hayao Miyazaki')).toEqual(peliculas);
  })
});

describe('Test filtroInformacionProductor', () => {
  it('filtroInformacionProductor es una función', () => {
    expect(typeof filtroInformacionProductor).toBe('function');
  });
  it('filtra información por Productor', () => {
    const peliculas = [
      { title: "Castle in the Sky", director: "Hayao Miyazaki", producer: "Isao Takahata", release_date: "1986" }];
    expect(filtroInformacionProductor(baseDatos, 'Isao Takahata')).toEqual(peliculas);
  })
});

describe('Test ordenInformacion', () => {
  it('ordenInformacion es una función', () => {
    expect(typeof ordenInformacion).toBe('function');
  });
  it('ordenar películas por fecha', () => {
    const orden = [{ title: "Castle in the Sky", director: "Hayao Miyazaki", producer: "Isao Takahata", release_date: "1986" },
      { title: "My Neighbor Totoro", director: "Hayao Miyazaki", producer: "Hayao Miyazaki", release_date: "1988", }];
    expect(ordenInformacion("Ascendente", baseDatos)).toEqual(orden);
  });
  it('ordenar películas por fecha', () => {
    const orden = [{ title: "My Neighbor Totoro", director: "Hayao Miyazaki", producer: "Hayao Miyazaki", release_date: "1988" },
      { title: "Castle in the Sky", director: "Hayao Miyazaki", producer: "Isao Takahata", release_date: "1986", }];
    expect(ordenInformacion("Descendente", baseDatos)).toEqual(orden);
  })
});

describe('Test fechaAscendente', () => {
  it('fechaAscendente es una función', () => {
    expect(typeof fechaAscendente).toBe('function');
  });
  it('comparar películas por fecha', () => {
    const ascendente = -1;
    expect(fechaAscendente({ release_date: "1986" }, { release_date: "1988" })).toEqual(ascendente);
  });
  it('comparar películas por fecha', () => {
    const ascendente = 1;
    expect(fechaAscendente({ release_date: "1988" }, { release_date: "1986" })).toEqual(ascendente);
  })
});

describe('Test fechaDescendente', () => {
  it('fechaDescendente es una función', () => {
    expect(typeof fechaDescendente).toBe('function');
  });
  it('comparar películas por fecha', () => {
    const descendente = 1;
    expect(fechaDescendente({ release_date: "1986" }, { release_date: "1988" })).toEqual(descendente);
  });
  it('comparar películas por fecha', () => {
    const descendente = -1;
    expect(fechaDescendente({ release_date: "1988" }, { release_date: "1986" })).toEqual(descendente);
  })
});

const baseDatosPersonajes = [{
  "id": "2baf70d1-42bb-4437-b551-e5fed5a87abe",
  "title": "Castle in the Sky",
  "description": "La huérfana Sheeta heredó un misterioso cristal que la conecta con el mítico reino celestial de Laputa. Con la ayuda del ingenioso Pazu y una banda animada de piratas del cielo, ella se dirige hacia las ruinas de la que fue una gran civilización. Sheeta y Pazu deben superar al malvado Muska, quien planea utilizar la ciencia de Laputa para convertirse en el gobernante del mundo.",
  "director": "Hayao Miyazaki",
  "producer": "Isao Takahata",
  "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg",
  "release_date": "1986",
  "rt_score": "95",
  "people": [
    {
      "id": "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01",
      "name": "Pazu",
      "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8b/Pazu.jpg",
      "gender": "Male",
      "age": "13",
      "eye_color": "Black",
      "hair_color": "Brown",
      "specie": "Human"
    }]
}]
describe('Test calculoInformacion', () => {
  it('calculoInformacion es una función', () => {
    expect(typeof calculoInformacion).toBe('function');
  });
  it('calculoInformacion devuelve un número', () => {
    const numero = 1;
    expect(calculoInformacion(baseDatosPersonajes, "Human")).toEqual(numero);
  });
});