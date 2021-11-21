import Categoria from './categoria.mjs';
import ListaCategorias from './lista-categorias.mjs';

describe('Categorías', () => {
  const LC = new ListaCategorias();

  const categoria_0 = new Categoria('Supermercado', 'egreso', 0);
  const categoria_1 = new Categoria('Ropa', 'egreso', 1);
  const categoria_2 = new Categoria('Sueldo', 'ingreso', 2);

  test('agregar ---> Agregar categoría inexistente', () => {
    LC.agregar(categoria_0);
    const categoria = LC.getCategorias().find(c => c.id === categoria_0.id);
    expect(categoria).not.toBe(null);
  });
  test('agregar ---> Agregar categoría existente', () => {
    const agregarExistente = () => LC.agregar(categoria_0);
    expect(agregarExistente).toThrowError(`No se pudo agregar. ${categoria_0.nombre} ya se encuentra agregado como categoria.`);
  });
  test('getCategorias ---> Obtener categorías', () => {
    const categorias = LC.getCategorias();
    expect(categorias.length).toBe(1);
  });
  test('setCategorias ---> Set de categorías', () => {
    const categoriasNuevas = [categoria_1, categoria_2];
    LC.setCategorias(categoriasNuevas);
    const categorias = LC.getCategorias();
    expect(categorias.length).toBe(2);
    expect(categorias[0].nombre).toBe(categoria_1.nombre);
    expect(categorias[1].nombre).toBe(categoria_2.nombre);
  });
  test('eliminar ---> Eliminar categoría', () => {
    LC.eliminar(categoria_0);
    const categoria = LC.getCategorias().find(c => c.id === categoria_0.id);
    expect(categoria).toBe(undefined);
  });
})