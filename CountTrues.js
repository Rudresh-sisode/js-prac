function countTrue(arr) {
  let garbage = 0;
  let trueCount = 0;
	const trueArr = arr.map(tArra =>{
		tArra === true ? trueCount++ : garbage++; 
	});
  console.log(trueCount);
  return trueCount;
}
countTrue([true, false, false, true, false]);
