## Instalación

Descargar la ultima versión estable de Node.JS de https://nodejs.org/.
Instalar en la computadora de desarollo.

Abrir la terminal en la carpeta raíz del proyecto.
Ejecutar el comando `npm install` en las subcarpetas src/dominio y src/interfaz:
```
cd src 
cd dominio
npm install
cd ..
cd interfaz
npm install
```
Para ejecutar la aplicación y acceder a la interfaz de usuario en modo desarrollo:
```
cd src
cd interfaz
npm run dev
```
Para ejecutar la aplicación y acceder a la interfaz de usuario en modo produccion:
```
cd src
cd interfaz
npm run build
```

Una vez hecho esto se va a abrir una pestaña del navegador con el servidor localhost:8080.
La diferencia entre el ambiente de desarrollo y produccion es que en el ultimo los archivos js y css estan mimificados y sin comentarios y en el otro hay comentarios y esos archivos estan indentados.
