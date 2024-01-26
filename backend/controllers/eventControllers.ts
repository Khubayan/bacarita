import dotenv from 'dotenv';
import {Request, Response} from 'express';
import {ENVParsedTypes} from '../types/ENVTypes';
import executeQuery from '../helpers/executeQuery';

const ENV: ENVParsedTypes = dotenv.config().parsed as ENVParsedTypes;

export const getAllEvents = (req: ReqQueryParams, res: Response) => {
  try {
    const query = `SELECT * FROM ${ENV.TB_EVENT}`;
    executeQuery(query, res);
  } catch (e: any) {
    console.error('Error during fetch event data:', e);
    res.status(500).json({error: `Internal server error ${e}`});
  }
};
