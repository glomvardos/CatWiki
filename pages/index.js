import Head from 'next/head'
import Hero from '../components/home-page/hero/hero'
import MostSearchedBreeds from '../components/home-page/morst-searched-breeds/most-searched-breeds'
import GetAcat from '../components/home-page/get-a-cat/get-a-cat'
import { connectDatabase, getPopularBreeds } from '../helpers/connectDatabase'
import { getBreeds } from '../helpers/getBreeds'

function HomePage(props) {
  const { breeds, popularBreeds } = props

  return (
    <>
      <Head>
        <title>CatWiki</title>
        <meta
          name='description'
          content='Welcome to Catwiki here you can search for your favourite breed and learn more information about your feline friend'
        />
      </Head>
      <Hero breeds={breeds} />
      <MostSearchedBreeds popularBreeds={popularBreeds} />
      <GetAcat />
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
