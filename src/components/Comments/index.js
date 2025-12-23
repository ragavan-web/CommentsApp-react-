import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

const Comments = () => {
  const [nameInput, setNameInput] = useState('')
  const [commentInput, setCommentInput] = useState('')
  const [commentsList, setCommentsList] = useState([])

  const onChangeName = event => {
    setNameInput(event.target.value)
  }

  const onChangeComment = event => {
    setCommentInput(event.target.value)
  }

  const onAddComment = event => {
    event.preventDefault()

    if (nameInput !== '' && commentInput !== '') {
      const randomIndex = Math.floor(
        Math.random() * initialContainerBackgroundClassNames.length,
      )

      const newComment = {
        id: uuidv4(),
        name: nameInput,
        comment: commentInput,
        isLiked: false,
        bgClass: initialContainerBackgroundClassNames[randomIndex],
        date: new Date(),
      }

      setCommentsList(prev => [newComment, ...prev])
      setNameInput('')
      setCommentInput('')
    }
  }

  const toggleLike = id => {
    setCommentsList(prev =>
      prev.map(each =>
        each.id === id ? {...each, isLiked: !each.isLiked} : each,
      ),
    )
  }

  const deleteComment = id => {
    setCommentsList(prev => prev.filter(each => each.id !== id))
  }

  return (
    <div className="comments-app">
      <div className="comments-container">
        <h1 className="heading">Comments</h1>

        <div className="top-section">
          <form className="comment-form" onSubmit={onAddComment}>
            <p className="form-description">
              Say something about 4.0 Technologies
            </p>

            <input
              type="text"
              placeholder="Your Name"
              value={nameInput}
              onChange={onChangeName}
              className="name-input"
            />

            <textarea
              placeholder="Your Comment"
              value={commentInput}
              onChange={onChangeComment}
              className="comment-input"
            />

            <button type="submit" className="add-button">
              Add Comment
            </button>
          </form>

          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
            className="comments-image"
          />
        </div>

        <hr className="separator" />

        <p className="comments-count">
          <span className="count">{commentsList.length}</span> Comments
        </p>

        <ul className="comments-list">
          {commentsList.map(each => (
            <CommentItem
              key={each.id}
              commentDetails={each}
              toggleLike={toggleLike}
              deleteComment={deleteComment}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Comments
