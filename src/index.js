// "use strict"; is the default now~! (inside these modules)


import { fruits } from './foods.js';
import { choice, remove } from './helpers.js';


const randomFruit = choice(fruits);

console.log(`I'd like one ${randomFruit}, please!`);
console.log( `Here you go: ${randomFruit}`);
console.log(`Delicious! May I have another?`);

remove(fruits, randomFruit);
console.log(fruits);

console.log(`I’m sorry, we’re all out. We have ${fruits.length} left.`);