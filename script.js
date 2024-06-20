const nombre = prompt("Ingrese su nombre:");
const edad = prompt("Ingrese su edad:");
const fechaDeNacimiento = prompt("Ingrese su año de nacimiento:");
const diasDeNacimiento = (2024 - fechaDeNacimiento) * 365;

alert("Nombre: " + nombre + "\nEdad: " + edad + "\nFecha de Nacimiento: " + fechaDeNacimiento + "\nDías vividos aproximados: " + diasDeNacimiento);