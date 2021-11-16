export const cuentas = [
    {id: 1, nombre: 'Provincial', denominacion: 'Bs.'},
    {id: 2, nombre: 'Bancamiga', denominacion: 'Bs.'},
    {id: 3, nombre: 'Caja Bs.', denominacion: 'Bs.'},
    {id: 4, nombre: 'Caja USD', denominacion: 'USD'},
    {id: 5, nombre: 'Caja EUR', denominacion: 'EUR'},
    {id: 6, nombre: 'Bofa', denominacion: 'USD'},
    {id: 7, nombre: 'Caja Valencia bs', denominacion: 'Bs.'},
    {id: 8, nombre: 'Caja Valencia USD', denominacion:'USD' },
    {id: 9, nombre: 'Caja Valencia EUR', denominacion: 'EUR'},
    {id: 10, nombre: 'Caja Cagua bs', denominacion: 'Bs.'},
    {id: 11, nombre: 'Caja Cagua USD', denominacion: 'USD'},
    {id: 12, nombre: 'Caja Cagua EUR', denominacion: 'EUR'},
]

// export const denominacion

export const denominaciones = [
    {id: 1, nombre: 'Bs.'},
    {id: 2, nombre: 'USD'},
    {id: 3, nombre: 'EUR'},
]

export const fechaActual=()=>{
    let fechaActual = new Date();
    let dia = fechaActual.getDate() < 10 ? '0' + fechaActual.getDate() : fechaActual.getDate()
    let mes = fechaActual.getMonth() < 10 ? '0' + fechaActual.getMonth() : fechaActual.getMonth()
    return fechaActual.getFullYear() + '-' + mes + '-' + dia
}