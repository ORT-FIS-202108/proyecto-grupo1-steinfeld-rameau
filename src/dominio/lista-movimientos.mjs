export default class ListaMovimientos {

  constructor() {
    this.movimientos = [];
  }

  agregar(movimiento) {
    this.movimientos.push(movimiento);
  }
  eliminar(movimiento) {
    this.setMovimientos(this.movimientos.filter(c => c.nombreMovimiento !== categoria.nombreMovimiento));
  }

  setMovimientos(movimientos) {
    this.movimientos = movimientos;
  }

  getMovimientos() {
    return this.movimientos;
  }
}