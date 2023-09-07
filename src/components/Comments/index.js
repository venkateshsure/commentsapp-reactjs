import {Component} from 'react'

import {v4} from 'uuid'

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

// Write your code here
class Comments extends Component {
  state = {
    input: '',
    textarea: '',
    initialList: [],
  }

  inputText = event => {
    this.setState({input: event.target.value})
  }

  textareaText = event => {
    this.setState({textarea: event.target.value})
  }

  commentSection = event => {
    event.preventDefault()
    const {input, textarea} = this.state

    const newComment = {
      id: v4(),
      input,
      textarea,
    }

    this.setState(pre => ({
      initialList: [...pre.initialList, newComment],
      input: '',
      textarea: '',
    }))
  }

  render() {
    const {input, textarea, initialList} = this.state
    return (
      <div className="comment-app">
        <div className="comment-app-block">
          <div className="comment-app-con">
            <h1 className="head">Comments</h1>
            <p className="para">say something to 4.0 technologies</p>
            <form onSubmit={this.commentSection}>
              <input
                onChange={this.inputText}
                className="input-con"
                type="text"
                placeholder="Your Name"
              />
              <textarea
                onChange={this.textareaText}
                className="input-con"
                rows="5"
                cols="10"
                placeholder="Your Comment"
                value={textarea}
              />
              <button type="submit" className="but">
                Add Comment
              </button>
            </form>
          </div>
          <img
            className="img"
            alt="comments"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
          />
        </div>
        <ul>
          {initialList.map(each => (
            <CommentItem
              key={each.id}
              input={each.input}
              textarea={each.textarea}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
