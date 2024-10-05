export const createElement = (text) => {
  const newElement = document.createElement("li");
  const newElementAnchor = document.createElement("a");
  newElementAnchor.href = "#";
  newElementAnchor.textContent = text;
  newElement.append(todoElementAnchor);
  return todoElement;
};

export function createImageElement(text, src) {
  const newElement = document.createElement("li");
  const newElementImage = document.createElement("img");
  newElementImage.src = src;

  newElementHeader = document.createElement('h3');
  newElementHeader.textContent = text

  newElement.append(todoElementAnchor);

  

  return todoElement;
}