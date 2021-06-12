import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import classes from './search-bar.module.scss'

function SearchBar(props) {
  const { breeds } = props

  const [breed, setBreed] = useState('')
  const [foundBreeds, setFoundBreeds] = useState(breeds)
  const [isFocus, setIsFocus] = useState(false)

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
      setFoundBreeds(breedNames)
    }

    setBreed(keyword)
  }

  // Display - Hide Breed Items
  function onFocusHandler() {
    setIsFocus(true)
  }

  function onMouseLeave() {
    setIsFocus(false)
  }

  // Handle Search Submits
  function onClickSearchHandler() {
    if (breed.trim() === '') return
    router.push(`/breed/${breed.toLowerCase()}`)
  }

  function onSubmitHandler(event) {
    event.preventDefault()
    if (breed.trim() === '') return
    router.push(`/breed/${breed.toLowerCase()}`)
  }

  // Display Breed Items
  const displayBreeds = foundBreeds.map(breed => (
    <Link key={breed.id} href={`/breed/${breed.name.toLowerCase()}`}>
      <li>{breed.name}</li>
    </Link>
  ))

  return (
    <form onSubmit={onSubmitHandler} className={classes.actions} onMouseLeave={onMouseLeave}>
      <input
        type='text'
        value={breed}
        onChange={searchHandler}
        onClick={onFocusHandler}
        placeholder='Search'
        autoComplete='off'
      />

      {isFocus && (
        <div className={classes.container}>
          <ul>{foundBreeds && foundBreeds.length > 0 && displayBreeds}</ul>
        </div>
      )}

      <i className='fas fa-search' onClick={onClickSearchHandler}></i>
    </form>
  )
}

export default SearchBar
