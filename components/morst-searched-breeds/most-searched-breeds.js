import Link from 'next/link'
import BreedGrid from './breed-grid'

import classes from './most-searched-breeds.module.scss'

function MostSearchedBreeds(props) {
  const { popularBreeds } = props

  const displayPopularBreeds = popularBreeds.map(breed => (
    <BreedGrid key={breed.id} image={breed.image} name={breed.name} />
  ))
  return (
    <section className={classes.breeds}>
      <h4>Most Searched Breeds</h4>
      <div className={classes.line}></div>
      <div className={classes.flex_container}>
        <h2>66+ Breeds for you to discover</h2>
        <Link href='/popular-breeds'>
          <a className={classes.flex_link}>
            see more
            <i className='fas fa-chevron-right'></i>
          </a>
        </Link>
      </div>
      <div className={classes.grid}>{displayPopularBreeds}</div>
    </section>
  )
}

export default MostSearchedBreeds
