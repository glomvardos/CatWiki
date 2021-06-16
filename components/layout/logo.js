import Link from 'next/link'

import classes from './logo.module.scss'

function Logo(props) {
  const { img } = props
  return (
    <Link href='/'>
      <a className={classes.logo}>
        <img src={!img ? '/images/CatwikiLogo.svg' : img} alt='catwiki logo' />
      </a>
    </Link>
  )
}

export default Logo
