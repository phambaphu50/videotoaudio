import axios from 'axios'

export const convertAudio = async (videoId) => {
  const result = await axios.post('/api/convert-audio', {
    videoId: videoId,
  })
  if (result) {
    return result
  }
  return false
}
