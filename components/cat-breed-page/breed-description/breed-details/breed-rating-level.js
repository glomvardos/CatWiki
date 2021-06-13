import classes from './breed-rating-level.module.scss'

function BreedRatingLevel(props) {
  const { breedRating } = props

  const divs = [<div></div>, <div></div>, <div></div>, <div></div>, <div></div>]

  // Map over the divs and add a class based on the recieving prop number
  const displayDivs = divs.map((_, i) => {
    return <div key={i} className={i < breedRating ? classes.filled : classes.empty}></div>
  })

  return <div className={classes.breed_rating}>{displayDivs}</div>
}

export default BreedRatingLevel
