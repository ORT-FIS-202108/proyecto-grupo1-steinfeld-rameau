export default class ListaMovimientos {

  constructor() {
    this.movimientos = [];
  }

  agregar(movimiento) {
    let movimientosAgregados = this.movimientos.some(m => m.nombre == movimiento.nombre);
    if (!movimientosAgregados) {
      this.movimientos.push(movimiento);
    } else {
      throw new Error(`No se pudo agregar. ${movimiento.nombre} ya se encuentra en la lista.`);
    }
  }

  getMovimientos() {
    return this.movimientos;
  }
}