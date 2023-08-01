function obtenerValorNoNumerico(promptMessage) {
  let valor;
  do {
    // Solicitar al usuario que ingrese el valor (nombre o apellido)
    valor = prompt(promptMessage);

    // Verificar si el valor está vacío
    if (valor === '') {
      alert('El valor no puede estar vacío. Por favor, ingresa un valor.');
    } else if (!isNaN(valor)) {
      // Verificar si el valor es numérico y mostrar un mensaje de error
      alert('No puedes ingresar un número. Por favor, ingresa un valor.');
    }
  } while (valor === '' || !isNaN(valor));

  // El ciclo se detendrá cuando tengamos un valor no numérico en la variable 'valor'
  return valor;
}

function obtenerValorNumerico(promptMessage) {
  let valor;

  do {
    valor = prompt(promptMessage);

    // Verificar si el valor está vacío
    if (valor === '') {
      alert('El valor no puede estar vacío. Por favor, ingresa un número.');
    } else if (isNaN(valor)) {
      // Verificar si el valor NO es numérico y mostrar un mensaje de error
      alert('Debes ingresar un número válido. Por favor, ingresa un número.');
    }
  } while (valor === '' || isNaN(valor));

  // El ciclo se detendrá cuando tengamos un valor numérico en la variable 'valor'
  return valor;
}

let nombre = obtenerValorNoNumerico("Ingresa tu nombre:");
let apellido = obtenerValorNoNumerico("Ingresa tu apellido:");
let dni = obtenerValorNumerico("Ingresa tu DNI:");
let nacimiento = obtenerValorNumerico("Ingresa tu fecha de nacimiento (ejemplo: 01/01/2023):");
let edad = obtenerValorNumerico("Ingresa tu edad:");
let pais = obtenerValorNoNumerico("¿Cuál es tu país?");
let provincia = obtenerValorNoNumerico("¿Cuál es tu provincia?");
let ciudad = obtenerValorNoNumerico("¿Cuál es tu ciudad?");
let direccion = obtenerValorNoNumerico("Ingresa la dirección de tu hogar:");
let mail = obtenerValorNoNumerico("Ingresa tu correo electrónico:");
let telefono = obtenerValorNumerico("Ingresa tu número de celular:");
let cargo = obtenerValorNoNumerico("¿Cuál es tu cargo?");
let numeroCargo = obtenerValorNumerico("Ingresa el número de cargo:");
let inicioLaboral = obtenerValorNumerico("Ingresa la fecha en la que iniciaste laboralmente (ejemplo: 01/01/2023):");
let obraSocial = obtenerValorNoNumerico("¿Cuál es tu obra social?");
let numeroObraSocial = obtenerValorNumerico("Ingresa el número de la obra social:");

// pedido de realizar una nueva consulta !!crear Funcion

function realizarNuevaConsulta() {
  alert("perfecto , generando una nueva consulta")
  nombre = obtenerValorNoNumerico("Ingresa tu nombre:");
  apellido = obtenerValorNoNumerico("Ingresa tu apellido:");
  dni = obtenerValorNumerico("Ingresa tu DNI:");
  nacimiento = obtenerValorNumerico("Ingresa tu fecha de nacimiento (ejemplo: 01/01/2023):");
  edad = obtenerValorNumerico("Ingresa tu edad:");
  pais = obtenerValorNoNumerico("¿Cuál es tu país?");
  provincia = obtenerValorNoNumerico("¿Cuál es tu provincia?");
  ciudad = obtenerValorNoNumerico("¿Cuál es tu ciudad?");
  direccion = obtenerValorNoNumerico("Ingresa la dirección de tu hogar:");
  mail = obtenerValorNoNumerico("Ingresa tu correo electrónico:");
  telefono = obtenerValorNumerico("Ingresa tu número de celular:");
  cargo = obtenerValorNoNumerico("¿Cuál es tu cargo?");
  numeroCargo = obtenerValorNumerico("Ingresa el número de cargo:");
  inicioLaboral = obtenerValorNumerico("Ingresa la fecha en la que iniciaste laboralmente (ejemplo: 01/01/2023):");
  obraSocial = obtenerValorNoNumerico("¿Cuál es tu obra social?");
  numeroObraSocial = obtenerValorNumerico("Ingresa el número de la obra social:");
}

//aqui debo realizar la funcion que capture los datos del formulario 


