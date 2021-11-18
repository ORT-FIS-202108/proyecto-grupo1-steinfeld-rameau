import Movimiento from "../../dominio/movimiento.mjs";
import Categoria from '../../dominio/categoria.mjs';
import ListaMovimientos from "../../dominio/lista-movimientos.mjs";
import ListaCategorias from '../../dominio/lista-categorias.mjs';

import {MDCSnackbar} from "@material/snackbar";

const listaMovimientos = new ListaMovimientos();
const listaCategorias = new ListaCategorias();

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

const seleccionarCategoria = () => {
    const categorias = listaCategorias.getCategorias();

    const selectCat = document.getElementById('seleccionar-categoria-select');
    selectCat.innerHTML = '';

    categorias.forEach(categoria => {
        let newSelectElement = '<li class="mdc-list-item" aria-selected="false" data-value="' + categoria.nombre + '" role="option">' + '<span class="mdc-list-item__ripple"></span>' + '<span class="mdc-list-item__text">' + categoria.nombre + '</span>' + '</li>';
        document.getElementById('seleccionar-categoria-select').innerHTML += newSelectElement;
    });
}

/*
const listarMovimientos = () => {
    document.getElementById('listar-movimientos').innerHTML = '';
    for (let i = 0; i < movimientos.length; i++) {
        let newListElement = '<li>' + movimientos[i].nombre + '<button class="movimientos__columna--eliminar" id="eliminarMovimientos-' + movimientos[i].id + '"></button>' + '</li>';
        document.getElementById('listar-movimientos').innerHTML += newListElement;
    }
}*/
