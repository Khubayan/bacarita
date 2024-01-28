import dotenv from 'dotenv';
import {NextFunction, Request, Response, response} from 'express';

import {UserData, VerifyTokenRequestUserdata} from '../types/VerifyToken';
import dbConnect from '../services/dbConnect';
import {LoginSuccess} from '../services/LoginSuccess';
import FailLogin from '../services/FailLogin';
import {ENVParsedTypes} from '../types/ENVTypes';
import ErrorLogin from '../services/ErrorLogin';

// types
interface RequestUserData extends Request {
  userData: UserData;
}

const env: ENVParsedTypes = dotenv.config().parsed as ENVParsedTypes;
const db = dbConnect;
let token = '';

interface PostLoginRequest extends Request {
  body: PostLoginUserData;
}

interface PostLoginUserData {
  username: string;
  email: string;
  password: string;
}

export const getHelloWorld = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(200).json({
    status: 'success',
    result: 'Hello World',
  });
};

export const postLogin = async (req: PostLoginRequest, res: Response) => {
  try {
    const query = `SELECT * FROM ${env.TB_USER} WHERE email = ? AND password = ?`;
    const values = [req.body.email, req.body.password];
    console.log(req.body.email, req.body.password);

    db.query(query, values, (error, result) => {
      if (error) {
        res.status(505).json(ErrorLogin(error));
      }
      if (result.length > 0) {
        console.log('ini auth', req.headers.authorization);
        const response = LoginSuccess(env.JWT_SECRET_KEY, result);
        res.status(200).json(response);
        token = response.token;
      } else {
        res.status(400).json(FailLogin());
      }
    });
  } catch (e) {
    console.error('Error during login:', e);
    res.status(500).json({error: `Internal server error ${e}`});
  }
};

export const postSignIn = async (req: PostLoginRequest, res: Response) => {
  try {
    const query = `INSERT INTO ${env.TB_USER} (id_user, email, password) VALUES (?, ?, ?)`;
    const values = [
      Math.floor(Math.random() * (1000 - 4 + 1)) + 4,
      req.body.email,
      req.body.password,
    ];
    console.log(req.body.email, req.body.password);

    db.query(query, values, (error, result) => {
      if (error) {
        res.status(505).json(ErrorLogin(error));
      } else {
        console.log('User inserted successfully');
        const response = {message: 'User inserted successfully'};
        res.status(200).json(response);
      }
    });
  } catch (e) {
    console.error('Error during user insertion:', e);
    res.status(500).json({error: `Internal server error ${e}`});
  }
};
