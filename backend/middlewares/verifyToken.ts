import dotenv from 'dotenv';
import {NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import {UserData, VerifyTokenRequestUserdata} from '../types/VerifyToken';
import {ENVParsedTypes} from '../types/ENVTypes';
import {loginToken} from '../services/LoginSuccess';

// types
interface RequestUserData extends Request {
  userData: UserData;
}

const env: ENVParsedTypes = dotenv.config().parsed as ENVParsedTypes;

export const verifyToken = (
  req: RequestUserData,
  res: Response,
  next: NextFunction,
) => {
  if (!loginToken) {
    return res.status(401).json({message: 'Unauthorized'});
  }

  jwt.verify(loginToken, env.JWT_SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({message: 'Unauthorized'});
    }
    if (decoded) {
      const verifiedUserData = <VerifyTokenRequestUserdata>decoded;
      req.userData = verifiedUserData.data;
    }
    next();
  });
};
