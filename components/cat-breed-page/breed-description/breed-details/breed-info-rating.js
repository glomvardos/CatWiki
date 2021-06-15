import BreedRatingLevel from './breed-rating-level'
import classes from './breed-info-rating.module.scss'

function BreedInfoRating(props) {
  const { breed } = props

  return (
    <div className={classes.breed_info_rating}>
      <div className={classes.breed_grid}>
        <p>
          <strong>Adaptability:</strong>
        </p>
        <BreedRatingLevel breedRating={breed.adaptability} />
      </div>
      <div className={classes.breed_grid}>
        <p>
          <strong>Affection level:</strong>
        </p>
        <BreedRatingLevel breedRating={breed.affection_level} />
      </div>
      <div className={classes.breed_grid}>
        <p>
          <strong>Child Friendly:</strong>
        </p>
        <BreedRatingLevel breedRating={breed.child_friendly} />
      </div>
      <div className={classes.breed_grid}>
        <p>
          <strong>Grooming:</strong>
        </p>
        <BreedRatingLevel breedRating={breed.grooming} />
      </div>
      <div className={classes.breed_grid}>
        <p>
          <strong>Intelligence:</strong>
        </p>
        <BreedRatingLevel breedRating={breed.intelligence} />
      </div>
      <div className={classes.breed_grid}>
        <p>
          <strong>Health issues:</strong>
        </p>
        <BreedRatingLevel breedRating={breed.health_issues} />
      </div>
      <div className={classes.breed_grid}>
        <p>
          <strong>Social needs:</strong>
        </p>
        <BreedRatingLevel breedRating={breed.social_needs} />
      </div>
      <div className={classes.breed_grid}>
        <p>
          <strong>Stranger friendly:</strong>
        </p>
        <BreedRatingLevel breedRating={breed.stranger_friendly} />
      </div>
    </div>
  )
}

export default BreedInfoRating
