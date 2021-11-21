export default class ListaMovimientos {

  constructor() {
    this.movimientos = [];
  }

  agregar(movimiento) {

    if (movimiento.nombre || movimiento.tipo || movimiento.fecha || movimiento.valor) {
      this.movimientos.push(movimiento);
    } else {
      throw new Error(`No se pudo agregar. Por favor ingresar todos los campos del formulario.`);
    }
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