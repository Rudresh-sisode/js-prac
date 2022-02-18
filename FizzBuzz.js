function fizzBuzz(args){
  let elementArray = args.map(x =>{
//     return x % 3 === 0 ? "Fizz" : x % 5 === 0 ? "Buzz" : x % 3 === 0 && x % 5 === 0 ? "FizzBuzz" : x ;
    return x % 3 === 0 && x % 5 === 0 ? "FizzBuzz" : x % 3 === 0 ? "Fizz" : x % 5 === 0 ? "Buzz" : x;
  })
  return elementArray;
}

fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,15]);