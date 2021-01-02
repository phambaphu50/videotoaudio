import { useState } from 'react'
import { convertAudio } from '../../helpers/convertAudio'

const VideoDetail = ({ video }) => {
  const [downloaded, setDownloaded] = useState()

  if (!video) {
    return (
      <div>
        <p>
          Use the API to search for videos matching specific search terms,
          topics, locations, publication dates, and much more. The APIs
          search.list method also supports searches for playlists and channels.
          With the YouTube Data API, you can add a variety of YouTube features
          to your application. Use the API to upload videos, manage playlists
          and subscriptions, update channel settings, and more.
        </p>
        <style jsx={'true'}>{`
          p {
            font-size: 18px;
            text-align: justify;
          }
      `}</style>
      </div>
    )
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`


  const handleConvertAudio = async (e) => {
    e.preventDefault()
    const result = await convertAudio(video.id.videoId)
    if (result) {
      setDownloaded(true)
    }
  }

  return (
    <div className='video-detail'>
      <div className='embed'>
        <iframe src={videoSrc} allowFullScreen title='Video player' />
      </div>
      <div className='button-action'>
        <button onClick={handleConvertAudio}>Convert audio MP3</button>
        <span>{ downloaded ? 'Download success' : '' }</span>
      </div>
      <div className='segment'>
        <h4 className='header'>{video.snippet.title}</h4>
        <p dangerouslySetInnerHTML={{ __html: video.snippet.description }}></p>
      </div>
      <style jsx={'true'}>{`
          iframe {
            width: 500px;
            height: 300px;
          }
          p {
            font-size: 18px;
            text-align: justify;
          }
          @media (max-width: 767px) {
            iframe {
              width: 300px;
              height: 200px;
            }
          }
      `}</style>
    </div>
  )
}

export default VideoDetail
