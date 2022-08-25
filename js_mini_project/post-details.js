const wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

let url = new URL(location.href);
let jsonPostObject = url.searchParams.get('data');
let post = JSON.parse(jsonPostObject);

let postCard = document.createElement('div');
postCard.classList.add('card');

postCard.innerHTML = `<h2>User ${post.userId}, post ${post.id}</h2>
                      <h3>${post.title}</h3>
                      <p>${post.body}</p>`;

const btnComments = document.createElement('button');
btnComments.innerText = 'Comments of post';
btnComments.classList.add('button');

btnComments.onclick = function (id) {
    fetch('https://jsonplaceholder.typicode.com/posts/' + post.id + '/comments')
        .then(value => value.json())
        .then(comments => {
            const commentDiv = document.createElement('div');

            for (const comment of comments) {
                if (post.id === comment.postId) {
                    const commentCard = document.createElement('div');
                    commentCard.classList.add('details');
                    commentCard.innerHTML = `<h4>Comment ${comment.id} to the post ${comment.postId}</h4>
                                                             <p>${comment.name}</p>   
                                                             <p>Email: ${comment.email}</p> 
                                                             <p>${comment.body}</p>`

                    postCard.appendChild(commentDiv);
                    commentDiv.appendChild(commentCard);

                }
                ;
            }
            ;
        });
};

wrap.appendChild(postCard);
postCard.appendChild(btnComments);

