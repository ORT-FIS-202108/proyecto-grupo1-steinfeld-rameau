import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import ListaCategorias from '../../dominio/lista-categorias.mjs';
import Categoria from '../../dominio/categoria.mjs';

const listaCategorias = new ListaCategorias();

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

const inputNombre = new MDCTextField(document.getElementById('nombre'));
const selectTipo = new MDCSelect(document.querySelector('.mdc-select'));

const addButton = new MDCRipple(document.getElementById('addButton'));
addButton.listen('click', () => {
  let nombre = inputNombre.value;
  let tipo = selectTipo.value;
  try {
    let newCategoria = new Categoria(nombre, tipo);
    listaCategorias.agregar(newCategoria);
  } catch (error) {
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.labelText = error.message;
    snackbar.open();
  } finally {
    let categorias = listaCategorias.getCategorias();
    for (let i = 0; i < categorias.length; i++) {
      document.getElementById('listar-categorias').innerHTML='<li>' + categorias[0].nombre + '</li>';
    }
    console.log(categorias);
  }
})