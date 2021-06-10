import classes from './search-bar.module.scss'

function SearchBar() {
  return (
    <div className={classes.actions}>
      <input type='text' placeholder='Search' className={classes.input_small} />

      {/* Display input for desktop screen size*/}
      <input type='text' placeholder='Enter your breed' className={classes.input_large} />

      <i className='fas fa-search'></i>
    </div>
  )
}

export default SearchBar
