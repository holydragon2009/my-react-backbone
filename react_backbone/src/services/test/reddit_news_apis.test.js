import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { axioFetchPosts } from '../api/reddit_news_apis';
import { requestPosts, receivePosts } from '../reddit_news/actions';

describe('test reddit news api', () => {
  it('return data from reddit news api', done => {
    axioFetchPosts('reactjs').then(response => {
      expect(response.kind).toMatch(/Listing/);
      done();
    });
  });
})