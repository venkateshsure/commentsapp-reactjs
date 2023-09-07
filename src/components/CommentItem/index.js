// Write your code here

const CommentItem = props => {
  const {input, textarea} = props
  return (
    <li>
      <p>{input}</p>
      <p>{textarea}</p>
    </li>
  )
}

export default CommentItem
