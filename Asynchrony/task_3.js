import { createImageElement } from "./createListElement.js";
import { loader } from "./loader.js";

const PHOTOS_URL = "https://jsonplaceholder.typicode.com/photos";
let ids = [60, 12, 55];

function getFastestLoadedPhoto(ids_array) {
  loader();
  const requests = ids_array.map((id) => {
    //get array of promises
    return fetch(`${PHOTOS_URL}/${id}`);
  });

  Promise.race(requests) // pass array of promises
    .then((request) => {
      return request.json();
    })
    .then((result) => {
      console.log(result);
      const dataContainer = document.querySelector("#data-container");
      dataContainer.append(createImageElement(result.title, result.url));
    })
    .finally(() => loader())
}

getFastestLoadedPhoto(ids);
