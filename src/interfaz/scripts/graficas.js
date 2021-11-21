import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import { listaCategorias } from './categorias';
import { listaMovimientos } from './movimientos';

const MONTHS = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

let graficoBalance = null;
let graficoEgresos = null;

const verificarMesYAnio = (m, anio, mes) => {
  const fechaMovimiento = new Date(m.fecha);
  const mesMovimiento = fechaMovimiento.getMonth();
  const anioMovimiento = fechaMovimiento.getFullYear();

  return mesMovimiento === mes && anioMovimiento === anio;
}

const getCategoriasData = () => {
  const categoriasTotales = listaCategorias.getCategorias().filter(categoria => categoria.tipo.toUpperCase() === 'EGRESO');
  const movimientos = listaMovimientos.getMovimientos().filter(movimiento => movimiento.tipo.toUpperCase() === 'EGRESO');
  const categorias = [];

  movimientos.forEach(movimiento => {
    const nombre = movimiento.categoria;
    const valor = movimiento.valor;

    if (categoriasTotales.find(cat => cat.nombre.toUpperCase() === nombre.toUpperCase())) {
      const categoriaExistente = categorias.find(cat => cat.nombre.toUpperCase() === nombre.toUpperCase())

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
          color: categoriasTotales.find(c => c.nombre.toUpperCase() === nombre.toUpperCase())?.color,
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

  if (data.length === 0) {
    labels.push("Sin datos");
    data.push(0);
    backgroundColor.push(`#${Math.floor(Math.random()*16777215).toString(16)}`);
  }

  return {
      labels, 
      datasets: [
        {
          data, 
          label: 'Egresos',
          backgroundColor
        }
      ]
    }
}

export const crearGraficoCategorias = (ctx) => {
  graficoEgresos?.destroy();

  graficoEgresos = new Chart(ctx, {
    type: 'pie',
    data: getCategoriasData()
  });
}

const getBalanceData = () => {
  const labels = [];
  const data = [];
  const backgroundColor = [];
  
  let fechaInicio = new Date();
  fechaInicio.setMonth(fechaInicio.getMonth() - 12);

  for(let i = 0; i <= 12; i++) {
    const anio = fechaInicio.getFullYear();
    const mes = fechaInicio.getMonth();
    
    labels.push(MONTHS[mes]);
    fechaInicio.setMonth(mes + 1);

    const movimientosDelMes = listaMovimientos.getMovimientos().filter(m => verificarMesYAnio(m, anio, mes));
    
    let valor = 0;
    movimientosDelMes.forEach(mm => {
      if (mm.tipo.toUpperCase() === 'EGRESO') {
        valor = valor - mm.valor;
      } else {
        valor = valor + mm.valor;
      }
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
        label: 'Balance',
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