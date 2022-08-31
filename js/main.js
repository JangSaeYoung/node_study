// @ts-check

const http = require('http');

/**
 * @typedef Post
 * @property {number} id
 * @property {string} title
 * @property {string} content
 */

/**@type {Post[]} */
const posts = [
  {
    id: 1,
    title: '첫번째 블로그 글',
    content: '첫번째 내용입니다.',
  },
  {
    id: 2,
    title: '두번째 블로그 글',
    content: '두번째 내용입니다.',
  },
  {
    id: 3,
    title: '세번째 블로그 글',
    content: '세번째 내용입니다.',
  },
];

const server = http.createServer((req, res) => {
  const urlArr = req.url ? req.url.split('/') : [];

  let id = -1;
  if (urlArr.length > 2) {
    // [, , id] = urlArr;
    // id = urlArr[2];
    id = parseInt(urlArr[2], 10);
  }
  console.log('@@@', '', '');
  console.log('글자로 나오세여 ->', urlArr);
  console.log('id만 출력하세요 ->', id);

  // 블로그 구축
  /**
   * 블로그용 서버 API 구성 *
   * GET /posts         목록 가져오기
   * GET /posts/:id     특정 글 내용 가져오기
   * POST /posts        새로운 글 올리기
   * PUT /posts/:id     특정 글 내용 수정하기
   * DELETE /posts/:id  특정 글 삭제하기
   */

  if (req.url === '/posts' && req.method === 'GET') {
    const result = {
      posts: posts.map((post) => ({
        id: post.id,
        title: post.title,
      })),
      totalCount: posts.length,
    };

    res.setHeader('content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(JSON.stringify(result));
  } else if (id !== -1 && req.method === 'GET') {
    const result = posts.find((post) => post.id === id);

    res.setHeader('content-Type', 'application/json; charset=utf-8');
    if (result) {
      console.log('블로그의 특정 글 내용을 보여주는 API 입니다.');

      res.statusCode = 200;
      res.end(JSON.stringify(result));
    } else {
      console.log('해당 id를 가지는 포스트를 찾을 수 없었습니다.');

      res.statusCode = 404;
      res.end('해당 id를 가지는 포스트를 찾을 수 없었습니다.');
    }
  } else if (req.url === '/posts' && req.method === 'POST') {
    req.setEncoding('utf-8');
    req.on('data', (data) => {
      const newPost = JSON.parse(data);
      // posts.push(newPost); => 이것은 순차적으로 쌓을 수 없어
      posts.push({
        // id: posts.length + 1,
        id: posts[posts.length - 1].id + 1,

        title: newPost.title,
        content: newPost.content,
      });
    });
    res.setHeader('content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end('새로운 글이 등록 되었습니다.');

    console.log('블로그에 새로운 글을 동록하는 API입니다.');
  } else if (id !== -1 && req.method === 'PUT') {
    req.setEncoding('utf-8');
    req.on('data', (data) => {
      // console.log('들오는 데이터확인-> ', data);
      const modifyPost = JSON.parse(data);
      modifyPost.id = id;
      posts[id - 1] = modifyPost;
    });

    res.setHeader('content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(`수정된 포스트의 id 번호는 ${id}입니다.`);

    console.log('블록의 특정 글을 수정하는 API입니다.');
  } else if (id !== -1 && req.method === 'DELETE') {
    posts.splice(id - 1, 1);

    res.setHeader('content-Type', 'application/json; charset=utf-8');
    res.statusCode = 200;
    res.end(`id번호가 ${id}인 포스트를 삭제하였습니다.`);

    console.log('블로그 특정 글을 삭제하는 API입니다.');
  } else {
    res.setHeader('content-Type', 'application/json; charset=utf-8');
    res.statusCode = 404;
    res.end('해당 API는 존재하지 않습니다. ');
    console.log('해당 API는 존재하지 않습니다. ');
  }

  //   console.log('블로그의 글 목록을 가져오는 API 입니다.');
  // } else if (urlArr[1] === 'posts' && req.method === 'GET') {
  //   res.statusCode = 200;
  //   console.log('블로그의 특정 글 내용을 보여주는 API 입니다.');
  // }
  // else if (req.url === '/posts' && req.method === 'POST') {
  //   res.statusCode = 200;
  //   console.log('블로그의 새로운 글을 올리는 API 입니다.');
  // } else if (urlArr[1] === 'posts' && req.method === 'PUT') {
  //   res.statusCode = 200;
  //   console.log('블로그의 특정 글을 수정하는 API 입니다.');
  // } else if (urlArr[1] === 'posts' && req.method === 'DELETE') {
  //   res.statusCode = 200;
  //   console.log('블로그의 특정 글을 삭제하는 API 입니다.');
  // } else {
  //   res.statusCode = 400;
  //   res.end('Not Found');
  //   console.log('해당 API를 찾을 수 없습니다.');
  // }

  // 블로그 구축 ----

  // res.statusCode = 200;
  // res.end('hello, back-end');
});

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`해당 서버는 ${PORT}번 포트에서 작동중입니다.`);
});
