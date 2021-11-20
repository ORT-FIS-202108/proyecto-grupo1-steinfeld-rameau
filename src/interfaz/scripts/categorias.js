import { MDCSnackbar } from '@material/snackbar';

import ListaCategorias from '../../dominio/lista-categorias.mjs';
import Categoria from '../../dominio/categoria.mjs';

export const listaCategorias = new ListaCategorias();

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
        }
}

const eliminar = (categoria) => {
    listaCategorias.eliminar(categoria);
    listarCategorias();
}