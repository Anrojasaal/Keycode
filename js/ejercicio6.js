/**
 * (==) comparamos valores sin importar el tipo de dato
 * (===) comparamos valor y tipo de dato (por seguridad usar siempre ===)
 * (!=) Diferente sin importan tipo de dato
 * (!==) Diferente verificando tipo de dato
 */

const age = prompt("Ingresa tu edad");
const country = prompt("Ingresa tu pais").toLowerCase();
// condicional if / else
console.log(country);
/**
 * (||) operador o
 * (&&) operador y
 */

if (age >= "16" && country != "alemania") {
  alert("Se habilito el catalogo de peliculas violentas");
} else {
  alert("No tienes acceso a este catalogo");
}
