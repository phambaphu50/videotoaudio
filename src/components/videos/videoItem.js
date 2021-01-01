import { memo } from 'react'

const VideoItem = ({ video, handleVideoSelect }) => {
  return (
    <div onClick={() => handleVideoSelect(video)} className='video-item'>
      <img
        className='video-item__image'
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.description}
      />
      <div className='content'>
        <h4 className='video-item__title'>{video.snippet.title}</h4>
      </div>
      <style jsx={'true'}>{`
        .video-item {
          width: 250px;
          margin: 20px;
        }
        .video-item:hover {
          cursor: pointer;
          box-shadow: 0 0 6px rgb(123 124 125);
        }
        .video-item__image {
          width: 100%;
          height: auto;
        }
        .video-item__title {
          font-size: 20px;
        }
      `}</style>
    </div>
  )
}

export default memo(VideoItem)
