import classes from './breed-rating-level.module.scss'

function BreedRatingLevel(props) {
  const { breedRating } = props

  const divs = [<div></div>, <div></div>, <div></div>, <div></div>, <div></div>]

  const displayDivs = divs.map((_, i) => {
    return (
      <div key={i}>
        <div className={i < breedRating ? classes.filled : classes.empty}></div>
      </div>
    )
  })

  return <div className={classes.breed_rating}>{displayDivs}</div>
}

export default BreedRatingLevel
