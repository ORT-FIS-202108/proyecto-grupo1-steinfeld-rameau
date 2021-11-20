import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import { listaCategorias } from './categorias';

const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

const movimientosMock = [
  {nombre: "Compra Disco", tipo: "egreso", categoria: "supermercado", valor: 300, fecha: '2020-11-02'},
  {nombre: "Compra Tata", tipo: "egreso", categoria: "supermercado", valor: 3900, fecha: '2020-02-02'},
  {nombre: "Compra Tienda", tipo: "egreso", categoria: "ropa", valor: 1200, fecha: '2020-012-02'},
  {nombre: "Compra geant", tipo: "egreso", categoria: "supermercado", valor: 1300, fecha: '2020-02-02'},
]

let graficoBalance = null;
let graficoEgresos = null;
let graficoIngresos = null;

const getCategoriasData = (tipo) => {
  const categoriasTotales = listaCategorias.getCategorias().filter(categoria => categoria.tipo === tipo);
  const movimientos = movimientosMock.filter(movimiento => movimiento.tipo = tipo);
  const categorias = [];

  movimientos.forEach(movimiento => {
    const nombre = movimiento.categoria;
    const valor = movimiento.valor;

    if (categoriasTotales.find(cat => cat.nombre === nombre)) {
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
          color: categoriasTotales.find(c => c.nombre === nombre)?.color,
          valor
        })
      }
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
          label: tipo,
          backgroundColor
        }
      ]}
}

export const crearGraficoCategorias = (ctx, tipo) => {
  graficoEgresos?.destroy();
  graficoIngresos?.destroy();

  const grafico = new Chart(ctx, {
    type: 'pie',
    data: getCategoriasData(tipo)
  });
  
  if (tipo === 'egresos') {
    graficoEgresos = grafico;
  } else {
    graficoIngresos = grafico;
  } 
}

const getBalanceData = () => {
  const labels = [];
  const data = [];
  const backgroundColor = [];
  
  let fechaInicio = new Date();
  fechaInicio.setMonth(fechaInicio.getMonth() - 12);

  for(let i = 0; i <= 12; i++) {
    debugger
    const anio = fechaInicio.getFullYear();
    const mes = fechaInicio.getMonth();
    
    labels.push(MONTHS[mes]);
    fechaInicio.setMonth(mes + 1);

    const check = (m, anio, mes) => {
      const fechaMovimiento = new Date(m.fecha);
      const mesMovimiento = fechaMovimiento.getMonth();
      const anioMovimiento = fechaMovimiento.getFullYear();

      return mesMovimiento === mes && anioMovimiento === anio;
    }

    const movimientosDelMes = movimientosMock.filter(m => check(m, anio, mes));
    
    let valor = 0;
    movimientosDelMes.forEach(mm => {
      valor = valor + mm.valor;
    })

    data.push(valor);
  
    const color = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    backgroundColor.push(color);
    
  }
  
  return {
    labels, 
    datasets: [
      {
        data, 
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
        backgroundColor
      }
    ]}
}

  export const crearGraficoBalance = (ctx) => {
    graficoBalance?.destroy();
    graficoBalance = new Chart(ctx, {
      type: 'bar',
      data: getBalanceData()
    });
  }