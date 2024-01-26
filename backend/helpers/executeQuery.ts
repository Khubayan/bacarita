import {Response} from 'express';
import dbConnect from '../services/dbConnect';

const db = dbConnect;

const executeQuery = (
  query: string,
  res: Response,
  values?: string | any[],
) => {
  db.query(query, values, (error: any, result: string | any[]) => {
    if (error) {
      console.error('Error executing query:', error);
      return res.status(500).json({error: 'Internal server error'});
    }

    if (result.length > 0) {
      return res.status(200).json({message: result});
    } else {
      return res.status(404).json({message: 'No data was found'});
    }
  });
};

export default executeQuery;
