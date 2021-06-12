import Link from 'next/link'
import BreedGrid from './breed-grid'

import classes from './most-searched-breeds.module.scss'

function MostSearchedBreeds() {
  return (
    <section className={classes.breeds}>
      <h4>Most Searched Breeds</h4>
      <div className={classes.line}></div>
      <div className={classes.flex_container}>
        <h2>66+ Breeds for you to discover</h2>
        <Link href='/'>see more</Link>
      </div>
      <BreedGrid />
    </section>
  )
}

export default MostSearchedBreeds
