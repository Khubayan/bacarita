import {DotenvParseOutput} from 'dotenv';

export interface ENVParsedTypes extends DotenvParseOutput {
  DB_HOST: string;
  DB_USER: string;
  DB_PASS: string;
  DB_NAME: string;
  TB_USER: string;
  TB_NEWS: string;
  TB_EVENT: string;
  JWT_SECRET_KEY: string;
  PORT: string;
}
