import Movimiento from "../../dominio/movimiento.mjs";
import ListaMovimientos from "../../dominio/lista-movimientos.mjs";

import {MDCSnackbar} from "@material/snackbar";

const listaMovimientos = new ListaMovimientos();

export const agregarMovimiento = (nombre, tipo, valor, fecha) => {
    const movimientos = listaMovimientos.getCategorias();
    try {
        let newMovimiento = new Movimiento(nombre, tipo, fecha, valor);
        listaMovimientos.agregar(newMovimiento);
    } catch (error) {
        const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
        snackbar.labelText = error.message;
        snackbar.open();
    } finally {
        listarMovimientos();
        console.log(movimientos);
    }
}

const listarMovimientos = () => {
    document.getElementById('listar-movimientos').innerHTML = '';
    for (let i = 0; i < movimientos.length; i++) {
        let newListElement = '<li>' + movimientos[i].nombre + '<button class="movimientos__columna--eliminar" id="eliminarMovimientos-' + movimientos[i].id + '"></button>' + '</li>';
        document.getElementById('listar-movimientos').innerHTML += newListElement;
    }
}