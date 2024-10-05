export const createElement = (text) => {
  const todoElement = document.createElement("li");
  const todoElementAnchor = document.createElement("a");
  todoElementAnchor.href = "#";
  todoElementAnchor.textContent = text;
  todoElement.append(todoElementAnchor);
  return todoElement;
};