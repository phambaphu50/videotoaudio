import { YOUTUBE_API_KEY } from './constant'
import axios from 'axios'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet', 
        maxResult: 5,
        key: YOUTUBE_API_KEY
    }
})
