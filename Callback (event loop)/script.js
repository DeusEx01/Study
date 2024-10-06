const FIRST_TODO_URL = 'https://jsonplaceholder.typicode.com/todos/1';
const getTodo = (callback) => {
  fetch(FIRST_TODO_URL)
    .then(response => response.json())
    .then(todo => console.log(todo ))
    .catch(error => console.log(error))
}
getTodo()