import './index.css'
import { Component } from 'react'
import BlogItem from '../BlogItem'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogItemList: [], isLoading: true}

  componentDidMount() {
    this.getBlogItemLists()
  }

  getBlogItemLists = async () => {
    const response = await fetch("https://apis.ccbp.in/blogs")
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({blogItemList: updatedData, isLoading: false})
  }

  render() {
    const {blogItemList, isLoading} = this.state
    return (
      <ul className="blog-list-container">
        {
          isLoading
            ?
              <Loader type="ThreeDots" color="#00a6ff" height={50} width={50} />
            :
              blogItemList.map(eachItem => (
                <BlogItem
                  blogItemData={eachItem}
                  key={eachItem.id}
                />
              ))
        }
      </ul>
    )
  }
}

export default BlogList
