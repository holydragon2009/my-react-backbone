import axios from 'axios';

export const axioFetchPosts = (reddit) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.reddit.com/r/${reddit}.json`)
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(new Error(error))
    });
  });
}

