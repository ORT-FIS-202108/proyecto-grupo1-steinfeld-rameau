import Movimiento from "../../dominio/movimientos/movimiento.mjs";
import ListaMovimientos from "../../dominio/movimientos/lista-movimientos.mjs";

import {MDCSnackbar} from "@material/snackbar";
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';

const nombreMovimiento = new MDCTextField(document.getElementById('nombreMovimiento'));
const categoriaMovimiento = new MDCSelect(document.getElementById('seleccionar-categoria'));
const tipoMovimiento = new MDCSelect(document.getElementById('select-tipo'));
const fechaMovimiento = new MDCTextField(document.getElementById('fecha'));
const valorMovimiento = new MDCTextField(document.getElementById('valor'));

export const listaMovimientos = new ListaMovimientos();

const limpiarFormularioMovimiento = () => {
    nombreMovimiento.value = '';
    categoriaMovimiento.value = '';
    tipoMovimiento.value = '';
    fechaMovimiento.value = '';
    valorMovimiento.value = '';
}

export const agregarMovimiento = (nombre, categoria, tipo, fecha, valor) => {
    const movimientos = listaMovimientos.getMovimientos();
    let id = 'movimiento-' + movimientos.length;
    limpiarFormularioMovimiento();

    try {
        let newMovimiento = new Movimiento(nombre, categoria, tipo, fecha, valor, id);
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
    const movimientos = listaMovimientos.getMovimientos();
    const lista = document.getElementById('listar-movimientos');
    const tabla = document.getElementById('tblData');
    lista.innerHTML = '';

    movimientos.forEach(movimiento => {
        let [year, month, day] = movimiento.fecha.split('-');
        //crear dato en la lista
        switch (month) {
            case '01' :
                month = 'Enero';
                break;
            case '02':
                month = 'Febrero';
                break;
            case '03':
                month = 'Marzo';
                break;
            case '04':
                month = 'Abril';
                break;
            case '05':
                month = 'Mayo';
                break;
            case '06':
                month = 'Junio';
                break;
            case '07':
                month = 'Julio';
                break;
            case '08':
                month = 'Agosto';
                break;
            case '09':
                month = 'Septiembre';
                break;
            case '10':
                month = 'Octubre';
                break;
            case '11':
                month = 'Noviembre';
                break;
            case '12':
                month = 'Diciembre';
        }
        if (document.getElementById(month)) {
            const listaAppendiar = document.getElementById("lista-" + month);
            const botonEliminar = document.createElement('button');
            botonEliminar.onclick = () => eliminarMovimiento(movimiento);
            botonEliminar.id = movimiento.id;
            botonEliminar.className = "movimientos--lista__botones__eliminar";

            const editButton = document.createElement('button');
            editButton.onclick = () => editar(movimiento);
            editButton.className = "movimientos--lista__botones__editar";

            const buttonsContainer = document.createElement('div');
            buttonsContainer.className = "movimientos--lista__botones";
            buttonsContainer.appendChild(botonEliminar);
            buttonsContainer.appendChild(editButton);

            const listItem = document.createElement('li');
            listItem.textContent = movimiento.nombre;
            listItem.appendChild(buttonsContainer);

            listaAppendiar.appendChild(listItem);
        } else {
            const collapseButton = document.createElement('button');
            collapseButton.textContent = month;
            collapseButton.id = month;
            collapseButton.className = "collapsible";

            const botonEliminar = document.createElement('button');
            botonEliminar.onclick = () => eliminarMovimiento(movimiento);
            botonEliminar.id = movimiento.id;
            botonEliminar.className = "movimientos--lista__botones__eliminar";

            const editButton = document.createElement('button');
            editButton.onclick = () => editar(movimiento);
            editButton.className = "movimientos--lista__botones__editar";

            const buttonsContainer = document.createElement('div');
            buttonsContainer.className = "movimientos--lista__botones";
            buttonsContainer.appendChild(botonEliminar);
            buttonsContainer.appendChild(editButton);

            const listItem = document.createElement('li');
            listItem.textContent = movimiento.nombre;
            listItem.appendChild(buttonsContainer);


            const listUl = document.createElement('ul');
            listUl.id = "lista-" + month;
            listUl.className = "movimientos--lista";
            listUl.appendChild(listItem);

            const contentCollapse = document.createElement('div');
            contentCollapse.className = "content-collapsible";
            contentCollapse.appendChild(listUl);

            lista.appendChild(collapseButton);
            lista.appendChild(contentCollapse);
        }
        //crear fila en la tabla de exportacion
        const datoNombre = document.createElement('td');
        datoNombre.textContent = movimiento.nombre;
        const datoValor = document.createElement('td');
        datoValor.textContent = movimiento.valor;
        const datoCategoria = document.createElement('td');
        datoCategoria.textContent = movimiento.categoria;
        const datoFecha = document.createElement('td');
        datoFecha.textContent = movimiento.fecha;
        const datoTipo = document.createElement('td');
        datoTipo.textContent = movimiento.tipo;

        const fila = document.createElement('row');
        fila.appendChild(datoNombre);
        fila.appendChild(datoValor);
        fila.appendChild(datoCategoria);
        fila.appendChild(datoFecha);
        fila.appendChild(datoTipo);

        tabla.appendChild(fila);

    })
    //Panel colapsable - codigo de https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible_symbol
    let coll = document.getElementsByClassName("collapsible");
    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}

const eliminarMovimiento = (movimiento) => {
    listaMovimientos.eliminar(movimiento);
    listarMovimientos();
}

const editar = (movimiento) => {
    //cargo formulario
    nombreMovimiento.value = movimiento.nombre;
    categoriaMovimiento.value = movimiento.categoria;
    tipoMovimiento.value = movimiento.tipo;
    fechaMovimiento.value = movimiento.fecha;
    valorMovimiento.value = parseInt(movimiento.valor);

    //cambio titulo
    const tituloFormulario = document.getElementById('subtituloMovimiento');
    tituloFormulario.textContent = 'Editar Movimiento';

    //cambio boton
    document.getElementById('editarMovimientoBtn').classList.add("visible");
    document.getElementById('agregarMovimientoBtn').classList.remove("visible");

    document.getElementById('editarMovimientoBtn').addEventListener("click", function() {
        //cambio titulo
        const tituloFormulario = document.getElementById('subtituloMovimiento');
        tituloFormulario.textContent = 'Añadir nuevo movimiento';

        //edito instancia de movimiento con la nueva data
        movimiento.nombre = nombreMovimiento.value;
        movimiento.categoria = categoriaMovimiento.value;
        movimiento.tipo = tipoMovimiento.value;
        movimiento.fecha = fechaMovimiento.value;
        movimiento.valor = valorMovimiento.value;

        listarMovimientos();
        limpiarFormularioMovimiento();
        //cambio boton
        document.getElementById('editarMovimientoBtn').classList.remove("visible");
        document.getElementById('agregarMovimientoBtn').classList.add("visible");
    });
}