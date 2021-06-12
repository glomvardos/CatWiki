import CatBreed from '../../components/cat-breed/cat-breed'

import { getBreeds } from '../../helpers/getBreeds'

function BreedPage(props) {
  const { breed } = props

  return <CatBreed breed={breed} />
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const data = await getBreeds()
  const findBreed = data.find(breed => breed.name.toLowerCase() === slug[1].toLowerCase())
  console.log(findBreed)
  return {
    props: {
      breed: findBreed,
    },
  }
}

export async function getStaticPaths() {
  const data = await getBreeds()

  const filteredData = data.map(catBreed => ({
    params: { slug: ['breed', catBreed.name.toLowerCase()] },
  }))

  return {
    paths: filteredData,
    fallback: false,
  }
}

export default BreedPage
