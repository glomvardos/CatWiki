import BreedDescription from './breed-description'

import classes from './cat-breed.module.scss'

function CatBreed(props) {
  const { breed } = props

  return (
    <section className={classes.breed}>
      <BreedDescription breed={breed} />
    </section>
  )
}

export default CatBreed
