import BreedDescription from './breed-description/breed-description'
import BreedPhotos from './breed-photos/breed-photos'

import classes from './cat-breed.module.scss'

function CatBreed(props) {
  const { breed, breedImages } = props
  return (
    <section className={classes.breed}>
      <BreedDescription breed={breed} />
      <BreedPhotos breedImages={breedImages} />
    </section>
  )
}

export default CatBreed
