// @ts-check

// 두번째
// function Car(brand, color) {
//   this.brand = brand;
//   this.color = color;
//   this.drive = function () {
//     console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다. `);
//   };
// }

// const hyundai = new Car('hyundai', 'skyblue');
// const porche = new Car('porche', 'black');
// const toyota = new Car('toyota', 'silver');

// console.log(hyundai.brand, hyundai.color);
// porche.drive();
// toyota.drive();

// 첫번째

class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }

  drive() {
    console.log(`${this.brand}의 ${this.color}색 자동차가 주행 중입니다. `);
  }

  showSpec() {
    console.log(
      `이 차의 브랜드는 ${this.brand}이고, 색상은 ${this.color} 입니다.`
    );
  }
}

class ElecCar extends Car {
  constructor(brand, color, fuel) {
    super(brand, color);
    this.fuel = fuel;
  }

  drive() {
    console.log(
      `${this.brand}의 ${this.color}색 자동차가 ${this.fuel}주행 중입니다. `
    );
  }

  showSpec() {
    super.showSpec();
    console.log(
      // `그리고 이 차는 ${super.brand}  ${this.fuel}힘으로 주행 합니다.`
      `그리고 이 차는  ${this.fuel}힘으로 주행 합니다.`
    );
  }
}

// const hyundai = new Car('hyundai', 'skyblue');
// const porche = new Car('porche', 'black');
// const toyota = new Car('toyota', 'silver');

const hyundai = new Car('hyundai', 'white');
hyundai.showSpec();

const tesla = new ElecCar('tesla', 'red', 'electricity');
// console.log(tesla.brand, tesla.color, tesla.fuel);
// tesla.showFuel();
tesla.showSpec();

console.log(hyundai instanceof Car);
console.log(tesla instanceof Car);
// console.log(hyundai.brand, hyundai.color);
// porche.drive();
// toyota.drive();

// 첫번째 끝
