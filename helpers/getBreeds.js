export async function getBreeds() {
  const response = await fetch('https://api.thecatapi.com/v1/breeds', {
    headers: {
      'x-api-key': '98c49160-f776-4bb1-8c9e-1e37287c0537',
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
        'x-api-key': '98c49160-f776-4bb1-8c9e-1e37287c0537',
      },
    }
  )

  const data = await response.json()

  return data
}
