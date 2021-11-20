export default class Movimiento {

  constructor(nombreMovimiento, categoria, tipo, fecha, valor, id) {
    this.nombre = nombreMovimiento;
    this.categoria = categoria;
    this.tipo = tipo;
    this.fecha = fecha;
    this.valor = valor;
    this.id = id;
  }
}