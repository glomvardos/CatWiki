import Link from 'next/link'
import Image from 'next/image'

import classes from './get-a-cat.module.scss'

function GetAcat() {
  return (
    <section className={classes.get_a_cat}>
      <div className={classes.grid_container}>
        <div className={classes.content}>
          <div className={classes.line}></div>
          <h2>Why should you have a cat?</h2>
          <p>
            Having a cat around you can actually trigger the release of calming chemicals in your
            body which lower your stress and anxiety levels.
          </p>
          <Link href='/'>
            <a className={classes.flex_link}>
              <span>read more</span>
              <i className='fas fa-chevron-right'></i>
            </a>
          </Link>
        </div>
        <div className={classes.grid}>
          <div>
            <div className={classes.img2}>
              <Image src='/images/image2.png' alt='A cat image' width={270} height={170} />
            </div>
            <div className={classes.img1}>
              <Image src='/images/image1.png' alt='A cat image' width={190} height={290} />
            </div>
          </div>
          <div className={classes.img3}>
            <Image src='/images/image3.png' alt='A cat image' width={240} height={380} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetAcat
