import { MDCRipple } from '@material/ripple';
import { MDCTopAppBar } from '@material/top-app-bar';
import { MDCTabBar } from '@material/tab-bar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';
import {MDCSnackbar} from '@material/snackbar';
import ListaCategorias from '../../dominio/lista-categorias.mjs';
import Categoria from '../../dominio/categoria.mjs';

const listaCategorias = new ListaCategorias();
let categorias = listaCategorias.getCategorias();

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
const eliminarCategoria = new MDCRipple(document.querySelector('.categoria__columna--eliminar'));

const listarCategorias = () => {
  document.getElementById('listar-categorias').innerHTML = '';
  for (let i = 0; i < categorias.length; i++) {
    let newListElement = '<li>' + categorias[i].nombre + '<button class="categoria__columna--eliminar" id="eliminarCategoria' + categorias[i].id + '"></button>' + '</li>';
    document.getElementById('listar-categorias').innerHTML += newListElement;
  }
}
addButton.listen('click', () => {
  let nombre = inputNombre.value;
  let tipo = selectTipo.value;
  let id = categorias.length;
  try {
    let newCategoria = new Categoria(nombre, tipo, id);
    listaCategorias.agregar(newCategoria);
  } catch (error) {
    const snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
    snackbar.labelText = error.message;
    snackbar.open();
  } finally {
    listarCategorias();
    console.log(categorias);
  }
})

eliminarCategoria.listen('click', () => {
  console.log(eliminarCategoria);
})