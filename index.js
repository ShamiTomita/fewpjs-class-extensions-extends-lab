

class Polygon{
  constructor(sides){
    this.sides = sides
    this.count = this.sides.length
  }
  get countSides(){
    return this.sides.length
  }
  get perimeter(){
    let per = this.sides.reduce(function (accumulator, current){
      return accumulator + current
    })
    return per
  }
}

class Triangle extends Polygon{
  get isValid(){
    if (this.countSides === 3){
      let side1 = this.sides[0];
      let side2 = this.sides[1];
      let side3 = this.sides[2];
      if(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }
}

class Square extends Polygon{
  get isValid(){
    if (this.countSides === 4){
      if (this.sides.every((side) => side === this.sides[0])){
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }
  get area(){
    if(this.isValid){
      return this.sides[0] * this.sides[0]
    }
  }
}
