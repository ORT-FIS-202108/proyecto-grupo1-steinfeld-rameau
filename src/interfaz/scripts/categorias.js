import { MDCSnackbar } from '@material/snackbar';
import { MDCTextField } from '@material/textfield';
import { MDCSelect } from '@material/select';

import ListaCategorias from '../../dominio/lista-categorias.mjs';
import Categoria from '../../dominio/categoria.mjs';

export const listaCategorias = new ListaCategorias();

const nombreCat = new MDCTextField(document.getElementById('nombre'));
const tipoCat = new MDCSelect(document.getElementById('seleccionar-tipo-categoria'));

const listarCategorias = () => {
    const categorias = listaCategorias.getCategorias();
    const lista = document.getElementById('listar-categorias');
    lista.innerHTML = '';

    const selectCat = document.getElementById('seleccionar-categoria-select');
  
    categorias.forEach(categoria => {
      const deleteButton = document.createElement('button');
      deleteButton.className = "categoria__columna--eliminar";
      deleteButton.id = categoria.id;
      deleteButton.onclick = () => eliminar(categoria);
  
      const listItem = document.createElement('li');
      listItem.textContent = categoria.nombre;
      listItem.appendChild(deleteButton);
  
      lista.appendChild(listItem);

      //select en movimientos
        let newSelectElement = '<li class="mdc-list-item" aria-selected="false" data-value="' + categoria.nombre.toString() + '" role="option">' + '<span class="mdc-list-item__ripple"></span>' + '<span class="mdc-list-item__text">' + categoria.nombre.toString() + '</span>' + '</li>';
        document.getElementById('seleccionar-categoria-select').innerHTML += newSelectElement;
    })
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