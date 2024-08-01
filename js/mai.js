// Datos a ingresar por el usuario
function capturarDatos() {
    let nombre = prompt("Ingrese su nombre:");
    let apellido = prompt("Ingrese su apellido:");
    let cantidad = parseFloat(prompt("Ingrese la cantidad de dinero solicitada:"));
    return { nombre, apellido, cantidad };
}

// Función para calcular el interés
function calcularInteres(cantidad) {
    const tasaInteres = 0.05; // 5% de interés
    return cantidad * tasaInteres;
}

// Función para simular prestamo
function simularPrestamo() {
    let datos = capturarDatos();
    let interes = calcularInteres(datos.cantidad);
    let totalPagar = datos.cantidad + interes;

    alert(`Nombre: ${datos.nombre} ${datos.apellido}\nCantidad solicitada: $${datos.cantidad.toFixed(2)}\nInterés: $${interes.toFixed(2)}\nTotal a pagar: $${totalPagar.toFixed(2)}`);
}

// Array para almacenar los datos de los préstamos
let prestamos = [];

// Agregar prestamo al array
function agregarPrestamo(prestamo, array) {
    array.push(prestamo);
}

// Ciclo para simular múltiples préstamos
for (let i = 0; i < 3; i++) {
    let prestamo = capturarDatos();
    agregarPrestamo(prestamo, prestamos);
}

// Mostrar todos los préstamos
prestamos.forEach(prestamo => {
    let interes = calcularInteres(prestamo.cantidad);
    let totalPagar = prestamo.cantidad + interes;

    alert(`Nombre: ${prestamo.nombre} ${prestamo.apellido}\nCantidad solicitada: $${prestamo.cantidad.toFixed(2)}\nInterés: $${interes.toFixed(2)}\nTotal a pagar: $${totalPagar.toFixed(2)}`);
});