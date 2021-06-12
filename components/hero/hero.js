import Logo from '../layout/logo'
import SearchBar from './search-bar'

import classes from './hero.module.scss'

function Hero(props) {
  const { breeds } = props
  return (
    <header className={classes.header}>
      <div>
        <Logo />
        <h1>Get to know more about your cat breed</h1>
      </div>
      <SearchBar breeds={breeds} />
    </header>
  )
}

export default Hero
