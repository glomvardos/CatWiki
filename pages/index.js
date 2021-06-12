import { getBreeds } from '../helpers/getBreeds'

import Hero from '../components/hero/hero'
import MostSearchedBreeds from '../components/morst-searched-breeds/most-searched-breeds'

function HomePage(props) {
  const { breeds } = props

  return (
    <>
      <Hero breeds={breeds} />
      <MostSearchedBreeds breeds={breeds} />
    </>
  )
}

export async function getStaticProps() {
  const data = await getBreeds()

  const transformedData = data.map(breed => ({
    name: breed.name,
    id: breed.id,
    image: breed.image?.url || '',
  }))

  return {
    props: {
      breeds: transformedData,
    },
  }
}

export default HomePage
