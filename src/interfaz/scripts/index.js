import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import ListaPeliculas from '../../dominio/lista-peliculas.mjs';
import Pelicula from '../../dominio/pelicula.mjs';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const listaPeliculas = new ListaPeliculas();

const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);

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

// const textFieldTitle = new MDCTextField(document.getElementById('title'));
// const textFieldYear = new MDCTextField(document.getElementById('year'));
// const selectGenre = new MDCSelect(document.querySelector('.mdc-select'));

// const addButton = new MDCRipple(document.getElementById('addButton'));
// addButton.listen('click', () => {
//   let title = textFieldTitle.value;
//   let year = textFieldYear.value;
//   let genre = selectGenre.value;
//   try {
//     let newPelicula = new Pelicula(title, genre, year);
//     listaPeliculas.agregar(newPelicula);
//   } catch (error) {
//     const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
//     snackbar.labelText = error.message;
//     snackbar.open();
//   } finally {
//     let peliculas = listaPeliculas.getPeliculas();
//     console.log(peliculas);
//   }
// })

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