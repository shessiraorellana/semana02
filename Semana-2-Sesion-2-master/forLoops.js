// for(initialization; CSSConditionRule; final expression){
//     // code to be executed
// }

for (let i = 0; i < 4; i++) {
  // print each iteration to the console
  console.log(i);
}

let j = 0;

for (; ; j++) {
  if (j > 3) {
    break;
  }
  console.log(j);
}

let arrayExample = [];

for (let i = 0; i < 10; i++) {
  arrayExample.push(i);
  console.log(arrayExample);
}

// declare array with 3 items

let fish = ["flounder", "salmon", "pike"];

// initalize for loop to run for the total length of an array

for (let i = 0; i < fish.length; i++) {
  // print each item to the console
  console.log(fish[i]);
}
