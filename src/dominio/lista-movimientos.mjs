export default class ListaMovimientos {

  constructor() {
    this.movimientos = [];
  }

  agregar(movimiento) {
    let movimientosAgregados = this.movimientos.some(m => m.nombreMovimiento == movimiento.nombreMovimiento);
    if (!movimientosAgregados) {
      this.movimientos.push(movimiento);
    } else {
      throw new Error(`No se pudo agregar. ${movimiento.nombreMovimiento} ya se encuentra en la lista.`);
    }
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