//logica
let userName = "empty";
let age = "empty";
let address = "empty";
let maritalStatus = "empty";
let dni = "empty";
let phoneNumber = "empty";
let email = "empty";
let income = "empty";

function registerName() {
  userName = prompt("Ingrese su nombre");
  age = prompt("Ingresa tu edad");
  address = prompt("Ingresa tu dirección de residencia");
  maritalStatus = prompt("Ingresa tu estado civil");
  dni = prompt("Ingresa tu numero de identificación");
  phoneNumber = prompt("Ingresa tu número de celular");
  email = prompt("Ingresa tu correo electornico");
  income = prompt("Ingresa tu salary en USD");
}

function showName() {
  alert(
    "Tu nombre ingresado es: " +
      userName +
      "\nTu edad es: " +
      age +
      "\nTu dirección es: " +
      address +
      "\nEstado civil: " +
      maritalStatus +
      "\nTu número de documento es: " +
      dni +
      "\nTu número de celular es: " +
      phoneNumber +
      "\nCorreo electronico: " +
      email +
      "\nEl valor de tu salario es: " +
      income
  );
}
