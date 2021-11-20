import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import { listaCategorias } from './categorias';

const movimientosMock = [
  {nombre: "Compra Disco", tipo: "egreso", categoria: "supermercado", valor: 300},
  {nombre: "Compra Tata", tipo: "egreso", categoria: "supermercado", valor: 3900},
  {nombre: "Compra Tienda", tipo: "egreso", categoria: "ropa", valor: 1200},
  {nombre: "Compra geant", tipo: "egreso", categoria: "supermercado", valor: 1300},
]

const getCategoriasData = (tipo) => {
  const categoriasTotales = listaCategorias.getCategorias().filter(categoria => categoria.tipo === tipo);
  const movimientos = movimientosMock.filter(movimiento => movimiento.tipo = tipo);
  const categorias = [];

  movimientos.forEach(movimiento => {
    const nombre = movimiento.categoria;
    const valor = movimiento.valor;

    const categoriaExistente = categorias.find(cat => cat.nombre === nombre)

    if (!!categoriaExistente) {
      categorias.forEach((c, indice) => {
        if (c.nombre === nombre) {
          categorias[indice] = {
            ...c,
            valor: c.valor + valor
          }
        }
      })
    } else {
      categorias.push({
        nombre,
        color: categoriasTotales.find(c => c.nombre === nombre).color,
        valor
      })
    }
  })


  const labels = [];
  const data = [];
  const backgroundColor = [];
  
  
  categorias.forEach(categoria => {
    labels.push(categoria.nombre);
    data.push(categoria.valor);
    backgroundColor.push(categoria.color);
  });

  return {
      labels, 
      datasets: [
        {
          data, 
          backgroundColor
        }
      ]}
}

export const crearGraficoCategorias = (ctx, tipo) => {
    new Chart(ctx, {
        id: `categoria-${tipo}`,
        type: 'pie',
        data: getCategoriasData(tipo)
    });
}



const data = {
  labels: ["may", "may", "may", "may", "may", "may", "may"],
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    backgroundColor: [
      'rgba(255, 99, 132, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 205, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(201, 203, 207, 0.2)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(255, 159, 64)',
      'rgb(255, 205, 86)',
      'rgb(75, 192, 192)',
      'rgb(54, 162, 235)',
      'rgb(153, 102, 255)',
      'rgb(201, 203, 207)'
    ],
    borderWidth: 1
  }]
};

const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };

  export const crearGraficoBalance = (ctx) => {
    new Chart(ctx, config);
}