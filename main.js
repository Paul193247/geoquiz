const text_div = document.getElementById("text");
const options_div = document.getElementById("options");

fetch("output.json")
  .then((response) => response.json()) // Parsen der JSON-Datei
  .then((data) => {
    path = data; // Speichern des analysierten JSON-Objekts in der path-Variablen
    setUp(path); // Aufrufen von setUp mit dem geladenen Objekt
  });

function getOnclick(path) {
  return () => {
    setUp(path);
  };
}

function setUp(path) {
  text_div.innerHTML = path.text;
  options_div.innerHTML = "";
  if (path.options != false) {
    for (option of path.options) {
      button = document.createElement("button");
      button.id = option.text;
      button.innerHTML = option.text;
      button.onclick = getOnclick(option.following);
      options_div.append(button);
    }
  }
}
