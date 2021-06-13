import PopularBreedItem from './popular-breed-item'
import classes from './popular-breeds.module.scss'

function PopularBreeds(props) {
  const { popularBreeds } = props

  const displayPopularBreeds = popularBreeds.map((breed, i) => (
    <PopularBreedItem
      key={breed.id}
      image={breed.image}
      name={breed.name}
      description={breed.description}
      number={i + 1}
    />
  ))

  return (
    <section className={classes.popular_breeds}>
      <h1>Top 10 most searched breeds</h1>
      {displayPopularBreeds}
    </section>
  )
}

export default PopularBreeds
