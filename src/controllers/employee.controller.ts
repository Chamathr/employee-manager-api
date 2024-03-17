import { Request, Response } from 'express';
import EmployeeService from '../services/employee.service';
import { IResponseBody } from '../interfaces/common.interface';
import { IEmployee } from '../interfaces/employee.interface';

class EmployeeController {
  /**
   * health check controller
   * @param {Request} req
   * @param {Response} res
   */
  public static async healthcheck(req: Request, res: Response) {
    try {
      const responseBody: IResponseBody = {
        status: 200,
        message: 'Service is running fine',
        data: 'Service is running fine',
      };
      res.status(200).json(responseBody);
    } catch (error) {
      const err = error as Error;
      const responseBody: IResponseBody = {
        status: 500,
        message: 'Error',
        data: 'Something went wrong',
      };
      console.log(`error: ${err.message}`);
      res.status(500).json(responseBody);
    }
  }

  /**
   * add employee controller
   * @param {Request} req
   * @param {Response} res
   */
  public static async addEmployee(req: Request, res: Response): Promise<void> {
    try {
      const requestBody: IEmployee = req?.body;
      const response = await EmployeeService.addEmployee(requestBody);
      const responseBody: IResponseBody = {
        status: response?.status,
        message: response?.message,
        data: response?.data,
      };
      res.status(response?.status).json(responseBody);
    } catch (error) {
      const err = error as Error;
      const responseBody: IResponseBody = {
        status: 500,
        message: 'Error',
        data: 'Something went wrong',
      };
      console.log(`error: ${err.message}`);
      res.status(500).json(responseBody);
    }
  }

  /**
   * get employees controller
   * @param {Request} req
   * @param {Response} res
   *
   */
  public static async getEmployees(req: Request, res: Response) {
    try {
      const page = req?.query?.page as string;
      const search = (req?.query?.search && req?.query?.search !== 'undefined' ? req?.query?.search : null) as string;
      const response = await EmployeeService.getEmployees(page, search);
      const responseBody: IResponseBody = {
        status: response?.status,
        message: response?.message,
        data: response?.data,
      };
      res.status(response?.status).json(responseBody);
    } catch (error) {
      const err = error as Error;
      const responseBody: IResponseBody = {
        status: 500,
        message: 'Error',
        data: 'Something went wrong',
      };
      console.log(`error: ${err.message}`);
      res.status(500).json(responseBody);
    }
  }

  /**
   * get employee by id controller
   * @param {Request} req
   * @param {Response} res
   *
   */
  public static async getEmployeeById(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req?.params?.empId;
      const response = await EmployeeService.getEmployeeById(id);
      const responseBody: IResponseBody = {
        status: response?.status,
        message: response?.message,
        data: response?.data,
      };
      res.status(response?.status).json(responseBody);
    } catch (error) {
      const err = error as Error;
      const responseBody: IResponseBody = {
        status: 500,
        message: 'Error',
        data: 'Something went wrong',
      };
      console.log(`error: ${err.message}`);
      res.status(500).json(responseBody);
    }
  }

  /**
   * update employee by id controller
   * @param {Request} req
   * @param {Response} res
   *
   */
  public static async updateEmployee(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req?.params?.empId;
      const requestBody: object = req?.body;
      const response = await EmployeeService.updateEmployee(id, requestBody);
      const responseBody: IResponseBody = {
        status: response?.status,
        message: response?.message,
        data: response?.data,
      };
      res.status(response?.status).json(responseBody);
    } catch (error) {
      const err = error as Error;
      const responseBody: IResponseBody = {
        status: 500,
        message: 'Error',
        data: 'Something went wrong',
      };
      console.log(`error: ${err.message}`);
      res.status(500).json(responseBody);
    }
  }

  /**
   * delete employee by id controller
   * @param {Request} req
   * @param {Response} res
   *
   */
  public static async deleteEmployee(req: Request, res: Response): Promise<void> {
    try {
      const id: string = req?.params?.empId;
      const response = await EmployeeService.deleteEmployee(id);
      const responseBody: IResponseBody = {
        status: response?.status,
        message: response?.message,
        data: response?.data,
      };
      res.status(response?.status).json(responseBody);
    } catch (error) {
      const err = error as Error;
      const responseBody: IResponseBody = {
        status: 500,
        message: 'Error',
        data: 'Something went wrong',
      };
      console.log(`error: ${err.message}`);
      res.status(500).json(responseBody);
    }
  }
}

export default EmployeeController;
