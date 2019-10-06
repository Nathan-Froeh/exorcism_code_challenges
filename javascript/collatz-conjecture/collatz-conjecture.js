//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (num, step = 0) => {

  if(num < 1) {
    throw new Error('Only positive numbers are allowed')
  } else if(num === 1) {
    return step
  } else if(num % 2 === 0) {
    //If n is even, divide n by 2 to get n / 2.
  } else if(num % 1 === 0) {
    //If n is odd, multiply n by 3 and add 1 to get 3n + 1.
  }
};
