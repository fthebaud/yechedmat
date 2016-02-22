import randomPicker from "./utils/pickAtRandom";

function getRandomName() {
  var names = ['Patrick', 'Bob', 'Carlo'];
  return randomPicker(names);
}

export { getRandomName };
