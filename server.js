const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const ytdl = require('ytdl-core')
const readline = require('readline')

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path
const ffmpeg = require('fluent-ffmpeg')
ffmpeg.setFfmpegPath(ffmpegPath)

const app = express()
const router = express.Router()

app.use(express.static(path.join(__dirname, 'build')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/ping', function (req, res) {
  return res.send('pong')
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

router.route('/convert-audio').post(async function (req, res) {
  const videoId = req.body.videoId

  const stream = ytdl(videoId, {
    quality: 'highestaudio',
  })
  const start = Date.now()

  ffmpeg(stream)
    .audioBitrate(128)
    .save(`${__dirname}/public/downloads/${videoId}.mp3`)
    .on('progress', (p) => {
      readline.cursorTo(process.stdout, 0)
      process.stdout.write(`${p.targetSize}kb downloaded`)
    })
    .on('end', () => {
      console.log(`\ndone, thanks - ${(Date.now() - start) / 1000}s`)
    })
    return res.json({ message: `${__dirname}/public/downloads/${videoId}.mp3` })
})

app.use('/api', router)

app.listen(process.env.PORT || 3000)
