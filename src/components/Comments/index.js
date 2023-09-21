import {Component} from 'react'

import {v4} from 'uuid'

import {formatDistanceToNow} from 'date-fns'

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
      isLiked: false,
      date: formatDistanceToNow(new Date()),
      initialBackgroundColor:
        initialContainerBackgroundClassNames[
          Math.ceil(
            Math.random() * initialContainerBackgroundClassNames.length - 1,
          )
        ],
    }

    this.setState(pre => ({
      initialList: [...pre.initialList, newComment],

      input: '',
      textarea: '',
    }))
  }

  likedImageIcon = id => {
    this.setState(pre => ({
      initialList: pre.initialList.map(each => {
        if (id === each.id) {
          return {...each, isLiked: !each.isLiked}
        }

        return each
      }),
    }))
  }

  commentDelete = prop => {
    const {initialList} = this.state

    const filterList = initialList.filter(each => each.id !== prop)
    this.setState({
      initialList: filterList,
    })
  }

  render() {
    const {input, textarea, initialList} = this.state

    return (
      <div className="comment-app">
        <div className="comment-app-block">
          <h1 className="head">Comments</h1>

          <div className="comment-app-con">
            <form className="form" onSubmit={this.commentSection}>
              <p className="para">say something to 4.0 technologies</p>
              <input
                onChange={this.inputText}
                className="input-con"
                type="text"
                placeholder="Your Name"
                value={input}
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
            <img
              className="img"
              alt="comments"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            />
          </div>
          <p>
            <span className="comment-count">{initialList.length}</span> Comments
          </p>

          <ul className="ul-con">
            {initialList.map(each => (
              <CommentItem
                key={each.id}
                each={each}
                commentDelete={this.commentDelete}
                likedImageIcon={this.likedImageIcon}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
