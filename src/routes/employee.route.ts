import express from 'express';
import { celebrate } from 'celebrate';
import { employee } from '../validations/employee.validation';
import EmployeeController from '../controllers/employee.controller';

const router = express.Router();

/*employee routes*/
router.post('/', [celebrate(employee.addEmployee)], EmployeeController.addEmployee);
router.get('/', [celebrate(employee.getEmployees)], EmployeeController.getEmployees);
router.get('/:empId', [celebrate(employee.getEmployeeById)], EmployeeController.getEmployeeById);
router.put('/:empId', [celebrate(employee.updateEmployee)], EmployeeController.updateEmployee);
router.delete('/:empId', [celebrate(employee.deleteEmployee)], EmployeeController.deleteEmployee);

export { router as employeeRouter };
