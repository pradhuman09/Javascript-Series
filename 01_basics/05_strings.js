const name = "honey"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String("HONEY19")

// console.log(gameName[1]);

// console.log(gameName.__proto__);

// console.log(gameName.length);

// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3));

console.log(gameName.indexOf("N"));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   honey    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pradhuman.com/pradhuman%20chaudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));