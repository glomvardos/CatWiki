import Image from 'next/image'
import Link from 'next/link'

import classes from './breed-grid.module.scss'

function BreedGrid(props) {
  const { image, name } = props
  return (
    <div className={classes.grid_item}>
      <Link href={`/breed/${name.toLowerCase()}`}>
        <a>
          <Image src={image} alt={`A cat image for ${name} breed`} width={200} height={200} />
        </a>
      </Link>
      <Link href={`/breed/${name.toLowerCase()}`}>
        <a>{name}</a>
      </Link>
    </div>
  )
}

export default BreedGrid
