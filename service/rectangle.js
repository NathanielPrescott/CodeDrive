export class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}
