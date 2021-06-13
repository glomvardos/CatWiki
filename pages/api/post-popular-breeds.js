import { connectDatabase } from '../../helpers/connectDatabase'
import { getBreedIds } from '../../helpers/getBreedIds'

async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(422).json({ message: 'Invalid method' })
    return
  }

  if (req.method === 'POST') {
    const { name, image, id, description } = req.body
    const breedIds = getBreedIds()

    const client = await connectDatabase()
    const db = client.db()

    if (
      !name ||
      name.trim() === '' ||
      !image ||
      image.trim() === '' ||
      !id ||
      id.trim() === '' ||
      !description ||
      description.trim() === '' ||
      !breedIds.includes(id)
    ) {
      client.close()
      res.status(422).json({ message: 'Invalid input' })
      return
    }

    const newBreed = {
      name: name,
      image: image,
      visits: 1,
      id: id,
      description: description,
    }

    const isUniqueBreed = await db.collection('breeds').findOne({ id: id })

    if (!isUniqueBreed) {
      const result = await db.collection('breeds').insertOne(newBreed)
    } else {
      const result = await db
        .collection('breeds')
        .updateOne({ id, id }, { $set: { visits: isUniqueBreed.visits + 1 } })
    }

    res.status(200).json({ message: 'Success' })

    client.close()
  }
}

export default handler
