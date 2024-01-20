const addCommentButton = document.querySelector("button");
const comments = document.querySelector(".comments");
const commentTextarea = document.querySelector("textarea");
const usernameDropdown = document.querySelector("#username-dropdown");

addCommentButton.addEventListener("click", () => {
  const commentText = commentTextarea.value;
  const selectedUsername = usernameDropdown.value;

  const newComment = document.createElement("div");
  newComment.classList.add("comment");

  newComment.innerHTML = `
    <div class="top-comment">
      <p class="user">${selectedUsername}</p> <p class="comment-ts">${new Date().toLocaleString()}</p>
    </div>
    <div class="comment-content">${commentText}</div>
  `;
  comments.appendChild(newComment);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-comment");
  deleteButton.textContent = "Delete";
  newComment.appendChild(deleteButton); 

  commentTextarea.value = "";
  deleteButton.addEventListener("click", () => {
    newComment.remove(); 
  });
});