//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (color) => {
  const value = COLORS.reduce((acc, cur, i) => {
    if(color === cur) {
      acc = i
    }
    return acc
  }, 0)
  return value
};

export const COLORS = [
  "black","brown","red","orange",
  "yellow","green","blue","violet","grey","white"]
