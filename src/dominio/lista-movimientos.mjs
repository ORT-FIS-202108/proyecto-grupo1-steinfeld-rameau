export default class ListaMovimientos {

  constructor() {
    this.movimientos = [];
  }

  agregar(movimiento) {
    this.movimientos.push(movimiento);
  }
  eliminar(movimiento) {
    this.setMovimientos(this.movimientos.filter(m => m.id !== movimiento.id));
  }

  setMovimientos(movimientos) {
    this.movimientos = movimientos;
  }

  getMovimientos() {
    return this.movimientos;
  }
}