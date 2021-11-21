import Movimiento from './movimiento.mjs';
import ListaMovimientos from './lista-movimientos.mjs';

describe('Movimientos', () => {
    const LC = new ListaMovimientos();

    const movimiento_0 = new Movimiento('Supermercado', 'Alimentos', 'Egreso', '10/11/2021', 200, 0);
    const movimiento_1 = new Movimiento('Remera', 'Ropa', 'Egreso', '11/11/2021', 500, 1);
    const movimiento_2 = new Movimiento('Sueldo', 'Sueldo', 'Ingreso', '11/11/2021', 1500, 2);

    test('agregar ---> Agregar movimiento inexistente', () => {
        LC.agregar(movimiento_0);
        const movimiento = LC.getMovimientos().find(m => m.id === movimiento_0.id);
        expect(movimiento).not.toBe(null);
    });
    test('agregar ---> Agregar movimiento existente', () => {
        const agregarExistente = () => LC.agregar(movimiento_0);
        expect(agregarExistente).toThrowError(`No se pudo agregar. Por favor ingresar todos los campos del formulario.`);
    });
    test('getMovimientos ---> Obtener movimientos', () => {
        const movimientos = LC.getMovimientos();
        expect(movimientos.length).toBe(1);
    });
    test('setMovimientos ---> Set de movimientos', () => {
        const movimientosNuevas = [movimiento_1, movimiento_2];
        LC.setMovimientos(movimientosNuevas);
        const movimientos = LC.getMovimientos();
        expect(movimientos.length).toBe(2);
        expect(movimientos[0].nombre).toBe(movimiento_1.nombre);
        expect(movimientos[1].nombre).toBe(movimiento_2.nombre);
    });
    test('eliminar ---> Eliminar movimiento', () => {
        LC.eliminar(movimiento_1);
        const movimiento = LC.getMovimientos().find(c => c.id === movimiento_1.id);
        expect(movimiento).toBe(undefined);
    });
})