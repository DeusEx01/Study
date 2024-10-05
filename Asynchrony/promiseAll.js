// This promise method will return filfilled if *all* promises inside arrray will return fulfilled. If at least 1 promise returns rejected then promise.all() will return rejected and stop its execution
// Promise.all([
//   new Promise(),
//   new Promise(),
//   new Promise(),
// ])
// Promise.all([
//   new Promise(), // fulfilled
//   new Promise(), // rejected
//   new Promise(),
// ])// returns rejected


// Promise.all([
//   new Promise(), // fulfilled
//   new Promise(), // fulfilled
//   new Promise(), // fulfilled
// ])//returns fulfilled


const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos' //todos/id e.g. todos/32, todos/55 to get task with id == 32 or id == 55;
const todosIds = [43, 10, 5, 100, 101];
const dataContainer = document.querySelector('#data-container')

const loader = function () {
  let loader = document.querySelector("#data-loader");
  loader.hidden = !loader.hidden;
};

const createElement = (text) => {
  const todoElement = document.createElement('li');
  const todoElementAnchor = document.createElement('a');
  todoElementAnchor.href = '#';
  todoElementAnchor.textContent = text;
  todoElement.append(todoElementAnchor)
  return todoElement;
}

const getTodosByIds = (ids) => {
  loader();
  setTimeout( () => {
    const requests = ids.map( (id) => fetch(`${TODOS_URL}/${id}`));
    Promise.all(requests)
      .then(responses => {
        const dataResults = responses.map( response => response.json())
        return Promise.all(dataResults)
      })
      .then(todos => {
        console.log(todos)
        todos.forEach(todo => {
          dataContainer.append(createElement(`${todo.title} (id: ${todo.id})`))
        })
      })
      .catch( error => {
        console.log(error)
      })
      .finally( () => {
        loader();
      })
  }, 3000)
}

getTodosByIds(todosIds);