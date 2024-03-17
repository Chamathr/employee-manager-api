import { Employee } from '../models/employee.model';
import { IResponseBody } from '../interfaces/common.interface';
import { IEmployee, IFilter, ISort } from '../interfaces/employee.interface';
import { CommonConfig } from '../config/common';

class EmployeeRepository {
  /**
   * add employee repository
   * @param {IEmployee} requestBody
   * @returns {IResponseBody} responseBody
   */
  public static async addEmployee(requestBody: IEmployee): Promise<IResponseBody> {
    try {
      const { first_name, last_name, email, number, gender } = requestBody;

      const dummyImage = CommonConfig.dummyImage;

      const isEmailExists = await Employee.findOne({ email: email });

      if (isEmailExists) {
        const responseBody: IResponseBody = {
          status: 409,
          message: 'Email already exists',
          data: {},
        };
        return responseBody;
      }

      const data = new Employee({
        first_name,
        last_name,
        email,
        number,
        gender,
        photo: dummyImage,
      });

      const insertedEmployee = await data.save();

      const responseBody: IResponseBody = {
        status: 201,
        message: 'Data added successfully',
        data: insertedEmployee,
      };
      return responseBody;
    } catch (error) {
      console.log('Error', error);
      throw error;
    }
  }

  /**
   * get employees repository
   * @returns {IResponseBody} resposeBody
   */
  public static async getEmployees(page: string, search: string | null): Promise<IResponseBody> {
    try {
      const pageNumber = parseInt(page) || 1;
      const pageSize = 10;
      const skips = pageSize * (pageNumber - 1);
      const sort: ISort = { _id: -1 };

      const filter: IFilter | null = search
        ? {
            $or: [{ first_name: { $regex: search, $options: 'i' } }, { last_name: { $regex: search, $options: 'i' } }],
          }
        : {};

      const data = await Employee.find(filter).skip(skips).limit(pageSize).sort(sort);
      const totalCount = await Employee.countDocuments(filter);
      const totalPages = Math.ceil(totalCount / pageSize);

      const responseBody: IResponseBody = {
        status: 200,
        message: 'Data fetched successfully',
        data: {
          data: data,
          totalItems: totalCount,
          currentPage: pageNumber,
          totalPages: totalPages,
        },
      };
      return responseBody;
    } catch (error) {
      console.log('Error', error);
      throw error;
    }
  }

  /**
   * get employee by id repository
   * @param {string} id
   * @returns {IResponseBody} responseBody
   */
  public static async getEmployeeById(id: string): Promise<IResponseBody> {
    try {
      const data = await Employee.findOne({ _id: id });
      if (!data) {
        const responseBody: IResponseBody = {
          status: 404,
          message: 'Data not found',
          data: {},
        };
        return responseBody;
      }
      const responseBody: IResponseBody = {
        status: 200,
        message: 'Data fetched successfully',
        data: data,
      };
      return responseBody;
    } catch (error) {
      console.log('Error', error);
      throw error;
    }
  }

  /**
   * update employee by id repository
   * @param {string} id
   * @param {object} requestBody
   * @returns {IResponseBody} responseBody
   */
  public static async updateEmployee(id: any, requestBody: object): Promise<IResponseBody> {
    try {
      const isDataExists = await Employee.findOne({ _id: id });
      if (!isDataExists) {
        const responseBody: IResponseBody = {
          status: 404,
          message: 'Data not found',
          data: {},
        };
        return responseBody;
      }

      const updatedData = await Employee.findOneAndUpdate({ _id: id }, requestBody, { new: true });

      const responseBody: IResponseBody = {
        status: 200,
        message: 'Data updated successfully',
        data: updatedData,
      };
      return responseBody;
    } catch (error) {
      console.log('Error', error);
      throw error;
    }
  }

  /**
   * delete employee by id repository
   * @param {string} id
   * @returns {IResponseBody} responseBody
   */
  public static async deleteEmployee(id: string): Promise<IResponseBody> {
    try {
      const isDataExists = await Employee.findOne({ _id: id });
      if (!isDataExists) {
        const responseBody: IResponseBody = {
          status: 404,
          message: 'Data not found',
          data: {},
        };
        return responseBody;
      }

      const deletedData = await Employee.deleteOne({ _id: id }, { new: true });

      const responseBody: IResponseBody = {
        status: 200,
        message: 'Data deleted successfully',
        data: deletedData,
      };
      return responseBody;
    } catch (error) {
      console.log('Error', error);
      throw error;
    }
  }
}

export default EmployeeRepository;
