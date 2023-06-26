
import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('.env')) {
  dotenv.config({ path: '.env' });
}


const MONGO_DB_CONNECTION_STRING = process.env.MONGO_DB_CONNECTION_STRING;


export {
    MONGO_DB_CONNECTION_STRING
}