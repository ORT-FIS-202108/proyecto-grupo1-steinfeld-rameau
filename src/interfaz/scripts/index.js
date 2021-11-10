import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import ListaMovimientos from '../../dominio/lista-movimientos.mjs';
import Movimiento from '../../dominio/movimiento.mjs';

const listaMovimientos = new ListaMovimientos();
let movimientos = listaMovimientos.getMovimientos();

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

const tabBar = new MDCTabBar(document.querySelector(".mdc-tab-bar"));
tabBar.listen("MDCTabBar:activated", (activatedEvent) => {
  document.querySelectorAll(".content").forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove("sample-content--hidden");
    } else {
      element.classList.add("sample-content--hidden");
    }
  });
});

const textFieldNombre = new MDCTextField(document.getElementById('nombre'));
const textFieldValor = new MDCTextField(document.getElementById('valor'));
const textFieldFecha = new MDCTextField(document.getElementById('fecha'));
const selectTipo = new MDCSelect(document.getElementById('select-tipo'));

const addButton = new MDCRipple(document.getElementById('addButton'));

const listarMovimientos = () => {
  document.getElementById('listar-movimientos').innerHTML = '';
  for (let i = 0; i < movimientos.length; i++) {
    let newListElement = '<li>' + movimientos[i].nombre + '<button class="movimientos__columna--eliminar" id="eliminarMovimientos-' + movimientos[i].id + '"></button>' + '</li>';
    document.getElementById('listar-movimientos').innerHTML += newListElement;
  }
}
addButton.listen('click', () => {
  let nombre = textFieldNombre.value;
  let valor = textFieldValor.value;
  let tipo = selectTipo.value;
  let fecha = textFieldFecha.value;
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
})