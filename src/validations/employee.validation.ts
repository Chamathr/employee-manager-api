import { Joi, Segments } from 'celebrate'

const employeeValidation = {

    addEmployee: {
        [Segments.BODY]: Joi.object().keys({
            first_name: Joi.string().required(),
            last_name: Joi.string().required(),
            email: Joi.string().email().required(),
            number: Joi.string().required(),
            gender: Joi.string().required()
        })
    },
    getEmployees: {
        [Segments.QUERY]: {
            page: Joi.string().required()
        }
    },
    getEmployeeById: {
        [Segments.PARAMS]: {
            empId: Joi.string().required()
        }
    },
    updateEmployee: {
        [Segments.PARAMS]: {
            empId: Joi.string().required()
        },
        [Segments.BODY]: Joi.object().keys({
            first_name: Joi.string(),
            last_name: Joi.string(),
            number: Joi.string(),
            gender: Joi.string()
        })
    },
    deleteEmployee: {
        [Segments.PARAMS]: {
            empId: Joi.string().required()
        }
    }
}

module.exports = { employeeValidation }