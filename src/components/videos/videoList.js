import { memo } from 'react'
import VideoItem from './videoItem'

const VideoList = ({videos, handleVideoSelect}) => {
  return (
    <div className='videos-list'>
      {videos &&
        videos.length > 0 &&
        videos.map((video) => {
          return (
            <VideoItem
              key={video.id.videoId}
              video={video}
              handleVideoSelect={handleVideoSelect}
            />
          )
        })}
    </div>
  )
}

export default memo(VideoList)
