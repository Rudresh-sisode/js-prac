// function reverseInPlace(str) {
//   var words = [];
//   words = str.match(/\S+/g);
//   //converting string into array
//   console.log(words);
// }
//   var result = "";
//   for (var i = 0; i < words.length; i++) {
//      result += words[i].split('').reverse().join('') + " ";
//   }
//   return result
// }
// console.log(reverseInPlace("abd fhe kdj"))

function reverseString (str){//"Rudresh Sisodiya"
  let words = [];
  regEx = /\S+/g;
  let reverseString = [];
  words = str.match(regEx);
  for( let i = words.length - 1 ; i >= 0 ; i-- )
    {
      reverseString += words[i].split('').join('') + " ";
    }
  return reverseString;
}

reverseString("Rudresh Sisodiya");