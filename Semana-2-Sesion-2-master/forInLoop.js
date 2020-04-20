const shark = {
  species: "great white",
  color: "white",
  numberOfTeeth: Infinity
};

// Print property names of object

for (atrribute in shark) {
  console.log(`${atrribute.toUpperCase()}: ${shark[atrribute]} `);
}

let sharks = ["great white", "tiger", "hammerhead"];

for (let shark of sharks) {
  console.log(shark);
}

for (let [index, shark] of sharks.entries()) {
  console.log(index, shark);
}

let sharkString = "sharks";

for (let shark of sharkString) {
  console.log(shark);
}
