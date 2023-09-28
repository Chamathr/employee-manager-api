import { IResponseBody } from '../interfaces/common.interface'
import { IEmployee } from '../interfaces/employee.interface'
import EmployeeRepository from '../repositories/employee.repository'

class EmployeeService {

    /**
     * add employee service
     * @param {IEmployee} requestBody 
     * @returns {IResponseBody} responseBody
     */
    public static async addEmployee(requestBody: IEmployee): Promise<any> {
        try {
            const response: IResponseBody = await EmployeeRepository.addEmployee(requestBody)
            return response
        }
        catch (error) {
            throw error
        }
    }

    /**
     * get employees service
     * @param {string} page
     * @returns {IResponseBody} responseBody
     */
    public static async getEmployees(page: string): Promise<any> {
        try {
            const response: IResponseBody = await EmployeeRepository.getEmployees(page)
            return response
        }
        catch (error) {
            throw error
        }
    }

     /**
     * get employee by id service
     * @param {string} id
     * @returns {IResponseBody} responseBody
     */
     public static async getEmployeeById(id: string): Promise<any> {
        try {
            const response: IResponseBody = await EmployeeRepository.getEmployeeById(id)
            return response
        }
        catch (error) {
            throw error
        }
    }

    /**
     * update employee by id service
     * @param {string} id
     * @param {object} requestBody
     * @returns {IResponseBody} responseBody
     */
    public static async updateEmployee(id: string, requestBody: object): Promise<any> {
        try {
            const response: IResponseBody = await EmployeeRepository.updateEmployee(id, requestBody)
            return response
        }
        catch (error) {
            throw error
        }
    }

    /**
     * delete employee by id service
     * @param {string} id
     * @returns {IResponseBody} responseBody
     */
    public static async deleteEmployee(id: string): Promise<any> {
        try {
            const response: IResponseBody = await EmployeeRepository.deleteEmployee(id)
            return response
        }
        catch (error) {
            throw error
        }
    }
}

export default EmployeeService