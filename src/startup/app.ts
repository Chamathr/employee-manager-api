import express, { Application } from 'express';
import { employeeRouter } from '../routes/employee.route';
import { indexRouter } from '../routes/index.route';
import { errors } from '../middlewares/errors';
import helmet from "helmet";
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import { swaggerDoc } from '../swagger/info';
import dotenv from 'dotenv';
dotenv.config();

export default (app: Application) => {

    const SERVER_PREFIX = process.env.SERVER_PREFIX

    app.use(helmet());
    app.use(logger('dev'));
    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded({ extended: true }));
    /*swagger config*/
    app.use(`/${SERVER_PREFIX}/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerDoc));
    app.use(cookieParser());

    app.use(`/${SERVER_PREFIX}`, indexRouter);
    app.use(`/${SERVER_PREFIX}/employee`, employeeRouter);
    
    app.use(errors);
}