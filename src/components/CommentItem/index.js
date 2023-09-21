// Write your code here

import './index.css'

const CommentItem = props => {
  const {each, commentDelete, likedImageIcon} = props
  const {id, input, textarea, initialBackgroundColor, isLiked, date} = each
  console.log(date)
  console.log(initialBackgroundColor)
  const imageLiked = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const text = isLiked ? 'Liked' : 'Like'

  const deleteComment = () => {
    commentDelete(id)
  }

  const likeButton = () => {
    likedImageIcon(id)
  }

  return (
    <li className="list-con">
      <div className="head-con">
        <div className={` ${initialBackgroundColor} initial`}>
          <p className="list-inner-con">{input[0]}</p>
        </div>
        <div className="gg-con">
          <div className="middle-con">
            <p>{input}</p>
            <p>{date}</p>
          </div>
          <p>{textarea}</p>
        </div>
      </div>
      <div className="buttons-con">
        <div className="like-con">
          <img className="like-icon" src={imageLiked} alt="like" />

          <button onClick={likeButton} type="button">
            {text}
          </button>
        </div>
        <button data-testid="delete" onClick={deleteComment} type="button">
          <img
            className="delete-icon"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
