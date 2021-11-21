import { MDCRipple } from '@material/ripple';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';

import {agregarMovimiento} from "./movimientos";
import { agregarCategoria } from './categorias';
import { crearGraficoBalance, crearGraficoCategorias } from './graficas';
import { exportarExcel } from "./exportarDatos";

// TAB BAR
const tabBar = new MDCTabBar(document.getElementById('main-tab'));
tabBar.listen("MDCTabBar:activated", (activatedEvent) => {
  document.getElementsByName('main-tab-section').forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove("sample-content--hidden");
    } else {
      element.classList.add("sample-content--hidden");
    }

    if (index === 2) {
      const balanceCtx = document.getElementById('balance-chart').getContext('2d');
      crearGraficoBalance(balanceCtx);
      
      const categoriasEgresosCtx = document.getElementById('categorias-chart-egresos').getContext('2d');
      crearGraficoCategorias(categoriasEgresosCtx);
    }
  });
});

// MOVIMIENTOS
const textFieldNombre = new MDCTextField(document.getElementById('nombreMovimiento'));
const categoriaSeleccionada = new MDCSelect(document.getElementById('seleccionar-categoria'));
const seleccionarTipo = new MDCSelect(document.getElementById('select-tipo'));
const textFieldFecha = new MDCTextField(document.getElementById('fecha'));
const textFieldValor = new MDCTextField(document.getElementById('valor'));
const agregarMovimientoBtn = new MDCRipple(document.getElementById('agregarMovimientoBtn'));

const exportarDatosBtn = new MDCRipple(document.getElementById('exportarBtn'));

exportarDatosBtn.listen('click', () => exportarExcel('tblData', 'datos-movimientos'));
agregarMovimientoBtn.listen('click', () => agregarMovimiento(textFieldNombre.value, categoriaSeleccionada.value, seleccionarTipo.value, textFieldFecha.value, textFieldValor.value));

// CATEGORIAS

const agregarCategoriaBtn = new MDCRipple(document.getElementById('agregarCategoriaBtn'));
const inputNombre = new MDCTextField(document.getElementById('nombre'));
const selectTipo = new MDCSelect(document.getElementById('seleccionar-tipo-categoria'));

agregarCategoriaBtn.listen('click', () => agregarCategoria(inputNombre.value, selectTipo.value));
