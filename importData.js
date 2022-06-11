import { MongoClient } from 'mongodb';
import logger from './util/logger.js';

const uri = process.env.TARGET_MONGODB_URI;
const db = process.env.TARGET_MONGODB_DB;
const collection = process.env.TARGET_MONGODB_COLLECTION;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const importData = async data => {
    logger.info(`Importing data to ${uri}`)
    try {
        await client.connect()
        const inserted = await client.db(db).collection(collection).insertMany(data);
        await client.close();
        return inserted;
    }
    catch(err) {
        logger.error(err);
    }
}

export default importData;