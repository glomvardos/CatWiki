import Image from 'next/image'
import classes from './breed-photo.module.scss'

function BreedPhoto(props) {
  const { breedImages } = props

  return (
    <div className={classes.img_wrapper}>
      <Image
        src={breedImages}
        alt='A cat Image for the current breed'
        width={300}
        height={300}
        layout='intrinsic'
      />
    </div>
  )
}

export default BreedPhoto
