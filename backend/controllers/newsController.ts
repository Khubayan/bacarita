import dotenv from 'dotenv';
import {Request, Response} from 'express';
import {ENVParsedTypes} from '../types/ENVTypes';
import executeQuery from '../helpers/executeQuery';

const ENV: ENVParsedTypes = dotenv.config().parsed as ENVParsedTypes;

export const getAllNews = (req: ReqQueryParams, res: Response) => {
  try {
    const query = `SELECT * FROM ${ENV.TB_NEWS}`;
    executeQuery(query, res);
  } catch (e: any) {
    console.error('Error during fetch news data:', e);
    res.status(500).json({error: `Internal server error ${e}`});
  }
};

export const getSearchNews = (req: ReqQueryParams, res: Response) => {
  try {
    const query = `SELECT * FROM ${ENV.TB_NEWS} WHERE title_berita LIKE ?`;
    const values = `%${req.query.keywords}%`;
    executeQuery(query, res, values);
  } catch (error: any) {
    console.error('Error during fetch news data:', error);
    res.status(500).json({error: `Internal server error ${error.message}`});
  }
};

export const getNewsByTag = (req: ReqQueryParams, res: Response) => {
  try {
    const query = `SELECT * FROM ${ENV.TB_NEWS} WHERE tag_berita LIKE ?`;
    const values = `%${req.query.tags}%`;
    executeQuery(query, res, values);
  } catch (error: any) {
    console.error('Error during fetch news data:', error);
    res.status(500).json({error: `Internal server error ${error.message}`});
  }
};
