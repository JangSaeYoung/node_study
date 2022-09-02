//@ts-check

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

const routes = [
  //블로그 목록을 가져오는 API
  {
    url: '/posts',
    method: 'GET',
    id: 'undefined',
    callback: async () => ({
      statusCode: 200,
      body: {
        posts: posts,
        totalCount: posts.length,
      },
      // body: {
      //   posts: posts.map((post) => ({
      //     id: post.id,
      //     title: post.title,
      //   })),
      //   totalCount: posts.length,
      // },
    }),
  },

  // 특정 아이디의 블로그 글을 가져오는 API
  {
    url: '/posts',
    method: 'GET',
    id: 'number',
    callback: async (postId) => {
      const id = postId;
      if (!id) {
        return {
          statusCode: 404,
          body: 'Not found',
        };
      }

      const result = posts.find((post) => post.id === id);
      if (!result) {
        return {
          statusCode: 404,
          body: 'ID Not found',
        };
      }

      return {
        statusCode: 200,
        body: result,
      };
    },
  },

  //새로운 글 올리기 API 구현하기
  {
    url: '/posts',
    method: 'POST',
    id: 'undefined',
    callback: async (id, newPost) => {
      posts.push({
        id: posts[posts.length - 1].id + 1,
        title: newPost.title,
        content: newPost.content,
      });
      return {
        statusCode: 200,
        body: 'post is upload',
      };
    },
  },

  //글 수정하기 API 구현하기
  {
    url: '/posts',
    method: 'PUT',
    id: 'number',
    callback: async (id, newPost) => {
      if (!id) {
        return {
          statusCode: 404,
          body: 'Not found',
        };
      }

      const result = posts.find((post) => post.id === id);
      if (!result) {
        return {
          statusCode: 404,
          body: '수정하려는 글의 ID가 없습니다.',
        };
      }
      const modifyPost = newPost;
      // id 값이 없으므로 아래 코드로 id값을 주기
      modifyPost.id = id;
      posts[id - 1] = modifyPost;
      return {
        statusCode: 200,
        body: modifyPost,
      };
    },
  },

  //글 삭제하는 API 구현하기
  {
    url: '/posts',
    method: 'DELETE',
    id: 'number',
    callback: async (id) => {
      const result = posts.find((post) => post.id === id);
      if (!result) {
        return {
          statusCode: 404,
          body: 'Not found',
        };
      }

      posts.splice(id - 1, 1);
      return {
        statusCode: 200,
        body: 'post deleted',
      };
    },
  },
];

module.exports = {
  routes,
};
