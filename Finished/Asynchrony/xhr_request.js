const requestURL = 'https://jsonplaceholder.typicode.com/users';


function sendRequest(method, url, body = null) { //thirs argument body for POST method 
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    
    xhr.responseType = 'json'; //conversation to json type (instead of JSON.parse())
    xhr.setRequestHeader('Content-Type', 'application/json')
    
    xhr.onload = () => {
      if (xhr.status >= 400) { // additional check for errors
        reject(xhr.response)
      } else {
        resolve(xhr.response);
        console.log('Success')
      }
    }
    xhr.onerror = () => {
      reject(xhr.response)
    }
    
    xhr.send(JSON.stringify(body)); //send data to ourselves
  });
  
  
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