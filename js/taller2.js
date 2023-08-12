let state = prompt("Ingresa un departamento de Colombia");
if (state === null || state === "") {
  alert("Error, ingresa un dato valido");
} else {
  state = state.toLowerCase();
  if (
    state === "cundinamarca" ||
    state === "quindio" ||
    state === "antioquia" ||
    state === "valle"
  ) {
    if (state === "cundinamarca") {
      alert("La capital de Cundinamarca es: Bogotá");
    } else {
      if (state === "quindio") {
        alert("La capital de Quindio es: Armenia");
      } else {
        if (state === "antioquia") {
          alert("La capital de Antioquia es: Medellin");
        } else {
          if (state === "valle") {
            alert("La capital del valle es: Cali");
          } 
        }
      }
    }
  } else {
    alert("Valor ingresado no es valido, por favor volver a intentarlo");
  }
}
