const posts = [
  {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "images/avatar-vangogh.jpg",
      post: "images/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21
  },
  {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "images/avatar-courbet.jpg",
      post: "images/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4
  },
      {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "images/avatar-ducreux.jpg",
      post: "images/post-ducreux.jpg",
      comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152
  }
]

const mainWrap = document.querySelector(".main-wrap")

posts.forEach((post, index) => {
  mainWrap.innerHTML += `
    <div class="post-container">
            <div class="artist-avatar">
                <img src="${post.avatar}" alt="avatar image of ${post.name}" class="avatar-image">
                <div class="artist-text">
                    <p class="bold-text">${post.name}</p>
                    <p class="location">${post.location}</p>
                </div>
            </div>
            <img src="${post.post}" alt="Oldagram post image" class="post-image">
            <div class="interactions">
                <img src="images/icon-heart.png" alt="icon-heart" class="icon like-btn" data-index="${index}">
                <img src="images/icon-comment.png" alt="icon-comment" class="icon">
                <img src="images/icon-dm.png" alt="icon-dm" class="icon">
            </div>
            <div class="text-wrap">
                <p class="bold-text likes-count" data-index="${index}">${post.likes} likes</p>
                <p class="post-desc"><span class="bold-text">${post.username}</span> ${post.comment}</p>
            </div>
        </div>
  `
})

const likeButtons = document.querySelectorAll(".like-btn");

likeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    const postIndex = button.dataset.index;
    posts[postIndex].likes++;

    const likesText = document.querySelector(`.likes-count[data-index="${postIndex}"]`);
    likesText.textContent = `${posts[postIndex].likes} likes`;
  })
})

console.log("JS is connected");
