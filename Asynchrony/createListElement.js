export const createElement = (text) => {
  const newElement = document.createElement("li");
  const newElementAnchor = document.createElement("a");
  newElementAnchor.href = "#";
  newElementAnchor.textContent = text;
  newElement.append(newElementAnchor);
  return newElement;
};

export function createImageElement(text, src) {
  const newElement = document.createElement("li");
  newElement.classList.add('photo-item');
  const newElementImage = document.createElement("img");
  newElementImage.src = src;
  newElementImage.classList.add('photo-item__image');

  const newElementHeader = document.createElement('h3');
  newElementHeader.classList.add('photo-item__title');
  newElementHeader.textContent = text;

  newElement.append(newElementImage);
  newElement.append(newElementHeader);

  

  return newElement;
}