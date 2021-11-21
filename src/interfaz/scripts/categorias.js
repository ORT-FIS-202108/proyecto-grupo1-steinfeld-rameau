import { MDCSnackbar } from '@material/snackbar';

import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';

import ListaCategorias from '../../dominio/categorias/lista-categorias.mjs';
import Categoria from '../../dominio/categorias/categoria.mjs';

const filtroCat = new MDCSelect(document.getElementById('select-tipo'));
const categoriaMov = document.getElementById('seleccionar-categoria');

export const listaCategorias = new ListaCategorias();

const nombreCat = new MDCTextField(document.getElementById('nombre'));
const tipoCat = new MDCSelect(document.getElementById('seleccionar-tipo-categoria'));

const listarCategorias = () => {
  const categorias = listaCategorias.getCategorias();
  const lista = document.getElementById('listar-categorias');
  lista.innerHTML = '';

  categorias.forEach(categoria => {
    const deleteButton = document.createElement('button');
    deleteButton.className = "categoria__columna--eliminar";
    deleteButton.id = categoria.id;
    deleteButton.onclick = () => eliminar(categoria);

    const listItem = document.createElement('li');
    listItem.textContent = categoria.nombre;
    listItem.appendChild(deleteButton);

    lista.appendChild(listItem);
  })
}

filtroCat.listen('click', () => habilitarCategoria());
const habilitarCategoria = () => {
  const categorias = listaCategorias.getCategorias();
  categoriaMov.innerHTML = '';
  categorias.forEach(categoria => {
    if (categoria.tipo.toUpperCase() === filtroCat.value.toUpperCase()) {
      let newSelectElement = '<option value="' + categoria.nombre.toString() + '">' + categoria.nombre.toString() + '</option>';
      categoriaMov.innerHTML += newSelectElement;
    }
  })

  categoriaMov.disabled = false;
}

export const agregarCategoria = (nombre, tipo) => {
  const categorias = listaCategorias.getCategorias();
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
    nombreCat.value = '';
    tipoCat.value = '';
  }
}

const eliminar = (categoria) => {
  listaCategorias.eliminar(categoria);
  listarCategorias();
}