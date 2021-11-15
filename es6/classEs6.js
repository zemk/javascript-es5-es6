class Rectangle {
  constructor(height, width =200) {
    this.height =height;
    this.width = width;

  }
  calcArea() {
    return this.height *this.width;
  }
  
}
cosnt = square = new Rectangle(10, 10);
console.log(square.calcArea())