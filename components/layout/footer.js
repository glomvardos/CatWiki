import Logo from './logo'
import classes from './footer.module.scss'

function Footer() {
  return (
    <footer className={classes.footer}>
      <Logo img='/images/CatwikiLogoWhite.svg' />
      <p>
        <span className={classes.copy}>&copy;</span> created by <span>glomvardos</span> - 2021
      </p>
    </footer>
  )
}

export default Footer
