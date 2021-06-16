export async function getBreeds() {
  const response = await fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': process.env.API_KEY,
    },
  })

  const data = await response.json()

  return data
}

export async function getBreedImages(id) {
  const response = await fetch(
    `https://api.thecatapi.com/v1/images/search?limit=8&breed_id=${id}`,
    {
      headers: {
        'x-api-key': process.env.API_KEY,
      },
    }
  )

  const data = await response.json()

  return data
}
