const text_div = document.getElementById("text");
const options_div = document.getElementById("options");

const path = fetch("output.json");

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

setUp(path);
