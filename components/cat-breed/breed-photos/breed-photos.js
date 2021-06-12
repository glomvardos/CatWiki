import BreedPhoto from './breed-photo'

import classes from './breed-photos.module.scss'

function BreedPhotos(props) {
  const { breedImages } = props

  const displayBreedImages = breedImages.map(image => (
    <BreedPhoto key={image.id} breedImages={image.url} />
  ))

  return (
    <div className={classes.breed_photos}>
      <h2>Other Photos</h2>
      <div className={classes.grid}>{displayBreedImages}</div>
    </div>
  )
}

export default BreedPhotos
