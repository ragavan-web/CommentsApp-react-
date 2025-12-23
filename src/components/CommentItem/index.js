// Write your code here
import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {commentDetails, toggleLike, deleteComment} = props
  const {id, name, comment, isLiked, bgClass, date} = commentDetails

  const likeImage = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const time = formatDistanceToNow(date)

  const onClickLike = () => {
    toggleLike(id)
  }

  const onClickDelete = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-header">
        <div className={`profile ${bgClass}`}>
          <p className="profile-letter">{name[0].toUpperCase()}</p>
        </div>

        <div className="comment-info">
          <p className="username">{name}</p>
          <p className="time">{time} ago</p>
        </div>
      </div>

      <p className="comment-text">{comment}</p>

      <div className="comment-actions">
        <button type="button" className="like-button" onClick={onClickLike}>
          <img src={likeImage} alt="like" className="like-img" />
        </button>

        <button
          type="button"
          data-testid="delete"
          className="delete-button"
          onClick={onClickDelete}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
