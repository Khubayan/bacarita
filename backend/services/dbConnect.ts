import dotenv from 'dotenv';
import mysql from 'mysql';
import {ENVParsedTypes} from '../types/ENVTypes';

const env: ENVParsedTypes = dotenv.config().parsed as ENVParsedTypes;
// db
const DbConfig = {
  host: env.DB_HOST,
  user: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
};

const dbConnect = mysql.createConnection(DbConfig);

dbConnect.connect(err => {
  if (err) {
    console.error('Error connecting to database:', err);
    return;
  }
  console.log('Connected to database');
});

export default dbConnect;
