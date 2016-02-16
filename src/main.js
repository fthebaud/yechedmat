//CSS imports
require("../node_modules/bootstrap/dist/css/bootstrap.min.css");
require("../node_modules/bootstrap-material-design/dist/css/bootstrap-material-design.min.css");
// TODO: useless import ?
require("../node_modules/bootstrap-material-design/dist/css/ripples.min.css");

//JS imports
import randomPicker from "./utils/pickAtRandom";

function getRandomName() {
  var names = ['Patrick!', 'Bob!', 'Carlo!'];
  return randomPicker(names);
}

export { getRandomName };
