export default class ListaCategorias {

  constructor() {
    this.categorias = [];
  }

  agregar(categoria) {
    let categoriasAgregadas = this.categorias.some(m => m.nombre == categoria.nombre);
    if (!categoriasAgregadas) {
      this.categorias.push(categoria);
    } else {
      throw new Error(`No se pudo agregar. ${categoria.nombre} ya se encuentra en la lista.`);
    }
  }

  getCategorias() {
    return this.categorias;
  }
}