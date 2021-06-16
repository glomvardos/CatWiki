import Head from 'next/head'
import PopularBreeds from '../../components/popular-breeds-page/popular-breeds'

import { connectDatabase, getPopularBreeds } from '../../helpers/connectDatabase'

function PopularBreedsPage(props) {
  const { popularBreeds } = props
  return (
    <>
      <Head>
        <title>Most Popular Breeds</title>
        <meta name='description' content='Here you can find the most popular breeds' />
      </Head>
      <PopularBreeds popularBreeds={popularBreeds} />
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
      description: breed.description,
    }))
    .slice(0, 10)

  return {
    props: {
      popularBreeds: popularBreeds,
    },
    revalidate: 86400,
  }
}

export default PopularBreedsPage
