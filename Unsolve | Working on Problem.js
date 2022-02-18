function reverseInPlace(str) {
const words = str.toUpperCase().split(" ").join().split("");
//   console.log(words);
  return words;//toUpperCase()
}
const name = reverseInPlace("Rudresh Sisode");
console.log(name);
// //#1#

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

function getValueByKey(object,key){
  console.log(key);
//   console.log(Object.values(object).find(value => object[value] === key));
//   return Object.values(object).find(value => object[value] === key)
  return Object.keys(object).find((key1) => object[key1] === key ? object[key] : 0);
}
let sum = 0;
const scores = {"A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
"H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
"N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
"T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23} ;

for (let i = 0; i < 14; i++){
  getValueByKey(scores,name[i]);
}

// console.log(sum);

// const map = {"first" : "1", "second" : "2"};

// console.log(getKeyByValue(map,"2"));

