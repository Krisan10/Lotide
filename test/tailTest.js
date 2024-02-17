const tail = require('../tail')
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); 
assertEqual(tail(words).length, 2); 
assertEqual(tail(words).length, 3); 


const pokemon = ["Pikachu", "Rampardos", "Tsareena", "Flamigo"];
console.log(tail(pokemon));
assertEqual(tail(pokemon).length, 3);

const digimon = ["Angewomon"]
console.log(tail(digimon));
assertEqual(tail(digimon).length, 0)
assertEqual(tail(digimon).length, 1)