import { Joi, Segments } from 'celebrate';

export const employee = {
  addEmployee: {
    [Segments.BODY]: Joi.object().keys({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      email: Joi.string().email().required(),
      number: Joi.string().required(),
      gender: Joi.string().required(),
    }),
  },
  getEmployees: {
    [Segments.QUERY]: {
      page: Joi.string().required(),
      search: Joi.string().allow(null),
    },
  },
  getEmployeeById: {
    [Segments.PARAMS]: {
      empId: Joi.string().required(),
    },
  },
  updateEmployee: {
    [Segments.PARAMS]: {
      empId: Joi.string().required(),
    },
    [Segments.BODY]: Joi.object().keys({
      first_name: Joi.string(),
      last_name: Joi.string(),
      number: Joi.string(),
      email: Joi.string(),
      gender: Joi.string(),
    }),
  },
  deleteEmployee: {
    [Segments.PARAMS]: {
      empId: Joi.string().required(),
    },
  },
};
