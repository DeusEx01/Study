// const numberOfElemets = 50;

// console.log('Start of loop')

// for (let i = 0; i < numberOfElemets; i++) {
//   console.log(`i: ${i}`)
// }

// console.log('End of loop')

const developer = {
  name: 'Elers',
  isDev: true,
};
// promise statuses: pending, fulfilled and rejected
const promise = new Promise((resolve, reject) => {
  if (developer.isDev) {
    setTimeout( () => {
      resolve(`${developer.name} is a JS developer`);
    }, 3000)
  } else {
    reject(`${developer.name} is not a JS developer`)
  }
});
// promise methods are: then, catch and finally
console.log(promise) // promise.status == pendind
promise
    .then( (message) => {
    console.log(`message: ${message}`)
    console.log(promise) // promise.status == fulfilled, if isDev == false then promise.status == rejected
    })
    .catch(error => {
      console.log(error)
    })
    .finally( () => {
      console.log(`Finally`) // is executed whether it's fulfilled or rejected
    })

