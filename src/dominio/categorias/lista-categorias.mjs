export default class ListaCategorias {

  constructor() {
    this.categorias = [];
  }

  agregar(categoria) {
    let categoriasAgregadas = this.categorias.some(m => m.nombre == categoria.nombre && m.tipo == categoria.tipo);
    if (!categoriasAgregadas) {
      this.categorias.push(categoria);
    } else {
      throw new Error(`No se pudo agregar. ${categoria.nombre} ya se encuentra agregado como categoria.`);
    }
  }

  eliminar(categoria) {
    this.setCategorias(this.categorias.filter(c => c.nombre !== categoria.nombre));
  }

  setCategorias(categorias) {
    this.categorias = categorias;
  }

  getCategorias() {
    return this.categorias;
  }
}