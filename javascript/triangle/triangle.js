

export class Triangle {
  constructor(side1, side2, side3) {
    this.side1 = side1,
    this.side2 = side2,
    this.side3 = side3
  }

  kind() {
    this.illegalValue()
    this.inequality()
    if(this.side1 === this.side2 && this.side2 === this.side3) {
      return 'equilateral'
    } else if(this.isosceles() === 2) {
      return 'isosceles'
    } else {
      return 'scalene'
    }
  }

  isosceles() {
    const sides = [this.side1, this.side2, this.side3]
    const unequal = [...new Set(sides)]
    return unequal.length
  }

  illegalValue() {
    const sides = [this.side1, this.side2, this.side3]
    const size = sides.find(side => side <= 0)
    if(typeof size !== 'undefined') {
      throw new Error()
    }
  }

  inequality() {
    const sides = [this.side1, this.side2, this.side3]
    if(sides[0] > (sides[1] + sides[2])) {
      throw new Error()
    } else if (sides[1] > (sides[0] + sides[2])) {
      throw new Error()
    } else if (sides[2] > (sides[0] + sides[1])) {
      throw new Error()
    }
  }
}
