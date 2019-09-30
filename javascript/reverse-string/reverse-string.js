//
// This is only a SKELETON file for the 'Reverse String' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const reverseString = (string) => {
  const removedCharater = string[0]
  const newString = string.substring(1)

  if(string.length === 0 ) {
    return string
  } else {
    return reverseString(newString) + removedCharater
  }

};


//pass in string
// if string is 0 end
// if string !0 recursive call with unshifted string
// on end return string