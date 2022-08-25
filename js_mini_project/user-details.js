const wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.appendChild(wrap);

let url = new URL(location.href);
let jsonUserObject = url.searchParams.get('data');
let user = JSON.parse(jsonUserObject);

let userCard = document.createElement('div');
userCard.classList.add('card');

userCard.innerHTML = `<h2>${user.id}. ${user.name}</h2>
                      <p>Username - ${user.username}</p>   
                      <p>Email - ${user.email}</p>   
                      <p>Address: ${user.address.street} street, suite: ${user.address.suite},
                      ${user.address.city} city, zipcode: ${user.address.zipcode}, geolocation: ${user.address.geo.lat} lat,
                      ${user.address.geo.lng} lng</p>
                      <p>Phone: ${user.phone}</p>
                      <p>Website: ${user.website}</p>
                      <p>Company - ${user.company.name}</p>
                      <p>Company catchPhrase: ${user.company.catchPhrase}</p>
                      <p>Company bs: ${user.company.bs}</p>`;

let btnDiv = document.createElement('div');
btnDiv.classList.add('center');

let userPosts = document.createElement('button');
userPosts.classList.add('button');
userPosts.innerText = 'posts of current user';
let postTitles = document.createElement('div');
postTitles.classList.add('titles');

wrap.appendChild(userCard);
userCard.appendChild(btnDiv);
userCard.appendChild(postTitles);
btnDiv.appendChild(userPosts);

userPosts.addEventListener('click', function (id) {
    fetch('https://jsonplaceholder.typicode.com/users/' + user.id + '/posts')
        .then(value => value.json())
        .then(posts => {
            for (const post of posts) {
                if (post.userId === user.id) {
                    let postDiv = document.createElement('div');
                    postDiv.classList.add('post');
                    postDiv.innerHTML = `<h4>${post.id}.  ${post.title}</h4>`;

                    let postDetails = document.createElement('a');
                    postDetails.innerText = 'Post details';
                    // postDetails.classList.add('details');
                    postDetails.href = `post-details.html?data=${JSON.stringify(post)}`;

                    postTitles.appendChild(postDiv);
                    postDiv.appendChild(postDetails);

                }
                ;
            }
            ;
        });

});