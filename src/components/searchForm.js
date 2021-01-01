import { useState } from 'react'

const SearchForm = (props) => {
  const [keyword, setKeyWord] = useState('')

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

  return (
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
  )
}
export default SearchForm
