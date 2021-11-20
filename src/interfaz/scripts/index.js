import { MDCRipple } from '@material/ripple';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';

import { agregarCategoria } from './categorias';
import { crearGraficoBalance, crearGraficoCategorias, destruirGraficos, graficoBalance } from './graficas';

// CATEGORIAS

const agregarCategoriaBtn = new MDCRipple(document.getElementById('agregarCategoriaBtn'));
const inputNombre = new MDCTextField(document.getElementById('nombre'));
const selectTipo = new MDCSelect(document.querySelector('.mdc-select'));

agregarCategoriaBtn.listen('click', () => agregarCategoria(inputNombre.value, selectTipo.value));

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

      const categoriasIngresosCtx = document.getElementById('categorias-chart-ingresos').getContext('2d');
      crearGraficoCategorias(categoriasIngresosCtx, 'ingreso');
      
      const categoriasEgresosCtx = document.getElementById('categorias-chart-egresos').getContext('2d');
      crearGraficoCategorias(categoriasEgresosCtx, 'egreso');
    }
  });
});