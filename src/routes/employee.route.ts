import express from 'express';
const router = express.Router();
const { celebrate } = require('celebrate')
const employee = require('../validations/employee.validation')
import EmployeeController from '../controllers/employee.controller'

/*employee routes*/
router.post('/', [celebrate(employee.employeeValidation.addEmployee)], EmployeeController.addEmployee)
router.get('/', [celebrate(employee.employeeValidation.getEmployees)], EmployeeController.getEmployees)
router.get('/:empId', [celebrate(employee.employeeValidation.getEmployeeById)], EmployeeController.getEmployeeById)
router.put('/:empId', [celebrate(employee.employeeValidation.updateEmployee)], EmployeeController.updateEmployee)
router.delete('/:empId', [celebrate(employee.employeeValidation.deleteEmployee)], EmployeeController.deleteEmployee)

export { router as employeeRouter };
