// const USERS_URL = "https://jsonplaceholder.typicode.com/users";

// const dataContainer = document.querySelector("#data-container");

// const createUsers = (userName) => {
//   const userElement = document.createElement("li");
//   const userElementLink = document.createElement("a");
//   userElementLink.href = "#";
//   userElementLink.textContent = userName;

//   userElement.append(userElementLink);
//   return userElement;
// };

// const loader = function () {
//   let loader = document.querySelector("#data-loader");
//   loader.hidden = !loader.hidden;
// };

// const getUsers = () => {
//   loader();
//   let result = fetch(USERS_URL, { method: "GET" });

//   setTimeout( () => {
//     result
//     .then((response) => {
//       let users = response.json();
//       return users;
//     })
//     .then((users) => {
//       users.forEach((user) => {
//         dataContainer.append(createUsers(user.name));
//       });
//     })
//     .catch(error => {
//       throw new Error('Something went wrong')
//     })
//     .finally(() => {
//       loader();
//     })
//   }, 3000)
// };

// getUsers();


function addUserToList(userName) {
  const userElement = document.createElement('li');
  const userAnchor = document.createElement('a');
  userAnchor.href = '#';
  userAnchor.textContent = userName;
  userElement.append(userAnchor);

  return userElement;
}

function loader() {
  let loader = document.querySelector('#data-loader').hidden 
  loader != loader;
}
const users_url = 'https://jsonplaceholder.typicode.com/users';

function getUsersList() {
  loader();
  const result = fetch(users_url);

  result
    .then( result => {
      return result.json();
    })
    .then( (users) => {
      const userList = document.querySelector('#data-container');
      users.forEach( user => { //getting user's nickname and user's name 
        userList.append(addUserToList(`${user.username} (${user.name})`));
      })
    })
    .catch( error => {
      throw new Error(`Something went wrong ${error}`);
    })
    .finally( () => {
      loader();
    })
}

getUsersList()