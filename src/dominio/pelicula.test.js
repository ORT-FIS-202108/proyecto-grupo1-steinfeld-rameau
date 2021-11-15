import Movimiento from './movimiento.mjs';

test('creación de una película', () => {

  let unaPelicula = new Movimiento("Indiana Jones", "Aventura", 1981);
  expect(unaPelicula.titulo).toBe("Indiana Jones");
  expect(unaPelicula.genero).toBe("Aventura");
});