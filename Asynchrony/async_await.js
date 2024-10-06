import {loader} from './loader.js'

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'
const TODOS_URL = 'https://jsonplaceholder.typicode.com/todos'


// fetch(USERS_URL)
//   .then( response => response.json())
//   .then(users => {
//     console.log(users)
//     const firstUserId = users[0]?.id;
//     console.log(firstUserId)
//     fetch(`${TODOS_URL}?userId=${firstUserId}`)
//       .then(response => response.json())
//       .then(todos => console.log(todos))
//       .catch(error => console.log(error))
//   })
//   .catch(error => console.log(error))

async function getTodosWithUserData() {
  try {
    const response = await fetch(`${USERS_URL}`);
    if (!response.ok) {
      throw new Error('Error of getting user data')
    }
    const users = await response.json();
    const firstUsedId = users[0]?.id;
    const todosResponse = await fetch(`${TODOS_URL}?userId=${firstUsedId}`)
    if (!todosResponse.ok) {
      throw new Error('Error of getting user todo data')
    }
    const todos = await todosResponse.json();
    console.log(todos)
  } catch(error) {
    console.log('error', error)
  } finally {
    loader()
  }

}

const prom = getTodosWithUserData();
console.log('promise', prom)