const cargar = document.getElementById("btnEnviarDatos").addEventListener("click", cargarDatos);
function cargarDatos() {
  function Trabajador(nombre, apellido, dni, nacimiento, edad, pais, provincia, ciudad, direccion, mail, telefono, cargo, numeroCargo, inicioLaboral, obraSocial, numeroObraSocial) {
    this.nombre = nombre,
      this.apellido = apellido,
      this.dni = dni,
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
  nombre = nombre;
  apellido = apellido;
  dni = dni
  nacimiento = nacimiento;
  edad = edad;
  pais = pais;
  provincia = provincia;
  ciudad = ciudad;
  direccion = direccion;
  mail = mail
  telefono = telefono;
  cargo = cargo;
  numeroCargo = numeroCargo;
  inicioLaboral = inicioLaboral;
  obraSocial = obraSocial;
  numeroObraSocial = numeroObraSocial;


  nuevaConsulta = new Trabajador(nombre, apellido, dni, nacimiento, edad, pais, provincia, ciudad, direccion, mail, telefono, cargo, numeroCargo, inicioLaboral, obraSocial, numeroObraSocial);
  agregar();
}
function newConstult(confirmacion) {
  confirmacion = prompt("¿deseas realizar una nueva consulta? - escribe si o no.")
  while (confirmacion !== "si" && confirmacion !== "no")
    confirmacion = prompt("debes escribir si o no.")
  if (confirmacion === "si") {
    realizarNuevaConsulta()
  } else {
    alert("Muchas gracias, fin del proceso")
  }
}
var baseDeDatos = [];
function agregar() {
  baseDeDatos.push(nuevaConsulta);
  console.log(baseDeDatos);
  document.getElementById("tabla1").innerHTML += `<tbody><td>` + nuevaConsulta.nombre + `</td><td>` + nuevaConsulta.apellido + `</td><td>` + nuevaConsulta.dni + `</td><td>` + nuevaConsulta.nacimiento + `</td><td>` + nuevaConsulta.edad + `</td><td>` + nuevaConsulta.pais + `</td><td>` + nuevaConsulta.provincia + `</td><td>` + nuevaConsulta.ciudad + `</td><td>` + nuevaConsulta.direccion + `</td><td>` + nuevaConsulta.mail + `</td><td>` + nuevaConsulta.telefono + `</td></tbody>`
  document.getElementById("tabla2").innerHTML += `<tbody><td>` + nuevaConsulta.cargo + `</td><td>` + nuevaConsulta.numeroCargo + `</td><td>` + nuevaConsulta.inicioLaboral + `</td><td>` + nuevaConsulta.obraSocial + `</td><td>` + nuevaConsulta.numeroObraSocial + `</td></tbody>`
}
function resetear2(e) {
  e.preventDefault(); // Evitar el restablecimiento del formulario
  document.querySelectorAll('input[type="text"], input[type="password"]').forEach(input => input.value = '');
  alert(`Decidiste Cancelar. Gracias`); newConstult();
}


const cancelar2 = document.getElementById("btnCancelar2").addEventListener("click", resetear2);
const otraConsulta = document.getElementById("btnNuevaConsulta").addEventListener("click", newConstult)

// AQUI HARE UNOS CALCULOS DE LICENCIAS


// // solicitar las licencias disponibles

let ultimaLic = prompt("¿Cuándo fue el ultimo año que te tomaste tus vacaciones?.Indícala en años.");

function calcularVacaciones(ultimaLic) {
  let añosDesdeUltimaLic = 2023 - ultimaLic;
  switch (añosDesdeUltimaLic - 1) {
    case 4:
      return "dispones desde el año 2019 y tienes derecho a 12 días de vacaciones.";
    case 3:
      return "dispones desde el año 2020 y tienes derecho a 14 días de vacaciones.";
    case 2:
      return "dispones desde el año 2021 y tienes derecho a 16 días de vacaciones.";
    case 1:
      return "dispones desde el año 2022 y tienes derecho a 18 días de vacaciones.";
    case 0:
      return "dispones desde el año 2023 y tienes derecho a 20 días de vacaciones.";
    default:
      return "No se pudo determinar la cantidad de días de vacaciones. ten en cuenta que las licencias disponibles son a partir de 2018 las anteriores estan vencidas";
  }
}
let vacaciones = calcularVacaciones(ultimaLic);
console.log(vacaciones);
alert("Conclusion " + nombre + " " + apellido + " Cargo Nº: " + numeroCargo + " Indicaste que te tomaste la licencia del año: " + ultimaLic + " y " + vacaciones + "!!!");


let confirmacion = prompt("¿Desea tomar la licencia? Ingrese Si o No");
let mesElejido;
// Repetimos hasta que se ingresa "si" o "no"
while (confirmacion !== "si" && confirmacion !== "no") {
  alert("Opción inválida. Por favor, ingrese Si o No.");
  confirmacion = prompt("¿Desea tomar la licencia? Ingrese Si o No");

}
function terminar(confirmacion) {
  if (confirmacion === "no") {
    console.log("Fin del proceso");
  }
}
function elegirMes(confirmacion) {
  if (confirmacion === "si") {
    mesElejido = prompt("Elige un mes");
    if (
      mesElejido === "enero" ||
      mesElejido === "febrero  " ||
      mesElejido === "marzo" ||
      mesElejido === "abril" ||
      mesElejido === "mayo " ||
      mesElejido === "junio " ||
      mesElejido === "julio " ||
      mesElejido === "agosto " ||
      mesElejido === "septiembre  " ||
      mesElejido === "octubre " ||
      mesElejido === "noviembre " ||
      mesElejido === "diciembre "
    ) {
      return mesElejido;
    } else {
      return elegirMes(confirmacion); // Llama a la función nuevamente si el mes no es válido //
    }
  }
}

mesElejido = elegirMes(confirmacion);
terminar();
alert("tu confirmacion es " + confirmacion + " para hacer uso de tus licencias, " + vacaciones);


alert("perfecto, elejiste el mes de " + mesElejido);

let concatenadoFinal = document.getElementById("textFinal").innerText += ` resultado Final vas a salir de licencia el mes de "${mesElejido} ${vacaciones}`