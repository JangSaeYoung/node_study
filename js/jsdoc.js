//@ts-check

const arr = [10, 20, 30, 40, 50];

const result = arr.find(function (element) {
  return element === 20;
});
console.log(result);
//두번째
// arr.map(function (element, index) {
//   console.log(index + '번 값은 ' + element);
// });

// arr.map((element, index) => {
//   console.log('나는 화살표 함수로 작성: ', index + '번 값은 ' + element);
// });

// for (let i = 0; i < arr.length; i++) {
//   console.log('일반 for문 사용', arr[i]);
// }

// for (let item of arr) {
//   console.log('for of문 사용', item);
// }
//두번째

//첫번째
// /**
//  * @param {string} name
//  * @param {number} age
//  * @returns 얘는 이름과 나이를 받아서 문자열로 출력합니다.
//  * @todo 내일 새로운 매개변수 추가 해야함.
//  * @deprecated 사용하지 않는 코드
//  */

// function hello(name, age) {
//   return `내 이름은 ${name}이고 나이는 ${age}입니다`;
// }

// /**@type {string} */
// const test = 'tetz';

// console.log(hello('tetxz', 90));

// /**
//  * @typedef Post
//  * @property {number} id
//  * @property {string} title
//  * @property {string} content
//  */

// /**@type {Post} */
// const post = {
//   id: 1,
//   title: 'jsdoc',
//   content: 'jsdoc은 이렇게 사용해',
// };
//첫번째 끝
