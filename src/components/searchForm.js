import { Fragment, useState } from 'react'
import SpeechToText from 'speech-to-text'
import { Voices } from '../svg/Voice'

var listener

const SearchForm = (props) => {
  const [keyword, setKeyWord] = useState('')
  const [listening, setListening] = useState(false)
  const [language] = useState('en-US')

  const handleChange = (e) => {
    if (e.target) {
      setKeyWord(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (keyword) {
      props.handleFormSubmit(keyword)
    }
  }

  const onAnythingSaid = (text) => {
    setKeyWord(text)
  }

  const onEndEvent = () => {
    if (listening) {
      startListening()
    }
  }

  const onFinalised = (text) => {
    console.log(text)
  }

  const startListening = () => {
    try {
      listener = new SpeechToText(
        onFinalised,
        onEndEvent,
        onAnythingSaid,
        language
      )
      listener.startListening()
      setListening(true)
    } catch (err) {
      console.log(err)
    }
  }

  const stopListening = () => {
    listener.stopListening()
    setListening(false)
  }

  const RenderButtonListening = ({ listening }) => {
    let buttonForListening

    if (listening) {
      buttonForListening = (
        <span title={'Stop Listening'} onClick={() => stopListening()} className='search-form__voice'>
          <Voices colors={['#4285f4','#34a853','#f4b400','#ea4335']} width='25px' height='25px' />
        </span>
      )
    } else {
      buttonForListening = (
        <span title={'Start Listening'} onClick={() => startListening()} className='search-form__voice'>
          <Voices colors={['#ddd','#ddd','#ddd','#ddd']} width='25px' height='25px' />
        </span>
      )
    }
    return buttonForListening
  }

  return (
    <div className='search-form'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search'
          value={keyword}
          onChange={handleChange}
          required
          className='search-form__keyword'
        />
      </form>
      <RenderButtonListening listening={listening} />
      <style jsx={'true'}>{`
        .search-form {
          position: relative;
        }
        .search-form__voice {
          position: absolute;
          right: 28px;
          top: 20%;
        }
        .search-form__voice:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
export default SearchForm
