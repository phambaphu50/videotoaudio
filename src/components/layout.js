import { useState } from 'react'
import youtube from '../helpers/youtube'
import { VideoList, VideoDetail } from './videos/index'
import SearchForm from './searchForm'

const Layout = () => {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState()

  const handleSearchYoutube = async (keyword) => {
    const result = await youtube.get('/search', {
      params: {
        q: keyword,
      },
    })
    if (result) {
      console.log(result.data)
      setVideos(result.data.items)
    }
  }

  const handleSubmit = (keyword) => {
    if (keyword) {
      handleSearchYoutube(keyword)
    }
  }

  const handleVideoSelect = (video) => {
    setSelectedVideo(video)
  }

  return (
    <div className='container'>
      <h1>Search for a video on Youtube</h1>
      <SearchForm handleFormSubmit={handleSubmit} />
      <div className='grid-column'>
        <div className='column grid-column__list'>
          <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
        </div>
        <div className='column grid-column__detail'>
          <VideoDetail video={selectedVideo} />
        </div>
      </div>
      <style jsx={'true'}>{`
        .container {
          width: 100%;
          max-width: 1024px;
        }
        .search-form__keyword {
          padding: 12px 8px;
          width: 95%;
          border-radius: 20px;
          border: 0;
        }
        .search-form__keyword:focus {
          outline: none;
        }
        .grid-column {
            display: flex;
            flex-wrap: nowrap;
            margin-top: 30px;
        }
        .grid-column__list {
            display: flex;
            flex-grow: 2;
            justify-content: center;
        }
        .grid-column__detail {
            display: flex;
            flex-grow: 1;
            padding: 10px;
        }
        @media (max-width: 767px) {
          .container {
            max-width: 100%;
            flex-direction: column;
          }
          .grid-column {
            flex-direction: column;
          } 
          .grid-column__list {
            border-bottom: 1px solid #ddd;
          }
          .grid-column__detail { 
            margin-top: 12px;
          }
        }
      `}</style>
    </div>
  )
}
export default Layout
