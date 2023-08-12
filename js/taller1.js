// variables
function becaData() {
  let name = prompt("Ingrese su nombre:");
  let age = prompt("Ingrese su edad:");
  let country = prompt("Ingrese su pais:").toLocaleLowerCase();
  let skill = prompt(
    "Ingrese su habilidad (zurdo o diestro):"
  ).toLocaleLowerCase();

  if (
    age > "18" &&
    skill == "zurdo" &&
    (country == "colombia" || country == "ecuador")
  ) {
    alert("Quedas registrado al cupo de la beca");
  } else {
    alert("No cumples los requisitos");
  }
}
