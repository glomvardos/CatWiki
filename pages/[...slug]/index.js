import Head from 'next/head'
import CatBreed from '../../components/cat-breed-page/cat-breed'

import { getBreedImages, getBreeds } from '../../helpers/getBreeds'

function BreedPage(props) {
  const { breed, breedImages } = props

  return (
    <>
      <Head>
        <title>{breed.name}</title>
        <meta name='description' content={breed.description} />
      </Head>
      <CatBreed breed={breed} breedImages={breedImages} />
    </>
  )
}

export async function getStaticProps(context) {
  const { slug } = context.params

  // Get Breed
  const data = await getBreeds()
  const findBreed = data.find(breed => breed.name.toLowerCase() === slug[1])

  // Get Images For The Fetched Breed
  const imageData = await getBreedImages(findBreed.id)
  const getImages = imageData.map(img => ({ url: img.url, id: img.id }))

  return {
    props: {
      breed: findBreed,
      breedImages: getImages,
    },
  }
}

export async function getStaticPaths() {
  const data = await getBreeds()

  const breedPaths = data.map(catBreed => ({
    params: { slug: ['breed', catBreed.name.toLowerCase()] },
  }))

  return {
    paths: breedPaths,
    fallback: false,
  }
}

export default BreedPage
