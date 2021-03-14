import axios from 'axios';

export function getTodos() {
  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(function (response) {
      // handle success
      return response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
}
