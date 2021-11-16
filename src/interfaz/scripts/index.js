import { MDCRipple } from '@material/ripple';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

import { agregarCategoria } from './categorias';
import {agregarMovimiento} from "./movimientos";

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

//Movimientos
const textFieldNombre = new MDCTextField(document.getElementById('nombreMovimiento'));
const textFieldValor = new MDCTextField(document.getElementById('valor'));
const textFieldFecha = new MDCTextField(document.getElementById('fecha'));
const seleccionarTipo = new MDCSelect(document.getElementById('select-tipo'));
const agregarMovimientoBtn = new MDCRipple(document.getElementById('agregarMovimientoBtn'));

agregarMovimientoBtn.listen('click', () => agregarMovimiento(textFieldNombre.value, seleccionarTipo.value, textFieldValor.value, textFieldFecha.value));


// CATEGORIAS
const agregarCategoriaBtn = new MDCRipple(document.getElementById('agregarCategoriaBtn'));
const inputNombre = new MDCTextField(document.getElementById('nombre'));
const selectTipo = new MDCSelect(document.querySelector('.mdc-select'));

agregarCategoriaBtn.listen('click', () => agregarCategoria(inputNombre.value, selectTipo.value));

