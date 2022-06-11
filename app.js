import logger from './util/logger.js'
import exportData from "./exportData.js";
import importData from "./importData.js";

require('dotenv').config();

async function main(){
    logger.info('Migrating collection');
    const data = await exportData();
    const inserted = await importData(data);
    logger.info(`Data migrated: ${inserted}`)
}

main()