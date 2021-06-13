import Link from 'next/link'
import Image from 'next/image'

import classes from './popular-breed-item.module.scss'

function PopularBreedItem(props) {
  const { image, name, description, number } = props
  return (
    <div className={classes.popular_breed_item}>
      <Link href={`/breed/${name.toLowerCase()}`}>
        <a>
          <Image src={image} alt={`cat image from the ${name} breed`} width={200} height={200} />
        </a>
      </Link>
      <div>
        <Link href={`/breed/${name.toLowerCase()}`}>
          <a>
            <h2>
              {number}. {name}
            </h2>
          </a>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default PopularBreedItem
