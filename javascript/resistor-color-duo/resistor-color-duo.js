//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const value = (resistor) => {
  const number = resistor.reduce((acc, color, index) => {
    if(index < 2) {
      acc += colors.indexOf(color)
    }
    return acc
  }, '')
  return Number(number)
};

const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white']