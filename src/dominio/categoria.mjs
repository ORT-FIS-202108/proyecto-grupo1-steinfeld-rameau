export default class Categoria {

  constructor(nombre, tipo, id) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.id = id;
    this.color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
  }
}