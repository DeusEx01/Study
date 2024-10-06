const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
let isLoading = false;
// const CreateNewPost = () => {
//   isLoading = true;
//   fetch(POSTS_URL, {
//     method: "POST",
//   })
//     .then((response) => response.json())
//     .then((result) => {
//       console.log("result", result);
//     })
//     .catch((error) => {
//       console.log("error", error);
//     })
//     .finally(() => {
//       isLoading = false;
//     });
// };
// createNewPost();


const createNewPost = async () => {
  try {
    isLoading = true;
    const response = await fetch(POSTS_URL, {
      method: 'POST',
    });
    const result = await response.json();
    console.log(result)
  } catch(error) {
    console.log("error", error);
  } finally {
    isLoading = false;
  }
}





const TODOS_URL = "https://jsonplaceholder.typicode.com/todos";
// const getTodosByIds = (ids) => {
//   const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
//   Promise.all(requests)
//     .then((responses) => {
//       const dataResults = responses.map((data) => data.json());
//       return Promise.all(dataResults);
//     })
//     .then((allTasks) => {
//       console.log(allTasks);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };
// getTodosByIds([43, 21, 55, 100, 10]);

//Task 6
const getTodosById = async (ids) => {
  try {
    const requests = ids.map((id) => fetch(`${TODOS_URL}/${id}`));
    const responses = await Promise.all(requests);
    const dataResults = responses.map(data => data.json());
    const allTasks = await Promise.all(dataResults);
    console.log(allTasks);
  } catch(error) {
    console.log(error);
  }
}
await createNewPost()
await getTodosById([43, 21, 55, 100, 10]);
//Task 7
import {createElement} from './createListElement.js'
import {loader} from './loader.js'

const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums'
const dataContainer = document.querySelector('#data-container');
async function renderAlbums() {
  loader()
  try {
    const response = await fetch(ALBUMS_URL);
    const albumResults = await response.json();
    albumResults.forEach( album => dataContainer.append(createElement(album.title)))

  } catch(error) {
    dataContainer.innerText = 'An error occurred in obtaining album data...';
  } finally {
    loader()
  }
  
}

renderAlbums()