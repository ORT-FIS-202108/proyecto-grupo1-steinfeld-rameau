import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

import { listaCategorias } from './categorias';
import { listaMovimientos } from './movimientos';
import { getCategoriasData, getBalanceData } from '../../dominio/graficos/graficos.mjs';

let graficoBalance = null;
let graficoEgresos = null;

export const crearGraficoCategorias = (ctx) => {
  graficoEgresos?.destroy();

  graficoEgresos = new Chart(ctx, {
    type: 'pie',
    data: getCategoriasData(listaCategorias.getCategorias(), listaMovimientos.getMovimientos())
  });
}

  export const crearGraficoBalance = (ctx) => {
    graficoBalance?.destroy();
    graficoBalance = new Chart(ctx, {
      type: 'bar',
      data: getBalanceData(listaMovimientos.getMovimientos())
    });
  }