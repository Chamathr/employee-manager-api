import { IEmployeeData } from './employee.interface';

interface EmptyObject {}

interface IResponseBody {
  status: number;
  message: string;
  data: IEmployeeData | IEmployeeData[] | string | null | EmptyObject;
}

export { IResponseBody };
