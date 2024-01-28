/* eslint-disable prettier/prettier */
import dotenv from 'dotenv';
import express from 'express';
import loginRouter from './routers/loginRoutes';
import newsRouter from './routers/newsRoutes';
import eventRouter from './routers/eventRoutes';
import {ENVParsedTypes} from './types/ENVTypes';
import cors from 'cors';
import morgan from 'morgan';

const env: ENVParsedTypes = dotenv.config().parsed as ENVParsedTypes;
const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1/login', loginRouter);
app.use('/api/v1/news', newsRouter);
app.use('/api/v1/event', eventRouter);

const port = env.PORT;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

export default app;
