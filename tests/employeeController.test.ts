import EmployeeController from '../src/controllers/employee.controller';
import { Request, Response } from 'express';
import { Employee } from '../src/models/employee.model'

jest.mock('../src/models/employee.model');

describe('Employee Controller', () => {

  const res: Response = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  } as unknown as Response

  beforeEach(() => {
    jest.clearAllMocks()
  });

  test('check health of the service', async () => {

    const req: Request = {} as Request

    await EmployeeController.healthcheck(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  test('get employee list', async () => {

    const mockEmployees = [
      {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john.doe@example.com',
        number: '0701111111',
        gender: 'Male'
      }
    ];

    const mockQuery = {
      skip: jest.fn().mockReturnValueOnce({
        limit: jest.fn().mockReturnValueOnce({
          sort: jest.fn().mockResolvedValueOnce(mockEmployees)
        })
      })
    };

    (Employee.find as jest.Mock).mockReturnValueOnce(mockQuery);

    const req: Request = { query: { page: 1 } } as unknown as Request
    await EmployeeController.getEmployees(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
  });

  // test('should check health od the service', async () => {

  //   const req: Request  = {
  //     body: {
  //       first_name: 'John',
  //       last_name: 'Doe',
  //       email: 'john.doe@example.com',
  //       number: '0701111111',
  //       gender: 'Male'
  //     }
  //   } as Request

  //   const res: Response = {
  //     status: jest.fn().mockReturnThis(),
  //     json: jest.fn(),
  //   } as unknown as Response

  //   await EmployeeController.addEmployee(req, res);

  //   expect(res.status).toHaveBeenCalledWith(200);
  // });



});
