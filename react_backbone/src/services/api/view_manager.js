import axios from 'axios';

export const axioDeleteViewManger = (viewId) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.reddit.com/r/${viewId}.json`)
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(new Error(error))
    });
  });
}

export const axioEditViewManger = (viewNanme,viewId) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://www.reddit.com/r/${viewId}.json`)
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject(new Error(error))
      });
  });
}

  export const axioSaveViewManger = (queryId) => {
    return new Promise((resolve, reject) => {
      axios.get(`https://www.reddit.com/r/${queryId}.json`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(new Error(error))
        });
      
    });
  }
  

  export const axioLoadListViewManger = (queryId) => {
    return new Promise((resolve, reject) => {
      axios.get(`https://www.reddit.com/r/${queryId}.json`)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(new Error(error))
        });
    });
  }





