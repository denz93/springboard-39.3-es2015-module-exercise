import { choice, remove } from "./helper.js";
import { foods } from "./foods.js";

const randomFruit = choice(foods);
remove(foods, randomFruit);

console.log(`I'd like one ${randomFruit}, please.`);
console.log(`Here you go: ${randomFruit}`);
console.log("Delicious! May I have another?");
console.log(`I'm sorry, we're all out. We have ${foods.length} left.`)