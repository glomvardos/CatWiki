import Logo from './logo'

import classes from './layout.module.scss'

function Layout(props) {
  return (
    <>
      <main className={classes.main}>
        <Logo />
        {props.children}
      </main>
    </>
  )
}

export default Layout
