// // const doubleton = (n) => new Set(String(++n).split("")).size === 2 ? n : doubleton(n)
// let n = 1213;
// // console.log(new Set(String(++n).split("")).size === 2 );
// console.log(new Set(String(12).split("")).size ==);

const Aarray = ['r','u','d','r','e','s','h',' ','s','i','s','o','d','i','a'];

let value1 = new Set([...Aarray]);
function reduplicate(arr1){
//   return new Set([...arr1]);
  return Array.from(new Set([...arr1]));
}
// console.log(reduplicate(Aarray));
reduplicate(Aarray);

// let valueArray = Aarray.filter(value =>{
//    aVa = new Set(Strigvalue);
//   return
// })
// console.log(value1);