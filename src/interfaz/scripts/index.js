import { MDCRipple } from '@material/ripple';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';

import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import { agregarCategoria } from './categorias';

const tabBar = new MDCTabBar(document.getElementById('main-tab'));
tabBar.listen("MDCTabBar:activated", (activatedEvent) => {
  document.getElementsByName('main-tab-section').forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove("sample-content--hidden");
    } else {
      element.classList.add("sample-content--hidden");
    }
  });
});

// CATEGORIAS
const agregarCategoriaBtn = new MDCRipple(document.getElementById('agregarCategoriaBtn'));
const inputNombre = new MDCTextField(document.getElementById('nombre'));
const selectTipo = new MDCSelect(document.querySelector('.mdc-select'));

agregarCategoriaBtn.listen('click', () => agregarCategoria(inputNombre.value, selectTipo.value));


// GRAFICOS
const chartTabBar = new MDCTabBar(document.getElementById("chart-tab"));
chartTabBar.listen("MDCTabBar:activated", (activatedEvent) => {
  document.getElementsByName("chart-content").forEach((element, index) => {
    if (index === activatedEvent.detail.index) {
      element.classList.remove("sample-content--hidden");
    } else {
      element.classList.add("sample-content--hidden");
    }
  });
});

const ctx = document.getElementById('chart').getContext('2d');

var oilData = {
  labels: [
      "Saudi Arabia",
      "Russia",
      "Iraq",
      "United Arab Emirates",
      "Canada"
  ],
  datasets: [
      {
          data: [133.3, 86.2, 52.2, 51.2, 50.2],
          backgroundColor: [
              "#FF6384",
              "#63FF84",
              "#84FF63",
              "#8463FF",
              "#6384FF"
          ]
      }]
};

new Chart(ctx, {
    type: 'pie',
    data: oilData
});
