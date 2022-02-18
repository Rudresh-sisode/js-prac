const findMissing = mArr =>{
  
  let max = 10;
  let min = 1;
  let missing = 0;
  
  for (min;min <= max; min++){
    if(!mArr.includes(min)){
      missing=min;
    }
  }
  return missing;
}

findMissing([9,2,1,5,4,8,10,6,7]);