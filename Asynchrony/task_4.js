import {addNewPost} from './createListElement.js'
import {addCommentsToPost} from './createListElement.js'

const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts'
const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments'

const posts = document.querySelector('#posts');

function renderPost(postId) {
  fetch(`${POSTS_URL}/${postId}`)
    .then(result => result.json())
    .then(post => {
      posts.append(addNewPost(`${post.title}`, post.body))
      fetch(`${COMMENTS_URL}?postId=${postId}`)
        .then( comments => {
          return comments.json();
        })
        .then( comments => {
          console.log(comments)
          addCommentsToPost(comments)
        })
    })
    
    
}

renderPost(26)
