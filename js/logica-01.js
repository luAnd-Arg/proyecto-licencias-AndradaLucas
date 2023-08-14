
// pedido de realizar una nueva consulta !!crear Funcion
//aqui debo realizar la funcion que capture los datos del formulario 
// Define la clase Empleado
class Empleado {
  constructor(nombre, apellido, dni, nacimiento, edad, pais, provincia, ciudad, direccion, mail, telefono, cargo, numeroCargo, inicioLaboral, obraSocial, numeroObraSocial) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.nacimiento = nacimiento;
    this.edad = edad;
    this.pais = pais;
    this.provincia = provincia;
    this.ciudad = ciudad;
    this.direccion = direccion;
    this.mail = mail;
    this.telefono = telefono;
    this.cargo = cargo;
    this.numeroCargo = numeroCargo;
    this.inicioLaboral = inicioLaboral;
    this.obraSocial = obraSocial;
    this.numeroObraSocial = numeroObraSocial;
  }
}

let empleados = []; // Array para almacenar objetos Empleado

function consulta() {
  const nombre = document.getElementById("inputNombre").value;
  const apellido = document.getElementById("inputApellido").value;
  const dni = document.getElementById("inputDni").value;
  const nacimiento = document.getElementById("inputNacimiento").value;
  const edad = document.getElementById("inputEdad").value;
  const pais = document.getElementById("inputPais").value;
  const provincia = document.getElementById("inputProvincia").value;
  const ciudad = document.getElementById("inputCiudad").value;
  const direccion = document.getElementById("inputDireccion").value;
  const mail = document.getElementById("inputMail").value;
  const telefono = document.getElementById("inputTelefono").value;
  const cargo = document.getElementById("inputCargo").value;
  const numeroCargo = document.getElementById("inputNumeroCargo").value;
  const inicioLaboral = document.getElementById("inputInicioLaboral").value;
  const obraSocial = document.getElementById("inputObraSocial").value;
  const numeroObraSocial = document.getElementById("inputNumeroObraSocial").value;
  // Crea un nuevo objeto Empleado
  const nuevoEmpleado = new Empleado(
    nombre,
    apellido,
    dni,
    nacimiento,
    edad,
    pais,
    provincia,
    ciudad,
    direccion,
    mail,
    telefono,
    cargo,
    numeroCargo,
    inicioLaboral,
    obraSocial,
    numeroObraSocial
  );

  // Agrega el nuevo empleado al array
  empleados.push(nuevoEmpleado);

 // Imprimir en el DOM
 tabla1 = document.getElementById("tabla1");
 tabla2 = document.getElementById("tabla2");
 tabla3 = document.getElementById("tabla3");

 const fila1 = tabla1.insertRow();
 const fila2 = tabla2.insertRow();
 const fila3 = tabla3.insertRow();

 const celdaNombre = fila1.insertCell(0);
 const celdaApellido = fila1.insertCell(1);
 const celdaDNI = fila1.insertCell(2);
 const celdaNacimiento = fila1.insertCell(3);
 const celdaEdad = fila1.insertCell(4);

 celdaNombre.textContent = nuevoEmpleado.nombre;
 celdaApellido.textContent = nuevoEmpleado.apellido;
 celdaDNI.textContent = nuevoEmpleado.dni;
 celdaNacimiento.textContent = nuevoEmpleado.nacimiento;
 celdaEdad.textContent = nuevoEmpleado.edad;

 const celdaPais = fila2.insertCell(0);
 const celdaProvincia = fila2.insertCell(1);
 const celdaCiudad = fila2.insertCell(2);
 const celdaDireccion = fila2.insertCell(3);
 const celdaMail = fila2.insertCell(4);
 const celdaTelefono = fila2.insertCell(5);

 celdaPais.textContent = nuevoEmpleado.pais;
 celdaProvincia.textContent = nuevoEmpleado.provincia;
 celdaCiudad.textContent = nuevoEmpleado.ciudad;
 celdaDireccion.textContent = nuevoEmpleado.direccion;
 celdaMail.textContent = nuevoEmpleado.mail;
 celdaTelefono.textContent = nuevoEmpleado.telefono;

 const celdaCargo = fila3.insertCell(0);
 const celdaNumeroCargo = fila3.insertCell(1);
 const celdaInicioLaboral = fila3.insertCell(2);
 const celdaObraSocial = fila3.insertCell(3);
 const celdaNumeroObraSocial = fila3.insertCell(4);

 celdaCargo.textContent = nuevoEmpleado.cargo;
 celdaNumeroCargo.textContent = nuevoEmpleado.numeroCargo;
 celdaInicioLaboral.textContent = nuevoEmpleado.inicioLaboral;
 celdaObraSocial.textContent = nuevoEmpleado.obraSocial;
 celdaNumeroObraSocial.textContent = nuevoEmpleado.numeroObraSocial;

 console.log(empleados);
 }

