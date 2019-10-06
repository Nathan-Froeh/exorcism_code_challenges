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
    num = num / 2
  } else if(num % 1 === 0) {
    num = num * 3 + 1
  }
  return steps(num, step + 1)
};
