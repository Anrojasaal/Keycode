//Ejercicio de lógica

let day = prompt("Ingresa un día de la semana");

if ((day === null || day === "")) {
  alert("Error en los datos ingresados, vuelva a intentarlo");
} else {
  day = day.toLowerCase();
  if (
    day === "lunes" ||
    day === "martes" ||
    day === "miercoles" ||
    day === "jueves" ||
    day === "viernes"
  ) {
    alert(day + " Es un día entre semana");
  } else {
    if (day === "sabado" || day === "sábado" || day === "domingo") {
      alert(day + " Es un día de fin de semana");
    } else {
      alert("Por favor ingresar datos validos");
    }
  }
}
