// @ts-check

// 3시작
const promise = new Promise((resolve, reject) => {
  console.log('프로미스 내부의 코드는 바로 실행 됩니다.');
  setTimeout(() => {
    const userId = 'Judy';

    if (userId === 'Judy') {
      resolve(`${userId}로 접속 되었습니다.`);
    } else {
      reject(new Error('서버 통신이 원할하지 않습니다.'));
    }
  }, 2000);
});

promise
  .then((value) => {
    console.log(`요청하신 아이디 ${value}`);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('프로미스 시퀀스가 끝났습니다.');
  });
// 3끝

// 1시작
// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.end('Here, 4000 PORT');
// });
// 1끝

// 2시작
// const PORT = 4000;
// server.listen(PORT, () => {
//   console.log(`서버는 ${PORT}번 포트에서 실행중 입니다.`);
// });

// console.log('1');

// setTimeout(() => {
//   console.log('callback');
// }, 3000);

// console.log('2');
// 2끝

// const id = prompt('아이디를 입력하세요!');
// let userId = '';

// console.log('로그인 시도');

// setTimeout(() => {
//   userId = 'tetz';
//   console.log('아이디 정보 획득 완료!');
//   if (id === userId) {
//     console.log('로그인 성공!');
//   } else {
//     console.log('로그인 실패!');
//   }
// }, 2000);
