import * as type from '../../redux/actions';
import { axioFetchPosts } from '../../api/reddit_news_apis'

export const aSelectReddit = reddit => ({
  type: type.SELECT_REDDIT,
  reddit
});

export const aInvalidateReddit = reddit => ({
  type: type.INVALIDATE_REDDIT,
  reddit
});

export const requestPosts = reddit => ({
  type: type.REQUEST_POSTS,
  reddit
});

export const receivePosts = (reddit, json) => ({
  type: type.RECEIVE_POSTS,
  reddit,
  posts: json.data.children.map(child => child.data),
  receivedAt: Date.now()
});

// const fetchPosts = reddit => (dispatch) => {
//   dispatch(requestPosts(reddit));
//   return fetch(`https://www.reddit.com/r/${reddit}.json`)
//     .then(response => response.json())
//     .then(json => {
//       console.log('fetch res = ' + JSON.stringify(json))
//       dispatch(receivePosts(reddit, json))
//     });
// };

export const fetchPosts = (reddit) => (dispatch) => {
  dispatch(requestPosts(reddit));
  return axioFetchPosts(reddit).then(response => {
    dispatch(receivePosts(reddit, response))
  }).catch(error => {
    console.log('error ' + JSON.stringify(error));
  });

};

const shouldFetchPosts = (state, reddit) => {
  const posts = state.postsByReddit[reddit];
  if (!posts) {
    return true;
  }
  if (posts.isFetching) {
    return false;
  }
  return posts.didInvalidate;
};

export const aFetchPostsIfNeeded = reddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), reddit)) {
    return dispatch(fetchPosts(reddit));
  }
};

