import { MongoClient } from 'mongodb'

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const dbName = process.env.MONGODB_NAME
const connectionString = `mongodb+srv://${username}:${password}.wqgsu.mongodb.net/${dbName}?retryWrites=true&w=majority`

export async function connectDatabase() {
  const client = await MongoClient.connect(connectionString, { useUnifiedTopology: true })
  return client
}

export async function getPopularBreeds(connectDb) {
  const client = await connectDb()
  const db = client.db()
  const result = await db.collection('breeds').find().toArray()
  result.sort((a, b) => b.visits - a.visits)
  client.close()
  return result
}
