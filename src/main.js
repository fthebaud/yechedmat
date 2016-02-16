import randomPicker from "./utils/pickAtRandom";

function getRandomName() {
  var names = ['patrick', 'bob', 'carlos'];
  return randomPicker(names);
}

export { getRandomName };
