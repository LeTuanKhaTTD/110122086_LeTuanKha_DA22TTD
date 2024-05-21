

/*Xử lí form bình luận*/  
const commentForm = document.querySelector('.comment-form');
const commentText = document.querySelector('#comment-text');
const commentSection = document.querySelector('.comment-section');

commentForm.addEventListener('submit', (event) => {
  event.preventDefault(); 


  const comment = commentText.value.trim();


  if (comment) {

    const newComment = document.createElement('div');
    newComment.classList.add('comment');

    const commentContent = document.createElement('p');
    commentContent.textContent = comment;
    newComment.appendChild(commentContent);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Xóa';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', () => {
      commentSection.removeChild(newComment);
    });
    newComment.appendChild(deleteButton);


    commentSection.appendChild(newComment);


    commentText.value = '';
  }
});
