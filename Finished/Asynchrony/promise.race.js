// Promise.race([
//   new Promise(),
//   new Promise(),
//   new Promise(),
// ]) Takes array of promises and returns fastest promise

const promise1 = new Promise( resolve => {
  setTimeout( () => {
    resolve('promise1')
  }, 500)
})

const promise2 = new Promise( resolve => {
  setTimeout( () => {
    resolve('promise2')
  }, 2000)
})

const promise3 = new Promise( resolve => {
  setTimeout( () => {
    resolve('promise3')
  }, 100)
})

Promise.race([promise1, promise2, promise3])
  .then((result) => {
    console.log('result', result)
  })
  .catch(error => {
    console.log(error);
  })