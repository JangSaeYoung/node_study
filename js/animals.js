//@ts-check

export default class Animal {
  constructor() {
    this.animals = ['dog', 'bear'];
  }

  showAnimals() {
    this.animals.map((el) => console.log(el));
  }
}

//-------

const animals = ['dog', 'reptile', 'cat', 'rabbit'];

function showAnimals() {
  animals.map((el) => console.log(el));
}

export { animals as ani, showAnimals as show };
//-------

//-------
// exports.animals = animals;

// exports.showAnimals = function showAnimals() {
//   animals.map((el) => console.log(el));
// };

// function showAnimals(){
//   animals.map(function(el){
//     return console.log(el);
//   })
// }

// module.exports = {
//   animals,
//   showAnimals,
// };
//-------
