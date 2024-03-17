import { IndexSwagger } from "./index.path"
import { EmployeeSwagger } from "./employee.path"
import dotenv from 'dotenv';
dotenv.config();

const serverPrefix = process.env.SERVER_PREFIX
const baseUrl = process.env.BASE_URL

export const swaggerDoc = {
    "openapi": "3.0.0",
    "info": {
        "version": "1.0.0",
        "title": "Swagger Employee API",
        "description": "A sample employee API built with Swagger and Node.js"
    },
    "servers": [
        {
            "url": `${baseUrl}/${serverPrefix}`
        }
    ],
    "paths": {
        /*index swagger*/
        "/": IndexSwagger.healthCheck,

        /*employee swagger*/
        "/employee": EmployeeSwagger.Employee,
        "/employee/{empId}": EmployeeSwagger.EmployeeId
    },
    "components": {
        "securitySchemes": {
            "bearerAuth": {
                "type": "http",
                "scheme": "bearer",
                "bearerFormat": "JWT",
            },
        },
    },
    "security": [
        {
            "bearerAuth": [],
        },
    ],
};
