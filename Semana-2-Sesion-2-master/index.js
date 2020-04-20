// Using While and Do ... while Loops

// set population limit of aquarium to 10
const popLimit = 10;

// start off with 0 fish
let fish = 0;

while (fish < popLimit) {
  // execute code as long condition is true
  // add one fish for each iteration
  fish++;
  console.log(`there's room for ${popLimit - fish} more fish.`);
}

// set a condition to true
const iceCapsAreMelting = true;
let polarBears = 5;

// initiate infinite loop

while (iceCapsAreMelting) {
  console.log(`There are ${polarBears} polar bears`);
  polarBears--;
  if (polarBears === 0) {
    console.log("There are no polar bears left");
    break;
  }
}

// set varible to 0

let x = 0;

do {
  // increment variable by 1
  x++;
  console.log(x);
} while (false);
