import './index.css'
import { Component } from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogItemData: [], isLoading: true}

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    
    const updatedData =
      {
        id: data.id,
        title: data.title,
        imageUrl: data.image_url,
        avatarUrl: data.avatar_url,
        author: data.author,
        content: data.content,
        topic: data.topic,
      }

    this.setState({blogItemData: updatedData, isLoading: false})
  }

  renderBlogItemDetails = () => {
    const {blogItemData} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogItemData

    return (
      <div>
        <h1 className="blog-detail-title">{title}</h1>
          <div className="blog-detail-author-card">
            <img
              src={avatarUrl}
              alt={author}
              className="blog-detail-author-img"
            />
            <p className="blog-detail-author">{author}</p>
          </div>
          <img
            src={imageUrl}
            alt={title}
            className="blog-detail-img"
          />
          <p className="blog-detail-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div testid="loader"  className="blog-item-details-container">
        {
          isLoading ? <Loader type="ThreeDots" color="#00a6ff" height={50} width={50} /> : this.renderBlogItemDetails()
        }
      </div>
    )
  }
}

export default BlogItemDetails
