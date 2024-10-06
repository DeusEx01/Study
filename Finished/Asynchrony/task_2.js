/*
To create a function getUsersByIds, which will take array with users 'id'. You need to g et all users with these 'id'. Add name data into each html-element.
Also add loader element before loading users and hide it after loading ones.

Template for user html-elements:
<li><a href="#">User name</a></li>

For testing function user:
getUsersByIds([5, 6, 2, 1])
*/
import {loader} from './loader.js';
import {createElement} from './createListElement.js';

const USERS_LINK = "https://jsonplaceholder.typicode.com/users";
let ids = [5, 6, 2, 1, 3, 4, 8];

function getUsersById(ids) {
  loader();
  const requests = ids.map((id) => fetch(`${USERS_LINK}/${id}`));

  Promise.all(requests)
    .then((responses) => {
      const results = responses.map((response) => response.json());
      return Promise.all(results);
    })
    .then((users) => {
      const dataContainer = document.querySelector('#data-container');
      users.forEach( user => {
        dataContainer.append(createElement(user.name));
      })
    })
    .catch( error => console.log(error))
    .finally( () => loader())
}

getUsersById(ids);
