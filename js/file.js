//@ts-check

// const fs = require('fs');

//promise
// const promise = new Promise((resolve, reject) => {
//   const judy = 'young';
//   if (judy === 'young') {
//     setTimeout(() => {
//       // console.log('나는 프로미스입니다 ->', promise);
//       resolve('judy is young!!');
//     }, 3000);
//   } else {
//     reject('But..judy is getting old');
//   }
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log('err');
//   });
//promise

//Sync
// let data = fs.readFileSync('readme.txt', 'utf-8');
// console.log('1번', data);
// data = fs.readFileSync('readme.txt', 'utf-8');
// console.log('2번', data);
// data = fs.readFileSync('readme.txt', 'utf-8');
// console.log('3번', data);
// data = fs.readFileSync('readme.txt', 'utf-8');
// console.log('4번', data);
// data = fs.readFileSync('readme.txt', 'utf-8');
// console.log('5번', data);
// data = fs.readFileSync('readme.txt', 'utf-8');
//Sync

//프로미스에서 Async

const fs = require('fs').promises;

async function main() {
  let data = await fs.readFile('readme.txt', 'utf-8');
  console.log('1번', data);
  data = await fs.readFile('readme.txt', 'utf-8');
  console.log('2번', data);
  data = await fs.readFile('readme.txt', 'utf-8');
  console.log('3번', data);
  data = await fs.readFile('readme.txt', 'utf-8');
  console.log('4번', data);
  data = await fs.readFile('readme.txt', 'utf-8');
  console.log('5번', data);
  data = await fs.readFile('readme.txt', 'utf-8');
}

main();

//프로미스에서 Async

//콜백지옥을 프로미스로
// const fs = require('fs').promises;

// fs.readFile('readme.txt', 'utf-8')
//   .then((data) => {
//     console.log('1번', data);
//     return fs.readFile('readme.txt', 'utf-8');
//   })
//   .then((data) => {
//     console.log('2번', data);
//     return fs.readFile('readme.txt', 'utf-8');
//   })
//   .then((data) => {
//     console.log('3번', data);
//     return fs.readFile('readme.txt', 'utf-8');
//   })
//   .then((data) => {
//     console.log('4번', data);
//     return fs.readFile('readme.txt', 'utf-8');
//   })
//   .then((data) => {
//     console.log('5번', data);
//     return fs.readFile('readme.txt', 'utf-8');
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//콜백지옥 을 프로미소로

// fs.readFile('readme.txt', 'utf-8', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log('2번 개미', data);

//   fs.readFile('readme.txt', 'utf-8', (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log('3번 개미', data);

//     fs.readFile('readme.txt', 'utf-8', (err, data) => {
//       if (err) {
//         throw err;
//       }
//       console.log('4번 개미', data);

//       fs.readFile('readme.txt', 'utf-8', (err, data) => {
//         if (err) {
//           throw err;
//         }
//         console.log('5번 개미', data);
//       });
//     });
//   });
// });
// });
//콜백지옥

// fs.readFile('readme.txt', 'utf-8', (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log('1번 일꾼', data.toString);
//   fs.readFile('readme.txt', 'utf-8', (err, data) => {
//     if (err) {
//       throw err;
//     }
//     console.log('2번 일꾼', data.toString);

//     fs.readFile('readme.txt', 'utf-8', (err, data) => {
//       if (err) {
//         throw err;
//       }
//       console.log('3번 일꾼', data.toString);
//       fs.readFile('readme.txt', 'utf-8', (err, data) => {
//         if (err) {
//           throw err;
//         }
//         console.log('4번 일꾼', data.toString);
//       });
//     });
//   });
// });
