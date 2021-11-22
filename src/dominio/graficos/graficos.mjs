// Grafico de categorias
export const verificarMesYAnio = (m, anio, mes) => {
  const fechaMovimiento = new Date(m.fecha);
  const diaMovimiento = fechaMovimiento.getDate();
  const mesMovimiento = diaMovimiento === 31 ? fechaMovimiento.getMonth() + 1 : fechaMovimiento.getMonth();
  const anioMovimiento = fechaMovimiento.getFullYear();

  return mesMovimiento === mes && anioMovimiento === anio;
}

const getCategorias = (movimientos, categoriasTotales) => {
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

  return categorias;
}

export const getCategoriasData = (listaCategorias, listaMovimientos) => {
  const categoriasTotales = listaCategorias.filter(categoria => categoria.tipo.toUpperCase() === 'EGRESO');
  const movimientos = listaMovimientos.filter(movimiento => movimiento.tipo.toUpperCase() === 'EGRESO');
  const categorias = getCategorias(movimientos, categoriasTotales);

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
    backgroundColor.push(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
  };

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

// Gráfico de balance
const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

export const getBalanceData = (listaMovimientos) => {
  const labels = [];
  const data = [];
  const backgroundColor = [];

  let fechaInicio = new Date();
  fechaInicio.setMonth(fechaInicio.getMonth() - 12);

  for (let i = 0; i <= 12; i++) {
    const anio = fechaInicio.getFullYear();
    const mes = fechaInicio.getMonth();

    labels.push(MESES[mes]);
    fechaInicio.setMonth(mes + 1);

    const movimientosDelMes = listaMovimientos.filter(m => verificarMesYAnio(m, anio, mes));

    let valor = 0;
    movimientosDelMes.forEach(mm => {
      if (mm.tipo.toUpperCase() === 'EGRESO') {
        valor = valor - mm.valor;
      } else {
        valor = valor + mm.valor;
      }
    })

    data.push(valor);

    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
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
    ]
  }
}