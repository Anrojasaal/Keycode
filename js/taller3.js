let state = "";
let purpose = "";

function data() {
  state = prompt(
    "Ingresa algunos de los siguientes departamentos:" +
      "\n- Cundinamarca" +
      "\n- Quindio" +
      "\n- Antioquia" +
      "\n- Valle"
  );
  purpose = prompt(
    "Ingresa tu obejtivo de visita:" +
      "\n- Turismo" +
      "\n- Comida" +
      "\n- Museos"
  );
  if (state === null || state === "" || purpose === null || purpose === "") {
    alert(
      "Oh oh, por favor verifica los datos ingresados e intenta nuevamente."
    );
  } else {
    state = state.toLowerCase();
    purpose = purpose.toLowerCase();
    if (
      (state === "cundinamarca" ||
        state === "quindio" ||
        state === "antioquia" ||
        state === "valle") &&
      (purpose === "turismo" || purpose === "comida" || purpose === "museos")
    ) {
      alert("Datos guardados de forma correcta");
    } else {
      alert("Opcion no valida, por favor vuelve a intentarlo.");
    }
  }
}

function changes() {
  if (state === "cundinamarca") {
    if (purpose === "turismo") {
      alert(
        "Seleccionaste: " +
          "\n " +
          state +
          " y " +
          purpose +
          "\nAlgunos puntos de turismo recomendados son: " +
          "\n-Monserrate" +
          "\n-Maloka" +
          "\n-Monserrate" +
          "\n-Minas de sal" +
          "\n-Parque Jaime Duque"
      );
    }
    if (purpose === "comida") {
      alert(
        "Seleccionaste: " +
          "\n " +
          state +
          " y " +
          purpose +
          "\nLos platos tipicos de la región son: " +
          "\n-Roscon resobado" +
          "\n-Ajiaco" +
          "\n-Changua" +
          "\n-Fritanga"
      );
    }
    if (purpose === "museos") {
      alert(
        "Seleccionaste: " +
          "\n " +
          state +
          " y " +
          purpose +
          "\nLos museos a visitar: " +
          "\n-Museo del oro" +
          "\n-Museo aeroespacial" +
          "\n-Museo nacional" +
          "\n-Museo indigena"
      );
    }
  }

  if (state === "quindio") {
    if (purpose === "turismo") {
      alert(
        "Seleccionaste: " +
          "\n " +
          state +
          " y " +
          purpose +
          "\nAlgunos puntos de turismo recomendados son: " +
          "\n-Valle del cocora" +
          "\n-Salento" +
          "\n-Parque del cafe"
      );
    }
    if (purpose === "comida") {
      alert(
        "Seleccionaste: " +
          "\n " +
          state +
          " y " +
          purpose +
          "\nLos platos tipicos de la región son: " +
          "\n-Fiambre" +
          "\n-Mondongo" +
          "\n-Sudados"
      );
    }
    if (purpose === "museos") {
      alert(
        "Seleccionaste: " +
          "\n " +
          state +
          " y " +
          purpose +
          "\nLos museos a visitar : " +
          "\n-Museo del oro Quimbaya" +
          "\n-Museo del arte" +
          "\n-Museo del disco y la música"
      );
    }
  }

  if (state === "valle") {
    if (purpose === "turismo") {
      alert(
        "Seleccionaste: " +
          "\n " +
          state +
          " y " +
          purpose +
          "\nAlgunos puntos de turismo recomendados son: " +
          "\n-Basilica del señor de los milagros en Buga" +
          "\n-Lago calima" +
          "\n-Hacienda el paraiso"
      );
    }
    if (purpose === "comida") {
      alert(
        "Seleccionaste: " +
          "\n " +
          state +
          " y " +
          purpose +
          "\nLos platos tipicos de la región son: " +
          "\n-Arroz atollado" +
          "\n-Lulada" +
          "\n-Champus" +
          "\n-Manjar blanco"
      );
    }
    if (purpose === "museos") {
      alert(
        "Seleccionaste: " +
          "\n " +
          state +
          " y " +
          purpose +
          "\nLos museos a visitar : " +
          "\n-Museo arqueologico" +
          "\n-Museo de la caña" +
          "\n-Museo aero fenix"
      );
    }
  }

  if (state === "antioquia") {
    if (purpose === "turismo") {
      alert(
        "Seleccionaste: " +
          "\n " +
          state +
          " y " +
          purpose +
          "\nAlgunos puntos de turismo recomendados son: " +
          "\n-Metro cable" +
          "\n-Parque Arvi" +
          "\n-Parque explora" +
          "\n-Piedra del peñol"
      );
    }
    if (purpose === "comida") {
      alert(
        "Seleccionaste: " +
          "\n " +
          state +
          " y " +
          purpose +
          "\nLos platos tipicos de la región son: " +
          "\n-Bandeja paisa" +
          "\n-Mazamorra paisa" +
          "\n-Chorizos antioqueños" +
          "\n-Frijoles"
      );
    }
    if (purpose === "museos") {
      alert(
        "Seleccionaste: " +
          "\n " +
          state +
          " y " +
          purpose +
          "\nLos museos a visitar : " +
          "\n-Museo del agua" +
          "\n-Museo de la memoria" +
          "\n-Museo arte moderno"
      );
    }
  }
}
