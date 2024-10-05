// This promise method will return filfilled if *all* promises inside arrray will return fulfilled. If at least 1 promise returns rejected then promise.all() will return rejected and stop its execution
Promise.all([
  new Promise(),
  new Promise(),
  new Promise(),
])
Promise.all([
  new Promise(), // fulfilled
  new Promise(), // rejected
  new Promise(),
])// returns rejected


Promise.all([
  new Promise(), // fulfilled
  new Promise(), // fulfilled
  new Promise(), // fulfilled
])//returns fulfilled


const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const createElement = (text) => {
  const todoElement = document.createElement('li');
  const todoElementAnchor = document.createElement('a');
  todoElementAnchor.href = '#';
  todoElementAnchor.textContent = text;
  todoElement.append(todoElementAnchor)
  return todoElement;
}
