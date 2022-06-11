import { MongoClient } from 'mongodb';
import logger from './util/logger.js';

const uri = process.env.SOURCE_MONGODB_URI;
const db = process.env.SOURCE_MONGODB_DB;
const collection = process.env.SOURCE_MONGODB_COLLECTION;

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const exportData = async () => {
    logger.info(`Exporting data from ${uri}`)
    let data;
    try {
        await client.connect();
        data = await client.db(db).collection(collection).find().toArray();
        await client.close();
    } catch (err){
        logger.error(err);
    }
    return data; 
}

export default exportData;