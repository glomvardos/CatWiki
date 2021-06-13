import Hero from '../components/hero/hero'
import MostSearchedBreeds from '../components/morst-searched-breeds/most-searched-breeds'
import { connectDatabase, getPopularBreeds } from '../helpers/connectDatabase'
import { getBreeds } from '../helpers/getBreeds'

function HomePage(props) {
  const { breeds, popularBreeds } = props

  return (
    <>
      <Hero breeds={breeds} />
      <MostSearchedBreeds popularBreeds={popularBreeds} />
    </>
  )
}

export async function getStaticProps() {
  const result = await getPopularBreeds(connectDatabase)
  const popularBreeds = result
    .map(breed => ({
      id: breed.id,
      name: breed.name,
      image: breed.image,
      visits: breed.visits,
    }))
    .slice(0, 4)

  const data = await getBreeds()
  const transformedData = data.map(breed => ({
    name: breed.name,
    id: breed.id,
    image: breed.image?.url || '',
    description: breed.description,
  }))

  return {
    props: {
      breeds: transformedData,
      popularBreeds: popularBreeds,
    },
    revalidate: 86400,
  }
}

export default HomePage
