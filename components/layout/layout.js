import Logo from './logo'
import Footer from './footer'

import classes from './layout.module.scss'

function Layout(props) {
  return (
    <>
      <main className={classes.main}>
        <Logo />
        {props.children}
        <Footer />
      </main>
    </>
  )
}

export default Layout
