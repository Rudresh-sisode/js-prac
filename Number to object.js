function numObj(arr) {
	const newArr = [];
  let objeNew = {};
  let i = 0;
  arr.map( x => {
  let objValue = String.fromCharCode(x);
  let objKeys = x.toString();
//     console.log('obj key ',objKey, 'objValue ',objValue);
   objeNew[objKeys] =  objValue;
  newArr[i] = objeNew;
    objeNew = {};
  i++;
  
})
  return newArr;
}