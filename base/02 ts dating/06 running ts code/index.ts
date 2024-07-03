import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/2';
axios.get(url).then((response) => {
  console.log(response.data);
});
