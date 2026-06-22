// Создайте класс под названием «Прямоугольник» со свойствами ширины и высоты. Включите два метода расчета площади и периметра прямоугольника.
// Создайте экземпляр класса «Прямоугольник» и вычислите его площадь и периметр.

class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }
  
  get area() {
    return this.width * this.height
  }
  
  get perimeter() {
    return 2 * (this.width + this.height)
  }
}

const rectangle = new Rectangle(5, 10)

console.log('Площадь:', rectangle.area) // 50
console.log('Периметр:', rectangle.perimeter) // 30
