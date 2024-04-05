const text_div = document.getElementById("text");
const options_div = document.getElementById("options");
let popup_div; // Variable, um das Popup-Element zu speichern
let buttonClicked = false; // Variable, um zu verfolgen, ob der Button bereits geklickt wurde

function convertToPathFormat(inputData) {
  const data = inputData[0]["rootTopic"];

  const new_path = {
    text: "Stellt euch vor ihr seid ein großes Logistik Unternehmen in den USA, genauer gesagt in Oklahoma City: </br> Ihr habt einen Auftrag von einem großen Elektronik Hersteller. Ihr sollt 10 Standart Container, innerhalb von 50 Tagen, von Oklahoma City nach Kairo zu bringen. Der Hersteller zahlt dafür das ihr euch um die komplette Zustellung kümmert insgesamt 400.000 Euro. </br> Wählt zuerst eine der 5 Städte aus von denen ihr eure Fracht weiter nach Kairo Transportieren wollt: ",
    options: [],
  };

  data["children"]["attached"].forEach((topic) => {
    const option = {
      text: topic["title"],
      following: convertChildToPathFormat(topic),
    };
    new_path["options"].push(option);
  });

  return new_path;
}

function convertChildToPathFormat(topic) {
  let following;
  if (Object.keys(topic).includes("notes")) {
    following = {
      text: topic["notes"]["plain"]["content"].split("text:")[1],
      options: [],
    };
  } else {
    following = {
      text: topic["title"],
      options: [],
    };
  }
  if ("children" in topic) {
    topic["children"]["attached"].forEach((child) => {
      try {
        const notes = child["notes"]["plain"]["content"].split("text:");
        const popup = notes[0];
        const option = {
          text: child["title"],
          popup: popup,
          following: convertChildToPathFormat(child),
        };
        following["options"].push(option);
      } catch {
        const text = child["title"];
        const option = {
          text: text,
          popup: text,
          following: convertChildToPathFormat(child),
        };
        following["options"].push(option);
      }
    });
  }

  return following;
}

let path; // Variable für das JSON-Objekt

// Laden der JSON-Datei
fetch("content.json")
  .then((response) => response.json()) // Parsen der JSON-Datei
  .then((data) => {
    path = convertToPathFormat(data); // Speichern des analysierten JSON-Objekts in der path-Variablen
    setUp(path); // Aufrufen von setUp mit dem geladenen Objekt
    console.log(path);
  });

function getOnclick(path, button) {
  return () => {
    if (buttonClicked == button) {
      buttonClicked = false;
      hidePopup();
      setUp(path);
    } else {
      buttonClicked = button;

      if (button.popup) {
        showPopup(button.popup);
      } else {
        buttonClicked = false;
        hidePopup();
        setUp(path);
      }
    }
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
      button.onclick = getOnclick(option.following, option);

      options_div.append(button);
    }
  }
}

function showPopup(text) {
  hidePopup(); // Verstecke zuerst jedes vorhandene Popup

  // Erstelle das Pop-up-Element
  popup_div = document.createElement("div");
  popup_div.classList.add("popup");
  popup_div.innerHTML = text;

  // Positioniere das Pop-up-Element relativ zum options_div
  popup_div.style.left = options_div.offsetLeft + "px";
  popup_div.style.top = options_div.offsetTop + options_div.offsetHeight + "px";

  // Füge das Pop-up-Element zum Dokument hinzu
  document.body.appendChild(popup_div);
}

function hidePopup() {
  if (popup_div) {
    popup_div.parentNode.removeChild(popup_div); // Entferne das Pop-up-Element, falls vorhanden
    popup_div = null;
  }
}
