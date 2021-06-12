import Image from 'next/image'
import BreedInfoRating from './breed-details/breed-info-rating'

import classes from './breed-description.module.scss'

function BreedDescription(props) {
  const { breed } = props
  console.log(breed)
  return (
    <div className={classes.breed_info}>
      <div className={classes.img_wrapper}>
        {breed.image.url && (
          <Image src={breed.image.url} alt={breed.title} width={300} height={300} />
        )}
      </div>

      <div>
        <h1>{breed.name}</h1>
        <p className={classes.breed_description}>{breed.description}</p>
        <p className={classes.breed_details}>
          <strong>Temperament:</strong> {breed.temperament}
        </p>
        <p className={classes.breed_details}>
          <strong>Origin:</strong> {breed.origin}
        </p>
        <p className={classes.breed_details}>
          <strong>Life Span:</strong> {breed.life_span}
        </p>
        <BreedInfoRating breed={breed} />
      </div>
    </div>
  )
}

export default BreedDescription
