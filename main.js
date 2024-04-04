const text_div = document.getElementById("text");
const options_div = document.getElementById("options");
let popup_div; // Variable, um das Popup-Element zu speichern

function convertToPathFormat(inputData) {
  const data = inputData[0]["rootTopic"];

  const new_path = {
    text: "Stellt euch vor ihr seid ein großes Logistik Unternehmen in den USA, genauer gesagt in Oklahoma City: </br> Ihr habt einen Auftrag von einem großen Elektronik Hersteller. Ihr sollt 10 Standart Container, innerhalb von 5 Wochen, von Oklahoma City nach Kairo zu bringen. Der Hersteller zahlt dafür das ihr euch um die komplette Zustellung kümmert insgesamt 500.000 Euro. </br> Wählt zuerst eine der 5 Städte aus von denen ihr eure Fracht weiter nach Kairo Transportieren wollt: ",
    options: [],
  };

  data["children"]["attached"].forEach((topic) => {
    const option = {
      text: topic["title"],
      following: convertChildToPathFormat(topic),
    };
    new_path["options"].push(option);
  });

  return JSON.stringify(new_path, null, 4);
}

function convertChildToPathFormat(topic) {
  const following = {
    text: topic["title"],
    options: [],
  };

  if ("children" in topic) {
    topic["children"]["attached"].forEach((child) => {
      const notes = child["notes"]["plain"]["content"].split("text:");
      const text = notes[0];
      const popup = notes[1];
      const option = {
        text: text,
        popup: popup,
        following: convertChildToPathFormat(child),
      };
      following["options"].push(option);
    });
  }

  return following;
}

let path; // Variable für das JSON-Objekt

// Laden der JSON-Datei
fetch("output.json")
  .then((response) => response.json()) // Parsen der JSON-Datei
  .then((data) => {
    path = convertToPathFormat(data); // Speichern des analysierten JSON-Objekts in der path-Variablen
    setUp(path); // Aufrufen von setUp mit dem geladenen Objekt
  });

function getOnclick(path) {
  return () => {
    hidePopup(); // Verstecke das Popup, wenn der Benutzer auf den Button klickt
    setUp(path);
  };
}

function setUp(path) {
  text_div.innerHTML = path.text;
  options_div.innerHTML = "";
  if (path.options != false) {
    for (option of path.options) {
      const button = document.createElement("button");
      button.id = option.text;
      button.innerHTML = option.text;
      button.onclick = getOnclick(option.following);

      // Überprüfe, ob ein Popup-Key vorhanden ist, bevor wir das Popup erstellen
      if (option.popup) {
        button.onmouseenter = () => showPopup(option.popup, button);
        button.onmouseleave = () => hidePopup();
      }

      options_div.append(button);
    }
  }
}

function showPopup(text, button) {
  hidePopup(); // Verstecke zuerst jedes vorhandene Popup

  // Erstelle das Pop-up-Element
  popup_div = document.createElement("div");
  popup_div.classList.add("popup");
  popup_div.innerHTML = text;

  // Positioniere das Pop-up relativ zum Button
  const buttonRect = button.getBoundingClientRect();
  popup_div.style.left = buttonRect.left + "px";
  popup_div.style.top = buttonRect.top - popup_div.offsetHeight + "px";

  // Füge das Pop-up-Element zum Dokument hinzu
  document.body.appendChild(popup_div);
}

function hidePopup() {
  if (popup_div) {
    popup_div.parentNode.removeChild(popup_div); // Entferne das Pop-up-Element, falls vorhanden
    popup_div = null;
  }
}
