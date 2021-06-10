import Logo from '../layout/logo'

import classes from './hero.module.scss'
import SearchBar from './search-bar'

function Hero() {
  return (
    <header className={classes.header}>
      <div>
        <Logo />
        <h1>Get to know more about your cat breed</h1>
      </div>
      <SearchBar />
    </header>
  )
}

export default Hero
