// Write your JS code here
// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogItem} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogItem

  return (
    <li>
      <Link to={`/blogs/${id}`} className="blog-item-container">
        <img src={imageUrl} alt="yoyo" className="blog-img" />
        <div>
          <p className="topic-name">{topic}</p>
          <h1 className="title">{title}</h1>
          <div className="author-details">
            <img src={avatarUrl} alt={author} className="avatar" />
            <p className="author-name">{author}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