function tomarOnclick(){
 consulta();
}

function resetearFormulario() {

  document.getElementById("formDatos").reset();
 // Eliminar Y Restablecer la tabla 
 while (tabla1.rows.length > 1) {
  tabla1.deleteRow(1);
}
while (tabla2.rows.length > 1) {
  tabla2.deleteRow(1);
}
while (tabla3.rows.length > 1) {
  tabla3.deleteRow(1);
}
}

function newConstult(confirmacion) {
  confirmacion = prompt("¿Deseas realizar una nueva consulta? - Escribe si o no.");
  while (confirmacion !== "si" && confirmacion !== "no") {
    confirmacion = prompt("Debes escribir si o no.");
  }
  if (confirmacion === "si") {
    resetearFormulario();
  } else {
    alert("Muchas gracias, fin del proceso");
  }
}

function resetear2() {
  resetearFormulario();
}

const cancelar2 = document.getElementById("btnCancelar2").addEventListener("click", resetear2);
const otraConsulta = document.getElementById("btnNuevaConsulta").addEventListener("click", newConstult);

// ... El resto de tu código ...

// AQUI HARE UNOS CALCULOS DE LICENCIAS


// // solicitar las licencias disponibles

// let ultimaLic = prompt("¿Cuándo fue el ultimo año que te tomaste tus vacaciones?.Indícala en años.");

// function calcularVacaciones(ultimaLic) {
//   let añosDesdeUltimaLic = 2023 - ultimaLic;
//   switch (añosDesdeUltimaLic - 1) {
//     case 4:
//       return "dispones desde el año 2019 y tienes derecho a 12 días de vacaciones.";
//     case 3:
//       return "dispones desde el año 2020 y tienes derecho a 14 días de vacaciones.";
//     case 2:
//       return "dispones desde el año 2021 y tienes derecho a 16 días de vacaciones.";
//     case 1:
//       return "dispones desde el año 2022 y tienes derecho a 18 días de vacaciones.";
//     case 0:
//       return "dispones desde el año 2023 y tienes derecho a 20 días de vacaciones.";
//     default:
//       return "No se pudo determinar la cantidad de días de vacaciones. ten en cuenta que las licencias disponibles son a partir de 2018 las anteriores estan vencidas";
//   }
// }
// let vacaciones = calcularVacaciones(ultimaLic);
// console.log(vacaciones);
// alert("Conclusion " + nombre + " " + apellido + " Cargo Nº: " + numeroCargo + " Indicaste que te tomaste la licencia del año: " + ultimaLic + " y " + vacaciones + "!!!");


// let confirmacion = prompt("¿Desea tomar la licencia? Ingrese Si o No");
// let mesElejido;
// // Repetimos hasta que se ingresa "si" o "no"
// while (confirmacion !== "si" && confirmacion !== "no") {
//   alert("Opción inválida. Por favor, ingrese Si o No.");
//   confirmacion = prompt("¿Desea tomar la licencia? Ingrese Si o No");

// }
// function terminar(confirmacion) {
//   if (confirmacion === "no") {
//     console.log("Fin del proceso");
//   }
// }
// function elegirMes(confirmacion) {
//   if (confirmacion === "si") {
//     mesElejido = prompt("Elige un mes");
//     if (
//       mesElejido === "enero" ||
//       mesElejido === "febrero  " ||
//       mesElejido === "marzo" ||
//       mesElejido === "abril" ||
//       mesElejido === "mayo " ||
//       mesElejido === "junio " ||
//       mesElejido === "julio " ||
//       mesElejido === "agosto " ||
//       mesElejido === "septiembre  " ||
//       mesElejido === "octubre " ||
//       mesElejido === "noviembre " ||
//       mesElejido === "diciembre "
//     ) {
//       return mesElejido;
//     } else {
//       return elegirMes(confirmacion); // Llama a la función nuevamente si el mes no es válido //
//     }
//   }
// }

// mesElejido = elegirMes(confirmacion);
// terminar();
// alert("tu confirmacion es " + confirmacion + " para hacer uso de tus licencias, " + vacaciones);


// alert("perfecto, elejiste el mes de " + mesElejido);

// let concatenadoFinal = document.getElementById("textFinal").innerText += ` resultado Final vas a salir de licencia el mes de "${mesElejido} ${vacaciones}`