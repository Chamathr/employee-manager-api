import { Joi, Segments } from 'celebrate'

const employeeValidation = {

    addEmployee: {
        [Segments.BODY]: Joi.object().keys({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            phone: Joi.string().required(),
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
            firstName: Joi.string(),
            lastName: Joi.string(),
            phone: Joi.string(),
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