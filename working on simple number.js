function simpleNumber(a,b){
  const TotalNumber = [];
  const simpleNumberStorage = [];
  
  for( let i = a, j = 0; i <= b; i++, j++){
    TotalNumber[j] = i;
  }
  
  TotalNumber.map(x =>{
    let digit = (""+x).split("").map(Number);
   	let calculation = 0;
    let storage = 0;
//     console.log(" Your digit ",digit, " and Number is ",x);
    if(digit.length === 1){
      simpleNumberStorage.push(x);
    }
    
    else{
         for( let k = 0; k < digit.length; k++){
           if(calculation !== 0){
             calculation += digit[k] ^ (k+1);
           }
           else {
             calculation = digit[k] ^ (k+1);
//              storage = calculation;
           }
//              console.log(`calculation of ${k} - ${calculation}`);
          }
      
          if(calculation === x){
              console.log("your value ",x);
              simpleNumberStorage.push(x);
          } 
    }
   
//     console.log("Your calculation ",calculation);
    
    
  })
  return simpleNumberStorage;
}

simpleNumber(1,100);