const name = 'John Doe';
const age = 26;
const passions = ['Ski', 'Hiking', 'Cinema'];

console.log(name, age, passions);

let cowsay = require("cowsay");
const {moi} = require('./information');
console.log(cowsay.say({
    text : `Hi, my name is ${moi.name} and I'm from  ${moi.campus} `,
    e : "oO",
    T : "U "
}));
