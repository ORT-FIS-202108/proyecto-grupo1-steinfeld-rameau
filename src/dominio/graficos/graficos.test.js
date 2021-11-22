import Movimiento from '../movimientos/movimiento.mjs';
import Categoria from '../categorias/categoria.mjs';

import { verificarMesYAnio, getCategoriasData, getBalanceData } from './graficos.mjs';

describe('Graficos', () => {
    const categoria_0 = new Categoria('Supermercado', 'egreso', 0);
    const categoria_1 = new Categoria('Tiendas', 'egreso', 1);
    const categoria_2 = new Categoria('Sueldo', 'ingreso', 2);

    const movimiento_0 = new Movimiento('Compra en super', 'supermercado', 'egreso', '2020-11-31', 1200, 0);
    const movimiento_1 = new Movimiento('Compra en shoping', 'tiendas', 'egreso', '2021-10-02', 4200, 1);
    const movimiento_2 = new Movimiento('Sueldo', 'sueldo', 'ingreso', '2021-03-10', 40000, 2);
    const movimiento_3 = new Movimiento('Regalos navidad', 'tiendas', 'egreso', '2020-12-24', 5000, 3);
    const movimiento_4 = new Movimiento('Ropa para fiesta', 'tiendas', 'egreso', '2020-11-01', 15000, 4);

    test('verificarMesYAnio ---> Verificar mes y año de un movimiento (true)', () => {
        const res = verificarMesYAnio(movimiento_0, 2020, 10);
        expect(res).toBe(true);
    });
    test('verificarMesYAnio ---> Verificar mes y año de un movimiento (primer dia del mes)', () => {
        const res = verificarMesYAnio(movimiento_4, 2020, 10);
        expect(res).toBe(true);
    });
    test('verificarMesYAnio ---> Verificar mes y año de un movimiento (false)', () => {
        const res = verificarMesYAnio(movimiento_0, 2020, 1);
        expect(res).toBe(false);
    });
    test('getCategoriasData ---> Obtener datos para renderizar gráfico de torta (categorías)', () => {
        const { labels, datasets } = getCategoriasData([categoria_0, categoria_1, categoria_2], [movimiento_0, movimiento_1, movimiento_2, movimiento_3]);

        expect(labels.length).toBe(2);
        expect(labels[0]).toBe('supermercado');
        expect(labels[1]).toBe('tiendas');

        expect(datasets[0].label).toBe('Egresos');
        expect(datasets[0].data[0]).toBe(1200);
        expect(datasets[0].data[1]).toBe(9200);
    });
    test('getCategoriasData ---> Obtener datos para renderizar gráfico de torta (vacío)', () => {
        const { labels, datasets } = getCategoriasData([], []);

        expect(labels.length).toBe(1);
        expect(labels[0]).toBe('Sin datos');

        expect(datasets[0].label).toBe('Egresos');
        expect(datasets[0].data[0]).toBe(0);
    });
    test('getCategoriasData ---> Obtener datos para renderizar gráfico de torta (sin categorías)', () => {
        const { labels, datasets } = getCategoriasData([], [movimiento_0, movimiento_1, movimiento_2, movimiento_3]);

        expect(labels.length).toBe(1);
        expect(labels[0]).toBe('Sin datos');

        expect(datasets[0].label).toBe('Egresos');
        expect(datasets[0].data[0]).toBe(0);
    });
    test('getBalanceData ---> Obtener datos para renderizar gráfico de balance', () => {
        const { labels, datasets } = getBalanceData([movimiento_0, movimiento_1, movimiento_2, movimiento_3]);

        expect(labels.length).toBe(13);
        expect(labels[0]).toBe('Noviembre');
        expect(labels[12]).toBe('Noviembre');

        expect(datasets[0].label).toBe('Balance');
        expect(datasets[0].data[0]).toBe(-1200);
        expect(datasets[0].data[1]).toBe(-5000);
        expect(datasets[0].data[4]).toBe(40000);
        expect(datasets[0].data[11]).toBe(-4200);
    });
})