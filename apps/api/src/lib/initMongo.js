import { MongoConnector, MongoEntity } from 'apollo-connector-mongodb';
import lruCache from 'lru-cache'

const mongoURL = process.env.MONGO_URL

export default async () => {
    const conn = await new MongoConnector(mongoURL)
    const db = {}

    return {
        conn,
        db
    }
}