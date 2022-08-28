class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }
}

class Triangle extends Shape {
  constructor(width, height) {
    super(width, height);
  }

  getArea() {
    return (this.width * this.height) / 2;
  }
}

class Circle extends Shape {
  constructor(width, height, radius) {
    super(width, height);
    this.radius = radius;
  }
  getArea() {
    return 3.14 * this.radius ** 2;
    //원의 넓이
  }
}

const shape_re = new Shape(5, 5);
shape_re.getArea();
console.log('shape 넓이는', shape_re.getArea());

const Triangle_re = new Triangle(4, 4);
Triangle_re.getArea();
console.log('Triangle 넓이는', Triangle_re.getArea());

const Circle_re = new Circle(4, 4, 2);
Circle_re.getArea();
console.log('Circle 넓이는', Circle_re.getArea());

const Rectiangle_re = new Rectangle(4, 4);
Rectiangle_re.getArea();
console.log('Rectiangle 넓이는', Rectiangle_re.getArea());
