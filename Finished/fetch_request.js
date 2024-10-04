const requestURL = 'https://jsonplaceholder.typicode.com/users';

function sendRequest(method, url, body = null) { 
  const headers = {
    'Content-Type': 'application/json'
  }; 
  return fetch(url, { //configuration object for POST request
    method: method,
    body: JSON.stringify(body),
    headers: headers
  }).then(response => {
    if (response.ok) { //response.ok == response.status
      return response.json();
    } else { //in case of error
      return response.json().then(error => {
        const e = new Error('Something went wrong');
        e.data = error;
        throw e;
      })
    }
  }) //returns promise
  
}

// sendRequest('GET', requestURL)
//   .then( (data) => console.log(data))
//   .catch( (error) => console.log(error))

const body = {
  name: 'Alex',
  age: 26
}
sendRequest('POST', requestURL, body) 
  .then( (data) => console.log(data))
  .catch( (error) => console.log(error))