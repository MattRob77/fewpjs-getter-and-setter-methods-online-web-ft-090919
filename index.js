// Add your Circle class here
class Circle { 
  constructor(radius) {
    this.radius = radius 
  }
  get diameter() {
    return this.radius * 2 
  }
  get circumference() { 
    return Math.PI * this.diameter
  } 
  get area() { 
    return Math.PI * (this.radius ** 2) 
  } 
  set diameter(newdiameter) { 
    this.radius = newDiameter / 2 
  } 
} 
