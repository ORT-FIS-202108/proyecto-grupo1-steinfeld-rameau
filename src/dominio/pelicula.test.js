import Pelicula from './pelicula.mjs';

test('creación de una película', () => {
  let unaPelicula = new Pelicula("Indiana Jones", "Aventura");
  expect(unaPelicula.titulo).toBe("Indiana Jones");
  expect(unaPelicula.genero).toBe("Aventura");
});