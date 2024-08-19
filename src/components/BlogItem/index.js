import './index.css'
import { Link } from 'react-router-dom'

const BlogItem = (props) => {
  const {blogItemData} = props

  const {id, title, imageUrl, avatarUrl, author, topic} = blogItemData

  return (
    <Link to={`/blogs/${id}`} className="blog-link">
      <li className="blog-item-container">
        <img
          src={imageUrl}
          alt={title}
          className="blog-img"
        />
        <div className="blog-item-detail-container">
          <h1 className="topic">{topic}</h1>
          <h1 className="title">{title}</h1>
          <div className="author-card">
            <img
              src={avatarUrl}
              alt={author}
              className="author-img"
            />
            <p className="author">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
