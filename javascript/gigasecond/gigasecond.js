//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (time) => {
  const gig = 1000000000
  const seconds = time.getTime() / 1000
  const gigTime = seconds + gig
  return new Date(gigTime * 1000)
};
