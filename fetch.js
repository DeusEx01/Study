// fetch is a function for getting data from server

// fetch(url, configuration_object)

const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos';
const createElement = (text) => {
  const todoElement = document.createElement('li');
  const todoElementAnchor = document.createElement('a');
  todoElementAnchor.href = '#';
  todoElementAnchor.textContent = text;
  todoElement.append(todoElementAnchor)
  return todoElement;
}

const toggleLoader = () => {
  const loaderHTML = document.querySelector('#loader');
  loaderHTML.hidden = !loaderHTML.hidden;
}

const dataContainer = document.querySelector('#data-container')

const getTodos = () => {
  const result = fetch(TODOS_URL, {
    method: 'GET' //by default GET, POST, DELETE
  })
  
  console.log("result", result)
  
  result
    .then((response) => {
      console.log(response)
      if (!response.ok) {
        throw new Error('Something went wrong')
      }
      return response.json() //decoding of response to json format (also can format to text, blob or arrayBuffer)
    })
    .then( (todos) => {
      console.log('todo', todos)
      todos.forEach( (todo) => {
        const todoHTML = createElement(todo.title);
        dataContainer.append(todoHTML)
      })
    })
    .catch( error => {
      console.log(error)
    })
  
}

getTodos()