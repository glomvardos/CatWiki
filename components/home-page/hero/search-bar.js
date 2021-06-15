import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import classes from './search-bar.module.scss'

function SearchBar(props) {
  const { breeds } = props
  const [breed, setBreed] = useState('')
  const [foundBreeds, setFoundBreeds] = useState(breeds)
  const [isFocus, setIsFocus] = useState(false)

  const inputRef = useRef()

  const router = useRouter()

  // Search For Breeds
  function searchHandler(event) {
    const keyword = event.target.value

    if (keyword !== '') {
      const results = breeds.filter(breed =>
        breed.name.toLowerCase().startsWith(keyword.toLowerCase())
      )

      setFoundBreeds(results)
    } else {
      setFoundBreeds(breeds)
    }

    setBreed(keyword)
  }

  // Display - Hide Breed Items
  function onFocusHandler() {
    setIsFocus(true)
  }

  function onMouseLeave() {
    setIsFocus(false)
    inputRef.current.blur()
  }

  // POST popular breed
  async function searchedBreedHandler(breedName) {
    const searchedBreed = breeds.find(
      breedItem => breedItem.name.toLowerCase() === breedName.toLowerCase()
    )

    const response = await fetch('/api/post-popular-breeds', {
      method: 'POST',
      body: JSON.stringify(searchedBreed),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    console.log(data)
  }

  // Handle Input Field
  function inputFieldHandler(breedName) {
    setBreed(breedName)
    inputRef.current.focus()
  }

  // Handle Search Submits
  function onClickSearchHandler() {
    if (breed.trim() === '') return
    searchedBreedHandler(breed)
    router.push(`/breed/${breed.toLowerCase()}`)
  }

  function onSubmitHandler(event) {
    event.preventDefault()
    if (breed.trim() === '') return
    searchedBreedHandler(breed)

    router.push(`/breed/${breed.toLowerCase()}`)
  }

  // Display Breed Items
  const displayBreeds = foundBreeds.map(breed => (
    <li key={breed.id} onClick={() => inputFieldHandler(breed.name)}>
      {breed.name}
    </li>
  ))

  return (
    <form onSubmit={onSubmitHandler} className={classes.actions} onMouseLeave={onMouseLeave}>
      <input
        ref={inputRef}
        type='text'
        value={breed}
        onChange={searchHandler}
        onClick={onFocusHandler}
        placeholder='Search'
        autoComplete='off'
      />

      {isFocus && (
        <div className={classes.container}>
          <ul>
            {(foundBreeds && foundBreeds.length > 0 && displayBreeds) || <li>No Results found</li>}
          </ul>
        </div>
      )}

      <i className='fas fa-search' onClick={onClickSearchHandler}></i>
    </form>
  )
}

export default SearchBar
