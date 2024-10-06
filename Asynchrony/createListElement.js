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

export function addNewPost(title, text, comment, author) {
  function newElement(elem, cl, elementToAppend) {
    let element = document.createElement(elem)
    element.classList.add(cl);
    elementToAppend.append(element)
    return element;
  }

  const post = newElement('div', 'post', posts)
  post.classList.add('post')
  post.id = 'post';
  const postTitle = newElement('h1', 'post__title', post)
  const postText = newElement('p', 'post__text', post)
  const postCommentsText = newElement('b', 'post__comments-text', post);
  const postComments = newElement('div', 'post__comments', post)
    const postComment = newElement('div', 'post-comment', postComments);
      const postCommentText = newElement('span', 'post-comment__text', postComment);
      const postCommentAuthor = newElement('span', 'post-comment__author', postComment);
  
  postTitle.textContent = title;
  postText.textContent = text;
  postCommentsText.textContent = 'Comments';
  postCommentAuthor.textContent = author;
  postCommentText.textContent = comment;

  return post;
  
}