import { useState } from 'react'

const SearchForm = () => {
  const [keyword, setKeyWord] = useState('')

  const handleChange = (e) => {
    if (e.target) {
      setKeyWord(e.target.value)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // search for a video with this keyword
    console.log(keyword)
  }

  return (
    <div className='container'>
      <h2>Search for a video on Youtube</h2>
      <form className='search-form' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search'
          value={keyword}
          onChange={handleChange}
          required
          className='search-form__keyword'
        />
      </form>
      <style jsx={'true'}>{`
        .container {
          width: 100%;
          max-width: 584px;
        }
        .search-form__keyword {
          padding: 12px 3px;
          width: 100%;
          border-radius: 20px;
          border: 0;
        }
        .search-form__keyword:focus {
          outline: none;
        }
        @media (max-width: 767px) {
          .container {
            max-width: 95%;
          }
        }
      `}</style>
    </div>
  )
}
export default SearchForm
